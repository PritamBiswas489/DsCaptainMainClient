import React, { useState } from 'react';
import {View} from 'react-native';
import AuthBg from '@otherComponent/auth/authBg';
import HeaderComponent from '@otherComponent/auth/header';
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

type otpProps = NativeStackNavigationProp<RootStackParamList>;
type otpRouteProps = RouteProp<RootStackParamList, 'VerifyOtp'>;

const VerifyOtp=()=> {
  const inputCount = 4;
  const dispatch = useDispatch()
  const {navigate} = useNavigation<otpProps>();
  const {params} = useRoute<otpRouteProps>();
  const {isDark,t} = useValues();
  const [enteredOtp,setEnteredOtp] = useState('')
  

  const {
    otp:responseOtp,
  } = useSelector((state: RootState) => state['forgetPassword'])


  // console.log({responseOtp})

  const onOtpClick = () => {
    if(enteredOtp.length  < 4){
      Toast.show({
        type: 'error',
        text1: 'error',
        text2: t('newDeveloper.OtpMinLengthErrorForgetPassword'),
      });
      return
    }
     
    if(responseOtp.toString()!==enteredOtp.toString()){
      Toast.show({
        type: 'error',
        text1: 'error',
        text2: t('newDeveloper.OtpDoesnotMatch'),
      });
      return
    }
    dispatch(forgetPasswordAction.setData({ field: 'enteredOtp', data: enteredOtp }))

    navigate('ResetPassword');
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
              gotoScreen={() => navigate('ForgotPassword')}
            />
          </View>
        }
      />
    </View>
  );
}
export default VerifyOtp;
