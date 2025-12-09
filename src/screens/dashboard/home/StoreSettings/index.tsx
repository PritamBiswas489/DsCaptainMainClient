import { Alert, ScrollView, View } from 'react-native';
import React, { useState, useEffect, useReducer } from 'react';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import { windowHeight, windowWidth } from '@theme/appConstant';
import InputView from './inputView';
import GradientBtn from '@commonComponents/gradientBtn';
import { useValues } from '../../../../../App';
import appColors from '@theme/appColors';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { DashLine } from '@src/commonComponents';
import { updateVendorStoreData } from '@src/services/store/profile.service';
import Toast from 'react-native-toast-message';
import { storeProfileDataActions } from '@src/store/redux/store/store-profile-redux';
import { getAuthUserService as storeAuthService } from '@src/services/store/auth.service';
import { isFileProtocol } from '@src/utils/functions';
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

interface State {
  storeName: string;
  errorStoreName: string;
  contactNumber: string;
  errorContactNumber: string;
  storeAddress: string;
  errorStoreAddress: string;
  minimumOrderAmount: string;
  errorMinimumOrderAmount: string;
  metaTitle: string;
  errorMetaTitle: string;
  metaDescription: string;
  errorMetaDescription: string;
  gstStatus: boolean;
  gstCode: string;
  errorGstPercentageValue: string;
  scheduleOrderStatus: boolean;
  deliveryStatus: boolean;
  takeawayStatus: boolean;
  cutleryStatus: boolean;
  prescriptionStatus:boolean;
  storeLogo: string;
  uploadedStoreLogo:string;
  errorStoreLogo: string;
  storeCoverPhoto: string;
  uploadedCoverPhoto:string;
  errorStoreCoverPhoto: string;
  approxDeliveryMinimumTime: string;
  approxDeliveryMaximumTime: string;
  approxDeliveryType: string;
  itemType: string[];
}

const initialState:State = {
  storeName: '',
  errorStoreName: '',
  contactNumber: '',
  errorContactNumber: '',
  storeAddress: '',
  errorStoreAddress: '',
  minimumOrderAmount: '',
  errorMinimumOrderAmount: '',
  metaTitle: '',
  errorMetaTitle: '',
  metaDescription: '',
  errorMetaDescription: '',
  gstStatus: false,
  gstCode: '',
  errorGstPercentageValue: '',
  scheduleOrderStatus: false,
  deliveryStatus: false,
  takeawayStatus: false,
  cutleryStatus: false,
  prescriptionStatus:false,
  storeLogo: '',
  uploadedStoreLogo:'',
  errorStoreLogo: '',
  storeCoverPhoto: '',
  uploadedCoverPhoto:'',
  errorStoreCoverPhoto: '',
  approxDeliveryMinimumTime: '',
  approxDeliveryMaximumTime: '',
  approxDeliveryType: 'min',
  itemType: [],
}

type Action =
  | { type: 'SET_STORENAME'; payload: typeof initialState.storeName }
  | { type: 'SET_ERRORSTORENAME'; payload: typeof initialState.errorStoreName }
  | { type: 'SET_CONTACTNUMBER'; payload: typeof initialState.contactNumber }
  | { type: 'SET_ERRORCONTACTNUMBER'; payload: typeof initialState.errorContactNumber }
  | { type: 'SET_STOREADDRESS'; payload: typeof initialState.storeAddress }
  | { type: 'SET_ERRORSTOREADDRESS'; payload: typeof initialState.errorStoreAddress }
  | { type: 'SET_MINIMUMORDERAMOUNT'; payload: typeof initialState.minimumOrderAmount }
  | { type: 'SET_ERRORMINIMUMORDERAMOUNT'; payload: typeof initialState.errorMinimumOrderAmount }
  | { type: 'SET_METATITLE'; payload: typeof initialState.metaTitle }
  | { type: 'SET_ERRORMETATITLE'; payload: typeof initialState.errorMetaTitle }
  | { type: 'SET_METADESCRIPTION'; payload: typeof initialState.metaDescription }
  | { type: 'SET_ERRORMETADESCRIPTION'; payload: typeof initialState.errorMetaDescription }
  | { type: 'SET_GSTSTATUS'; payload: typeof initialState.gstStatus }
  | { type: 'SET_GSTCODE'; payload: typeof initialState.gstCode }
  | { type: 'SET_ERRORGSTPERCENTAGEVALUE'; payload: typeof initialState.errorGstPercentageValue }
  | { type: 'SET_SCHEDULEORDERSTATUS'; payload: typeof initialState.scheduleOrderStatus }
  | { type: 'SET_DELIVERYSTATUS'; payload: typeof initialState.deliveryStatus }
  | { type: 'SET_TAKEAWAYSTATUS'; payload: typeof initialState.takeawayStatus }
  | { type: 'SET_CUTLERYSTATUS'; payload: typeof initialState.cutleryStatus }
  | { type: 'SET_PRESCRIPTIONSTATUS'; payload: typeof initialState.prescriptionStatus }
  | { type: 'SET_STORELOGO'; payload: typeof initialState.storeLogo }

  | { type: 'SET_UPLOADEDSTORELOGO'; payload: typeof initialState.uploadedStoreLogo }

  | { type: 'SET_ERRORSTORELOGO'; payload: typeof initialState.errorStoreLogo }
  | { type: 'SET_STORECOVERPHOTO'; payload: typeof initialState.storeCoverPhoto }

  | { type: 'SET_UPLOADEDCOVERPHOTO'; payload: typeof initialState.uploadedCoverPhoto }

  | { type: 'SET_ERRORSTORECOVERPHOTO'; payload: typeof initialState.errorStoreCoverPhoto }
  | { type: 'SET_APPROXDELIVERYMINIMUMTIME'; payload: typeof initialState.approxDeliveryMinimumTime }
  | { type: 'SET_APPROXDELIVERYMAXIMUMTIME'; payload: typeof initialState.approxDeliveryMaximumTime }
  | { type: 'SET_APPROXDELIVERYTYPE'; payload: typeof initialState.approxDeliveryType }
  | { type: 'SET_ITEMTYPE'; payload: string[] }
  | { type: 'RESET_ERRORS' }
  | { type: 'RESET_ALL' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_STORENAME':
      return { ...state, storeName: action.payload };
    case 'SET_ERRORSTORENAME':
      return { ...state, errorStoreName: action.payload };
    case 'SET_CONTACTNUMBER':
      return { ...state, contactNumber: action.payload };
    case 'SET_ERRORCONTACTNUMBER':
      return { ...state, errorContactNumber: action.payload };
    case 'SET_STOREADDRESS':
      return { ...state, storeAddress: action.payload };
    case 'SET_ERRORSTOREADDRESS':
      return { ...state, errorStoreAddress: action.payload };
    case 'SET_MINIMUMORDERAMOUNT':
      return { ...state, minimumOrderAmount: action.payload };
    case 'SET_ERRORMINIMUMORDERAMOUNT':
      return { ...state, errorMinimumOrderAmount: action.payload };
    case 'SET_METATITLE':
      return { ...state, metaTitle: action.payload };
    case 'SET_ERRORMETATITLE':
      return { ...state, errorMetaTitle: action.payload };
    case 'SET_METADESCRIPTION':
      return { ...state, metaDescription: action.payload };
    case 'SET_ERRORMETADESCRIPTION':
      return { ...state, errorMetaDescription: action.payload };
    case 'SET_GSTSTATUS':
      return { ...state, gstStatus: action.payload };
    case 'SET_GSTCODE':
      return { ...state, gstCode: action.payload };
    case 'SET_ERRORGSTPERCENTAGEVALUE':
      return { ...state, errorGstPercentageValue: action.payload };
    case 'SET_SCHEDULEORDERSTATUS':
      return { ...state, scheduleOrderStatus: action.payload };
    case 'SET_DELIVERYSTATUS':
      return { ...state, deliveryStatus: action.payload };
    case 'SET_TAKEAWAYSTATUS':
      return { ...state, takeawayStatus: action.payload };
    case 'SET_CUTLERYSTATUS':
      return { ...state, cutleryStatus: action.payload };
    case   'SET_PRESCRIPTIONSTATUS':
      return { ...state, prescriptionStatus: action.payload };
    case 'SET_STORELOGO':
      return { ...state, storeLogo: action.payload };
    case 'SET_UPLOADEDSTORELOGO':
        return { ...state, uploadedStoreLogo: action.payload }; 
    case 'SET_ERRORSTORELOGO':
      return { ...state, errorStoreLogo: action.payload };
    case 'SET_STORECOVERPHOTO':
      return { ...state, storeCoverPhoto: action.payload };
    case 'SET_UPLOADEDCOVERPHOTO':
        return { ...state, uploadedCoverPhoto: action.payload }; 
    case 'SET_ERRORSTORECOVERPHOTO':
      return { ...state, errorStoreCoverPhoto: action.payload };
    case 'SET_APPROXDELIVERYMINIMUMTIME':
      return { ...state, approxDeliveryMinimumTime: action.payload };
    case 'SET_APPROXDELIVERYMAXIMUMTIME':
      return { ...state, approxDeliveryMaximumTime: action.payload };
    case 'SET_APPROXDELIVERYTYPE':
      return { ...state, approxDeliveryType: action.payload };
    case 'SET_ITEMTYPE':
      return { ...state, itemType: action.payload };
    case 'RESET_ERRORS':
      return {
        ...state,
        errorStoreName: '',
        errorContactNumber: '',
        errorStoreAddress: '',
        errorMinimumOrderAmount: '',
        errorMetaTitle: '',
        errorMetaDescription: '',
        errorGstPercentageValue: '',
        errorStoreLogo: '',
        errorStoreCoverPhoto: '',
      };
    case 'RESET_ALL':
      return initialState;
    default:
      return state;
  }
}

//Add new banner
type ItemsProps = NativeStackNavigationProp<RootStackParamList>;
export function StoreSettings() {

  const navigation = useNavigation<ItemsProps>();
  const [FORM_STATE, FORM_DISPATCH] = useReducer(reducer, initialState);
  const { isDark, t } = useValues();
  const dispatch = useDispatch()
  const [processingLoader, setProcessingLoader] = useState(false)

  const { stores } = useSelector((state: RootState) => state['storeProfileData'])
  const STORE_DETAILS = stores[0]

  useEffect(() => {
    const {
      name,
      phone,
      address,
      minimum_order,
      logo_full_url,
      cover_photo_full_url,
      meta_title,
      meta_description,
      delivery,
      take_away,
      schedule_order,
      cutlery,
      delivery_time,
      veg,
      non_veg,
      gst_status,
      gst_code,
      prescription_order
    } = STORE_DETAILS

     


    //SET FROM DATA
    FORM_DISPATCH({ type: 'SET_STORENAME', payload: name })
    FORM_DISPATCH({ type: 'SET_CONTACTNUMBER', payload: phone })
    FORM_DISPATCH({ type: 'SET_STOREADDRESS', payload: address })
    FORM_DISPATCH({ type: 'SET_MINIMUMORDERAMOUNT', payload: minimum_order.toString() })
    FORM_DISPATCH({ type: 'SET_METATITLE', payload: meta_title || '' })
    FORM_DISPATCH({ type: 'SET_METADESCRIPTION', payload: meta_description || '' })
    FORM_DISPATCH({ type: 'SET_DELIVERYSTATUS', payload: delivery })
    FORM_DISPATCH({ type: 'SET_TAKEAWAYSTATUS', payload: take_away })
    FORM_DISPATCH({ type: 'SET_CUTLERYSTATUS', payload: cutlery })
    FORM_DISPATCH({ type: 'SET_PRESCRIPTIONSTATUS', payload: prescription_order })
    
    FORM_DISPATCH({ type: 'SET_SCHEDULEORDERSTATUS', payload: schedule_order })
    FORM_DISPATCH({ type: 'SET_STORELOGO', payload: logo_full_url || '' })
    FORM_DISPATCH({ type: 'SET_STORECOVERPHOTO', payload: cover_photo_full_url || '' })
    FORM_DISPATCH({ type: 'SET_GSTSTATUS', payload: gst_status })
    FORM_DISPATCH({ type: 'SET_GSTCODE', payload: gst_code })

    const tt = [...FORM_STATE.itemType]
    if (veg === 1) {
      tt.push('veg')
    }
    if (non_veg === 1) {
      tt.push('nonveg')
    }

    FORM_DISPATCH({ type: 'SET_ITEMTYPE', payload: tt})

    const splitDelivery = delivery_time.split('-')
    const secondSplit = splitDelivery?.[1].split(' ')
     

    FORM_DISPATCH({ type: 'SET_APPROXDELIVERYMINIMUMTIME', payload: splitDelivery?.[0] })
    FORM_DISPATCH({ type: 'SET_APPROXDELIVERYMAXIMUMTIME', payload: secondSplit?.[0] })

    if (secondSplit?.[1] === 'min') {
      FORM_DISPATCH({ type: 'SET_APPROXDELIVERYTYPE', payload: 'min' })
    }
    if (secondSplit?.[1] === 'hours') {
      FORM_DISPATCH({ type: 'SET_APPROXDELIVERYTYPE', payload: 'hours' })
    }

    if (secondSplit?.[1] === 'days') {
      FORM_DISPATCH({ type: 'SET_APPROXDELIVERYTYPE', payload: 'days' })
    }


  }, [STORE_DETAILS])


  //for New Uploaded store logo
  useEffect(()=>{
    if(isFileProtocol(FORM_STATE.storeLogo)){
      FORM_DISPATCH({ type: 'SET_UPLOADEDSTORELOGO', payload: FORM_STATE.storeLogo })
    }else{
      FORM_DISPATCH({ type: 'SET_UPLOADEDSTORELOGO', payload: ''})
    }
  },[FORM_STATE.storeLogo])

  //for New Uploaded cover photo
  useEffect(()=>{
    if(isFileProtocol(FORM_STATE.storeCoverPhoto)){
      FORM_DISPATCH({ type: 'SET_UPLOADEDCOVERPHOTO', payload: FORM_STATE.storeCoverPhoto })
    }else{
      FORM_DISPATCH({ type: 'SET_UPLOADEDCOVERPHOTO', payload: ''})
    }
  },[FORM_STATE.storeCoverPhoto])


  const VALIDATE_FORM = (): boolean => {
    let valid = true;

    FORM_DISPATCH({ type: 'RESET_ERRORS' });

    if (FORM_STATE.storeName.trim() === '') {
      FORM_DISPATCH({ type: 'SET_ERRORSTORENAME', payload: t('newDeveloper.Required') });
      valid = false;
    }

    if (FORM_STATE.contactNumber.trim() === '') {
      FORM_DISPATCH({ type: 'SET_ERRORCONTACTNUMBER', payload: t('newDeveloper.Required') });
      valid = false;
    }

    if (FORM_STATE.storeAddress.trim() === '') {
      FORM_DISPATCH({ type: 'SET_ERRORSTOREADDRESS', payload: t('newDeveloper.Required') });
      valid = false;
    }

    if (FORM_STATE.gstStatus && FORM_STATE.gstCode.trim() === '') {
      FORM_DISPATCH({ type: 'SET_ERRORGSTPERCENTAGEVALUE', payload: t('newDeveloper.Required') });
      valid = false;
    }

    if (FORM_STATE.storeLogo === '') {
      FORM_DISPATCH({ type: 'SET_ERRORSTORELOGO', payload: t('newDeveloper.Required') });
      valid = false;
    }

    if (FORM_STATE.storeCoverPhoto === '') {
      FORM_DISPATCH({ type: 'SET_ERRORSTORECOVERPHOTO', payload: t('newDeveloper.Required') });
      valid = false;
    }

    return valid
  }

  //handle update store settings 
  const handleUpdateStoreSettings = async () => {
    if (VALIDATE_FORM()) {
       
          const formData = new FormData()
          formData.append('contact_number',FORM_STATE.contactNumber)
          formData.append('delivery', (FORM_STATE.deliveryStatus ? 1 : 0))
          formData.append('take_away',FORM_STATE.takeawayStatus ? 1 : 0)
          formData.append('schedule_order',FORM_STATE.scheduleOrderStatus ? 1 : 0)
          formData.append('minimum_order',FORM_STATE.minimumOrderAmount)
          formData.append('gst_status',FORM_STATE.gstStatus ? 1 : 0)
          formData.append('gst',FORM_STATE.gstCode)
          formData.append('veg',FORM_STATE.itemType.includes('veg') ? 1 : 0)
          formData.append('non_veg',FORM_STATE.itemType.includes('nonveg') ? 1 : 0)
          formData.append('minimum_delivery_time',parseFloat(FORM_STATE.approxDeliveryMinimumTime)) 
          formData.append('maximum_delivery_time',parseFloat(FORM_STATE.approxDeliveryMaximumTime)) 
          formData.append('delivery_time_type',FORM_STATE.approxDeliveryType)
          formData.append('prescription_order',FORM_STATE.prescriptionStatus ?  1 : 0)
          formData.append('cutlery',FORM_STATE.cutleryStatus ? 1 : 0)
          formData.append('extra_packaging_amount',0)
          //uploadedCoverPhoto
          if(FORM_STATE.uploadedStoreLogo!==''){
            formData.append('logo', {
                uri: FORM_STATE.uploadedStoreLogo,
                name: 'storeLogo.jpg',
                type: 'image/jpeg',
            });
          }

          //uploadedCoverPhoto
          if(FORM_STATE.uploadedCoverPhoto!==''){
            formData.append('cover_photo', {
              uri: FORM_STATE.uploadedCoverPhoto,
              name: 'storeCoverPhoto.jpg',
              type: 'image/jpeg',
          });
          }

          const dTrans = [
            {locale:"en",key:'name',value:FORM_STATE.storeName},
            {locale:"en",key:'address',value:FORM_STATE.storeAddress},
            
          ]
          dTrans.push({locale:"en",key:'meta_title',value:FORM_STATE.metaTitle})
          dTrans.push({locale:"en",key:'meta_description',value:FORM_STATE.metaDescription})
          formData.append('translations',JSON.stringify(dTrans))

          setProcessingLoader(true)
          const response: Response = await updateVendorStoreData(formData)
          
          if (response?.data?.message) {
            const responseuser = await storeAuthService()
            if (responseuser?.data?.id) {
              dispatch(storeProfileDataActions.setData(responseuser?.data))
            }
            Toast.show({
              type: 'success',
              text1: 'Success',
              text2: response?.data?.message,
            });
            FORM_DISPATCH({ type: 'SET_UPLOADEDSTORELOGO', payload: '' })
            FORM_DISPATCH({ type: 'SET_UPLOADEDCOVERPHOTO', payload: '' })
          } else if (response?.data?.errors) {
            Toast.show({
              type: 'error',
              text1: 'Error',
              text2: response?.data?.errors?.[0]?.message,
            });
          } else {
            Toast.show({
              type: 'error',
              text1: 'Error',
              text2: "Process failed",
            });
          }
          setProcessingLoader(false)
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
        <Header showBackArrow={true} title={'newDeveloper.StoreSettings'} />

        <InputView
          storeName={FORM_STATE.storeName}
          setStoreName={(value) => {
            FORM_DISPATCH({ type: 'SET_STORENAME', payload: value })
            FORM_DISPATCH({ type: 'SET_ERRORSTORENAME', payload: '' })
          }}
          errorStoreName={FORM_STATE.errorStoreName}
          contactNumber={FORM_STATE.contactNumber}
          setContactNumber={(value) => {
            FORM_DISPATCH({ type: 'SET_CONTACTNUMBER', payload: value })
            FORM_DISPATCH({ type: 'SET_ERRORCONTACTNUMBER', payload: '' })
          }}
          errorContactNumber={FORM_STATE.errorContactNumber}
          storeAddress={FORM_STATE.storeAddress}
          setStoreAddress={(value) => {
            FORM_DISPATCH({ type: 'SET_STOREADDRESS', payload: value })
            FORM_DISPATCH({ type: 'SET_ERRORSTOREADDRESS', payload: '' })
          }}
          errorStoreAddress={FORM_STATE.errorStoreAddress}
          minimumOrderAmount={FORM_STATE.minimumOrderAmount.toString()}
          setMinimumOrderAmount={(value) => {
            FORM_DISPATCH({ type: 'SET_MINIMUMORDERAMOUNT', payload: value })
            FORM_DISPATCH({ type: 'SET_ERRORMINIMUMORDERAMOUNT', payload: '' })
          }}
          errorMinimumOrderAmount={FORM_STATE.errorMinimumOrderAmount}
          metaTitle={FORM_STATE.metaTitle}
          setMetaTitle={(value) => {
            FORM_DISPATCH({ type: 'SET_METATITLE', payload: value })
            FORM_DISPATCH({ type: 'SET_ERRORMETATITLE', payload: '' })
          }}
          errorMetaTitle={FORM_STATE.errorMetaTitle}
          metaDescription={FORM_STATE.metaDescription}
          setMetaDescription={(value) => {
            FORM_DISPATCH({ type: 'SET_METADESCRIPTION', payload: value })
            FORM_DISPATCH({ type: 'SET_ERRORMETADESCRIPTION', payload: '' })
          }}
          errorMetaDescription={FORM_STATE.errorMetaDescription}
          gstStatus={FORM_STATE.gstStatus}
          
          setGstStatus={(value) => {
            FORM_DISPATCH({ type: 'SET_GSTSTATUS', payload: value })
          }}
          prescriptionStatus={FORM_STATE.prescriptionStatus}
          setPrescriptionStatus={(value) => {
            FORM_DISPATCH({ type: 'SET_PRESCRIPTIONSTATUS', payload: value })
          }}
          gstCode={FORM_STATE.gstCode}
          setGstCode={(value) => {
            FORM_DISPATCH({ type: 'SET_GSTCODE', payload: value })
            FORM_DISPATCH({ type: 'SET_ERRORGSTPERCENTAGEVALUE', payload: '' })
          }}
          errorGstPercentageValue={FORM_STATE.errorGstPercentageValue}
          scheduleOrderStatus={FORM_STATE.scheduleOrderStatus}
          setScheduleOrderStatus={(value) => {
            FORM_DISPATCH({ type: 'SET_SCHEDULEORDERSTATUS', payload: value })
          }}
          deliveryStatus={FORM_STATE.deliveryStatus}
          setDeliveryStatus={(value) => {
            FORM_DISPATCH({ type: 'SET_DELIVERYSTATUS', payload: value })
          }}
          takeawayStatus={FORM_STATE.takeawayStatus}
          setTakewayStatus={(value) => {
            FORM_DISPATCH({ type: 'SET_TAKEAWAYSTATUS', payload: value })
          }}
          storeLogo={FORM_STATE.storeLogo}
          
          errorStoreLogo={FORM_STATE.errorStoreLogo}
          setStoreLogo={(value) => {
            FORM_DISPATCH({ type: 'SET_STORELOGO', payload: value })
          }}
          uploadedStoreLogo={FORM_STATE.uploadedStoreLogo}
          setUploadedStoreLogo={(value) => {
            FORM_DISPATCH({ type: 'SET_UPLOADEDSTORELOGO', payload: value })
          }}
          storeCoverPhoto={FORM_STATE.storeCoverPhoto}
          errorStoreCoverPhoto={FORM_STATE.errorStoreCoverPhoto}
          setStoreCoverPhoto={(value) => {
            FORM_DISPATCH({ type: 'SET_STORECOVERPHOTO', payload: value })
          }}
          uploadedCoverPhoto={FORM_STATE.uploadedCoverPhoto}
          setUploadedCoverPhoto={(value) => {
            FORM_DISPATCH({ type: 'SET_UPLOADEDCOVERPHOTO', payload: value })
          }}
          approxDeliveryMinimumTime={FORM_STATE.approxDeliveryMinimumTime}
          setApproxDeliveryMinimumTime={(value) => {
            FORM_DISPATCH({ type: 'SET_APPROXDELIVERYMINIMUMTIME', payload: value })
          }}
          approxDeliveryMaximumTime={FORM_STATE.approxDeliveryMaximumTime}
          setApproxDeliveryMaximumTime={(value) => {
            FORM_DISPATCH({ type: 'SET_APPROXDELIVERYMAXIMUMTIME', payload: value })
          }}
          approxDeliveryType={FORM_STATE.approxDeliveryType}
          setApproxDeliveryType={(value) => {
            FORM_DISPATCH({ type: 'SET_APPROXDELIVERYTYPE', payload: value })
          }}
          itemType={FORM_STATE.itemType}
          setItemType={(value) => {
            FORM_DISPATCH({ type: 'SET_ITEMTYPE', payload: value })
          }}
          cutleryStatus={FORM_STATE.cutleryStatus}
          setCutleryStatus={(value) => {
            FORM_DISPATCH({ type: 'SET_CUTLERYSTATUS', payload: value })
          }}
        />
        <DashLine />
        <GradientBtn
          label="newDeveloper.UpdateSettings"
          onPress={handleUpdateStoreSettings}
          additionalStyle={{
            marginHorizontal: windowWidth(5),
            marginTop: windowHeight(3),

          }}
        />
        <Spinner
          visible={processingLoader}
          textContent={'Processing.....'}
          textStyle={{ color: '#FFF' }}
        />
      </ScrollView>



    </>
  );
}
 

