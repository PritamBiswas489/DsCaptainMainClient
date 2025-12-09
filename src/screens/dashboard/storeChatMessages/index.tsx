import {View, Text, KeyboardAvoidingView,Alert} from 'react-native';
import React, {useEffect, useState, useReducer} from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {styles} from './styles';
import ChatMessage from './chatMessage';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store'
import { getConversationMessages } from '@src/services/store/conversation.service';
import { ConversationInterface } from '@src/interfaces/store/conversations.interface';
import { ConversationsMessageInterface } from '@src/interfaces/store/conversations..message.interface';
import { datetimeArr } from '@src/config/utility';
import { sendConversationMessage } from '@src/services/store/conversation.service';
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}
//Conversation Message State
interface ConversationMessageState {
    limit: number;
    offset: number;
    conversation: ConversationInterface;
    messageData : {
      date: string,
      mainDate:string,
      messages:ConversationsMessageInterface[]
    }[]
}

const initialState: ConversationMessageState = {
  limit: 30,
  offset: 1,
  conversation: {
    id: 0,
    sender_id: 0,
    sender_type: '',
    receiver_id: 0,
    receiver_type: '',
    last_message_id: 0,
    last_message_time: '',
    unread_message_count: 0,
    created_at: '',
    updated_at: '',
    sender: undefined,
    receiver: undefined,
    last_message: undefined
  },
  messageData:[]
}
//action
type Action =
    | { type: 'SET_LIMIT'; payload: typeof initialState.limit } //limit 
    | { type: 'SET_OFFSET'; payload: typeof initialState.offset } //offset
    | { type: 'SET_CONVERSATION'; payload: typeof initialState.conversation } //conversation
    | { type: 'SET_MESSAGES'; payload: typeof initialState.messageData } //messages
    | { type: 'RESET_ALL' };
;

const reducer = (state: ConversationMessageState, action: Action): ConversationMessageState => {
  switch (action.type) {
      case 'SET_LIMIT':
          return { ...state, limit: action.payload };
      case 'SET_OFFSET':
          return { ...state, offset: action.payload };
      case 'SET_CONVERSATION':
          return { ...state, conversation: action.payload };
      case 'SET_MESSAGES':
          return { ...state, messageData: action.payload };
      case 'RESET_ALL':
          return {
              ...initialState
          };
      default:
          return state;
  }
}

//Store chat messages
export function StoreChatMessages({ route }: any) {
  const {isDark,t} = useValues();
  const params = route.params
  const [conversation_id,setConversationId] = useState<string | number | null>(null)
  const [delivery_man_id,setDeliveryManId] = useState<string | number | null>(null)
  const [user_id,setUserId] = useState<string | number | null>(null)
  const [CONVERSATION_STATE, CONVERSATION_DISPATCH] = useReducer(reducer, initialState);
  const [receiverScreenName,setReceiverScreenName] =  useState(params?.name || 'Receiver name')
  const [receiverProfileImage,setReceiverProfileImage] =  useState<string | null | undefined>(null)
  const [receiverType,setReciverType] = useState('')
  const [vendorid,setVendorid] = useState<number>(0) //vendor id
  const [otherUserid,setOtherUserId] = useState<number>(0) //other user id
  const [isFirstTimeLoading,setisFirstTimeLoading] = useState<boolean>(true) //is first time loading
  const [clickLoadMore, setClickLoadMore] = useState(false) //click load more
  const [isNoMoreData,setIsNoMoreData] =  useState(false) //is no more data
  
  useEffect(()=>{
    if(params?.conversation_id){ //conversation id
      setConversationId(params?.conversation_id)
    }
    if(params?.delivery_man_id){ //delivery man id
      setDeliveryManId(params?.delivery_man_id)
    }
    if(params?.user_id){ //user id 
      setUserId(params?.user_id)
    }
  },[params])

 
  //load chat messages
  const loadChatMessages = async (limit:number,offset:number  ) => {
            let query = '';
            
            if(conversation_id){
              query  = `conversation_id=${conversation_id}` //conversation id
            }
            if(delivery_man_id){
              query  = `delivery_man_id=${delivery_man_id}` //delivery man id
            }
            if(user_id){
              query  = `user_id=${user_id}` //user id
            }
            if(!query){return }
            query = `${query}&limit=${limit}&offset=${offset}`
            const response:Response = await getConversationMessages(query)
            if(response?.data?.conversation){ //set conversation 
              CONVERSATION_DISPATCH({ type: 'SET_CONVERSATION', payload: response?.data?.conversation })
            }
            // console.log(response?.data?.messages)
            if(response?.data?.messages && response?.data?.messages.length > 0){
                let cloneDataMessages = [...CONVERSATION_STATE.messageData]; //clone data messages
                const messagesData = response?.data?.messages //message data
                messagesData.forEach((message: ConversationsMessageInterface) => {
                      const { created_at, id } = message;
                      const { day, month, year } = datetimeArr(created_at);
                      const keyDate = `${day}_${month}_${year}`;
                      const dateIndex = cloneDataMessages.findIndex(ele => ele.date === keyDate);
                      if (dateIndex !== -1) {
                        const updatedMessages = [
                          ...cloneDataMessages[dateIndex].messages.filter((msg: any) => msg.id !== id),
                          message,
                        ];
                        const sortedData = updatedMessages.sort((a, b) => {
                          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
                        });
                        cloneDataMessages[dateIndex] = {
                          ...cloneDataMessages[dateIndex],
                          messages: sortedData,
                        };
                      }else{
                        cloneDataMessages.push({
                          date: keyDate,
                          mainDate:created_at,
                          messages: [message]
                        });
                      }
                })
                cloneDataMessages = cloneDataMessages.sort((a, b) => {
                  return new Date(b.mainDate).getTime() - new Date(a.mainDate).getTime();
                });
                CONVERSATION_DISPATCH({ type: 'SET_MESSAGES', payload: cloneDataMessages })
            }else{
                setIsNoMoreData(true)
            }
            setisFirstTimeLoading(false)
            setClickLoadMore(false)
};

useEffect(()=>{
    if(CONVERSATION_STATE?.conversation && CONVERSATION_STATE?.conversation?.id){
          let fullName:string | null = ''
          if(!CONVERSATION_STATE?.conversation?.sender?.vendor_id){
            fullName = CONVERSATION_STATE?.conversation?.sender?.f_name + ' '+CONVERSATION_STATE?.conversation.sender?.l_name
            setReceiverProfileImage( CONVERSATION_STATE?.conversation?.sender?.image_full_url)
           
          }else if(!CONVERSATION_STATE?.conversation?.receiver?.vendor_id){
            fullName = CONVERSATION_STATE?.conversation?.receiver?.f_name + ' '+CONVERSATION_STATE?.conversation?.receiver?.l_name
            setReceiverProfileImage( CONVERSATION_STATE?.conversation?.receiver?.image_full_url)
          }
          if(fullName!==''){
            setReceiverScreenName(fullName)
            
          }
          setReciverType(CONVERSATION_STATE?.conversation?.receiver_type)
          //set vendor and other user id
          if(CONVERSATION_STATE?.conversation?.sender){
            if(CONVERSATION_STATE?.conversation?.sender?.vendor_id){
              setVendorid(CONVERSATION_STATE?.conversation?.sender?.id)
            }else{
              setOtherUserId(CONVERSATION_STATE?.conversation?.sender?.id)
            }
          }

          if(CONVERSATION_STATE?.conversation?.receiver){
            if(CONVERSATION_STATE?.conversation?.receiver?.vendor_id){
              setVendorid(CONVERSATION_STATE?.conversation?.receiver?.id)
            }else{
              setOtherUserId(CONVERSATION_STATE?.conversation?.receiver?.id)
            }
          }
          
    }
},[CONVERSATION_STATE])


useEffect(()=>{
  if(isFirstTimeLoading || clickLoadMore){
       loadChatMessages(CONVERSATION_STATE.limit,CONVERSATION_STATE.offset)
  }else{
    const intervalId = setInterval(() => {
      loadChatMessages(10,1)
    }, 3000);
    return () => clearInterval(intervalId);
  }
},[isFirstTimeLoading,clickLoadMore,conversation_id,delivery_man_id,user_id])



//handle on scroll
const handleOnScroll = ()=>{
  if(isNoMoreData){ return } 
  setClickLoadMore(true)
  CONVERSATION_DISPATCH({ type: 'SET_OFFSET', payload: CONVERSATION_STATE.offset+1 })
}


const handleSendMessage = async (message:string,imageFile:string | null) => {
  const formData = new FormData()
  formData.append('message',message)
  if(conversation_id){
     formData.append('conversation_id',conversation_id)
  }else{
    
    if(delivery_man_id){
      formData.append('receiver_type','delivery_man')
      formData.append('receiver_id',delivery_man_id)
    }else if(user_id){
      formData.append('receiver_type','customer')
      formData.append('receiver_id',user_id)
    }
    
  }
  if(imageFile){
      formData.append('image[]', {
        uri: imageFile,
        name: 'chatImage.jpg',
        type: 'image/jpeg',
      });
  }
   
  const response:Response = await sendConversationMessage(formData)
 
  if(response?.data?.conversation){
      CONVERSATION_DISPATCH({ type: 'SET_CONVERSATION', payload:response?.data?.conversation }) 
      loadChatMessages(1,1)
  }
};


  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <View
        style={[
          styles.mainContainer,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
        ]}>
        <KeyboardAvoidingView
          style={[
            styles.innerContainer,
            {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
          ]}>
          <Header
            showBackArrow={true}
            title={receiverScreenName}  
          />
          <View style={styles.mainView}>
            <ChatMessage  
                    vendorid={vendorid} 
                    otherUserId={otherUserid} 
                    receiverScreenName={receiverScreenName} 
                    messageData={CONVERSATION_STATE.messageData} 
                    handleOnScroll={handleOnScroll}
                    isFirstTimeLoading={isFirstTimeLoading}
                    receiverProfileImage={receiverProfileImage}
                    handleSendMessage={handleSendMessage}
            /> 
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
 
