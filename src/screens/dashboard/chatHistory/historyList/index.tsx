import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { RootStackParamList } from 'src/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { useValues } from '../../../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import appColors from '@theme/appColors';
import { loadCustomerChannels, loadServiceManChannels } from '@src/services/load.channel.service';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store'
import { useEffect, useState } from 'react';
import { DashLine } from '@src/commonComponents';
import { timeformatting } from '@src/config/utility';
import { getMediaUrl } from '@src/config/utility';
import { CustomerChannels } from '../customerChannels';
import { ServiceMenChannels } from '../servicemenChannels';
import { userPlaceHolder } from '@src/utils/images';
import { serviceMenChannelActions } from '@src/store/redux/serviceman-channels-redux';
import { customerChannelActions } from '@src/store/redux/customer-channels-redux';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';


export function HistoryList() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [activeTab, setActiveTab] = useState('Tab1');
  const dispatch = useDispatch()
  const { isDark, t } = useValues();
  const [customerChannelClickMore, setCustomerChannelClickMore] = useState(false)
  const [serviceMenChannelClickMore, setServiceMenChannelClickMore] = useState(false)
  const [showSkelatonLoader, setShowSkeletonLoader] = useState(true)

  const {
    channel: adminChanelData,
    isFirstTimeLoading: adminChanelFirstTimeLoading
  } = useSelector((state: RootState) => state['adminChannel'])

  const {
    limit: serviceMenChannelLimit,
    offset: serviceMenChannelOffset,
    isFirstTimeLoading: serviceMenIsFirstTimeLoading,
    isNoMoreData: serviceMenIsMoreData
  } = useSelector((state: RootState) => state['serviceMenChannel'])
  const {
    limit: customerChannelLimit,
    offset: customerChannelOffset,
    isFirstTimeLoading: customerIsFirstTimeLoading,
    isNoMoreData: customerIsMoreData
  } = useSelector((state: RootState) => state['customerChannel'])

  const [adminChannelPanelDetails, setadminChannelPanelDetails] = useState({
    id: '',
    screenName: '',
    profileImage: '',
    lastMessage: '',
    channelPanelUpdatedTime: '',
    isReadMessage: false
  })


  useEffect(() => {
    if (serviceMenIsFirstTimeLoading || serviceMenChannelClickMore) {
      loadServiceManChannels(
        serviceMenChannelLimit,
        serviceMenChannelOffset,
        adminChanelFirstTimeLoading,
        dispatch
      )
    }
    setServiceMenChannelClickMore(false)
  }, [
    serviceMenIsFirstTimeLoading,
    serviceMenChannelOffset,
    serviceMenChannelClickMore
  ])

  useEffect(() => {
    if (customerIsFirstTimeLoading || customerChannelClickMore) {
      loadCustomerChannels(
        customerChannelLimit,
        customerChannelOffset,
        adminChanelFirstTimeLoading,
        dispatch
      )
    }

  }, [
    customerIsFirstTimeLoading,
    customerChannelOffset,
    customerChannelClickMore
  ])

  //onload process here
  useEffect(() => {
    if (adminChanelData?.id) {
      const getChannelUserNotMe = adminChanelData?.channel_users.find(ele => ele.user.user_type !== 'provider-admin')
      let profileImage = ''
      if (getChannelUserNotMe?.user?.profile_image) {
        profileImage = `${getMediaUrl()}/user/profile_image/${getChannelUserNotMe?.user?.profile_image}`
      }
      setadminChannelPanelDetails({
        id: adminChanelData?.id,
        screenName: t('newDeveloper.AdminSupport'),
        profileImage: profileImage,
        lastMessage: adminChanelData?.last_sent_message,
        channelPanelUpdatedTime: timeformatting(adminChanelData?.updated_at),
        isReadMessage: false
      })

    }
    setCustomerChannelClickMore(false)
  }, [adminChanelData])

  //got to chat screen
  const gotToChatScreen = (id: string,userName:string) => {
    navigation.navigate('Chat',{id:id,toUserName:userName})
  }

  const handleScrollServiceMenProcessing = () => {
    if (serviceMenIsMoreData) { return }
    setServiceMenChannelClickMore(true)
    dispatch(serviceMenChannelActions.setData({ field: 'offset', data: serviceMenChannelOffset + 1 }))
  }
  const handleScrollCustomerProcessing = () => {

    if (customerIsMoreData) { return }
    setCustomerChannelClickMore(true)
    dispatch(customerChannelActions.setData({ field: 'offset', data: customerChannelOffset + 1 }))
  }

  useEffect(() => {
    if(!adminChanelFirstTimeLoading && !serviceMenIsFirstTimeLoading && !customerIsFirstTimeLoading){
         setShowSkeletonLoader(false)
    }
  }, [adminChanelFirstTimeLoading, serviceMenIsFirstTimeLoading, customerIsFirstTimeLoading])


  return (
    <View style={{ flex: 1 }}>
      {showSkelatonLoader && <SkeletonLoader />}
      {/* admin chat panel */}
      {adminChannelPanelDetails?.id && !showSkelatonLoader && <>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => { gotToChatScreen(
            adminChannelPanelDetails?.id,
            adminChannelPanelDetails.screenName) 
          }}
          style={[
            styles.container,
            { backgroundColor: isDark ? appColors.darkCard : appColors.boxBg },
          ]}>
          <View style={styles.rowContainer}>
            {adminChannelPanelDetails.profileImage ? <Image source={{ uri: adminChannelPanelDetails.profileImage }} style={styles.imageStyle} /> : <Image source={userPlaceHolder} style={styles.imageStyle} />}
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.person,
                  { color: isDark ? appColors.white : appColors.darkText },
                ]}>
                {adminChannelPanelDetails.screenName}
              </Text>
              <Text style={styles.msg}>{adminChannelPanelDetails?.lastMessage}</Text>
            </View>
          </View>
          <Text style={styles.time}>{adminChannelPanelDetails?.channelPanelUpdatedTime}</Text>
        </TouchableOpacity>
        <DashLine />
      </>}
      {!showSkelatonLoader && <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, { borderBottomColor: isDark ? appColors.white : appColors.darkText, }, activeTab === 'Tab1' && styles.activeTabButton]}
          onPress={() => setActiveTab('Tab1')}
        >
          <Text style={[styles.tabText, , { color: isDark ? appColors.white : appColors.darkText, }, activeTab === 'Tab1' && styles.activeTabText]}>{t('newDeveloper.Customers')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, { borderBottomColor: isDark ? appColors.white : appColors.darkText, }, activeTab === 'Tab2' && styles.activeTabButton]}
          onPress={() => setActiveTab('Tab2')}
        >
          <Text style={[styles.tabText, , { color: isDark ? appColors.white : appColors.darkText, }, activeTab === 'Tab2' && styles.activeTabText]}>{t('newDeveloper.Servicemen')}</Text>
        </TouchableOpacity>
      </View>
      }
      {activeTab === 'Tab1' && !showSkelatonLoader ? (
        <CustomerChannels handleScrollCustomerProcessing={handleScrollCustomerProcessing} />
      ) : (
        <ServiceMenChannels handleScrollServiceMenProcessing={handleScrollServiceMenProcessing} />
      )}
    </View>
  );
}
