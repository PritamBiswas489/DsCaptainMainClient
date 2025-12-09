import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';
import { BookingListingInterface } from '@src/interfaces/bookingListingInterface';
import { timeformatting, timeformatting2 } from '@src/config/utility';

export default function ItemView({item}: {item: BookingListingInterface}) {
  const {isDark,t} = useValues();

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
        <Text style={styles.title}>{t('newDeveloper.bookingDate')}</Text>
        <View style={styles.row}>
          <Text
            style={[
              styles.textStyle,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {timeformatting(item.createdAt)}
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
        <Text style={styles.title}>{t('newDeveloper.scheduleDate')}</Text>
        <Text
          style={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {timeformatting2(item.serviceSchedule)}
        </Text>
      </View>
    </View>
  );
}
