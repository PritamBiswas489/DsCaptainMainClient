import React, { useState, useEffect } from 'react';
import { View, RefreshControl, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import { styles } from './styles';
import NotificationList from './notificationList';
import { CheckList, Delete } from '@utils/icons';
import { useValues } from '../../../App';
import appColors from '@theme/appColors';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { loadNotifications } from '@src/services/store/load.notifications';
import { vendorNotificationsActions } from '@src/store/redux/store/notifications-data-redux';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import GradientBtn from '@commonComponents/gradientBtn';
import { windowHeight } from '@theme/appConstant';
import { noValue, wifi, notification } from '@utils/images';
import NoDataFound from '@src/commonComponents/noDataFound';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
type ItemsProps = NativeStackNavigationProp<RootStackParamList>;

//Vendor notification function 
export function NotificationVendor() {
  const {
    data: NotificationsList,
    isFirstTimeLoading,
  } = useSelector((state: RootState) => state['vendorNotificationList'])

  const dispatch = useDispatch()
  const { isDark, t } = useValues();
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation<ItemsProps>();

  const reset = () => {
    dispatch(vendorNotificationsActions.resetState())
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    reset()
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const loadData = (async () => {
    try {
      await loadNotifications(dispatch, navigation)
    } catch (error) {
          console.error('Error fetching notification list:', error);
    } finally {
        dispatch(vendorNotificationsActions.setData({
          field: 'isFirstTimeLoading',
          data: false
        }));
    }
  });
  //load data
  useEffect(() => {
    if (isFirstTimeLoading) {
      loadData()
    }
  }, [isFirstTimeLoading])


  const refreshNotificationsData = () => {
    reset()
  }
  return (
    <View
      style={[
        GlobalStyle.mainView,
        { backgroundColor: isDark ? appColors.darkCardBg : appColors.white },
      ]}>
      <Header
        title={'notificationArr.title'}
        showBackArrow={true}
      />
      {isFirstTimeLoading && <SkeletonLoader />}
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
        style={GlobalStyle.contentContainerStyle}
        contentContainerStyle={GlobalStyle.contentContainerStyle}>
        <View style={styles.marginTop}></View>

        {!isFirstTimeLoading && NotificationsList.length === 0 && <NoDataFound
          headerTitle="newDeveloper.noServiceMenFound"
          image={noValue}
          infoImage={undefined}
          title="newDeveloper.noServiceMenFound"
          content="newDeveloper.noServiceFoundContent"
          gradiantBtn={
            <GradientBtn
              additionalStyle={{ bottom: windowHeight(2) }}
              label={'common.refresh'}
              onPress={refreshNotificationsData}
            />
          }
        />}

        {!isFirstTimeLoading && NotificationsList.length > 0 &&
          <View
            style={[
              styles.container,
              {
                backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg,
                borderColor: isDark ? appColors.darkBorder : appColors.border,
              },
            ]}>
            <NotificationList listing={NotificationsList} />
          </View>}
      </ScrollView>

    </View>
  );
}
