import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react';
 
import { GlobalStyle } from '@style/styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {   windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../../App';
import {   RefreshControl, StyleSheet } from 'react-native';
import { BookingReportList } from './historySection';
import { useDispatch } from 'react-redux';
import { businessExpenseActions } from '@src/store/redux/business-expenses-redux';

type navigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

// Booking Reports Page Panel
export function ExpenseReports() {
  const { navigate } = useNavigation<navigationProp>();
  const { isDark, t } = useValues();
  const [refreshing, setRefreshing] = React.useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch()

  const filterModalVisible = () => {
    setShowModal(true);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(businessExpenseActions.resetState())
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  return (
    <>
      <ScrollView
        style={[
          GlobalStyle.mainView,
          { backgroundColor: isDark ? appColors.darkTheme : appColors.white, },
        ]}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}>
        
        <BookingReportList />

      </ScrollView>
      
    </>

  );
}
export const styles = StyleSheet.create({
  chartContainer: {
    marginTop: 20,
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(2),
    backgroundColor: appColors.white,
    width: windowWidth(95),
    marginHorizontal: windowWidth(2),
    marginVertical: 20,
    paddingTop: 20
  },
  rowStyle: {
    marginHorizontal: windowWidth(3),
  },
})
