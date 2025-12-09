import { ScrollView, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
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
import Toast from 'react-native-toast-message';
import { getWithdrawMethodList } from '@src/services/withdraw.service';
import { withdrawMethodActions } from '@src/store/redux/withdraw-method-redux';
import { utf8ToBase64 } from '@src/config/utility';
import { sendWithdrawRequest } from '@src/services/withdraw.service';
import { withdrawListingActions } from '@src/store/redux/withdraw-list-redux';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getAuthUserService } from '@src/services/auth.service';
import { serviceProviderAccountDataActions } from '@src/store/redux/service-provider-account-data.redux';
import HomeNoFataFound from '@src/commonComponents/homeNoDataFound';
import { createOrderRozarPayService, paymentSuccessProcess } from '@src/services/payment.service';
import RazorpayCheckout from 'react-native-razorpay';


interface Variant {
  name: string;
  price: string;
}

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

type routeProps = NativeStackNavigationProp<RootStackParamList>;

//======================= Withdraw Request ====================================//
export default function RazorPay() {
  const dispatch = useDispatch()
  const [paymentNote, setPaymentNote] = useState<string>('')

  const { isDark, t, currSymbol } = useValues();
  const [processingSpinner, setProcessingLoader] = useState(false)

  const { navigate, goBack } = useNavigation<routeProps>();

  const { owner } = useSelector((state: RootState) => state['serviceProviderAccountData'])
  const { account } = owner
  const { account_receivable, account_payable } = account
  const balanceAmount = account_payable - account_receivable;
  const [paymentAmount, setPaymentAmount] = useState<string>('')
  const [rozarpayOrderData, setRozarpayOrderData] = useState<{
    orderId:string,
    amount_due:number,
    currency:string,
  }  | null>(null);
  

  //handle process rozarpay payment process
  const handleProcessPaymentAmount = async () => {
    let amountToPay = paymentAmount.replace(/[^\d]/g, '');
    const updateAmountToPay = amountToPay ? parseFloat(amountToPay) : 0

    if (updateAmountToPay === 0) {
      Alert.alert(t('newDeveloper.EnterValidAmount'))
      return
    }

    setProcessingLoader(true)
    const formData = new FormData()
    formData.append('amount', updateAmountToPay)
    formData.append('note', paymentNote)

    try { 
      const response: Response = await createOrderRozarPayService(formData);
      if (response?.data?.content?.orderId) {
          setRozarpayOrderData(response?.data?.content);
      } else {
          Toast.show({
            type: 'error',
            text1: 'ERROR',
            text2: t('newDeveloper.Failedtomakepayment'),
          });
          setRozarpayOrderData(null)
         
          goBack();
      }
    } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.Failedtomakepayment'),
        });
        setRozarpayOrderData(null)
        
        goBack();
    } finally {
        setProcessingLoader(false);
    }
  }

  //handle payment success process
  const handlePaymentSuccessProcess = async(rozarpayPaymentDetails:{
    razorpay_order_id: string,
    razorpay_payment_id: string,
    razorpay_signature: string
  })=>{
          setProcessingLoader(true)
          const formData = new FormData();
          formData.append('razorpay_order_id',rozarpayPaymentDetails?.razorpay_order_id)
          formData.append('razorpay_payment_id',rozarpayPaymentDetails?.razorpay_payment_id)
          formData.append('razorpay_signature',rozarpayPaymentDetails?.razorpay_signature)
          const response:Response = await paymentSuccessProcess(formData);

          if(response?.data?.content?.success){
                setRozarpayOrderData(null)
                const response = await getAuthUserService()
                if (response?.data?.response_code === 'default_200' && response?.data?.content?.provider_info?.id) {
                    dispatch(serviceProviderAccountDataActions.setData(response?.data?.content?.provider_info))
                }
                Toast.show({
                  type: 'success',
                  text1: 'Success',
                  text2: t('newDeveloper.SuccessPayment'),
                });
                setProcessingLoader(false)  
                navigate('ProfileAccountInformation')
          }else{
                Toast.show({
                  type: 'error',
                  text1: 'ERROR',
                  text2: t('newDeveloper.Failedtomakepayment'),
                });
                setProcessingLoader(false)
                setRozarpayOrderData(null)
                
                navigate('ProfileAccountInformation')
          }
  }

  const processRozarPayCheckout = async () => {
    if(!rozarpayOrderData?.amount_due ){ return  }
    var options = {
      description: 'Payment to admin',
      image: 'https://unified.dorkarservice.com/storage/app/public/business/2024-03-24-66002454a783d.png',
      currency: rozarpayOrderData?.currency,
      key: 'rzp_test_5fVES1XozMMRbd',
      amount: rozarpayOrderData?.amount_due,
      name: 'Dorkar service',
      order_id: rozarpayOrderData?.orderId,
      prefill: {
        email: owner.email,
        contact: owner.phone,
        name: owner.first_name + ' ' + (owner.last_name || '')
      },
      theme: { color: appColors.primary }
    };
    
    RazorpayCheckout.open(options)
      .then(async (data: any) => {
        await handlePaymentSuccessProcess(data)
      })
      .catch((error: any) => {
        Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.Failedtomakepayment'),
        });
        setRozarpayOrderData(null)
        
        goBack()
      });
  }

  useEffect(() => {
    if (rozarpayOrderData?.orderId) {
      processRozarPayCheckout()
    }
     
  }, [rozarpayOrderData])

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: windowHeight(3) }}
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        { backgroundColor: isDark ? appColors.darkCard : appColors.white },
      ]}>
      <Header showBackArrow={true} title={'newDeveloper.PaymentSection'} />

      {balanceAmount > 0 ? <>
        <InputView
          paymentNote={paymentNote}
          setPaymentNote={setPaymentNote}
          paymentAmount={paymentAmount}
          setPaymentAmount={setPaymentAmount}
        />
        <GradientBtn
          label="newDeveloper.ProcessPayment"
          onPress={handleProcessPaymentAmount}
          additionalStyle={{
            marginHorizontal: windowWidth(5),
            marginTop: windowHeight(3),
          }}
        />
      </> : <HomeNoFataFound message={t('newDeveloper.EnoughPayableAmount')} />}

      <Spinner
        visible={processingSpinner}
        textContent={'Processing.....'}
        textStyle={{ color: '#FFF' }}
      />
    </ScrollView>
  );
}
