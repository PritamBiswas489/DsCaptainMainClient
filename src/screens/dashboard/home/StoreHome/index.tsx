import { Alert, RefreshControl, ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native';

import React, { useState, useEffect, useReducer } from 'react';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import { useValues } from '../../../../../App';
import appColors from '@theme/appColors';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/store';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import StoreStatus from './storeStatus';
import OrderStatusList from './statusList';
import OrderList from './orderList';
import CampaignFilter from './campaignFilter';
import { storeProfileDataActions } from '@src/store/redux/store/store-profile-redux';
import { getAuthUserService as storeAuthService } from '@src/services/store/auth.service';
import { updateStoreStatusProcess } from '@src/services/store/profile.service';
import { getCurrentOrders } from '@src/services/store/order.service';
import { CurrentOrderInterface } from '@src/interfaces/store/currentOrder.interface';
import { saveVendorFcmTokenProcess } from '@src/services/store/profile.service';
import { storeHomeOrderActions } from '@src/store/redux/store/store-home-order';
import { clearValue, getValue } from '@src/utils/localstorage';
import HomeNoFataFound from '@src/commonComponents/homeNoDataFound';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

interface Tab {
  tabid: string;
  label: string;
  count: number;
  active: boolean;
}

// Orders state
interface OrdersState {
  tabOrders: CurrentOrderInterface[];
  page: number;
  hasMore: boolean;
  selectedTab: string;
}

const initialState: OrdersState = {
  tabOrders: [],
  page: 1,
  hasMore: true,
  selectedTab: 'pending',
};

type Action =
  | { type: 'SET_ORDERS'; payload: CurrentOrderInterface[] }
  | { type: 'APPEND_ORDERS'; payload: CurrentOrderInterface[] }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'SET_HAS_MORE'; payload: boolean }
  | { type: 'SET_SELECTED_TAB'; payload: string }
  | { type: 'RESET_ALL' };

const reducer = (state: OrdersState, action: Action): OrdersState => {
  switch (action.type) {
    case 'SET_ORDERS':
      return { ...state, tabOrders: action.payload };
    case 'APPEND_ORDERS':
      return { ...state, tabOrders: [...state.tabOrders, ...action.payload] };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_HAS_MORE':
      return { ...state, hasMore: action.payload };
    case 'SET_SELECTED_TAB':
      return { ...state, selectedTab: action.payload };
    case 'RESET_ALL':
      return { ...initialState, selectedTab: state.selectedTab };
    default:
      return state;
  }
};

type ItemsProps = NativeStackNavigationProp<RootStackParamList>;

export default function StoreHome() {
  const navigation = useNavigation<ItemsProps>();
  const { isDark, t } = useValues();
  const dispatch = useDispatch();
  const { refreshOrders } = useSelector((state: RootState) => state['storeHomeOrder']);

  const {f_name, l_name } = useSelector((state: RootState) => state['storeProfileData'])
  
  let storeName:string | null = `${f_name} ${l_name}`

  const [orderState, orderDispatch] = useReducer(reducer, initialState);
  const [statusMenuList, setStatusMenuList] = useState<Tab[]>([
    { tabid: "pending", label: t("newDeveloper.Pending"), count: 0, active: true },
    { tabid: "confirmed", label: t("newDeveloper.Confirmed"), count: 0, active: false },
    { tabid: "processing", label: t("newDeveloper.Processing"), count: 0, active: false },
    { tabid: "handover", label: t("newDeveloper.Handover"), count: 0, active: false },
    { tabid: "picked_up", label: t("newDeveloper.Pickup"), count: 0, active: false },
  ]);

  const [filterCampaign, setFilterCampaign] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [scrollPaging, setScrollPaging] = useState(false);
  const [noMoreData, setNoMoreData] = useState(false);
  const [isFirstTimeLoading, setIsFirstTimeLoading] = useState(true);
  const [processingLoader, setProcessingLoader] = useState(false);


  const profileReset = async () => {
    const responseuser = await storeAuthService();
    console.log("responseuser", responseuser?.data)
    if (responseuser?.data?.id) {
      dispatch(storeProfileDataActions.setData(responseuser?.data));
    }
  };

 
  const loadOrders = async () => {
    if (processingLoader) return;
    setProcessingLoader(true);
    try {
      const response: Response = await getCurrentOrders(
        orderState.selectedTab,
        10,
        orderState.page
      );
      const orders: CurrentOrderInterface[] = response?.data?.orders || [];
      const statusCount = response?.data?.status_count;

     
      setStatusMenuList([
        { tabid: "pending", label: t("newDeveloper.Pending"), count: statusCount?.pending || 0, active: orderState.selectedTab === 'pending' },
        { tabid: "confirmed", label: t("newDeveloper.Confirmed"), count: statusCount?.confirmed || 0, active: orderState.selectedTab === 'confirmed' },
        { tabid: "processing", label: t("newDeveloper.Processing"), count: statusCount?.processing || 0, active: orderState.selectedTab === 'processing' },
        { tabid: "handover", label: t("newDeveloper.Handover"), count: statusCount?.handover || 0, active: orderState.selectedTab === 'handover' },
        { tabid: "picked_up", label: t("newDeveloper.Pickup"), count: statusCount?.picked_up || 0, active: orderState.selectedTab === 'picked_up' },
      ]);

      if (orderState.page === 1) {
        orderDispatch({ type: 'SET_ORDERS', payload: orders });
      } else {
        orderDispatch({ type: 'APPEND_ORDERS', payload: orders });
      }

      const totalSize = response?.data?.total_size || 0;
      const currentTotal = orderState.page === 1 ? orders.length : orderState.tabOrders.length + orders.length;
      const hasMore = currentTotal < totalSize;
      orderDispatch({ type: 'SET_HAS_MORE', payload: hasMore });
      setNoMoreData(!hasMore);
    } catch (error) {
      console.log(error);
    } finally {
      setProcessingLoader(false);
      setIsFirstTimeLoading(false);
      setScrollPaging(false);
    }
  };


  useEffect(() => {
    if ((isFirstTimeLoading || scrollPaging) && !noMoreData) {
      loadOrders();
    }
  }, [isFirstTimeLoading, scrollPaging, orderState.page]);


  const setTabStatus = (tabid: string) => {
    if (tabid === orderState.selectedTab) return;
    orderDispatch({ type: 'RESET_ALL' });
    orderDispatch({ type: 'SET_SELECTED_TAB', payload: tabid });
    setNoMoreData(false);
    setIsFirstTimeLoading(true);
    setScrollPaging(false);
  };


  const handleScroll = (event: any) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 50;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
      if (!scrollPaging && !noMoreData && !processingLoader && !isFirstTimeLoading) {
        setScrollPaging(true);
        orderDispatch({ type: 'SET_PAGE', payload: orderState.page + 1 });
      }
    }
  };


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    profileReset();
    orderDispatch({ type: 'RESET_ALL' });
    setNoMoreData(false);
    setIsFirstTimeLoading(true);
    setScrollPaging(false);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);


  useEffect(() => {
    if (refreshOrders) {
      onRefresh();
      dispatch(storeHomeOrderActions.setData({ field: 'refreshOrders', data: false }));
    }
  }, [refreshOrders]);

  // FCM token
  const checkSaveFcmToken = async () => {
    const fcmTokenStorage = await getValue('fcmTokenStorage');
    if (fcmTokenStorage) {
      const formData = new FormData();
      formData.append('fcm_token', fcmTokenStorage);
      const response: Response = await saveVendorFcmTokenProcess(formData);
      console.log(response?.data);
      clearValue('fcmTokenStorage');
    }
  };
  useEffect(() => {
    checkSaveFcmToken();
  }, []);

  const updateStoreStatus = async () => {
    await updateStoreStatusProcess();
    profileReset();
  };

  const navigateToOrderDetailsPage = (OrderId: number) => {
    navigation.navigate('StoreOrderDetails', { OrderId: String(OrderId) });
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? appColors.darkCardBg : appColors.white }]}>
      {/* <Header showBackArrow={false} title={'newDeveloper.DorkarMallSeller'} /> */}
      <Header showBackArrow={false} title={storeName} />
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[GlobalStyle.contentContainerStyle]}
        style={[
          GlobalStyle.mainView,
          {
            backgroundColor: isDark ? appColors.darkTheme : appColors.white,
            marginTop: 10,
          },
        ]}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <StoreStatus updateStoreStatus={updateStoreStatus} />
        <OrderStatusList statusMenuList={statusMenuList} setTabStatus={setTabStatus} />
        <View style={{ marginTop: 15 }}>
          <CampaignFilter filterCampaign={filterCampaign} setFilterCampaign={setFilterCampaign} />
        </View>
        
        {isFirstTimeLoading && <SkeletonLoader />}
        {!isFirstTimeLoading && orderState.tabOrders.length === 0 && (
          <HomeNoFataFound message={t('newDeveloper.Nodatafound')} />
        )}
        {!isFirstTimeLoading && orderState.tabOrders.length > 0 && (
          <OrderList
            tabOrders={orderState.tabOrders}
            navigateToOrderDetailsPage={navigateToOrderDetailsPage}
            loadMoreOrders={() => {}}
          />
        )}
        <View style={GlobalStyle.blankView} />
      </ScrollView>
      {scrollPaging && <ActivityIndicator size="large" color={appColors.primary} style={styles.loader} />}
      <Spinner visible={processingLoader && isFirstTimeLoading} textContent={'Processing.....'} textStyle={{ color: '#FFF' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 10,
    padding: 10,
  },
});