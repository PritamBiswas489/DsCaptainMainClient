import React, {useState, createContext, useContext, useEffect} from 'react';
import Navigation, { navigateExtra } from './src/navigation';
import {ThemeContextType} from './src/utils/types';
import {useTranslation} from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import {ScrollView, TouchableOpacity, View,Text, Alert} from 'react-native';
import { saveVendorFcmTokenProcess } from '@src/services/store/profile.service';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import { saveFcmTokenProcess } from '@src/services/profile.service';
import { checkLoggedInUserType } from '@src/utils/functions';
import { clearValue, setValue } from '@src/utils/localstorage';

const initialContextVal = {
  currSymbol: '$',
  currValue: 1,
  isDark: true,
  setIsDark: () => {},
  notificationSound:true,
  setNotificationSound:()=>{},
  setCurrValue: () => {},
  setCurrSymbol: () => {},
  isServiceManLogin: false,
  setIsServiceManLogin: () => {},
  isFreelancerLogin: false,
  setIsFreeLancerLogin: () => {},
  loggedInUserType:'', //logged in user type
  setLoggedInUserType:()=>{}, 
  t: '',
};

export const ThemeContext = createContext<ThemeContextType>(initialContextVal);

const App: React.FC = () => {
  const [currSymbol, setCurrSymbol] = useState('₹');
  const [currValue, setCurrValue] = useState(1);
  const [isDark, setIsDark] = useState(initialContextVal.isDark);
  const [notificationSound, setNotificationSound] = useState(initialContextVal.notificationSound);
  const [isServiceManLogin, setIsServiceManLogin] = useState(initialContextVal.isServiceManLogin);
  const [isFreelancerLogin, setIsFreeLancerLogin] = useState(initialContextVal.isFreelancerLogin);
  const [loggedInUserType, setLoggedInUserType] = useState(initialContextVal.loggedInUserType);
   
  const {t} = useTranslation();
  const contextValue = {
    currSymbol,
    setCurrSymbol,
    currValue,
    setCurrValue,
    isDark,
    setIsDark,
    notificationSound,
    setNotificationSound,
    isServiceManLogin,
    setIsServiceManLogin,
    isFreelancerLogin,
    setIsFreeLancerLogin,
    t,
    loggedInUserType,
    setLoggedInUserType
  };

  interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
  }

  async function onDisplayNotification(title:string,body:string, orderId:string) {
    //==== Create a channel =====//
    await notifee.createChannel({
      id: '6ammart',
      name: 'Default Channel',
      sound: 'notification_sound', // Use the same name as the MP3 file without extension
      importance: AndroidImportance.HIGH,
    });
  
    //========= Display a notification ============//
    await notifee.displayNotification({
      title: title,
      body: body,
      android: {
        channelId: '6ammart', 
        smallIcon: 'ic_launcher', // optional, defaults to your app icon
      },
      data: {
        orderId: orderId, // Add any data you need to pass to the function
      },
    });
  }

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
   //save fcm token
   const saveFcmTokenData = async (fcmToken:string) =>{
        console.log(fcmToken);
        const getLoggedInUserType = await checkLoggedInUserType()
        if(getLoggedInUserType === 'Seller'){
          const formData = new FormData()
          formData.append('fcm_token',fcmToken)
          const response:Response =  await saveVendorFcmTokenProcess(formData)
          console.log(response?.data)
          clearValue('fcmTokenStorage')

        }else if(getLoggedInUserType === 'Provider'){
          const formData = new FormData()
          formData.append('fcm_token',fcmToken)
          const response:Response =  await saveFcmTokenProcess(formData)
          console.log(response?.data)
          clearValue('fcmTokenStorage')

        }else{
          setValue('fcmTokenStorage',fcmToken)
        }
    }
    const getFCMToken = async () => {
      try {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
          saveFcmTokenData(fcmToken)
        } else {
          console.log('Failed to get FCM token');
        }
      } catch (error) {
        console.error('Error getting FCM token:', error);
      }
    };

    useEffect(() => {
      // Request permission and fetch the FCM token
      requestUserPermission();
      getFCMToken();
    
      // Handle foreground messages (e.g., app is open)
      const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
        // console.log("Foreground Notification:", remoteMessage);
        // Show notification using Notifee
        onDisplayNotification(
          remoteMessage.notification?.title || '',
          remoteMessage.notification?.body || '',
          String(remoteMessage?.data?.order_id) || ""
        );
      });
    
      // Handle background or quit-state notification clicks
      messaging().onNotificationOpenedApp(remoteMessage => {
        console.log('Notification caused app to open from background:', remoteMessage);
        handleNotificationClick(remoteMessage.notification);
      });

      
    
      // Handle notification clicks when the app is in quit state
      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            console.log('Notification caused app to open from quit state:', remoteMessage);
            handleNotificationClick(remoteMessage.notification);
          }
        });
    
      // Refresh FCM token
      const unsubscribeOnTokenRefresh = messaging().onTokenRefresh(token => {
        saveFcmTokenData(token);
      });
    
      // Register Notifee foreground event listener
      const unsubscribeNotifee = notifee.onForegroundEvent(({ type, detail }) => {
        if (type === EventType.PRESS) {
          console.log('Notification clicked:', detail.notification);
          handleNotificationClick(detail.notification);
        }
      });

      
    
      return () => {
        // Clean up all listeners
        unsubscribeOnMessage();
        unsubscribeOnTokenRefresh();
        unsubscribeNotifee();
      };
    }, []);
    
    // Handle notification click logic
    function handleNotificationClick(notification: any) {
      const orderId = notification?.data?.orderId;
      if (orderId) {
        console.log(`Navigating to order details with Order ID: ${orderId}`);
        navigateExtra('StoreOrderDetails', {OrderId: orderId });
        // Example: navigation.navigate('OrderDetails', { orderId });
      } else {
        console.log('No Order ID found in notification data.');
      }
    }

  return (
    <ThemeContext.Provider value={contextValue}>
      <Navigation />
    </ThemeContext.Provider>
  );
};

export default App;

export const useValues = () => useContext(ThemeContext);
