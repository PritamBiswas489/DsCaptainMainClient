import { View, Animated, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GlobalStyle } from '@style/styles';
import AuthBg from '@otherComponent/auth/authBg';
import HeaderComponent from '@otherComponent/auth/header';
import { ProgressStepsSlider } from '@otherComponent/auth/stepperSlider';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../../App';
import { styles } from './styles';
import { getValue } from '@utils/localstorage';
import { RootStackParamList } from 'src/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getProviderConfig, getZoneList } from '@src/services/settings.service';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { zoneDataActions } from '@src/store/redux/zone-list-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { registrationService } from '@src/services/signup.service';
import Toast from 'react-native-toast-message';
import { registerFieldActions } from '@src/store/redux/register-field-redux';
import { mapFieldActions } from '@src/store/redux/map-address-redux';
import { configAppActions } from '@src/store/redux/config-redux';


 

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
  const [isProcessRegistering,setIsProcessRegistering] = useState<boolean>(false);

  // const {zones} = useSelector((state: RootState)=>state['zoneList'])
   
   
 

   
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const serviceProviderData = useSelector((state: RootState)=>state['serviceProviderAccountData'])
      
    if(serviceProviderData?.id!==''){
       Alert.alert('Already logged in')
       navigation.navigate('BottomTab');
    }

     
    

    


   useEffect(()=>{
    const onLoadData = async ()=>{
      setSkeletionLoaderView(true)
        const [response,responseProviderConfig] =  await Promise.all([getZoneList(),getProviderConfig()])
        if(response?.data?.content?.data){
          // console.log(response?.data?.content?.data)
          dispatch(zoneDataActions.setData({
            field: 'zones',
            data: JSON.stringify(response?.data?.content?.data),
           }))
        }
        if (responseProviderConfig?.data?.content?.base_url) {
            dispatch(configAppActions.setData(responseProviderConfig?.data?.content))
        }
        setSkeletionLoaderView(false)

    }
    onLoadData()
   },[])


    

  useEffect(() => {
    checkFreelancerLogin();
  }, []);

  const checkFreelancerLogin = async () => {
    const freelancerLogin = await getValue('freelancerLogin');
    freelancerLogin && setIsFreelancerLogin(true);
  };

  const stepCount = isFreelancerLogin ? 2 : 3;
  const { isDark, t} = useValues();
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      Animated.timing(progress, {
        toValue: (currentStep - 2) / stepCount,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }else{
      navigation.goBack();
    }
    //navigation.goBack();
  };
  const handleInitalStep = ()=>{
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

  const processRegistration = async (registerData:FormData) => {
  
    console.log("=== Process register ====")
    setIsProcessRegistering(true)
    const response:RegisterResponse  = await registrationService(registerData)
    if(response?.data?.response_code === 'default_400'){
      response?.data?.errors.forEach((data:{"error_code": string, "message": string},index:number)=>{
          Toast.show({
            type: 'error',
            text1: 'ERROR',
            text2: data?.message,
          });
      })
    } else if(response?.data?.response_code === 'provider_store_200'){
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: response?.data?.message,
            });
            dispatch(registerFieldActions.resetState())
            dispatch(mapFieldActions.resetState())
            navigation.navigate('Login')
    }else {
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
                    authTitle={'newDeveloper.RegisterAsProvider'}
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
