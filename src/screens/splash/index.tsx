//export {default as SplashScreen} from './SplashScreen';

import React, { useEffect, useRef, useState } from 'react';
import { Alert, Animated, Easing, View, Text } from 'react-native';
import { splashLogo2 } from '@utils/images';
import appColors from '@theme/appColors';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { getValue, setValue } from '@utils/localstorage';
import { useTranslation } from 'react-i18next';
import { useValues } from '../../../App';
import { getServiceMenCredentials } from '@utils/functions';
import Spinner from 'react-native-loading-spinner-overlay';
import { getAuthUserService } from '@src/services/auth.service';
import { serviceProviderAccountDataActions } from '@src/store/redux/service-provider-account-data.redux';
import { serviceProviderBookingReviewActions } from '@src/store/redux/service-provider-booking-review-redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { getProviderConfig, getPagesContent } from '@src/services/settings.service';
import { configAppActions } from '@src/store/redux/config-redux';
import { contentPagesActions } from '@src/store/redux/content-pages-redux';
import { serviceProviderPomotionalCostActions } from '@src/store/redux/service-provider-pomotional-cost-redux';
import useHomeDataLoader from '@src/hooks/useHomeDataLoader';
import { homeStatisticsGraphActions } from '@src/store/redux/home-statistics-graph-redux';
import { checkLoggedInUserType } from '@utils/functions';
import { storeConfigAppActions } from '@src/store/redux/store/store-config-redux';
import { storeProfileDataActions } from '@src/store/redux/store/store-profile-redux';
import { getStoreSettings } from '@src/services/store/settings.service';
import { getAuthUserService as storeAuthService } from '@src/services/store/auth.service';
import { storeHomeOrderActions } from '@src/store/redux/store/store-home-order';


type navigation = NativeStackNavigationProp<RootStackParamList>;
const SplashScreen = () => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const images = [splashLogo2, splashLogo2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(appColors.darkText);
  const animations = new Animated.Value(0);
  const data = [appColors.darkText, appColors.primary, appColors.darkText];
  const { replace } = useNavigation<navigation>();
  const { i18n } = useTranslation();
  const { 
    setCurrSymbol, 
    setCurrValue, 
    setIsServiceManLogin, 
    setIsDark, 
    isDark, 
    t,
    notificationSound,
    setNotificationSound ,
    loggedInUserType,
    setLoggedInUserType
    
  } =
    useValues();

  const [checkingLoader, setCheckingLoader] = useState(false);
  const dispatch = useDispatch()

  const { callAllFunctionHome } = useHomeDataLoader();
   
   
  useEffect(() => {
    getLanguageCode();
    getTheme();
    getNotitifcationSound();
    checkServiceMenCredential();
    getSelectedCurrency();
    getLoggedInUserType();//set logged in user type in context
  }, []);

  const getLoggedInUserType = async () => {
    getValue('loggedInUserType')
      .then(res => {
        if (res !== null) {
          return res;
        } else {
          return false;
        }
      })
      .then(val => {
        setLoggedInUserType(val.toString());
        setValue('loggedInUserType', val.toString());
      });
  };
  
  const getTheme = async () => {
    getValue('darkTheme')
      .then(res => {
        if (res !== null) {
          return JSON.parse(res);
        } else {
          return false;
        }
      })
      .then(val => {
        setIsDark(val);
        setValue('darkTheme', val.toString());
      });
  };
  const getNotitifcationSound = async () =>{
    getValue('notificationSound').then(res => {
        if (res !== null) {
          return JSON.parse(res);
        } else {
          return true;
        }
    })
    .then(val => {
        setNotificationSound(val);
        setValue('notificationSound', val.toString());
    });

  }

  const getLanguageCode = async () => {
    const languageCode = await getValue('languageCode');
    if (languageCode !== null) {
        i18n.changeLanguage(languageCode);
        setValue('languageCode', languageCode);
    }else{
        i18n.changeLanguage('en');
        setValue('languageCode', 'en');
    }
  };

  const checkServiceMenCredential = async () => {
    const hasServiceMenCredentials = await getServiceMenCredentials();
    if (hasServiceMenCredentials) {
      setIsServiceManLogin(true);
    }
  };

  const getSelectedCurrency = async () => {
    const currencyVal = await getValue('currencyVal');
    const currencySymbol = await getValue('currencySymbol');

    if (currencyVal !== null && currencySymbol !== null) {
      setCurrSymbol(currencySymbol);
      setCurrValue(parseFloat(currencyVal));
    }
  };

  var opacities = [];
  const zoomIn = () => {
    return Animated.timing(scaleValue, {
      toValue: 0.1,
      duration: 1500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    });
  };

  const zoomOut = () => {
    return Animated.timing(scaleValue, {
      toValue: 0.4,
      duration: 1500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    });
  };

   

  const interpolatedValue = scaleValue.interpolate({
    inputRange: [0.5, 0.5],
    outputRange: ['50deg', '0deg'],
  });
  function getRandomFloat(min:number, max:number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function getDaysInMonth(month:number, year:number) {
    return new Date(year, month, 0).getDate();
}

  

  
  const assignDefaultHomeStatisticsData = () => {
     
    const currentYear = new Date().getFullYear();
    
    // Generate last four years array using Array.from
    const lastFourYears = Array.from({ length: 4 }, (_, i) => currentYear - i);
  
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Precompute the days for each month across all four years
    const getMonthDataWithDays = (yearValue: number) => {
      return monthNames.map((monthName, i) => {
        const numberOfDays = getDaysInMonth(i + 1, yearValue);
        const days = Array.from({ length: numberOfDays }, (_, dayIndex) => ({
          dayNumber: dayIndex + 1,
          amount: 0
        }));
  
        return {
          monthName,
          days
        };
      });
    };
  
    // Precompute month data (with amount: 0) for all months
    const defaultMonthData = monthNames.map(monthName => ({
      monthName,
      amount: 0
    }));
  
    // Generate yearStatData and monthStatData in a single loop
     
    const yearStatData: {
      year: number; month: { monthName: string; amount: number; }[]; // Reuse precomputed default month data
    }[] = [];
     
    const monthStatData: {
      year: number; month: { monthName: string; days: { dayNumber: number; amount: number; }[]; }[]; // Precompute days for each month
    }[] = [];
  
    lastFourYears.forEach((yearValue) => {
      yearStatData.push({
        year: yearValue,
        month: [...defaultMonthData] // Reuse precomputed default month data
      });
  
      monthStatData.push({
        year: yearValue,
        month: getMonthDataWithDays(yearValue) // Precompute days for each month
      });
    });
  
    // Dispatch the data in one go to avoid multiple state updates
    
    dispatch(homeStatisticsGraphActions.updateMultipleField({
       
        lastFourYears,
        monthList: monthNames,
        yearStatData,
        monthStatData
    }));
  };
  
  //check vendor
  const checkVendor = async ()=>{
    setCheckingLoader(true)
    const responseStoreConfig = await getStoreSettings()
    if(responseStoreConfig?.data?.business_name){
       dispatch(storeConfigAppActions.setData(responseStoreConfig?.data))
    }else{
       Alert.alert('Unable to load app.restart the app')
       setCheckingLoader(false)
       return
    }
    const responseuser = await storeAuthService()
    if (responseuser?.data?.id) {
        dispatch(storeProfileDataActions.setData(responseuser?.data))
        dispatch(storeHomeOrderActions.setData({field:'refreshOrders','data':true}))
        replace('BottomTabSeller');
    }else{
        replace('IntroSlider');
    }
  }
  //check user 
  const checkuser = async () => {
    setCheckingLoader(true)
    const responseProviderConfig = await getProviderConfig();
    if (responseProviderConfig?.data?.content?.base_url) {
      dispatch(configAppActions.setData(responseProviderConfig?.data?.content))
    } else {
      Alert.alert('Unable to load app.restart the app')
      setCheckingLoader(false)
      return
    }

    const contentConfig = await getPagesContent()

    if (contentConfig?.data?.content) {
      // console.log("================ hello =======================")

      Object.keys(contentConfig?.data?.content).forEach((key: string) => {
        // console.log(contentConfig?.data?.content[key]?.value)
        if (key === 'about_us') {
          dispatch(contentPagesActions.setData({ 'field': 'about_us', data: contentConfig?.data?.content[key]?.value }))
        }
        if (key === 'terms_and_conditions') {
          dispatch(contentPagesActions.setData({ 'field': 'terms_and_conditions', data: contentConfig?.data?.content[key]?.value }))
        }
        if (key === 'refund_policy') {
          dispatch(contentPagesActions.setData({ 'field': 'refund_policy', data: contentConfig?.data?.content[key]?.value }))
        }
        if (key === 'return_policy') {
          dispatch(contentPagesActions.setData({ 'field': 'return_policy', data: contentConfig?.data?.content[key]?.value }))
        }
        if (key === 'cancellation_policy') {
          dispatch(contentPagesActions.setData({ 'field': 'cancellation_policy', data: contentConfig?.data?.content[key]?.value }))
        }
        if (key === 'privacy_policy') {
          dispatch(contentPagesActions.setData({ 'field': 'privacy_policy', data: contentConfig?.data?.content[key]?.value }))
        }
      })
      dispatch(contentPagesActions.setData({ 'field': 'fetched', data: true }))

    }

   
    
    

    const response = await getAuthUserService()
    if (response?.data?.response_code === 'default_200' && response?.data?.content?.provider_info?.id) {
      dispatch(serviceProviderAccountDataActions.setData(response?.data?.content?.provider_info))
      dispatch(serviceProviderBookingReviewActions.setData(response?.data?.content?.booking_overview))
      dispatch(serviceProviderPomotionalCostActions.setData(response?.data?.content?.promotional_cost_percentage))

      await callAllFunctionHome()
      replace('BottomTab');
    } else {
      replace('IntroSlider');
    }
    setCheckingLoader(false)
  }

   

  const animate = () => {
    setTimeout(() => {
      setBackgroundColor(appColors.darkText);
      setCurrentIndex(0);
      setTimeout(() => {
        zoomIn().start(() => {
          zoomOut().start(async () => {
            //check logged in user type for retrieve 
            const getUserType = await checkLoggedInUserType()
            
            if(getUserType === 'Provider'){
                 assignDefaultHomeStatisticsData()
                 checkuser()
            }else if(getUserType === 'Seller'){
                  checkVendor()
            }else{
                replace('IntroSlider');
            }
          });
        });
      }, 10);
    }, 10);
  };
  useEffect(() => {
    data.map((item, index) => {
      opacities.push(
        animations.interpolate({
          inputRange: [index, index + 1],
          outputRange: [1, 0],
        }),
      );
    });

    animate();
  }, [1000]);

  let transformArray = [{ scale: scaleValue }];

  if (currentIndex === 1) {
    //@ts-ignore
    transformArray.push({ rotate: interpolatedValue });
  }

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Animated.Image
        source={images[currentIndex]}
        style={[
          styles.image,
          {
            transform: transformArray,
          },
        ]}
        resizeMode={'contain'}
      />
      <Text style={{
        color: appColors.primary, 
        fontSize:24, 
        fontWeight:'bold'
        }}>{t('newDeveloper.ServiceProviderApp')}</Text>
      <Spinner
        visible={checkingLoader}
        textContent={''}

        indicatorStyle={styles.spinnerStyle}
        textStyle={{ color: '#FFF' }}
      />
    </View>
  );
}
export default SplashScreen;

