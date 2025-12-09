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
import ModalComponent from '@commonComponents/modal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { loadNotifications } from '@src/services/load.notifications';
import { notificationsAction } from '@src/store/redux/notifications-data-redux';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import GradientBtn from '@commonComponents/gradientBtn';
import { windowHeight } from '@theme/appConstant';
import { noValue, wifi, notification } from '@utils/images';
import NoDataFound from '@src/commonComponents/noDataFound';

export function Notification() {

  const {
    data: NotificationsList,
    offsetPageUrl,
    limit,
    isFirstTimeLoading,
    isNoMoreData,
  } = useSelector((state: RootState) => state['notificationsData'])


  const dispatch = useDispatch()
  const { isDark, t } = useValues();

  const [refreshing, setRefreshing] = React.useState(false);

  const [queryParams, setQueryParams] = useState(`${offsetPageUrl}&limit=${limit}`)
  const [clickLoadMore, setClickLoadMore] = useState(false)

  //reset
  function reset() {
    dispatch(notificationsAction.resetState())
    setQueryParams(`?offset=1&limit=${limit}`)
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
      await loadNotifications(queryParams, dispatch)
    } catch (error) {
      console.error('Error fetching service men list:', error);
    } finally {
      setClickLoadMore(false);
      dispatch(notificationsAction.setData({
        field: 'isFirstTimeLoading',
        data: false
      }));
    }
  });
  //load data
  useEffect(() => {
    if (isFirstTimeLoading || clickLoadMore) {
      loadData()
    }
  }, [queryParams, isFirstTimeLoading, clickLoadMore])

  //load more data
  const loadMoreDataLoading = () => {
    setClickLoadMore(true)
    setQueryParams(`${offsetPageUrl}&limit=${limit}`)
  }
  const refreshNotificationsData = () => {
    dispatch(notificationsAction.resetState())
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
        refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
            {clickLoadMore && <ActivityIndicator />}
            {!isNoMoreData && !clickLoadMore && <GradientBtn
              additionalStyle={{}}
              label={'newDeveloper.loadMore'}
              onPress={loadMoreDataLoading}
            />}
        </View>}
      </ScrollView>

    </View>
  );
}
