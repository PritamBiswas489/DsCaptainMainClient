import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabBar } from './myTabBar';
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
import { Home, Wallet, Setting, Booking, ServiceList, MoreMenus } from '../screens/index';
import { View, Text } from 'react-native';
 
import StoreCartModal from '@src/otherComponent/cartModal/storeModal';
import { windowHeight } from '@theme/appConstant';
import Spinner from 'react-native-loading-spinner-overlay';
import { MoreMenusVendor } from '@src/screens/dashboard/home/MoreMenusVendor';
import StoreHome from '@src/screens/dashboard/home/StoreHome';
import StoreWallet from '@src/screens/dashboard/home/StoreWallet';
import StoreOrders from '@src/screens/dashboard/home/StoreOrders';
import { storeHomeOrderActions } from '@src/store/redux/store/store-home-order';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
 

const Tab = createBottomTabNavigator();

export function BottomTabSeller() {
  const [selected, setSelected] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [processingSpinner, setProcessingLoader] = useState(false)
  const dispatch = useDispatch()
  const tabData = [
    {
      name: 'bottomTab.home',
      activeIcon: <ActiveHomeIcon />,
      tabBarIcon: <HomeIcon color={appColors.lightText} />,
    },
    {
      name: 'newDeveloper.orders',
      activeIcon: <ActiveBooking />,
      tabBarIcon: <BookingIcon />,
    },
    { name: '', activeIcon: <Plus />, tabBarIcon: <Plus /> },
    {
      name: 'newDeveloper.wallet',
      activeIcon: <ActiveWallet />,
      tabBarIcon: <WalletIcon />,
    },
    {
      name: 'newDeveloper.moreMenuText',
      activeIcon: <ActiveMenuIcon />,
      tabBarIcon: <MenuIcon />,
    },
  ];

  const onPress = (key: number) => {
    if(key === 0 ){
      dispatch(storeHomeOrderActions.setData({field:'refreshOrders','data':true}))
    }
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
    <View style={{ flex: 1 }}>
      <View style={{ paddingBottom: windowHeight(9), flex: 1 }}>
        {selected == 0 ? (
          <StoreHome />
        ) : selected == 1 ? (
          <StoreOrders />
        ) : selected == 3 ? (
          <StoreWallet />
        ) : (
          <MoreMenusVendor />
        )}
      </View>
      <MyTabBar onPress={onPress} selected={selected} tabData={tabData} />
      <StoreCartModal
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
