import { View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useState, useEffect } from 'react';
import { GlobalStyle } from '@style/styles';
import { BookingDetail, BookingStatus, Description } from '@otherComponent/index';
import { styles } from './styles';
import CommonModal from '@commonComponents/commonModal';
import { StatusView } from '../pendingApproval/statusView';
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
import { windowHeight } from '@theme/appConstant';

export function CancelledBooking({ route }: any) {
  const [bookStatusModal, setBookStatusModal] = useState(false);
  const { isDark } = useValues(); const [skeletonLoaderProcess, setSkeletonLoaderProcess] = useState(true)
  const [bookingId, setBookingId] = useState(route.params.id)
  const dispatch = useDispatch()

  const { data: BookingDetailsState, updateData: needExstingUpdateData } = useSelector((state: RootState) => state['bookingDetails'])
  const [detailBookingDetails, setDetailsBookingDetails] = useState<BookingDetailsInterface>()

  const setData = async () => {
    const checkExisting = BookingDetailsState.find(elementDet => elementDet.id === bookingId);
    if (checkExisting?.id && !needExstingUpdateData) {
      // console.log("==================== Existing ==========================")
      setDetailsBookingDetails(checkExisting.details)
    } else {
      const response: any = await loadBookingDetails(bookingId);
      if (response?.id) {
        if (!needExstingUpdateData!) {
          // console.log("================ loading new data ===============")
          dispatch(bookingDetailsAction.addBookingDetailsArr(response))
        } else {
          // console.log("================= update after refresh ===============")
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
      setData()
    }
  }, [needExstingUpdateData])




  return (
    <>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        style={[
          GlobalStyle.mainView,
          { backgroundColor: isDark ? appColors.darkTheme : appColors.white },
        ]}
        showsVerticalScrollIndicator={false}>
        {skeletonLoaderProcess && <SkeletonLoader />}

        {!skeletonLoaderProcess && detailBookingDetails?.id && <>
          <BookingDetail title="booking.cancelledBooking" />
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
                contactOptions={true}
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
                onPress={() => dispatch(bookingDetailsAction.setData({ field: 'updateData', data: true }))}
              />
            }
          />
        </>}
      </ScrollView>
      {!skeletonLoaderProcess && detailBookingDetails?.id && <StatusView status={'booking.reason'} statusNote="booking.canceledNote" />}
    </>
  );
}
