import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { windowHeight, windowWidth } from '@theme/appConstant';
import { BookingType } from '@screens/booking/data/types';
import { useValues } from '../../../../../../App';
import appColors from '@theme/appColors';
import { WithDrawListInterface } from '@src/interfaces/withdrawListInterface';
import { timeformatting, timeformatting2 } from '@src/config/utility';

export default function ItemView({ item }: { item: WithDrawListInterface }) {
  const { isDark, t, currSymbol } = useValues();

  return (
    <View style={styles.dateContainer}>
      <View
        style={[
          styles.innerContainer,
          {
            width: windowWidth(40),
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <Text style={styles.title}>{t('newDeveloper.WithdrawAmount')}</Text>
        <View style={styles.row}>
          <Text
            style={[
              styles.textStyle,
              { color: appColors.primary },
              { fontSize: 24 }
            ]}>
            {currSymbol}{item.amount}
          </Text>
          <Text style={{ marginLeft: 10, fontSize: 14, color: (item.is_paid === 1 ? appColors.success : appColors.error) }}>
            {(item.is_paid === 1 ? `(${t('newDeveloper.paid')})` : `(${t('newDeveloper.unpaid')})`)}
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.innerContainer,
          {
            width: windowWidth(40),
            marginHorizontal: windowHeight(1.2),
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <Text style={styles.title}>{t('newDeveloper.WithdrawDate')}</Text>
        <Text
          style={[
            styles.textStyle,
            { color: isDark ? appColors.white : appColors.darkText },
          ]}>
          {timeformatting(item.created_at)}
        </Text>
      </View>
    </View>
  );
}
