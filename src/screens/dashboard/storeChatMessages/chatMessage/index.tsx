import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { messageList } from '../data/data';
import ChatInput from '../chatInput';
import RenderItem from './renderItem';
import { useValues } from '../../../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store'
 
import { getChannelMessages } from '@src/services/chat.service';
import { datetimeArr } from '@src/config/utility';
import { chatMessagesActions } from '@src/store/redux/chat-messages-redux';
import { sendMessageInChannel } from '@src/services/chat.service';
import Toast from 'react-native-toast-message';
import { ConversationsMessageInterface } from '@src/interfaces/store/conversations..message.interface';

 


interface Message {
  sender: string;
  message: string;
  date: string;
}

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

interface MessageDataInterFace {
  date: string,
  mainDate:string,
  messages:ConversationsMessageInterface[]
}

export default function ChatView(
  {
      vendorid,
      otherUserId,
      receiverScreenName,
      messageData,
      handleOnScroll,
      isFirstTimeLoading,
      receiverProfileImage,
      handleSendMessage
}:
  {
    vendorid:number,
    otherUserId:number,
    receiverScreenName:string,
    messageData:MessageDataInterFace[],
    handleOnScroll:()=>void,
    isFirstTimeLoading:boolean,
    receiverProfileImage:string| null |undefined,
    handleSendMessage:(d:string,t:string | null)=>void
  }) {
   
  // const [messages, setMessages] = useState<Message[]>(messageList);
  const [newMessage, setNewMessage] = useState("");
  const { t } = useValues()
 
  const [sendingMessageLoader,setSendingMessageLoader]  = useState(false)
  const [selectedImageUri, setSelectedImageUri] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<{
      name:string,
      filetype:string,
      uri:string
  } | null>(null);


   const processeSendMessage = async ()=>{// let sendMessage = false;
        let sendMessage = false;
        if(newMessage.trim() !== ''){
          sendMessage = true;
        }
        if(selectedImageUri!==''){
            sendMessage =  true;
        }
        if(selectedFileName?.name){
          sendMessage =  true;
        }
        if(!sendMessage){
          return
        }
        setSendingMessageLoader(true)
        handleSendMessage(newMessage,selectedImageUri)
        setSendingMessageLoader(false)
        setNewMessage('')
        setSelectedImageUri(null)
   }
 

  return (  
    <View style={styles.container}>
      {isFirstTimeLoading && <ActivityIndicator />}
      {!isFirstTimeLoading &&
        <>
          <FlatList
            inverted
            showsVerticalScrollIndicator={false}
            data={messageData}
            keyExtractor={(item)=>item.date}
            renderItem={({ item }) => (
              <>
                <RenderItem  vendorid={vendorid} otherUserId={otherUserId} receiverProfileImage={receiverProfileImage} receiverScreenName={receiverScreenName} item={item} />
              </>
            )}
            onEndReachedThreshold={0.1} // Trigger when 10% away from the end
            onEndReached={handleOnScroll}
          />
          
         <ChatInput
            newMessage={newMessage}
           setNewMessage={setNewMessage}
            handleSendMessage={processeSendMessage}
             sendingMessageLoader={sendingMessageLoader}
             selectedImageUri={selectedImageUri}
            selectedFileName={selectedFileName}
            setSelectedImageUri={setSelectedImageUri}
            setSelectedFileName={setSelectedFileName}
            
          />
         
         </>
       }
      </View>
  );
}
