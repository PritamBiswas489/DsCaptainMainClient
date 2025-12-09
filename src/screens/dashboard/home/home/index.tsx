import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react';
import { Chat, Notification } from '@utils/icons';
import Header from '@commonComponents/header';
import { GlobalStyle } from '@style/styles';
import { TotalPayBackBalance } from '../AccountInformation/totalBalance';
import { DashBoard } from '../dashBoard';
import HeadingRow from '@commonComponents/headingRow';
import { BookingData } from '../data';
import BookingList from '@screens/booking/allBooking/bookingList';
import BlogView from '../blogList';
import StaticsDetail from '../staticsDetail';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CommonModal from '@commonComponents/commonModal';
import WalletModal from '@otherComponent/wallet/walletModal';
import CancelBooking from '@otherComponent/booking/cancelBooking';
import { windowHeight } from '@theme/appConstant';
import ModalComponent from '@commonComponents/modal';
import { acceptBooking } from '@utils/images';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../App';
import { Provider } from '@screens/dashboard/serviceMan/home';
import { ServiceMenDashBoard } from '@screens/dashboard/serviceMan/home';
import { ServiceMen } from './serviceMen';
import { ProviderLogin } from './provider';
import { Alert, RefreshControl, TouchableOpacity } from 'react-native';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
 

import HomeNoFataFound from '@src/commonComponents/homeNoDataFound';
 
import HomeBookingList from '@src/commonComponents/homeBookingList';
import { homeDataActions } from '@src/store/redux/home-data-redux';
import useHomeDataLoader from '@src/hooks/useHomeDataLoader';
import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import { saveFcmTokenProcess } from '@src/services/profile.service';
import { getAuthUserService } from '@src/services/auth.service';
import { serviceProviderAccountDataActions } from '@src/store/redux/service-provider-account-data.redux';
import { Text } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { clearValue, getValue } from '@src/utils/localstorage';
import { getPagesContent } from '@src/services/settings.service';
import { contentPagesActions } from '@src/store/redux/content-pages-redux';
 

type navigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

export function Home() {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [cancelBookingModal, setCancelBookingModal] = useState(false);
  const [acceptBookingModal, setAcceptBookingModal] = useState(false);
  const { navigate,replace } = useNavigation<navigationProp>();
  const { isDark, isServiceManLogin, t, loggedInUserType } = useValues();
  const [showSkeletonLoader, setSkeletonLoader] = useState(false)
  const [needSkeletonLoader,setNeedSkeletonLoader] =  useState(true)
 
  const [refreshing, setRefreshing] = React.useState(false);
 
  const dispatch = useDispatch()
  const { callAllFunctionHome } = useHomeDataLoader();


  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    dispatch(homeDataActions.setData({field:'loadServiceMen',data:true}))
    dispatch(homeDataActions.setData({field:'loadBookingList',data:true}))
    dispatch(homeDataActions.setData({field:'loadSubsScriptionList',data:true}))
    
    setNeedSkeletonLoader(false)
    await callAllFunctionHome();
    const response = await getAuthUserService()
    if (response?.data?.response_code === 'default_200' && response?.data?.content?.provider_info?.id) {
      dispatch(serviceProviderAccountDataActions.setData(response?.data?.content?.provider_info))
    }else{
      replace('IntroSlider');
    }
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const {
    serviceMenLimit,
    bookingList,
    loadBookingList,
    loadServiceMen,
    loadSubsScriptionList
  } = useSelector((state: RootState) => state['homeData'])

   

  const serviceProviderAccountData = useSelector((state: RootState) => state['serviceProviderAccountData'])
  // console.log({fcm_token:serviceProviderAccountData.owner.fcm_token})
  
  //handle load all data
  //  console.log(JSON.stringify(serviceProviderAccountData,null,2))

  const filterModalVisible = () => {
    setShowWalletModal(true);
  };

  useEffect(()=>{
    callAllFunctionHome()
  },[])

  const {fetched:contentFetched} = useSelector((state: RootState)=>state.contentPages)
  const fetchContents = async()=>{
    const contentConfig = await getPagesContent()
        if (contentConfig?.data?.content) {
          Object.keys(contentConfig?.data?.content).forEach((key: string) => {
            // console.log(contentConfig?.data?.content[key]?.value)
            if (key === 'about_us') {
              dispatch(contentPagesActions.setData({ 'field': 'about_us', data: contentConfig?.data?.content[key]?.value }))
            }
            if (key === 'terms_and_conditions') {
              dispatch(contentPagesActions.setData({ 'field': 'terms_and_conditions', data: contentConfig?.data?.content[key]?.value }))
            }
            if (key === 'refund_policy') {
              dispatch(contentPagesActions.setData({ 'field': 'refund_policy', data: contentConfig?.data?.content[key]?.value }))
            }
            if (key === 'return_policy') {
              dispatch(contentPagesActions.setData({ 'field': 'return_policy', data: contentConfig?.data?.content[key]?.value }))
            }
            if (key === 'cancellation_policy') {
              dispatch(contentPagesActions.setData({ 'field': 'cancellation_policy', data: contentConfig?.data?.content[key]?.value }))
            }
            if (key === 'privacy_policy') {
              dispatch(contentPagesActions.setData({ 'field': 'privacy_policy', data: contentConfig?.data?.content[key]?.value }))
            }
          })
          dispatch(contentPagesActions.setData({ 'field': 'fetched', data: true }))
        }
  }

  useEffect(()=>{
    if(!contentFetched){
      fetchContents()
    }
  },[contentFetched])

  //check save fcm token
  const checkSaveFcmToken = async () =>{
        const fcmTokenStorage = await getValue('fcmTokenStorage')
        console.log({fcmTokenStorage})
        if(fcmTokenStorage){
            const formData = new FormData()
            formData.append('fcm_token',fcmTokenStorage)
            const response:Response =  await saveFcmTokenProcess(formData)
            console.log(response?.data)
            clearValue('fcmTokenStorage')
        }
    }
    //Update user fcm token 
    useEffect(()=>{
        checkSaveFcmToken()
    },[])

  


   
  useEffect(() => {
    // console.log({ servicemenNeedFresh, subscriptionFresh })
    if (!loadBookingList && !loadSubsScriptionList && !loadServiceMen) {
      setSkeletonLoader(false)
      setNeedSkeletonLoader(true)
    }else{
      if(needSkeletonLoader){
        setSkeletonLoader(true)
      }
      
    }
  }, [loadBookingList, loadSubsScriptionList, loadServiceMen])

  
 
 

  console.log("=============== loggedInUserType =====================")
  console.log(loggedInUserType)

  

  return (
    <ScrollView
      style={[
        GlobalStyle.mainView,
        { backgroundColor: isDark ? appColors.darkTheme : appColors.white },
      ]}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      showsVerticalScrollIndicator={false}>
      {showSkeletonLoader && <SkeletonLoader />}
      {!showSkeletonLoader && <>
        <Header
          showBackArrow={false}
          title={'bottomTab.home'}
          trailIcon={
            <Chat color={isDark ? appColors.white : appColors.darkText} />
          }
          gotoScreen={() => navigate('ChatHistory')}
          trailIcon1={
            <Notification color={isDark ? appColors.white : appColors.darkText} />
          }
          onTrailIcon={() => navigate('Notification')}
        />
        {/* <TouchableOpacity onPress={()=>onDisplayNotification('testing title','testing body')}><Text>Click test notification</Text></TouchableOpacity> */}
        {isServiceManLogin && <Provider />}
        <TotalPayBackBalance onPress={() => Alert.alert('NOT DONE YET')} />
        {isServiceManLogin ? <ServiceMenDashBoard /> : <DashBoard />}
        <HeadingRow
          title={
            isServiceManLogin
              ? 'serviceMenLogin.assignedServices'
              : 'home.recentBooking'
          }
          content={'home.viewAll'}
          gotoScreen={() => navigate('Booking')}
        />
        {bookingList.length === 0 && <HomeNoFataFound message={t('newDeveloper.homeNoBookingFoundMessage')} />}
        <HomeBookingList data={bookingList} />
        <StaticsDetail />
        {isServiceManLogin ? <ServiceMen /> : <ProviderLogin />}
        {/* <BlogView /> */}
        <CommonModal
          modal={<WalletModal setShowWalletModal={setShowWalletModal} />}
          showModal={showWalletModal}
          visibleModal={filterModalVisible}
        />
        <CommonModal
          modal={
            <CancelBooking
              placeHolder={'booking.refuseBooking'}
              title={'booking.refuseBookingPlaceholder'}
              setShowModal={setCancelBookingModal}
              textInputContainer={{ height: windowHeight(18) }}
              onSubmitClick={() => setCancelBookingModal(false)}
            />
          }
          showModal={cancelBookingModal}
          visibleModal={() => setCancelBookingModal(true)}
        />
        <ModalComponent
          showImage={true}
          image={acceptBooking}
          visible={acceptBookingModal}
          onClose={() => setAcceptBookingModal(false)}
          success={false}
          title="booking.acceptBooking"
          content="booking.acceptBookingContent"
          showGridButton={true}
          buttonLabel={'booking.doLater'}
          button1Label={'booking.yes'}
          onButtonClick={() => {
            setAcceptBookingModal(false)
            // navigate('AcceptedBooking')
          }}
          onButton1Click={() => setAcceptBookingModal(false)}
        />
      </>}

    </ScrollView>
  );
}
