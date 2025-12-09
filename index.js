/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import i18n from './src/assets/language'; // Ensure this is initialized properly in App or another file
import { Provider } from 'react-redux';
import store from './src/store';
import Toast from 'react-native-toast-message';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance, EventType  } from '@notifee/react-native';
import {PermissionsAndroid} from 'react-native';
import { setValue } from '@src/utils/localstorage';
import { navigateExtra } from '@src/navigation';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  await notifee.createChannel({
    id: '6ammart',
    name: 'Default Channel',
    sound: 'notification_sound',  
    importance: AndroidImportance.HIGH,
  });
  await notifee.displayNotification({
    title: remoteMessage.notification.title,
    body: remoteMessage.notification.body,
    android: {
      channelId: '6ammart',
      smallIcon: 'ic_launcher', 
    },
    data: {
      oid:  String(remoteMessage?.data?.order_id) || "", // Add any data you need to pass to the function
    },
  });
  
});
notifee.onBackgroundEvent(async ({ type, detail }) => {
  if (type === EventType.PRESS) {
    console.log('Background Notification Clicked:', detail.notification);

    // Perform actions based on the notification click
    const orderId = detail.notification?.data?.oid;
    if (orderId) {
      console.log(`Handling background event with Order ID: ${orderId}`);
       navigateExtra('StoreOrderDetails', {OrderId: orderId });
      // Add your logic here (e.g., navigating to a specific screen or calling an API)
    } else {
      console.log('No Order ID found in background notification data.');
    }
  }
});



// Ignore all log warnings
LogBox.ignoreAllLogs();

// Main application component with Redux and Toast providers
const ReduxApp = () => {
  return (
    <Provider store={store}>
      <App />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  );
};

// Register the main application component
AppRegistry.registerComponent(appName, () => ReduxApp);
