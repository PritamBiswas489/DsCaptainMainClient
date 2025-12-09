import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyTabBar} from './myTabBar';
import {
  HomeIcon,
  WalletIcon,
  BookingIcon,
  SettingIcon,
  ActiveSetting,
  ActiveHomeIcon,
  ActiveWallet,
  ActiveBooking,
  Plus,
  Services,
  MenuIcon,
  ActiveMenuIcon
} from '@utils/icons';
import appColors from '../theme/appColors';
import {Home, Wallet, Setting, Booking, ServiceList, MoreMenus} from '../screens/index';
import {View,Text} from 'react-native';
import CartModal from '@otherComponent/cartModal';
import {windowHeight} from '@theme/appConstant';
import Spinner from 'react-native-loading-spinner-overlay';

const Tab = createBottomTabNavigator();

export function BottomTab() {
  const [selected, setSelected] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [processingSpinner, setProcessingLoader] = useState(false)
  const tabData = [
    {
      name: 'bottomTab.home',
      activeIcon: <ActiveHomeIcon />,
      tabBarIcon: <HomeIcon color={appColors.lightText} />,
    },
    {
      name: 'bottomTab.booking',
      activeIcon: <ActiveBooking />,
      tabBarIcon: <BookingIcon />,
    },
    {name: '', activeIcon: <Plus />, tabBarIcon: <Plus />},
    {
      name: 'newDeveloper.ServiceList',
      activeIcon: <Services />,
      tabBarIcon: <Services />,
    },
    {
      name: 'newDeveloper.moreMenuText',
      activeIcon: <ActiveMenuIcon />,
      tabBarIcon: <MenuIcon />,
    },
  ];

  const onPress = (key: number) => {
    if (key != 2) {
      setSelected(key);
    }
    if(key === 2) {
      setProcessingLoader(true)
      setModalVisible(!modalVisible);
      setTimeout(() => {
        setProcessingLoader(false)
      }, 300); // 2-second delay to simulate loading
    } 
  };

  return (
    <View style={{flex: 1}}>
      <View style={{paddingBottom: windowHeight(9), flex: 1}}>
        {selected == 0 ? (
          <Home />
        ) : selected == 1 ? (
          <Booking />
        ) : selected == 3 ? (
          <ServiceList />
        ) : (
          <MoreMenus />
        )}
      </View>
      <MyTabBar onPress={onPress} selected={selected} tabData={tabData} />
      <CartModal
        setModalVisible={setModalVisible}
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
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
