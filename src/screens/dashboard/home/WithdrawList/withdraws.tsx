import { View, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import ItemView from './itemView';
import LocationView from './locationView';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { BookingListTypes } from '@screens/booking/data/types';
import { MoreArrow, UpArrow } from '@utils/icons';
import { DashLine } from '@commonComponents/dashLIne';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';

import {
  NoteContainer,
  CustomerItems,
  ServiceManItems,
  ServiceItems,
} from '@otherComponent/index';
import { useValues } from '../../../../../App';
import appColors from '@theme/appColors';

import NoDataFound from '@src/commonComponents/noDataFound';
import { windowHeight } from '@theme/appConstant';
import GradientBtn from '@commonComponents/gradientBtn';
import { noValue, wifi, notification } from '@utils/images';
import { loadWithdrawService } from '@src/services/load.withdraws.service';
import { withdrawListingActions } from "@src/store/redux/withdraw-list-redux";

type routeProps = NativeStackNavigationProp<RootStackParamList>;

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}



export default function Withdraws() {

  const dispatch = useDispatch()
  const [clickLoadMore, setClickLoadMore] = useState(false)

   

  const {
    data: searchData,
    limit: limitData,
    offset: offsetData,
    isFirstTimeLoading: firstTimeLoading,
    isNoMoreData: noMoreData } = useSelector(
      (state: RootState) => state['withdrawList'] 
    )


  const handleWithdraws = async () => {
         await loadWithdrawService(limitData,offsetData,dispatch)
         setClickLoadMore(false)
  };
 
  //handle scroll processing
  const handleScrollProcessing = () => {
    if (noMoreData) { return }
    setClickLoadMore(true)
    dispatch(withdrawListingActions.setData({ field: 'offset', data: offsetData + 1 }))
  }

  useEffect(() => {
    if (firstTimeLoading || clickLoadMore) {
      handleWithdraws();
    }
  }, [ offsetData, , firstTimeLoading, clickLoadMore]);


  const { navigate } = useNavigation<routeProps>();
  const [showMoreServiceMans, setShowMoreServiceMans] =
    useState<boolean>(false);

  const icon = showMoreServiceMans ? <UpArrow /> : <MoreArrow />;
  const { isDark } = useValues();

  const refreshData = () => {
    dispatch(withdrawListingActions.resetState())
  }

  return (
    <View style={[styles.container]}>
      {firstTimeLoading && <SkeletonLoader />}

      {!firstTimeLoading && searchData.length === 0 && <NoDataFound
        headerTitle="newDeveloper.noBookingFound"
        image={noValue}
        showheader={false}
        infoImage={undefined}
        title="newDeveloper.noWithdrawsFound"
        content="newDeveloper.noWithdrawsFoundContent"
        gradiantBtn={
          <GradientBtn
            additionalStyle={{ bottom: windowHeight(2) }}
            label={'common.refresh'}
            onPress={refreshData}
          />
        }
      />}
      {!firstTimeLoading && searchData.length > 0 &&
        <FlatList
          onEndReached={handleScrollProcessing}
          data={searchData}

          renderItem={({ item }) => (
            <View>
              <View

                style={[
                  styles.cardContainer,
                  {
                    backgroundColor: isDark
                      ? appColors.darkTheme
                      : appColors.white,
                    borderColor: isDark ? appColors.darkBorder : appColors.border,
                  },
                ]}>
                <View style={styles.serviceContainer}>
                  <ItemView item={item} />
                  <>
                    <LocationView item={item} />
                    <View
                      style={[

                        {
                          borderColor: isDark
                            ? appColors.darkBorder
                            : appColors.border,
                        },
                      ]}
                    />
                  </>
                </View>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        />}
      {clickLoadMore && <ActivityIndicator />}
    </View>
  );
}
