import React, { useState } from 'react';
import {View, Alert} from 'react-native';
import AuthBg from '@otherComponent/auth-store/authBg';
import HeaderComponent from '@otherComponent/auth-store/header';
import OTPTextInput from 'react-native-otp-textinput';
import GradientBtn from '@commonComponents/gradientBtn';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './styles';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import Toast from 'react-native-toast-message';
import { forgetPasswordAction } from '@src/store/redux/forgetpassword-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { verifyToken } from '@src/services/store/forgetpassword.service';

type otpProps = NativeStackNavigationProp<RootStackParamList>;
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}


const VerifyOtp=()=> {
 
  const inputCount = 4;
  const dispatch = useDispatch()
  const {navigate} = useNavigation<otpProps>(); 
  const {isDark,t} = useValues();
  const [enteredOtp,setEnteredOtp] = useState('')
  const [processingSpinner,setprocessingSpinner] = useState<boolean>(false);

  const {
    email: forgetPasswordEmail,
  } = useSelector((state: RootState) => state['forgetPassword'])
  

  // const {
  //   otp:responseOtp,
  // } = useSelector((state: RootState) => state['forgetPassword'])


  // console.log({responseOtp})

  const onOtpClick = async () => {
    setprocessingSpinner(true)
    if(enteredOtp.length  < 4){
      Toast.show({
        type: 'error',
        text1: 'error',
        text2: t('newDeveloper.OtpMinLengthErrorForgetPassword'),
      });
      return
    }
    
    const response:Response = await verifyToken(
      {
        email:forgetPasswordEmail,
        reset_token:enteredOtp
      })

    if(response?.data?.errors){
          Toast.show({
              type: 'error',
              text1: 'ERROR',
              text2: response?.data?.errors[0]?.message,
          });
          setprocessingSpinner(false)
    }else if(response?.data?.message){
          setprocessingSpinner(false)
          Toast.show({
                type: 'success',
                text1: 'success',
                text2: response?.data?.message,
          });
          dispatch(forgetPasswordAction.setData({ field: 'enteredOtp', data: enteredOtp }))
          navigate('StoreResetPassword');
    }else{
          setprocessingSpinner(false)
          Toast.show({
                type: 'error',
                text1: 'ERROR',
                text2: t('newDeveloper.processFailed'),
          });
      }
     
     
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.darkText : appColors.background},
      ]}>
      <AuthBg
        authContent={
          <View style={styles.paddingBottom}>
            <HeaderComponent
              showBack={true}
              authTitle={'auth.verifyOtp'}
              content={'auth.verificationCode'}
            />
            <View style={styles.margin}>
              <OTPTextInput
                inputCount={inputCount}
                handleTextChange={setEnteredOtp}
                textInputStyle={{
                  color: isDark ? appColors.white : appColors.darkText,
                  ...styles.otpTextInput,

                  backgroundColor: isDark
                    ? appColors.darkText
                    : appColors.textInput,
                }}
              />
            </View>
            <View style={styles.blankView}></View>
            <GradientBtn
              label={t('auth.verifySignIn')}
              onPress={onOtpClick}
              authText={'auth.resendCode'}
              gotoScreen={() => navigate('StoreForgotPassword')}
            />
          </View>
        }
      />
       <Spinner
          visible={processingSpinner}
          textContent={'Processing.....'}
          textStyle={{ color: '#FFF' }}
        />
    </View>
  );
}
export default VerifyOtp;
