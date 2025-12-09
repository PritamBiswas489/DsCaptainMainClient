import {View, Text, Alert} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-gifted-charts';
import {styles} from './styles';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';

const statusColor: Record<'pending' | 'accepted' | 'ongoing' | 'completed' | 'canceled', string> = {
  pending: appColors.pending,
  accepted: appColors.accepted,
  ongoing: appColors.primary,
  completed: appColors.success,
  canceled: appColors.error,
};

function isValidBookingStatus(status: string): status is keyof typeof statusColor {
  return status in statusColor;
}
export default function ServiceBarCartAccountInformation() {
  const {t,isDark} = useValues()

  const serviceProviderBookingReview = useSelector((state: RootState)=>state['serviceProviderBookingReview'])
   
  const accepted = serviceProviderBookingReview.find(ele=>ele.booking_status === 'accepted')
  const completed = serviceProviderBookingReview.find(ele=>ele.booking_status === 'completed')
  const ongoing = serviceProviderBookingReview.find(ele=>ele.booking_status === 'ongoing')
  const canceled = serviceProviderBookingReview.find(ele=>ele.booking_status === 'canceled')
   
  const data:any = [
    { value: accepted?.total, label: t('newDeveloper.accepted'), frontColor: statusColor['accepted'] }, // Orange
    { value: completed?.total, label: t('newDeveloper.completed'), frontColor: statusColor['completed'] }, // Green
    { value: ongoing?.total, label: t('newDeveloper.ongoing'), frontColor: statusColor['ongoing'] }, // Blue
    { value: canceled?.total, label: t('newDeveloper.canceled'), frontColor: statusColor['canceled'] }, // Red
  ];
  return (
    //@ts-ignore
    ((accepted?.total  || completed?.total   || ongoing?.total  || canceled?.total  ) && <View style={styles.container}>
    <BarChart
      barWidth={25}
      noOfSections={3}
      barBorderRadius={10}
      barBorderBottomLeftRadius={0}
      barBorderBottomRightRadius={0}
      data={data}
      yAxisThickness={0}
      xAxisThickness={0}
      frontColor={appColors.primary}
      hideYAxisText={true}
      spacing={55}
      rulesThickness={0}
      disableScroll={true}
      xAxisLabelTextStyle={{fontSize: 12}}
      //@ts-ignore
      xAxisLabelTextStyle={{color: isDark ? appColors.white : appColors.darkText,}}
    />
  </View>)
    
  );
}
