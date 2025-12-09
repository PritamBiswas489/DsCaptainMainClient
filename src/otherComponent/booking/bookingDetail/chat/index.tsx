import {View, Text, KeyboardAvoidingView,Alert} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {styles} from './styles';
import ChatMessage from './chatMessage';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store'

export function Chat({ route }: any) {
  const {isDark,t} = useValues();
  const {id,toUserName} = route.params
  // console.log(id)
  const {data:chatMessages} = useSelector((state: RootState) => state['chatMessages'])
  const channelData  = chatMessages.find((ele: { channel_id: string; })=>ele.channel_id === id)
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
            title={toUserName}  
          />
          <View style={styles.mainView}>
          {channelData?.channel_id && <ChatMessage channelData={channelData} />}  
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
