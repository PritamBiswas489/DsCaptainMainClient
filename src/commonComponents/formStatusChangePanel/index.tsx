import { ScrollView, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import { windowHeight, windowWidth } from '@theme/appConstant';
import InputView from './inputView';
import GradientBtn from '@commonComponents/gradientBtn';
import { useValues } from '../../../App';
import appColors from '@theme/appColors';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { BookingDetailsInterface, BookingServiceListInterface } from '@src/interfaces/bookingDetailsInterface';
import { useNavigation } from '@react-navigation/native';
import { Cross } from '@utils/icons';
import ServiceProofImageOptions from '@src/otherComponent/ServiceProofImageOptions';
import CommonModal from '../commonModal';
import UploadCompletedImage from './uploadCompletedImage';
import CompleteServiceOtpPanel from '@src/otherComponent/completeServiceOtpPanel';
import { updateBookingStatus } from '@src/services/booking.service';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-toast-message';
import { bookingDetailsAction } from '@src/store/redux/booking-details-redux';
import { searchStatusArray } from '@src/config/utility';
import { sendOtpNotification } from '@src/services/booking.service';


type routeProps = NativeStackNavigationProp<RootStackParamList>;
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

export function FormStatusChangePanel({ bookingId, setStatusModal }: { bookingId: string, setStatusModal: (value: boolean) => void }) {
  const dispatch = useDispatch()
  const [detailBookingDetails, setDetailsBookingDetails] = useState<BookingDetailsInterface>()
  const { navigate } = useNavigation<routeProps>();
  const { isDark, t } = useValues();
  const { data: BookingDetailsState, updateData: needExistingUpdateData } = useSelector((state: RootState) => state['bookingDetails'])

  const profileDt = useSelector((state: RootState) => state['serviceProviderAccountData'])

  useEffect(() => {
    const checkExisting = BookingDetailsState.find(elementDet => elementDet.id === bookingId);
    setDetailsBookingDetails(checkExisting?.details)
  }, [bookingId])

  const [bookingStatus, setBookingStatus] = useState<string>('')
  const [showServiceProofUploadOptions, setServiceProofUploadOption] = useState(false)
  const [selectedCompletedImages, setSeletedCompletedImages] = useState<string[]>([])

  const [booking_otp,setBookingOtp] = useState<string>('')

  const [showServiceProofOtp, setServiceProofOtp] = useState(false)

  const [processingSpinner, setProcessingSpinner] = useState(false)

  const statusArray = searchStatusArray()


  useEffect(() => {
    if (detailBookingDetails?.id) {
      setBookingStatus(detailBookingDetails?.booking_status)
    }
  }, [detailBookingDetails])


  useEffect(() => {
    if (bookingStatus === 'completed') {
      setBookingOtp('')
      setServiceProofUploadOption(true)
    } else {
      setServiceProofUploadOption(false)
    }

  }, [bookingStatus])


  const handleModalServiceProofModal = () => {
    setServiceProofUploadOption(!showServiceProofUploadOptions);
  };

  const handleModalServiceProofOtpModal = () => {
    setServiceProofOtp(!showServiceProofOtp)
  }

  const addServiceProofImages = (image: string) => {
    setSeletedCompletedImages(prev => [...prev, image])
  }

  // useEffect(() => {
  //   console.log("============= selectedCompletedImages ====================")
  //   console.log(selectedCompletedImages)
  // }, [selectedCompletedImages])

  //delete upload service proof image
  const deleteUploadServiceProofImage = (selectedindex: number) => {
    const updatedImage = selectedCompletedImages.filter((ele, eleIndex) => selectedindex !== eleIndex)
    setSeletedCompletedImages([...updatedImage])
  }
  //send otp for confirmation to customer mobile 
  const handleSendOtpForConfirmation = async () => {
    const response:Response = await sendOtpNotification(bookingId)
    console.log(response.data)
  }
  const handleUpdateStatusBooking = async () => {
    setProcessingSpinner(true)
    const formData = new FormData()
    formData.append('booking_status', bookingStatus)
    if (selectedCompletedImages && bookingStatus === 'completed') {
      selectedCompletedImages.forEach((imageFile) => {
        formData.append('evidence_photos[]', {
          uri: imageFile,
          name: 'evidence_photo.jpg',
          type: 'image/jpeg',
        });
      })
    }
    if(bookingStatus === 'completed'){
      formData.append('booking_otp',booking_otp)
    }

    const response: Response = await updateBookingStatus(bookingId, formData)

    // console.log(response.data)

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
            setStatusModal(false)
    } else {
            Toast.show({
              type: 'error',
              text1: 'ERROR',
              text2: response.data.message,
            });
            setProcessingSpinner(false)
            setStatusModal(false)
    }

  }

  return (
    <>
      <ScrollView
        contentContainerStyle={{ paddingBottom: windowHeight(3) }}
        showsVerticalScrollIndicator={false}
        style={[
          GlobalStyle.mainView,
          { backgroundColor: isDark ? appColors.darkCard : appColors.white },
        ]}>
        <Header
          showBackArrow={false}
          title={'newDeveloper.changestatus'}
          trailIcon={
            <Cross color={isDark ? appColors.white : appColors.darkText} />
          }
          gotoScreen={() => {
            setStatusModal(false);
            return;
          }}

        />
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
          <InputView
            bookingStatus={bookingStatus}
            setBookingStatus={setBookingStatus}
          />
          {
            bookingStatus === 'completed' &&
            <UploadCompletedImage
              selectedCompletedImages={selectedCompletedImages}
              setServiceProofUploadOption={setServiceProofUploadOption}
              deleteUploadServiceProofImage={deleteUploadServiceProofImage}
            />
          }
          {bookingStatus === 'completed' && booking_otp === ''  ?
            <GradientBtn
              label="newDeveloper.RequestOtp"
              onPress={() => {
                handleSendOtpForConfirmation()
                setServiceProofOtp(true)
              }}
              additionalStyle={{
                marginHorizontal: windowWidth(5),
                marginTop: windowHeight(3),
              }}
            />
            :
            <GradientBtn
              label="newDeveloper.UpdateStatus"
              onPress={handleUpdateStatusBooking}
              additionalStyle={{
                marginHorizontal: windowWidth(5),
                marginTop: windowHeight(3),
              }}
            />
          }
        </>}

        <Spinner
          visible={processingSpinner}
          textContent={'Processing.....'}
          textStyle={{ color: '#FFF' }}
        />

      </ScrollView>

      {bookingStatus === 'completed' && <CommonModal
        modal={<ServiceProofImageOptions addServiceProofImages={addServiceProofImages} setShowModal={setServiceProofUploadOption} />}
        showModal={showServiceProofUploadOptions}
        visibleModal={handleModalServiceProofModal}
      />
      }
      {bookingStatus === 'completed' && <CommonModal
        modal={<CompleteServiceOtpPanel 
          handleSendOtpForConfirmation={handleSendOtpForConfirmation}
          setShowModal={setServiceProofOtp}
          setBookingOtp={setBookingOtp}
          />}
        showModal={showServiceProofOtp}
        visibleModal={handleModalServiceProofOtpModal}
      />}
    </>
  );
}
