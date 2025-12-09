import React, { useState } from 'react';
import { View } from 'react-native';
import AuthBg from '@otherComponent/auth/authBg';
import HeaderComponent from '@otherComponent/auth/header';
import TextInputComponent from '@otherComponent/auth/textInput';
import PasswordInputComponent from '@otherComponent/auth/passwordInput';
import { Password } from '@assets/icons/auth/passwords';
import { InputType } from '@otherComponent/auth/textInput/types';
import appColors from '@theme/appColors';
import GradientBtn from '@commonComponents/gradientBtn';
import ModalComponent from '@commonComponents/modal';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { styles } from './styles';
import { useValues } from '../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import Spinner from 'react-native-loading-spinner-overlay';
import { resetPassword, resetPasswordNew } from '@src/services/forgetpassword.service';
import Toast from 'react-native-toast-message';
import { forgetPasswordAction } from '@src/store/redux/forgetpassword-redux';
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}
type resetPswProps = NativeStackNavigationProp<RootStackParamList>;
const ResetPassword = () => {
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false);
  const [failedModal, setFailedModal] = useState(false);
  const { isDark, t } = useValues();
  const { navigate } = useNavigation<resetPswProps>();
  const [processingSpinner, setProcessingSpinner] = useState(false)

  const {
    email: forgetPasswordEmail,
    phoneCountryCode: forgetPasswordPhoneCountryCode,
    phoneDialCode: forgetPasswordPhoneDialCode,
    phone: forgerPasswordPhone,
    identity_type: forgetPasswordIdentityType,
    enteredOtp
  } = useSelector((state: RootState) => state['forgetPassword'])

  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: '',
  });
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });

  const onChange = ({ name, value }: { name: string; value: string }) => {
    setForm({ ...form, [name]: value });
    if (value !== '') {
      setErrors(prev => {
        return { ...prev, [name]: null };
      });
    }
  };
  const resetPswCLick = async () => {
    if (!form.password) {
      setErrors(prev => {
        return { ...prev, password: t('error.password') };
      });
    } else if (form.password.length < 8) {
      setErrors(prev => {
        return { ...prev, password: t('error.validPassword') };
      });
    }
    if (!form.confirmPassword) {
      setErrors(prev => {
        return { ...prev, confirmPassword: t('error.confirmPassword') };
      });
    } else if (form.confirmPassword !== form.password) {
      setErrors(prev => {
        return { ...prev, confirmPassword: t('error.validConfirmPassword') };
      });
    } else {
      setProcessingSpinner(true)
      // setModalVisible(true);

      const dataList: {
        identity: string, identity_type: string, otp: string,
        password: string,
        confirm_password: string,
        _method:string
      } = {
        identity: forgetPasswordIdentityType === 'phone' ? `${forgetPasswordPhoneDialCode}${forgerPasswordPhone}` : forgetPasswordEmail,
        identity_type: forgetPasswordIdentityType,
        otp: enteredOtp,
        password: form.password,
        confirm_password: form.confirmPassword,
        _method:'PUT'
      }

      const formData = new FormData()
      formData.append('identity', forgetPasswordIdentityType === 'phone' ? `${forgetPasswordPhoneDialCode}${forgerPasswordPhone}` : forgetPasswordEmail)
      formData.append('identity_type', forgetPasswordIdentityType)
      formData.append('otp', enteredOtp)
      formData.append('password', form.password)
      formData.append('confirm_password', form.confirmPassword)
      formData.append('_method','PUT')
      
      // console.log(formData)
      const response: Response = await resetPasswordNew(formData)
      // console.log(response?.data)
      if (response?.data?.response_code === 'default_password_reset_200') {
        setProcessingSpinner(false)
        Toast.show({
          type: 'success',
          text1: 'success',
          text2: response?.data?.message,
        });
        dispatch(forgetPasswordAction.resetState())
        navigate('Login');
      } else {
        setProcessingSpinner(false)
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
              authTitle={'auth.resetPassword'}
              content={'auth.resetPasswordContent'}
            />

            <PasswordInputComponent
              inputType={InputType.PASSWORD}
              placeholder={t('introSlider.passwordPlaceholder')}
              Icon={
                <Password
                  color={
                    form.password
                      ? isDark
                        ? appColors.lightText
                        : appColors.darkText
                      : appColors.lightText
                  }
                />
              }
              onChangeText={value => {
                onChange({ name: 'password', value });
              }}
              value={form.password}
              error={errors.password}
            />




            <PasswordInputComponent
              inputType={InputType.PASSWORD}
              placeholder={t('auth.reEnterNewPassword')}
              Icon={
                <Password
                  color={
                    form.password
                      ? isDark
                        ? appColors.lightText
                        : appColors.darkText
                      : appColors.lightText
                  }
                />
              }
              onChangeText={value => {
                onChange({ name: 'confirmPassword', value });
              }}
              value={form.confirmPassword}
              error={errors.confirmPassword}
            />
            <View style={styles.marginTop}></View>
            <GradientBtn
              label="auth.resetPassword"
              onPress={resetPswCLick}
              gotoScreen={() => { }}
            />
          </View>
        }
      />

      {/* Reset Success modal */}
      <ModalComponent
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        success={true}
        title="auth.authSuccess"
        content="auth.successContent"
        btnTitle="auth.loginAgain"
        gotoScreen={() => {
          navigate('IntroSlider');
        }}
      />
      {/* Reset Failed modal */}
      <ModalComponent
        visible={failedModal}
        onClose={() => setFailedModal(false)}
        success={false}
        title="auth.authError"
        content="auth.errorContent"
        btnTitle="auth.tryAgain"
        gotoScreen={() => {
          navigate('IntroSlider');
        }}
      />
      <Spinner
        visible={processingSpinner}
        textContent={'Processing.....'}
        textStyle={{ color: '#FFF' }}
      />
    </View>
  );
}
export default ResetPassword;
