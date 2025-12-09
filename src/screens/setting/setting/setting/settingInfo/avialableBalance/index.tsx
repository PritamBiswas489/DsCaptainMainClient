import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import { GlobalStyle } from '@style/styles';
import { useValues } from '../../../../../../../App';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { calculateDaysDifference } from '@src/config/utility';

export function AvailableBalance() {
  const { isServiceManLogin, t } = useValues();
  const serviceProviderBookingReview = useSelector((state: RootState) => state['serviceProviderBookingReview'])

  const findCompleteData = serviceProviderBookingReview.find(ele => ele.booking_status === 'completed')
  const { created_at } = useSelector((state: RootState) => state['serviceProviderAccountData'])
  const { data } = useSelector((state: RootState) => state['mysubscriptionsData'])

   


  return (
    <View style={styles.containerStyle}>
      <LinearGradient
        colors={[appColors.gradientBtn, appColors.primary]}
        style={styles.linearGradient}
        start={{ x: 1, y: 0.2 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{t('newDeveloper.TotalSubscriptions')}</Text>
          <Text style={styles.textStyle}>{data.length}</Text>
        </View>

        <View style={[GlobalStyle.verticalLine, styles.verticalLine]} />

        <View style={styles.itemContainer}>
          <Text style={styles.title}>{t('newDeveloper.BookingServed')}</Text>
          <View style={styles.row}>
            <Text style={styles.price}>{findCompleteData?.total ? findCompleteData?.total : 0 }</Text>
          </View>
        </View>

        <View style={[GlobalStyle.verticalLine, styles.verticalLine]} />

        <View style={styles.itemContainer}>
          <Text style={styles.title}>{t('newDeveloper.DaysSinceJoined')}</Text>
          <View style={styles.row}>
            <Text style={styles.price}>{calculateDaysDifference(created_at)}</Text>
          </View>
        </View>

      </LinearGradient>
    </View>
  );
}
