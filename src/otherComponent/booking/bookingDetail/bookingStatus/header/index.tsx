import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';
import { BookingDetailsInterface } from '@src/interfaces/bookingDetailsInterface';

export function Header({bookingDetails}:{bookingDetails:BookingDetailsInterface}) {
  const {isDark,t} = useValues();
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.textStyle}>{t('bookingStatus.bookingId')}</Text>
        <View style={styles.container}>
          <Text style={styles.code}>#{bookingDetails.readable_id}</Text>
        </View>
      </View>
      <View
        style={[
          GlobalStyle.horizontalLine,
          styles.lineView,
          {borderColor: isDark ? appColors.darkBorder : appColors.border},
        ]}></View>
    </View>
  );
}
