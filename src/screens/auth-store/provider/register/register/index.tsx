import { View, Animated, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GlobalStyle } from '@style/styles';
import AuthBg from '@otherComponent/auth-store/authBg';
import HeaderComponent from '@otherComponent/auth-store/header';
import { ProgressStepsSlider } from '@otherComponent/auth-store/stepperSlider';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../../App';
import { styles } from './styles';
import { getValue } from '@utils/localstorage';
import { RootStackParamList } from 'src/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import Spinner from 'react-native-loading-spinner-overlay';
import { registrationService } from '@src/services/store/signup.service';
import Toast from 'react-native-toast-message';
 
import { storeRegisterFieldActions } from '@src/store/redux/store/register-field-redux';
import { mapStoreFieldActions } from '@src/store/redux/store/map-address-redux';
import { getModuleList } from '@src/services/store/settings.service';
import { modulesAction } from '@src/store/redux/store/modules-redux';

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

const Register = ({ route }: any) => {

  const dispatch = useDispatch()
  const [locationData, setLocationData] = useState();
  const [currentStep, setCurrentStep] = useState(1);
  const progress = useState(new Animated.Value(0))[0];
  const [isFreelancerLogin, setIsFreelancerLogin] = useState<boolean>();
  const [isSkeletonLoaderView, setSkeletionLoaderView] = useState<boolean>(true);
  const [isProcessRegistering, setIsProcessRegistering] = useState<boolean>(false);

  const moduleList = useSelector((state: RootState) => state['storeModules'])
  const [isModuleLoaded, setModuleLoaded] = useState<boolean>(moduleList && false);
   

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const serviceProviderData = useSelector((state: RootState) => state['serviceProviderAccountData'])
  
  if (serviceProviderData?.id !== '') {
      Alert.alert('Already logged in')
      navigation.navigate('BottomTab');
  }

  useEffect(() => {
    if (isModuleLoaded) {
      setSkeletionLoaderView(false)
    }
  }, [isModuleLoaded])

  useEffect(() => {
    const getModules = async () => {
      const response: Response = await getModuleList();
      setModuleLoaded(true);
      if (response?.data) {
        dispatch(modulesAction.setData(response?.data))
      }
    }
    //get Modules
    if (!isModuleLoaded) {
      getModules()
    }
  }, [isModuleLoaded])



  useEffect(() => {
    checkFreelancerLogin();
  }, []);

  const checkFreelancerLogin = async () => {
    const freelancerLogin = await getValue('freelancerLogin');
    freelancerLogin && setIsFreelancerLogin(true);
  };

  const stepCount = 2;
  const { isDark, t } = useValues();
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      Animated.timing(progress, {
        toValue: (currentStep - 2) / stepCount,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      navigation.goBack();
    }
    //navigation.goBack();
  };
  const handleInitalStep = () => {
    navigation.goBack();
  }
  useEffect(() => {
    if (route?.params?.data) {
      setLocationData(route?.params?.data);
    }
  });

  interface RegisterResponse {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
  }
  //process registration
  const processRegistration = async (registerData: FormData) => {
    setIsProcessRegistering(true)
    const response: RegisterResponse = await registrationService(registerData)
    console.log("================ Process Store registration =================================")
    if(response?.data?.errors){
            Toast.show({
               type: 'error',
               text1: 'ERROR',
               text2: response?.data?.errors[0]?.message,
            });
    }else if(response?.data?.store_id){
      Toast.show({
            type: 'success',
            text1: 'Success',
            text2: response?.data?.message,
          });
      dispatch(storeRegisterFieldActions.resetState())
      dispatch(mapStoreFieldActions.resetState())
      navigation.navigate('Login')
    }else{
      Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.processFailed'),
      });
    }

    setIsProcessRegistering(false)
  }


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.white,
        },
      ]}
      contentContainerStyle={styles.contentContainerStyle}>
      <View
        style={[
          styles.innerContainer,
          {
            backgroundColor: isDark ? appColors.darkCardBg : appColors.white,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>



        <>
          <AuthBg
            containerStyle={{ borderWidth: 0 }}
            authContent={
              <View>
                <HeaderComponent
                  showBack={true}
                  authTitle={'newDeveloper.RegisterAsSeller'}
                  content={'auth.registerContent'}
                  gotoScreen={() => handlePrevStep()}
                  containerStyle={styles.containerStyle}
                />
              </View>
            }
          />
          <ProgressStepsSlider
            data={locationData}
            currentStep={currentStep}
            handlePrevStep={() => handlePrevStep()}
            stepCount={stepCount}
            setCurrentStep={setCurrentStep}
            progress={progress}
            processRegistration={processRegistration}
          />
        </>
        <Spinner
          visible={isSkeletonLoaderView}
          textContent={'Loading.....'}
          textStyle={{ color: '#FFF' }}
        />

        <Spinner
          visible={isProcessRegistering}
          textContent={'Processing.....'}
          textStyle={{ color: '#FFF' }}
        />

      </View>
    </ScrollView>

  );
}
export default Register;
