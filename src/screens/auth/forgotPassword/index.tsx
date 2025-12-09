import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PhoneTextInput from '@otherComponent/auth/phoneTextInput';
import GradientBtn from '@commonComponents/gradientBtn';
import HeaderComponent from '@otherComponent/auth/header';
import TextInputComponent from '@otherComponent/auth/textInput';
import { windowWidth } from '@theme/appConstant';
import AuthBg from '@otherComponent/auth/authBg';
import { useValues } from '../../../../App';
import appColors from '@theme/appColors';
import OptionalModal from '@otherComponent/auth/optionalModal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { forgetPasswordAction } from '@src/store/redux/forgetpassword-redux';
import { Email } from '@assets/icons/auth/email';
import Toast from 'react-native-toast-message';
import { getForgetpasswordOtp } from '@src/services/forgetpassword.service';
import Spinner from 'react-native-loading-spinner-overlay';

type forgotPswProps = NativeStackNavigationProp<RootStackParamList>;
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

const ForgotPassword = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation<forgotPswProps>();
  const [errors, setErrors] = useState({ phoneNo: '' });
  const [form, setForm] = useState({ phoneNo: '' });
  const { isDark, t } = useValues();
  const [selectOptionModal, setOptionModal] = useState<boolean>(false);
  const [processingSpinner,setprocessingSpinner] = useState<boolean>(false);

    const { forget_password_verification_method } = useSelector((state: RootState) => state['providerAppConfig'])
   
  //  const forget_password_verification_method:string = 'phone' 
 
  const {
    email: forgetPasswordEmail,
    phoneCountryCode: forgetPasswordPhoneCountryCode,
    phoneDialCode: forgetPasswordPhoneDialCode,
    phone: forgerPasswordPhone,
    identity_type: forgetPasswordIdentityType,
  } = useSelector((state: RootState) => state['forgetPassword'])

  //set forget password phone country code
  const setPhoneCountryCode = (value:string) =>{
    dispatch(forgetPasswordAction.setData({ field: 'phoneCountryCode', data: value }))
  }
 
  //set forget password phone dial code
  const setPhoneDialCode = (value:string)=>{
    dispatch(forgetPasswordAction.setData({ field: 'phoneDialCode', data: value }))
  }

  //set Forget Password Phone number
  const setPhoneNumber = (value:string)=>{
    dispatch(forgetPasswordAction.setData({ field: 'phone', data: value }))
  }

  const setEmailAddress = (value:string)=>{
    dispatch(forgetPasswordAction.setData({ field: 'email', data: value }))
  }

  useEffect(() => {
    dispatch(forgetPasswordAction.setData({ field: 'identity_type', data: forget_password_verification_method }))
  }, [forget_password_verification_method])

  //get otp function
  const onOtpClick = async () => {
     
    let error = false;
    //forget password identity type phone
    if(forgetPasswordIdentityType === 'phone'){
         if(forgerPasswordPhone === '' || forgetPasswordPhoneDialCode === ''){
            error = true
            Toast.show({
              type: 'error',
              text1: 'error',
              text2: t('newDeveloper.Invalidphonenumber'),
            });
         }
    }
    //forget password identity type email
    if(forgetPasswordIdentityType === 'email'){
      if(forgetPasswordEmail === ''){
          error = true
          Toast.show({
            type: 'error',
            text1: 'error',
            text2: t('newDeveloper.Invalidemailaddress'),
          });
      }
    }

    if(error === false){
      setprocessingSpinner(true)
      //send otp to the user phone or email address
       
      const formData:{identity:string,identity_type:string} = {
        identity: forgetPasswordIdentityType === 'phone' ? `${forgetPasswordPhoneDialCode}${forgerPasswordPhone}` : forgetPasswordEmail,
        identity_type:forgetPasswordIdentityType
      }
      const response:Response = await getForgetpasswordOtp(formData)
      console.log(response?.data)
      if(response?.data?.response_code === 'default_200'){
        setprocessingSpinner(false)
        Toast.show({
          type: 'success',
          text1: 'success',
          text2: response?.data?.message,
        });
        // console.log("========= otp number ============")
        // console.log(response?.data?.content?.otp)
        dispatch(forgetPasswordAction.setData({ field: 'otp', data: response?.data?.content?.otp }))
        navigate('VerifyOtp');
      }else{
        setprocessingSpinner(false)
        Toast.show({
          type: 'error',
          text1: 'error',
          text2: response?.data?.message,
        });
      }
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? appColors.darkText : appColors.background },
      ]}>
      <AuthBg
        authContent={
          <View style={styles.paddingBottom}>
            <HeaderComponent
              showBack={true}
              authTitle={'auth.forgotPassword'}
              content={'auth.forgetPasswordContent'}
            />

            {forget_password_verification_method === 'phone' ?
              <PhoneTextInput
                phoneContent={<>
                  <TextInputComponent
                    textContainerStyle={{ width: windowWidth(45) }}
                    placeholder={t('auth.phoneNumber')}
                    keyboardType="number-pad"
                    value={forgerPasswordPhone}
                    onChangeText={value => {
                      setPhoneNumber(value)
                    }}
                    error={''} />
                </>}
                phoneCountryCode={forgetPasswordPhoneCountryCode}
                setPhoneCountryCode={function (value: string): void {
                  setPhoneCountryCode(value)
                }}
                phoneDialCode={forgetPasswordPhoneDialCode}
                setPhoneDialCode={function (value: string): void {
                  setPhoneDialCode(value)
                }} />
              :
              <TextInputComponent
                placeholder={t('auth.email')}
                keyboardType="email-address"
                Icon={
                  <Email
                    color={
                      isDark
                        ? appColors.lightText
                        : appColors.darkText
                    }
                  />
                }
                value={forgetPasswordEmail}
                onChangeText={value => {
                    setEmailAddress(value)
                }}
                error={''}
              />

            }



            <View style={styles.blankView}></View>
            <GradientBtn
              accountText="introSlider.anAccount"
              authText="introSlider.signUp"
              label="auth.sendOtp"
              onPress={onOtpClick}
              gotoScreen={() => setOptionModal(true)}
            />
          </View>
        }
      />
      <OptionalModal
        visible={selectOptionModal}
        onClose={() => setOptionModal(false)}
        providerLogin={true}
        setOptionModal={setOptionModal}
      />
      <Spinner
          visible={processingSpinner}
          textContent={'Processing.....'}
          textStyle={{ color: '#FFF' }}
        />
    </View>
  );
}

export default ForgotPassword;
