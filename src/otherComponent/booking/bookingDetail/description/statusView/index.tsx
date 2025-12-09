import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {LeftArrow} from '@utils/icons';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';
import { BookingDetailsInterface } from '@src/interfaces/bookingDetailsInterface';

export default function StatusView({
    item:bookingDetails,
    setBookingStatus,
}: {
    item:BookingDetailsInterface,
    setBookingStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {isDark,t} = useValues();
  return (
    <View>
      <View style={styles.row}>
        <Text
          style={[
            styles.bookingId,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          #{bookingDetails.readable_id}
        </Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setBookingStatus(true)}>
            <Text style={styles.textStyle}>
              {t('bookingDetail.checkStatus')}
            </Text>
          </TouchableOpacity>
          <LeftArrow />
        </View>
      </View>
    </View>
  );
}
