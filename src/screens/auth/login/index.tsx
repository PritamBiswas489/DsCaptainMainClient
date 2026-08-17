import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import HeaderComponent from '@otherComponent/auth/header';
import { styles } from './styles';
import TextInputComponent from '@otherComponent/auth/textInput';
import PasswordInputComponent from '@otherComponent/auth/passwordInput';
import { Email } from '@assets/icons/auth/email';
import { Password } from '@assets/icons/auth/passwords';
import appColors from '@theme/appColors';
import GradientBtn from '@commonComponents/gradientBtn';
import AuthBg from '@otherComponent/auth/authBg';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { InputType } from '@otherComponent/auth/textInput/types';
import OptionalModal from '@otherComponent/auth/optionalModal';
import { useValues } from '../../../../App';
import { clearServiceMenCredential } from '@utils/functions';
import { setValue } from '@utils/localstorage';
import Spinner from 'react-native-loading-spinner-overlay';
import { loginService } from '@src/services/login.service';
import { loginService as storeLoginService } from '@src/services/store/login.service';
import Toast from 'react-native-toast-message';
import { setAuthTokens } from '@src/config/auth';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { getAuthUserService } from '@src/services/auth.service';
import { getAuthUserService as storeAuthService } from '@src/services/store/auth.service';
import { serviceProviderAccountDataActions } from '@src/store/redux/service-provider-account-data.redux';
import { useDispatch } from 'react-redux';
import { serviceProviderBookingReviewActions } from '@src/store/redux/service-provider-booking-review-redux';
import { serviceProviderPomotionalCostActions } from '@src/store/redux/service-provider-pomotional-cost-redux';
import { storeProfileDataActions } from '@src/store/redux/store/store-profile-redux';
import messaging from '@react-native-firebase/messaging';
import { saveVendorFcmTokenProcess } from '@src/services/store/profile.service';
import { saveFcmTokenProcess } from '@src/services/profile.service';
interface LoginResponse {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

interface FCMResponse {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
  }

type loginProps = NativeStackNavigationProp<RootStackParamList>;
const Login = ({ route }: any) => {
  const navigation = useNavigation<loginProps>();
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [form, setForm] = useState({ email: '', password: '' });
  // const [form, setForm] = useState({email: 'pritam.biswas489@gmail.com', password: 'Pritam123@#'});
  const [selectOptionModal, setOptionModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()

  const serviceProviderData = useSelector((state: RootState) => state['serviceProviderAccountData'])

  if (serviceProviderData?.id !== '') {
    navigation.navigate('BottomTab');
  }


  const {
    isDark,
    isServiceManLogin,
    setIsServiceManLogin,
    setIsFreeLancerLogin,
    t,
    loggedInUserType,
    setLoggedInUserType
  } = useValues();

  const onChange = ({ name, value }: { name: string; value: string }) => {
    setForm({ ...form, [name]: value });
    if (value !== '') {
      setErrors(prev => {
        return { ...prev, [name]: null };
      });
    }
  };

  useEffect(() => {

    route?.params?.serviceMenLogin
      ? setIsServiceManLogin(true)
      : setIsServiceManLogin(false);
  }, []);


  useEffect(() => {
    if (isServiceManLogin) {
      // setForm({ ...form, ['email']: 'fashion1@gmail.com', ['password']: '@Dorkar1234' });
    //  setForm({ ...form, ['email']: 'foodstore1@gmail.com', ['password']: '@Dorkar1234' });
    //  setForm({ ...form, ['email']: 'arup1012@gmail.com', ['password']: '@Kolkata1234' });
    //  setForm({ ...form, ['email']: 'Munmun2020@gmail.com', ['password']: '@Kolkata1234' });
      // setForm({ ...form, ['email']: 'medicine1@gmail.com', ['password']: '@Dorkar1234' });
    } else {
      // setForm({ ...form, ['email']: 'dorkarbeldanga@gmail.com', ['password']: '@Beldanga1234' });
    }
  }, [isServiceManLogin])


  const handleLoginServiceProvider = () => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let error = false  
    if (!form.email) {
      error = true
      setErrors(prev => {
        return { ...prev, email: t('error.email') };
      });
    }
    if (!reg.test(form.email)) {
      error = true
      setErrors(prev => {
        return { ...prev, email: t('error.validEmail') };
      });
    }
    if (!form.password) {
      error = true
      setErrors(prev => {
        return { ...prev, password: t('error.password') };
      });
    }
    if(!error) {
      //isServiceManLogin ? saveServiceMenCredentials() : clearServiceMenData();
      isServiceManLogin ? handleStoreSellerLoginHandle() : handleServiceProviderLoginHandle()

    }
  };
  const handleStoreSellerLoginHandle = async () => {
    setIsLoading(true)
    const data: {
      email: string,
      password: string,
      vendor_type: string
    } = {
      email: form.email,
      password: form.password,
      vendor_type: 'owner'
    };

    
        const response: LoginResponse = await storeLoginService(data);
        if (response?.data?.errors) {
            Toast.show({
              type: 'error',
              text1: 'ERROR',
              text2: response?.data?.errors[0]?.message,
            });
            setIsLoading(false)
        } else if (response?.data?.token) {
              await setAuthTokens(response?.data?.token, null);
              const responseuser = await storeAuthService()
              if(
                responseuser?.data?.errors && 
                responseuser?.data?.errors[0]?.code === 'auth-001'){
                  navigation.replace('AuthNavigation');
                  return
              }
              if (responseuser?.data?.id) {
                      Toast.show({
                        type: 'success',
                        text1: 'SUCCESS',
                        text2: t('newDeveloper.successfullyLoggedIn'),
                      });
                      dispatch(storeProfileDataActions.setData(responseuser?.data))
                      setIsLoading(false)
                      setValue('loggedInUserType', 'Seller')
                      setLoggedInUserType('Seller')
                      navigation.reset({
                        index: 0,
                        routes: [{ name: 'BottomTabSeller' }],
                      });

                      const fcmToken = await messaging().getToken();
                      if(fcmToken) {
                        const formData = new FormData()
                        formData.append('fcm_token',fcmToken)
                        const response:FCMResponse =  await saveVendorFcmTokenProcess(formData);
                      }
              } else {
                    Toast.show({
                      type: 'error',
                      text1: 'ERROR',
                      text2: t('newDeveloper.errorLoggedIn'),
                    });
              }
        } else {
          Toast.show({
            type: 'error',
            text1: 'ERROR',
            text2: t('newDeveloper.errorLoggedIn'),
          });
          setIsLoading(false)
        }

       
      



  }

  const handleServiceProviderLoginHandle = async () => {
    setIsLoading(true)
    const data: { email_or_phone: string, password: string } = {
      email_or_phone: form.email,
      password: form.password,
    };
    const response: LoginResponse = await loginService(data);
    if (response?.data?.response_code === 'auth_login_200') {


      if (response?.data?.content?.is_active !== 1) {

        Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.accountDectivate'),
        });
        setIsLoading(false)
      } else {
        await setAuthTokens(response?.data?.content?.token, null);
        const responseuser = await getAuthUserService()

        if (responseuser?.data?.response_code === 'default_200' && responseuser?.data?.content?.provider_info?.id) {
          dispatch(serviceProviderAccountDataActions.setData(responseuser?.data?.content?.provider_info))
          dispatch(serviceProviderBookingReviewActions.setData(responseuser?.data?.content?.booking_overview))
          dispatch(serviceProviderPomotionalCostActions.setData(responseuser?.data?.content?.promotional_cost_percentage))
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: response?.data?.message,
          });
          setIsServiceManLogin(false);
          setIsLoading(false)
          setIsFreeLancerLogin(true);
          setValue('loggedInUserType', 'Provider')
          setLoggedInUserType('Provider')
          navigation.reset({
            index: 0,
            routes: [{ name: 'BottomTab' }],
          });

          const fcmToken = await messaging().getToken();
          if(fcmToken) {
            const formData = new FormData()
            formData.append('fcm_token',fcmToken)
            const response:FCMResponse =  await saveFcmTokenProcess(formData);
          }
        } else {
          setIsLoading(false)
          Toast.show({
            type: 'error',
            text1: 'ERROR',
            text2: t('newDeveloper.loginFailed'),
          });

        }
      }
    } else {
      setIsLoading(false)
      Toast.show({
        type: 'error',
        text1: 'ERROR',
        text2: t('newDeveloper.loginFailed'),
      });
    }
  }







  return (
    <>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        style={[
          styles.container,
          { backgroundColor: isDark ? appColors.darkText : appColors.background },
        ]}>
        <View>
          <AuthBg
            authContent={
              <View style={styles.paddingBottom}>
                <HeaderComponent
                  showBack={false}
                  authTitle={'introSlider.signIn'}
                  content={
                    !isServiceManLogin
                      ? 'auth.providerLogin'
                      : 'auth.serviceManLogin'
                  }
                />
                <TextInputComponent
                  placeholder={t('auth.email')}
                  keyboardType="email-address"
                  Icon={
                    <Email
                      color={
                        form.email
                          ? isDark
                            ? appColors.lightText
                            : appColors.darkText
                          : appColors.lightText
                      }
                    />
                  }
                  value={form.email}
                  onChangeText={value => {
                    onChange({ name: 'email', value });
                  }}
                  error={errors.email}
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
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>{
                    !isServiceManLogin
                    ? navigation.navigate('ForgotPassword')
                    : navigation.navigate('StoreForgotPassword')

                  } }
                  style={styles.forgotView}>
                  <Text style={styles.forgotText}>
                    {t('auth.forgotPassword')}
                  </Text>
                </TouchableOpacity>

                <GradientBtn
                  accountText={!isServiceManLogin ? 'introSlider.anAccount' : ''}
                  authText={!isServiceManLogin ? 'introSlider.signUp' : ''}
                  label="introSlider.loginNow"
                  onPress={handleLoginServiceProvider}
                  gotoScreen={
                    !isServiceManLogin ? () => setOptionModal(true) : undefined
                  }
                />
              </View>
            }
          />
        </View>
        <View
          style={isServiceManLogin ? styles.buttonView : styles.buttonContainer}
        />
        <GradientBtn
          color={isDark ? appColors.darkTheme : appColors.white}
          label={
            isServiceManLogin ? 'auth.providerLogin' : 'auth.serviceManLogin'
          }
          onPress={() => setIsServiceManLogin(!isServiceManLogin)}
          additionalStyle={styles.buttonStyle}
          labelColor={appColors.primary}
          labelTextStyle={styles.labelText}
        />

        {/* selectOptionModal  modal */}
        <OptionalModal
          visible={selectOptionModal}
          onClose={() => setOptionModal(false)}
          providerLogin={true}
          setOptionModal={setOptionModal}
        />
        <Spinner
          visible={isLoading}
          textContent={t('newDeveloper.spinnerTextOne')}
          textStyle={{ color: '#FFF' }}
        />
      </ScrollView>

    </>
  );
}

export default Login;
