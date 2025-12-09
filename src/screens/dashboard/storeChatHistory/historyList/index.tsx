import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { RootStackParamList } from 'src/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { useValues } from '../../../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import appColors from '@theme/appColors';
import { loadConversationsChannels } from '@src/services/store/load.conversation.service';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store'
import { useEffect, useState } from 'react';
import { DashLine } from '@src/commonComponents';
import { timeformatting } from '@src/config/utility';
import { getMediaUrl } from '@src/config/utility';
import { CustomerChannels } from '../customerChannels';
import { userPlaceHolder } from '@src/utils/images';
import { customerChannelActions } from '@src/store/redux/customer-channels-redux';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';


export function HistoryList() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [activeTab, setActiveTab] = useState('Tab1');
  const dispatch = useDispatch()
  const { isDark, t } = useValues();
  const [customerChannelClickMore, setCustomerChannelClickMore] = useState(false)
  const [showSkelatonLoader, setShowSkeletonLoader] = useState(true)
  

  const {
    limit: customerChannelLimit,
    offset: customerChannelOffset,
    isFirstTimeLoading: customerIsFirstTimeLoading,
    isNoMoreData: customerIsMoreData
  } = useSelector((state: RootState) => state['conversationChannel'])

   
  useEffect(() => {
    if (customerIsFirstTimeLoading || customerChannelClickMore) {
      loadConversationsChannels(
          customerChannelLimit,
          customerChannelOffset,
          customerIsFirstTimeLoading,
          dispatch
      )
    }
  }, [
    customerIsFirstTimeLoading,
    customerChannelOffset,
    customerChannelClickMore
  ])

  //got to chat screen
  const gotToChatScreen = (id: string,userName:string) => {
    navigation.navigate('Chat',{id:id,toUserName:userName})
  }

  
 const handleScrollCustomerProcessing = () => {
     if (customerIsMoreData) { return }
     setCustomerChannelClickMore(true)
     dispatch(customerChannelActions.setData({ field: 'offset', data: customerChannelOffset + 1 }))
   }

  useEffect(() => {
    if(!customerIsFirstTimeLoading){
         setShowSkeletonLoader(false)
    }
  }, [ customerIsFirstTimeLoading])


  return (
    <View style={{ flex: 1 }}>
         {showSkelatonLoader ?  <SkeletonLoader /> : <CustomerChannels handleScrollCustomerProcessing={handleScrollCustomerProcessing} /> }
    </View>
  );
}
