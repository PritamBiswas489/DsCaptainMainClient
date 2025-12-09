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
import Toast from 'react-native-toast-message';
import { createCoupon, getCouponDetails, updateCoupon } from '@src/services/store/coupon.service';
import { RouteProp,  useRoute } from '@react-navigation/native';
import { couponActions } from '@src/store/redux/store/coupon-redux';


interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}


interface State {
  couponId:string;
  couponTitle: string;
  errorCoupontitle: string;
  couponCode: string;
  errorCouponCode: string;
  limitSameUser: number;
  errorLimitSameUser: string;
  minPurchase: number;
  errorMinPurchase: string;
  startDate: string;
  errorStartDate: string;
  expireDate: string;
  errorExpireDate: string;
  discount: number;
  errorDiscount: string;
  discountType: string;
  maxDiscount: number;
  errorMaxDiscount: string;
}

const initialState:State = {
  couponId:'',
  couponTitle: '',
  errorCoupontitle: '',
  couponCode: '',
  errorCouponCode: '',
  limitSameUser: 0,
  errorLimitSameUser: '',
  minPurchase: 0,
  errorMinPurchase: '',
  startDate: '',
  errorStartDate: '',
  expireDate: '',
  errorExpireDate: '',
  discount: 0,
  errorDiscount: '',
  discountType: 'percent',
  maxDiscount: 0,
  errorMaxDiscount: ''
};

type Action =
  | { type: 'SET_COUPON_ID'; payload: string }
  | { type: 'SET_COUPON_TITLE'; payload: string }
  | { type: 'SET_ERROR_COUPON_TITLE'; payload: string }
  | { type: 'SET_COUPON_CODE'; payload: string }
  | { type: 'SET_ERROR_COUPON_CODE'; payload: string }
  | { type: 'SET_LIMIT_SAME_USER'; payload: number }
  | { type: 'SET_ERROR_LIMIT_SAME_USER'; payload: string }
  | { type: 'SET_MIN_PURCHASE'; payload: number }
  | { type: 'SET_ERROR_MIN_PURCHASE'; payload: string }
  | { type: 'SET_START_DATE'; payload: string }
  | { type: 'SET_ERROR_START_DATE'; payload: string }
  | { type: 'SET_EXPIRE_DATE'; payload: string }
  | { type: 'SET_ERROR_EXPIRE_DATE'; payload: string }
  | { type: 'SET_DISCOUNT'; payload: number }
  | { type: 'SET_ERROR_DISCOUNT'; payload: string }
  | { type: 'SET_DISCOUNT_TYPE'; payload: string }
  | { type: 'SET_MAX_DISCOUNT'; payload: number }
  | { type: 'SET_ERROR_MAX_DISCOUNT'; payload: string }
  | { type: 'RESET_ERRORS' }
  | { type: 'RESET_ALL' };


const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case  'SET_COUPON_ID':
      return { ...state, couponId: action.payload };
    case 'SET_COUPON_TITLE':
      return { ...state, couponTitle: action.payload };
    case 'SET_ERROR_COUPON_TITLE':
      return { ...state, errorCoupontitle: action.payload };
    case 'SET_COUPON_CODE':
      return { ...state, couponCode: action.payload };
    case 'SET_ERROR_COUPON_CODE':
      return { ...state, errorCouponCode: action.payload };
    case 'SET_LIMIT_SAME_USER':
      return { ...state, limitSameUser: action.payload };
    case 'SET_ERROR_LIMIT_SAME_USER':
      return { ...state, errorLimitSameUser: action.payload };
    case 'SET_MIN_PURCHASE':
      return { ...state, minPurchase: action.payload };
    case 'SET_ERROR_MIN_PURCHASE':
      return { ...state, errorMinPurchase: action.payload };
    case 'SET_START_DATE':
      return { ...state, startDate: action.payload };
    case 'SET_ERROR_START_DATE':
      return { ...state, errorStartDate: action.payload };
    case 'SET_EXPIRE_DATE':
      return { ...state, expireDate: action.payload };
    case 'SET_ERROR_EXPIRE_DATE':
      return { ...state, errorExpireDate: action.payload };
    case 'SET_DISCOUNT':
      return { ...state, discount: action.payload };
    case 'SET_ERROR_DISCOUNT':
      return { ...state, errorDiscount: action.payload };
    case 'SET_DISCOUNT_TYPE':
      return { ...state, discountType: action.payload };   
    case 'SET_MAX_DISCOUNT':
      return { ...state, maxDiscount: action.payload };
    case 'SET_ERROR_MAX_DISCOUNT':
      return { ...state, errorMaxDiscount: action.payload };
    case 'RESET_ERRORS':
      return {
         ...state,
         errorCoupontitle: '', 
         errorCouponCode: '',
         errorLimitSameUser: '',
         errorMinPurchase: '',
         errorStartDate: '',
         errorExpireDate: '',
         errorDiscount: '',
         errorMaxDiscount: '',
        };
        case 'RESET_ALL':
          return {
             ...initialState
            };    
    default:
      return state;
  }
};

//Add new banner
type ItemsProps = NativeStackNavigationProp<RootStackParamList>;
type EditCouponRouteProp = RouteProp<RootStackParamList, 'EditVendorCoupon'>;
export function StoreAddCoupon() {
  const navigation = useNavigation<ItemsProps>();
  const route = useRoute<EditCouponRouteProp>();
  
  const [FORM_STATE, FORM_DISPATCH] = useReducer(reducer, initialState);
  const { isDark, t } = useValues();
  const dispatch = useDispatch()
  const [processingLoader, setProcessingLoader] = useState(false)

  //loading coupon details for edit
  const loadCouponDetails = async (couponId:string)=>{
    setProcessingLoader(true)
    const response:Response = await getCouponDetails(couponId)
    if(response?.data?.[0]?.id){ 
        FORM_DISPATCH({ type: 'SET_COUPON_ID', payload: response?.data?.[0]?.id });
        FORM_DISPATCH({ type: 'SET_COUPON_TITLE', payload: response?.data?.[0]?.title });
        FORM_DISPATCH({ type: 'SET_COUPON_CODE', payload: response?.data?.[0]?.code });
        FORM_DISPATCH({ type: 'SET_LIMIT_SAME_USER', payload: response?.data?.[0]?.limit });
        FORM_DISPATCH({ type: 'SET_MIN_PURCHASE', payload: response?.data?.[0]?.min_purchase });
        FORM_DISPATCH({ type: 'SET_START_DATE', payload: response?.data?.[0]?.start_date });
        FORM_DISPATCH({ type: 'SET_EXPIRE_DATE', payload: response?.data?.[0]?.expire_date });
        FORM_DISPATCH({ type: 'SET_DISCOUNT', payload: response?.data?.[0]?.discount });
        FORM_DISPATCH({ type: 'SET_DISCOUNT_TYPE', payload: response?.data?.[0]?.discount_type });
        FORM_DISPATCH({ type: 'SET_MAX_DISCOUNT', payload: response?.data?.[0]?.max_discount });
    }
    setProcessingLoader(false)
  }

  useEffect(() => {
    if (route?.params?.id) {
      loadCouponDetails(route?.params?.id)
    }  
  }, [route?.params?.id])

  //validate form
  const VALIDATE_FORM = (): boolean => {
    let valid = true;
    FORM_DISPATCH({ type: 'RESET_ERRORS' });

    if (FORM_STATE.couponTitle.trim() === '') {
      FORM_DISPATCH({ type: 'SET_ERROR_COUPON_TITLE', payload: t('newDeveloper.Required') });
      valid = false;
    }
    if (FORM_STATE.couponCode.trim() === '') {
      FORM_DISPATCH({ type: 'SET_ERROR_COUPON_CODE', payload: t('newDeveloper.Required') });
      valid = false;
    }
    if (FORM_STATE.startDate.trim() === '') {
      FORM_DISPATCH({ type: 'SET_ERROR_START_DATE', payload: t('newDeveloper.Required') });
      valid = false;
    }
    if (FORM_STATE.expireDate.trim() === '') {
      FORM_DISPATCH({ type: 'SET_ERROR_EXPIRE_DATE', payload: t('newDeveloper.Required') });
      valid = false;
    }
    if (FORM_STATE.expireDate.trim() === '') {
      FORM_DISPATCH({ type: 'SET_ERROR_EXPIRE_DATE', payload: t('newDeveloper.Required') });
      valid = false;
    }

    if(FORM_STATE.discount <=0){
        FORM_DISPATCH({ type: 'SET_ERROR_DISCOUNT', payload: t('newDeveloper.Required') });
        valid = false;
    }
    

    return valid;
  };

  //create coupon handle
  const handleCreateCoupon = async () => {
    if(VALIDATE_FORM()){
          const formData = new FormData()
          formData.append('code', FORM_STATE.couponCode)
          formData.append('start_date', FORM_STATE.startDate)
          formData.append('expire_date', FORM_STATE.expireDate)
          formData.append('coupon_type', 'default')
          formData.append('discount', FORM_STATE.discount)
          formData.append('discount_type',FORM_STATE.discountType)
          formData.append('translations',JSON.stringify([{locale:"en",key:'name',value:FORM_STATE.couponTitle}]))
          formData.append('limit',FORM_STATE.limitSameUser)
          formData.append('min_purchase',FORM_STATE.minPurchase)
          formData.append('max_discount',FORM_STATE.discountType === 'percent' ? FORM_STATE.maxDiscount : 0)
          setProcessingLoader(true)
          let response: Response = {
            data: undefined,
            status: 0,
            statusText: '',
            headers: undefined,
            config: undefined
          }
          if (FORM_STATE.couponId) {
              formData.append('coupon_id', FORM_STATE.couponId)
              response = await updateCoupon(formData) //update coupon
          } else {
              response = await createCoupon(formData) //create coupon
          }
          if (response?.data?.message) {
                Toast.show({
                  type: 'success',
                  text1: 'Success',
                  text2: response?.data?.message,
                });
                dispatch(couponActions.setData({field:'data',data:[]}))
                dispatch(couponActions.setData({field:'isFirstTimeLoading',data:true}))
                dispatch(couponActions.setData({field:'isNoMoreData',data:false}))

                // if (FORM_STATE.couponId) {
                //   navigation.navigate('EditVendorCoupon', { id: FORM_STATE.couponId });
                // }else{ 
                //   FORM_DISPATCH({ type: 'RESET_ALL' });  
                // }
                 navigation.navigate('StoreCouponList')
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
        <Header showBackArrow={true} title={FORM_STATE.couponId ? 'newDeveloper.EditCoupon' : 'newDeveloper.AddCoupon'} />



        <InputView
          couponTitle={FORM_STATE.couponTitle}
          setCouponTitle={(value) => {
            FORM_DISPATCH({ type: 'SET_COUPON_TITLE', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_COUPON_TITLE', payload: '' })
          }} 
          errorCoupontitle={FORM_STATE.errorCoupontitle}
          couponCode={FORM_STATE.couponCode}
          setCouponCode={(value) => {
            FORM_DISPATCH({ type: 'SET_COUPON_CODE', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_COUPON_CODE', payload: '' })
          }} 
          errorCouponCode={FORM_STATE.errorCouponCode}
          limitSameUser={FORM_STATE.limitSameUser}
          setLimitSameUser={(value) => {
            FORM_DISPATCH({ type: 'SET_LIMIT_SAME_USER', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_LIMIT_SAME_USER', payload: '' })
          }} 
          errorLimitSameUser={FORM_STATE.errorLimitSameUser}
          minPurchase={FORM_STATE.minPurchase}
          setMinPurchase={(value) => {
            FORM_DISPATCH({ type: 'SET_MIN_PURCHASE', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_MIN_PURCHASE', payload: '' })
          }} 
          errorMinPurchase={FORM_STATE.errorMinPurchase}
          startDate={FORM_STATE.startDate}
          setStartDate={(value) => {
            FORM_DISPATCH({ type: 'SET_START_DATE', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_START_DATE', payload: '' })
          }} 
          errorStartDate={FORM_STATE.errorStartDate}
          expireDate={FORM_STATE.expireDate}
          setExpireDate={(value) => {
            FORM_DISPATCH({ type: 'SET_EXPIRE_DATE', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_EXPIRE_DATE', payload: '' })
          }} 
          errorExpireDate={FORM_STATE.errorExpireDate}
          discount={FORM_STATE.discount}
          setDiscount={(value) => {
            FORM_DISPATCH({ type: 'SET_DISCOUNT', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_DISCOUNT', payload: '' })
          }} 
          errorDiscount={FORM_STATE.errorDiscount}
          discountType={FORM_STATE.discountType}
          setDiscounType={(value) => {
            console.log(value)
            FORM_DISPATCH({ type: 'SET_DISCOUNT_TYPE', payload: value })
          }}
          maxDiscount={FORM_STATE.maxDiscount}
          setMaxDiscount={(value) => {
            FORM_DISPATCH({ type: 'SET_MAX_DISCOUNT', payload: value })
          }}
          errorMaxDiscount={FORM_STATE.errorMaxDiscount}

        />
        <DashLine />
        <GradientBtn
          label={FORM_STATE.couponId ? "newDeveloper.update" : "newDeveloper.Add"}
          onPress={handleCreateCoupon}
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
