import { View, Alert, Pressable, RefreshControl, Image, Modal, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { GlobalStyle } from '@style/styles';
import { BookingDetail, Description } from '@otherComponent/index';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
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
import CommonModal from '@commonComponents/commonModal';
import ModalComponent from '@commonComponents/modal';
import { acceptBooking } from '@utils/images';
import { updateBookingStatus, updateRequestAccept, updateScheduleDate } from '@src/services/booking.service';
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';
import { searchStatusArray } from '@src/config/utility';
import Icon from 'react-native-vector-icons/Ionicons';
import { FormServiceMenList } from '@src/commonComponents/formServiceManList';
import { assignServiceMan } from '@src/services/booking.service';
import DateTimeSelector from '@src/commonComponents/dateTimeSelectPicker';
import { FormStatusChangePanel } from '@src/commonComponents/formStatusChangePanel';

import {

  BookingStatus,
} from '@otherComponent/index';

type routeProps = NativeStackNavigationProp<RootStackParamList>;
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}


export function CompletedBooking({ route }: any) {
   
  const [bookStatusModal, setBookStatusModal] = useState(false);
  const [acceptBookingModal, setAcceptBookingModal] = useState(false);
  const [processingSpinner, setProcessingSpinner] = useState(false)
  const extraCharges = [{ name: 'Ac repair', amount: '20', noService: 3 }];
  const { navigate } = useNavigation<routeProps>();
  const { isDark } = useValues();
  const statusArray = searchStatusArray()

  const details = route?.params?.serviceProofData?.details;
  const serviceTitle = route?.params?.serviceProofData?.serviceTitle;
  const image = route?.params?.serviceProofData?.image;

  const [skeletonLoaderProcess, setSkeletonLoaderProcess] = useState(true)

  const [refreshing, setRefreshing] = React.useState(false);


  const [showServiceMenModal, setServiceMenModal] = useState<boolean>(false);
  const [serviceMan, setServiceMan] =
    useState<{ serviceManid: string, serviceManName: string }>({ serviceManid: '', serviceManName: '' })


  const [showDatePicker, setDatePicker] = useState<boolean>(false);
  const [scheduleDate, setScheduleDate] = useState<string>('')


  const [showStatusModal, setStatusModal] = useState<boolean>(false);

  const [modalImage,setmodalImage] = useState<string>('')
  const [showImageProofModal, setImageProofModal] = useState<boolean>(false);



  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(bookingDetailsAction.setData({ field: 'updateData', data: true }))
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const [bookingId, setBookingId] = useState(route.params.id)
  const dispatch = useDispatch()
  const { data: BookingDetailsState, updateData: needExstingUpdateData } = useSelector((state: RootState) => state['bookingDetails'])
  const [detailBookingDetails, setDetailsBookingDetails] = useState<BookingDetailsInterface>()

  const setData = async () => {
    // console.log(bookingId)
    const checkExisting = BookingDetailsState.find(elementDet => elementDet.id === bookingId);
    if (checkExisting?.id && !needExstingUpdateData) {
      // console.log("==================== Existing ==========================")
      setDetailsBookingDetails(checkExisting.details)
    } else {

      const response: any = await loadBookingDetails(bookingId);
      if (response?.id) {
        if (!needExstingUpdateData!) {
          //   console.log("================ loading new data ===============")
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

  //handle accept booking processing 
  const handleAcceptBookingProcessing = async () => {
    setAcceptBookingModal(false) //close modal
    setProcessingSpinner(true)
    const formData = new FormData()
    formData.append('booking_status', 'accepted')

    const response: Response = await updateRequestAccept(bookingId, formData)
    
    // console.log(response.data.response_code)
    // console.log(response.data.message)
    if (response.data.response_code === 'status_update_success_200') {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: response.data.message,
      });
      setProcessingSpinner(false)
      dispatch(bookingDetailsAction.setData({ field: 'updateData', data: true }))
      const currentStatusArrayPending = statusArray.filter(element => element.value === 'pending')
      const currentStatusArrayAccepted = statusArray.filter(element => element.value === 'accepted')
      dispatch(currentStatusArrayPending[0].actions.resetState()) //refresh pending 
      dispatch(currentStatusArrayAccepted[0].actions.resetState()) //refresh accpted
    } else {
      Toast.show({
        type: 'error',
        text1: 'ERROR',
        text2: response.data.message,
      });
      setProcessingSpinner(false)
    }
  }

  useEffect(() => {
    // console.log(detailBookingDetails?.evidence_photos)
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

  //handle assign serive man for booking
  const handleAssignServiceManForBooking = async () => {
    if (detailBookingDetails?.id) {
      setProcessingSpinner(true)
      const formData = new FormData()
      formData.append('serviceman_id', serviceMan?.serviceManid)
      const response: Response = await assignServiceMan(detailBookingDetails?.id, formData)
      if (response?.data?.response_code === 'serviceman_assign_success_200') {
        Toast.show({
          type: 'success',
          text1: 'SUCCESS',
          text2: response.data.message,
        });
        dispatch(bookingDetailsAction.setData({ field: 'updateData', data: true }))
      } else {
        Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: response.data.message,
        });
      }
      setServiceMan({ serviceManid: '', serviceManName: '' })
      setProcessingSpinner(false)
    } else {
      Alert.alert('Process failed.Try again later')
    }

  }


  const handleUpdateScheduleDate = async () => {
    if (detailBookingDetails?.id) {
      setProcessingSpinner(true)
      const formData = new FormData()
      formData.append('schedule', scheduleDate)
      const response: Response = await updateScheduleDate(detailBookingDetails?.id, formData)
      if (response?.data?.response_code === 'service_schedule_update_200') {
        Toast.show({
          type: 'success',
          text1: 'SUCCESS',
          text2: response.data.message,
        });
        dispatch(bookingDetailsAction.setData({ field: 'updateData', data: true }))
      } else {
        Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: response.data.message,
        });
      }
      setScheduleDate('')
      setProcessingSpinner(false)
    } else {
      Alert.alert('Process failed.Try again later')
    }
  }

  useEffect(() => {
    if (serviceMan?.serviceManid) {
      handleAssignServiceManForBooking()
    }
  }, [serviceMan])


  useEffect(() => {
    if (scheduleDate !== '') {
      handleUpdateScheduleDate()
    }
  }, [scheduleDate])

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
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          style={[
            GlobalStyle.mainView,
            { backgroundColor: isDark ? appColors.darkTheme : appColors.white },
          ]}>
          <BookingDetail title={`booking.${detailBookingDetails.booking_status}Booking`} />
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
                item={detailBookingDetails}
                contactOptions={true}
                bookingStatus="completedBooking"
                extraCharges={extraCharges}
                serviceProof={route?.params?.serviceProofData}
                setmodalImage={setmodalImage}
                setImageProofModal={setImageProofModal}
              />
            </View>
          </View>
        </ScrollView>
        <CommonModal modal={
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => { setImageProofModal(false) }}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
           {modalImage && <Image source={{ uri: modalImage }} style={styles.modalImage} />} 
          </View>

        }
          showModal={showImageProofModal}
          visibleModal={() => { }}
        />

        <CommonModal
          modal={<BookingStatus bookingDetails={detailBookingDetails} setShowModal={setBookStatusModal} />}
          showModal={bookStatusModal}
          visibleModal={() => setBookStatusModal(true)}
        />
        <CommonModal
          modal={
            <FormServiceMenList
              setServiceMenModal={setServiceMenModal}
              setServiceMan={setServiceMan}
            />
          }
          showModal={showServiceMenModal}
          visibleModal={() => { }}
        />
        {showDatePicker && <DateTimeSelector
          setDatePicker={setDatePicker}
          setScheduleDate={setScheduleDate}
        />}


        <CommonModal
          modal={
            <FormStatusChangePanel
              setStatusModal={setStatusModal}
              bookingId={detailBookingDetails?.id}
            />
          }
          showModal={showStatusModal}
          visibleModal={() => { }}
        />

        {/* <View style={styles.buttonContainer}>
          <GradientBtn
            label="booking.serviceProof"
            onPress={() =>
              navigate('ServiceProof', {
                serviceProofData: {
                  serviceTitle: serviceTitle,
                  details: details,
                  image: image,
                },
              })
            }
          />
        </View> */}
      </>}
      {!skeletonLoaderProcess && !detailBookingDetails?.id &&
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[
            GlobalStyle.mainView,
            { backgroundColor: isDark ? appColors.darkTheme : appColors.white },
          ]}>
          <BookingDetail title="newDeveloper.bookingDetails" />
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
      {!skeletonLoaderProcess && detailBookingDetails?.id && detailBookingDetails?.booking_status === 'pending' &&

        <>
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
            onButtonClick={handleAcceptBookingProcessing}
            onButton1Click={() => setAcceptBookingModal(false)}
          />
          <GradientBtn
            additionalStyle={{ bottom: windowHeight(2) }}
            label={'newDeveloper.AcceptBookingRequest'}
            onPress={() => { setAcceptBookingModal(true) }}
          />
        </>
      }
      {!skeletonLoaderProcess && detailBookingDetails?.id && detailBookingDetails?.booking_status === 'completed' &&
        <GradientBtn
          additionalStyle={{ bottom: windowHeight(2) }}
          label={'newDeveloper.downloadInvoice'}
          onPress={() => { Alert.alert('Download Invoice') }}
        />
      }
      {!skeletonLoaderProcess && detailBookingDetails?.id && (detailBookingDetails?.booking_status === 'ongoing' || detailBookingDetails?.booking_status === 'accepted') &&
        <>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: windowHeight(2) }}>
            <Pressable onPress={() => {
              navigate('EditBooking', { id: detailBookingDetails?.id })
            }}>
              <Icon name="pencil-outline" size={30} color={isDark ? appColors.white : appColors.black} />
            </Pressable>
            <Pressable onPress={() => { setDatePicker(true) }}>
              <Icon name="calendar-outline" size={30} color={isDark ? appColors.white : appColors.black} />
            </Pressable>
            <Pressable onPress={() => { setStatusModal(true) }}>
              <Icon name="sync-outline" size={30} color={isDark ? appColors.white : appColors.black} />
            </Pressable>
            <Pressable onPress={() => { setServiceMenModal(true) }}>
              <Icon name="person-outline" size={30} color={isDark ? appColors.white : appColors.black} />
            </Pressable>
          </View>
        </>


      }
      <Spinner
        visible={processingSpinner}
        textContent={'Processing....'}
        textStyle={{ color: '#FFF' }}
      />
    </View>
  );
}
