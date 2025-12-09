import { View, Text, Image, TouchableOpacity, Alert,  } from 'react-native';
import React, {useEffect, useState} from 'react';
import { styles } from './styles';
import { messageType } from '../../data/types';
import { chatProfile } from '@utils/images';
import { Attachment, DoubleTick } from '@utils/icons';
import appColors from '@theme/appColors';
import { windowWidth } from '@theme/appConstant';
import { useValues } from '../../../../../../../App';
import { ChatMessageInterface } from '@src/interfaces/chatMessegesInterface';
import { datetimeArr } from '@src/config/utility';
import { getMediaUrl } from '@src/config/utility';
import { userPlaceHolder } from '@utils/images';
import { color } from 'react-native-elements/dist/helpers';
 
import Toast from 'react-native-toast-message';
import FastImage from 'react-native-fast-image'
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer'; 
import Spinner from 'react-native-loading-spinner-overlay';
 

export default function RenderItem({ item }: {
  item: {
    date: string,
    messages: ChatMessageInterface[]
  }
}) {
  const { isDark, t } = useValues();
  const dateSplit = item.date.split('_')
  const [loadSpinner,setSpinner] = useState(false)
  const [spinnerText,setSpinnerText] = useState('')

  

  const openFile =   (filePath:string) => {
      FileViewer.open(filePath, { showOpenWithDialog: true, showAppsSuggestions: true }) 
  .then(() => {
    console.log('File opened successfully');
  })
  .catch((error) => {
    console.log('Error opening file:', error);
  });
  };

  //Downloading files from chat message 
  const downloadFile = async (conversation_files:any)=>{
    setSpinner(true)
    const fileUrl = `${getMediaUrl()}/conversation/${conversation_files.stored_file_name}`; // The file URL
    const filePath = RNFS.DownloadDirectoryPath + '/'+conversation_files.stored_file_name;
    const fileExists = await RNFS.exists(filePath);
    if (fileExists) {
      openFile(filePath);  
      setSpinner(false)
    }else{
      RNFS.downloadFile({
        fromUrl: fileUrl,
        toFile: filePath,
        background: true,  
        discretionary: true,  
        progress: (res) => {
          const progress = (res.bytesWritten / res.contentLength) * 100;
          setSpinnerText(`Downloading ${progress.toFixed(2)}%`)
        },
      })
        .promise.then((response) => {
          setSpinner(false)
          if (response.statusCode === 200) {
            console.log('File downloaded successfully to:', filePath);
            openFile(filePath);  
          } else {
            console.log('Failed to download file, status code:', response.statusCode);
            Alert.alert('Failed to download file')
          }
        })
        .catch((err) => {
          setSpinner(false)
          console.log('Download error:', err);
          Alert.alert('Failed to download file')
        });
    }
  }
  return (
    <>

      {item.messages.map((messgeData: ChatMessageInterface, messageIndex: number) => {
        const isSender = messgeData.user.user_type === 'provider-admin'
        let profileImage = ''
        if (messgeData?.user?.profile_image && messgeData?.user?.profile_image !== 'default.png' && messgeData.user.user_type === 'customer') {
          profileImage = `${getMediaUrl()}/user/profile_image/${messgeData?.user?.profile_image}`
        }
        if (messgeData?.user?.profile_image && messgeData?.user?.profile_image !== 'default.png' && messgeData.user.user_type === 'provider-serviceman') {
          profileImage = `${getMediaUrl()}/serviceman/profile/${messgeData?.user?.profile_image}`
        }
        const { hours,
          minutes,
          ampm } = datetimeArr(messgeData.created_at);
        return (<View
          key={'message-' + messgeData.id+messageIndex}
          style={[
            styles.row,
            { alignSelf: isSender ? 'flex-end' : 'flex-start' },
          ]}>
          {!isSender && (
            profileImage ? <Image source={{ uri: profileImage }} style={styles.imageStyle} /> : <Image source={userPlaceHolder} style={styles.imageStyle} />
          )}
          <View
            style={[
              styles.myMessageContainer,
              {
                alignSelf: isSender ? 'flex-end' : 'flex-start',
                backgroundColor:
                  isSender
                    ? appColors.primary
                    : isDark
                      ? appColors.darkCard
                      : appColors.boxBg,

                borderBottomLeftRadius:
                  isSender ? windowWidth(6) : 0,

                borderBottomRightRadius:
                  isSender ? 0 : windowWidth(6),
              },
            ]}>
            <View>
             

              {messgeData.conversation_files.length > 0 &&
                messgeData.conversation_files.map((msgData:any,msgIndex:number) => {
                  if(msgData?.file_type === 'jpg' || msgData?.file_type==='png'){
                       return <TouchableOpacity onPress={()=>downloadFile(msgData)}><Image source={{ uri: `${getMediaUrl()}/conversation/${msgData.stored_file_name}` }} style={styles.imageStyle2}   /></TouchableOpacity>
                  }else{

                    
                    return <TouchableOpacity onPress={()=>downloadFile(msgData)}><Attachment/><Text>{msgData.original_file_name}</Text></TouchableOpacity>
                  }
                })
              }
               {messgeData?.message && <Text
                style={[
                  styles.message,
                  {
                    color:
                      isSender
                        ? appColors.white
                        : isDark
                          ? appColors.white
                          : appColors.darkText,
                  },
                ]}>
                {messgeData.message}
              </Text>}
              <View
                style={[
                  styles.row,
                  {
                    justifyContent:
                      isSender ? 'flex-end' : 'flex-start',
                  },
                ]}>
                {isSender && <DoubleTick />}
                <Text
                  style={[
                    styles.dateTime,
                    {
                      color:
                        isSender
                          ? appColors.white
                          : appColors.lightText,
                    },
                  ]}>
                  {`${hours}:${minutes} ${ampm}`}
                </Text>
              </View>
            </View>
          </View>
        </View>)

      })}
      <View style={[
        styles.timeView,
      ]}
        key={'date-render-' + item.date}
      >
        <Text>{`${dateSplit?.[0]} ${dateSplit?.[1]} ${dateSplit?.[2]}`}</Text>
      </View>
      <Spinner
          visible={loadSpinner}
          textContent={spinnerText}
          textStyle={{ color: '#FFF' }}
        />
    </>
  );
}
