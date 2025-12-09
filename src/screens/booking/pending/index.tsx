import { View, Alert } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '@style/styles';
import { BookingDetail } from '@otherComponent/index';
import { styles } from './styles';
import {
  Description,
  ServiceOptions,
  BookingStatus,
} from '@otherComponent/index';
import CommonModal from '@commonComponents/commonModal';
import CancelBooking from '@otherComponent/booking/cancelBooking';
import { windowHeight } from '@theme/appConstant';
import ModalComponent from '@commonComponents/modal';
import { acceptBooking } from '@utils/images';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { useValues } from '../../../../App';
import appColors from '@theme/appColors';
import { loadBookingDetails } from '@src/services/load.booking.service';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { BookingDetailsInterface } from '@src/interfaces/bookingDetailsInterface';
import { bookingDetailsAction } from "@src/store/redux/booking-details-redux";
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import NoDataFound from '@src/commonComponents/noDataFound';
import GradientBtn from '@commonComponents/gradientBtn';
import { noValue } from '@utils/images';

export function PendingBooking({ route }: any) {
  const [bookStatusModal, setBookStatusModal] = useState(false);
  const [cancelBookingModal, setCancelBookingModal] = useState(false);
  const [acceptBookingModal, setAcceptBookingModal] = useState(false);
  const [skeletonLoaderProcess, setSkeletonLoaderProcess] = useState(true)
  const [bookingId, setBookingId] = useState(route.params.id)
  const { isDark } = useValues();
  const dispatch = useDispatch()

  const { data: BookingDetailsState, updateData: needExstingUpdateData } = useSelector((state: RootState) => state['bookingDetails'])
  const [detailBookingDetails, setDetailsBookingDetails] = useState<BookingDetailsInterface>()

  const setData = async () => {
    const checkExisting = BookingDetailsState.find(elementDet => elementDet.id === bookingId);
    if (checkExisting?.id && !needExstingUpdateData) {
      console.log("==================== Existing ==========================")
      setDetailsBookingDetails(checkExisting.details)
    } else {
      const response: any = await loadBookingDetails(bookingId);
      if (response?.id) {
        if (!needExstingUpdateData!) {
          console.log("================ loading new data ===============")
          dispatch(bookingDetailsAction.addBookingDetailsArr(response))
        } else {
          console.log("================= update after refresh ===============")
          dispatch(bookingDetailsAction.updateBookingDetails(response))
        }
        setDetailsBookingDetails(response)
      }
    }
    dispatch(bookingDetailsAction.setData({ field: 'updateData', data: false }))
    setSkeletonLoaderProcess(false)
  }

  useEffect(() => {
    //console.log(detailBookingDetails)
  }, [detailBookingDetails])

  useEffect(() => {
    setData()
  }, [bookingId])

  useEffect(() => {
    if (needExstingUpdateData) {
      setSkeletonLoaderProcess(true)
      setData()
    }
  }, [needExstingUpdateData])





  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();



  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          GlobalStyle.mainView,
          { backgroundColor: isDark ? appColors.darkCardBg : appColors.white },
        ]}>
        {skeletonLoaderProcess && <SkeletonLoader />}
        {!skeletonLoaderProcess && detailBookingDetails?.id && <>
          <BookingDetail title="bookingDetail.pendingBooking" />
          <View
            style={[
              styles.mainContainer,
              {
                backgroundColor: isDark ? appColors.darkCardBg : appColors.boxBg,
                borderBottomColor: isDark
                  ? appColors.darkBorder
                  : appColors.border,
                borderBottomWidth: isDark ? 0.1 : 1,
              },
            ]}>
            <View
              style={[
                styles.innerContainer,
                { borderColor: isDark ? appColors.darkBorder : appColors.border },
              ]}>
              <Description
                bookingStatus="PendingBooking"
                setBookingStatus={setBookStatusModal}
                item={route?.params?.bookingData}
              />
            </View>
          </View>
          <CommonModal
            modal={<BookingStatus setShowModal={setBookStatusModal} />}
            showModal={bookStatusModal}
            visibleModal={() => setBookStatusModal(true)}
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
              navigation.navigate('AcceptedBooking', { id: bookingId })
            }}
            onButton1Click={() => setAcceptBookingModal(false)}
          />
        </>}
        {!skeletonLoaderProcess && !detailBookingDetails?.id && <>
          <BookingDetail title="bookingDetail.pendingBooking" />
          <NoDataFound
            headerTitle="newDeveloper.noBookingDetails"
            image={noValue}
            infoImage={undefined}
            title="newDeveloper.noBookingDetails"
            content="newDeveloper.noBookingDetailsFound"
            gradiantBtn={
              <GradientBtn
                additionalStyle={{ bottom: windowHeight(2) }}
                label={'common.refresh'}
                onPress={()=>dispatch(bookingDetailsAction.setData({ field: 'updateData', data: true }))}
              />
            }
          />
        </> }
      </ScrollView>
      {!skeletonLoaderProcess && detailBookingDetails?.id &&  <ServiceOptions
        onButton1Click={() => setCancelBookingModal(true)}
        onButtonClick={() => {
          setAcceptBookingModal(true);
        }}
      />}

    </>
  );
}
