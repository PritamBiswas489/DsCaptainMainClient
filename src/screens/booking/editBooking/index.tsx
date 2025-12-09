import { ScrollView, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import { windowHeight, windowWidth } from '@theme/appConstant';
import InputView from './inputView';
import StatusSection from './statusSection';
import GradientBtn from '@commonComponents/gradientBtn';
import { useValues } from '../../../../App';
import appColors from '@theme/appColors';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { BookingDetailsInterface, BookingServiceListInterface } from '@src/interfaces/bookingDetailsInterface';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { bookingDetailsAction } from '@src/store/redux/booking-details-redux';
import { updateBooking } from '@src/services/booking.service';
import Spinner from 'react-native-loading-spinner-overlay';
import { searchStatusArray } from '@src/config/utility';

type routeProps = NativeStackNavigationProp<RootStackParamList>;
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

export function EditBooking({ route }: any) {
  const dispatch = useDispatch()
  const [detailBookingDetails, setDetailsBookingDetails] = useState<BookingDetailsInterface>()
  const { navigate } = useNavigation<routeProps>();
  const { isDark, t } = useValues();
  const { data: BookingDetailsState, updateData: needExistingUpdateData } = useSelector((state: RootState) => state['bookingDetails'])
  const { id: bookingId } = route?.params
  const profileDt = useSelector((state: RootState)=>state['serviceProviderAccountData'])
  // console.log("======= zone id =======================")
  // console.log(profileDt?.zone_id)
  useEffect(() => {
    const checkExisting = BookingDetailsState.find(elementDet => elementDet.id === bookingId);
    setDetailsBookingDetails(checkExisting?.details)
  }, [bookingId])

  const [paymentStatus, setPaymentStatus] = useState<boolean>(false)
  const [bookingStatus, setBookingStatus] = useState<string>('')
  const [serviceMan, setServiceMan] =
    useState<{ serviceManid: string, serviceManName: string }>({ serviceManid: '', serviceManName: '' })
  const [scheduleDate, setScheduleDate] = useState<string>('')
  const [serviceCartItems, setServiceCartitems] = useState<BookingServiceListInterface[]>([])
  const [loaderUpdateBooking, setLoaderUpdateBooking] = useState(false)
  const statusArray = searchStatusArray()

  useEffect(() => {
    if (detailBookingDetails?.id) {
      setPaymentStatus(detailBookingDetails.is_paid === 1 ? true : false)
      setBookingStatus(detailBookingDetails?.booking_status)
      if (detailBookingDetails?.serviceman_id) {
        setServiceMan({
          serviceManid: detailBookingDetails?.serviceman_id,
          serviceManName: detailBookingDetails?.serviceMeninfo?.name
        })
      }
      setScheduleDate(detailBookingDetails.service_schedule)
      setServiceCartitems([...detailBookingDetails.servicesList]);
    }
  }, [detailBookingDetails])


  const handleUpdateBookingProcess = async () => {
    if (detailBookingDetails?.id) {
      setLoaderUpdateBooking(true)
      console.log("============== Function handle update booking ================================")
      // console.log({paymentStatus,bookingStatus,scheduleDate})
      // console.log(serviceMan)
      // console.log(serviceCartItems)

      const formData = new FormData()
      formData.append('booking_id', detailBookingDetails?.id)
      formData.append('payment_status', paymentStatus ? 1 : 0)
      if (serviceMan?.serviceManid) {
        formData.append('serviceman_id', serviceMan.serviceManid)
      }
      formData.append('service_schedule', scheduleDate)
      formData.append('zone_id', profileDt?.zone_id)
      formData.append('booking_status', bookingStatus)

      // console.log(serviceCartItems)

      //========== service info =========================//
      const serviceInfo: { service_id: string, variant_key: string, quantity: number }[] = serviceCartItems.map((cartItem: BookingServiceListInterface, cartindex: number) => {
        return {
          service_id: cartItem.serviceId,
          variant_key: cartItem.variantKey,
          quantity: cartItem.serviceQuantity
        }
      })
      formData.append('service_info', JSON.stringify(serviceInfo))
      const response: Response = await updateBooking(formData)
      setLoaderUpdateBooking(false)
      if (response?.data?.response_code === 'default_update_200') {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: response.data.message,
        });
        dispatch(bookingDetailsAction.setData({ field: 'updateData', data: true }))
       
        const currentStatusArray = statusArray.filter(element => element.value === bookingStatus)
        dispatch(currentStatusArray[0].actions.resetState())

        if(detailBookingDetails.booking_status!==bookingStatus){
          const currentStatusArray2 = statusArray.filter(element => element.value === detailBookingDetails.booking_status)
          console.log(currentStatusArray2)
          dispatch(currentStatusArray2[0].actions.resetState())

        }
        navigate('CompletedBooking', { id: detailBookingDetails?.id })
      } else {
        Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: response.data.message,
        });
      }
     
    } else {
      Alert.alert('Process failed')
    }

  }


  const handleUpdateCartItems = (variants: {
    serviceId: string,
    variantKey: string,
    price: string,
    serviceName: string,
    serviceCoverImage: string,
    serviceThumbnail: string
  }[]) => {
    // console.log(variants)

    variants.forEach((variantData, variantIndex) => {
      const check = serviceCartItems.find(ele => (ele.serviceId === variantData.serviceId && ele.variantKey === variantData.variantKey))
      if (check?.serviceId) {
        Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.serviceVariantAllReadyExist'),
        });
      } else {
        setServiceCartitems(prev => [...prev, {
          serviceId: variantData.serviceId,
          variantKey: variantData.variantKey,
          serviceName: variantData.serviceName,
          serviceUnitCost: parseFloat(variantData.price),
          serviceQuantity: 1,
          serviceTotalCost: parseFloat(variantData.price),
          serviceImage: variantData.serviceCoverImage,
          servicethumbnail: variantData.serviceThumbnail,
        }])
      }
    })

  }

  useEffect(() => {
    //console.log(serviceCartItems)
  }, [serviceCartItems])
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: windowHeight(3) }}
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        { backgroundColor: isDark ? appColors.darkCard : appColors.white },
      ]}>
      <Header showBackArrow={true} title={'newDeveloper.editBooking'} />
      <View
        style={[
          GlobalStyle.horizontalLine,
          {
            marginTop: windowHeight(3),
            marginHorizontal: 20,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}
      />
      {detailBookingDetails?.id && <>
        <StatusSection paymentStatus={paymentStatus} setPaymentStatus={setPaymentStatus} />
        <InputView
          bookingStatus={bookingStatus}
          setBookingStatus={setBookingStatus}
          serviceMan={serviceMan}
          setServiceMan={setServiceMan}
          scheduleDate={scheduleDate}
          setScheduleDate={setScheduleDate}
          serviceCartItems={serviceCartItems}
          setServiceCartitems={setServiceCartitems}
          subCategoryId={detailBookingDetails.sub_category_id}
          handleUpdateCartItems={handleUpdateCartItems}
        />
        <GradientBtn
          label="newDeveloper.updateBooking"
          onPress={handleUpdateBookingProcess}
          additionalStyle={{
            marginHorizontal: windowWidth(5),
            marginTop: windowHeight(3),
          }}
        />
      </>}
      <Spinner
        visible={loaderUpdateBooking}
        textContent={'Processing.....'}
        textStyle={{ color: '#FFF' }}
      />

    </ScrollView>
  );
}
