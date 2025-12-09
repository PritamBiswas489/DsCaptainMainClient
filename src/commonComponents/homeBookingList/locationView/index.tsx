import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { windowHeight, windowWidth } from '@theme/appConstant';
import { useValues } from '../../../../App';
import appColors from '@theme/appColors';
import { BookingListingInterface } from '@src/interfaces/bookingListingInterface';

export default function LocationView({ item }: { item: BookingListingInterface }) {
  const { isDark, t } = useValues();
  return (
    <View style={styles.dateContainer}>
      <View
        style={[
          styles.innerContainer,
          {
            width: windowWidth(49),
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <Text style={styles.title}>{t('customTime.location')}</Text>
        <View style={styles.row}>
          {item.serviceAddress && (
            <Text
              style={[
                styles.textStyle,
                { color: isDark ? appColors.white : appColors.darkText },
              ]}>
              {t(item.serviceAddress)}
            </Text>
          )}
        </View>
      </View>
      <View
        style={[
          styles.innerContainer,
          {
            marginHorizontal: windowHeight(1.2),
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <Text style={styles.title}>{t('booking.payment')}</Text>
        {item.isPaid ? (
          <Text style={styles.text}>{t('wallet.paid')}</Text>
        ) : (
          <Text style={styles.text}>{t('booking.notPaid')}</Text>
        )}
      </View>
    </View>
  );
}
