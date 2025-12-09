import { View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { GlobalStyle } from '@style/styles';
import { BookingDetail, BookingStatus, Description } from '@otherComponent/index';
import CommonModal from '@commonComponents/commonModal';
import { ServiceOptions } from '@otherComponent/index';
import appColors from '@theme/appColors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { StatusView } from '../pendingApproval/statusView';
import { useValues } from '../../../../App';
import { windowHeight } from '@theme/appConstant';
import { loadBookingDetails } from '@src/services/load.booking.service';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { BookingDetailsInterface } from '@src/interfaces/bookingDetailsInterface';
import { bookingDetailsAction } from "@src/store/redux/booking-details-redux";
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import NoDataFound from '@src/commonComponents/noDataFound';
import { noValue } from '@utils/images';
import GradientBtn from '@commonComponents/gradientBtn';

export function OngoingBooking({ route }: any) {
  const [bookStatusModal, setBookStatusModal] = useState(false);
  const isServiceProgress = route?.params?.bookingData?.isServiceProgress;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isDark } = useValues();


  const [skeletonLoaderProcess, setSkeletonLoaderProcess] = useState(true)
  //route.params.id
  const [bookingId, setBookingId] = useState(route.params.id)
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
      setData()
    }
  }, [needExstingUpdateData])




  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? appColors.darkTheme : appColors.white },
      ]}>
      {skeletonLoaderProcess && <SkeletonLoader />}
      {!skeletonLoaderProcess && detailBookingDetails?.id && <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[
            GlobalStyle.mainView,
            { backgroundColor: isDark ? appColors.darkTheme : appColors.white },
          ]}
          contentContainerStyle={styles.contentContainerStyle}>
          <BookingDetail title="booking.ongoingBooking" />
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
                setBookingStatus={setBookStatusModal}
                item={route?.params?.bookingData}
                contactOptions={true}
                extraCharges={route?.params?.extraCharges}
                showChargesDetail={true}
              />
            </View>
          </View>
          <CommonModal
            modal={<BookingStatus setShowModal={setBookStatusModal} />}
            showModal={bookStatusModal}
            visibleModal={() => setBookStatusModal(true)}
          />
        </ScrollView>
        {isServiceProgress ? (
          <StatusView
            statusNote="addExtraCharges.statusNote"
            containerStyle={styles.statusContainer}
            textStyle={{ color: appColors.success }}
          />
        ) : (
          <ServiceOptions
            label1="booking.complete"
            label="booking.addCharges"
            onButtonClick={() => navigation.navigate('AddExtraCharges')}
            onButton1Click={() => { }}
            btnColor={appColors.success}
            buttonStyle={{ color: appColors.white }}
          />
        )}
      </>}


      {!skeletonLoaderProcess && !detailBookingDetails?.id &&
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[
            GlobalStyle.mainView,
            { backgroundColor: isDark ? appColors.darkTheme : appColors.white },
          ]}>
          <BookingDetail title="booking.acceptedBooking" />
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
        </ScrollView>
      }
    </View>
  );
}
