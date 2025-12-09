import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '../../../../../../../App';
import appColors from '@theme/appColors';

export function PackageSection() {
  const {isDark,t} = useValues();
  return (
    <View
      style={[
        styles.container,
        {borderColor: isDark ? appColors.darkBorder : appColors.border},
      ]}>
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.textStyle}>{t('booking.startDate')} </Text>
          <Text
            style={[
              styles.content,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {t('bookingStatus.date')}
          </Text>
        </View>
        <View
          style={[
            GlobalStyle.verticalLine,
            {
              height: windowHeight(4),
              marginHorizontal: windowWidth(3),
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}
        />
        <View>
          <Text style={styles.textStyle}>{t('booking.endDate')}</Text>
          <Text
            style={[
              styles.content,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {t('bookingStatus.date')}
          </Text>
        </View>
        <View
          style={[
            GlobalStyle.verticalLine,
            {
              height: windowHeight(4),
              marginHorizontal: windowWidth(3),
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}
        />
        <View>
          <Text style={styles.textStyle}>{t('packages.serviceIncluded')}</Text>
          <Text
            style={[
              styles.content,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {t('bookingStatus.date')}
          </Text>
        </View>
      </View>
    </View>
  );
}
