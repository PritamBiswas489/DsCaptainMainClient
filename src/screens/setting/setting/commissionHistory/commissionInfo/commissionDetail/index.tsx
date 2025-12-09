import {View, Text} from 'react-native';
import React from 'react';
import Header from '@commonComponents/header';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../../../App';

export function CommissionDetail({route}: {route: any}) {
  const {isDark, t} = useValues();
  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <Header showBackArrow={true} title="profileSetting.commissionDetails" />
      <View
        style={[
          styles.container,
          {borderColor: isDark ? appColors.darkBorder : appColors.border},
        ]}>
        <View style={styles.rowContainer}>
          <Text
            style={[
              [
                styles.title,
                {color: isDark ? appColors.white : appColors.darkText},
              ],
              {color: appColors.primary},
            ]}>
            {t(route?.params?.title)}
          </Text>
          <Text style={[styles.content, {color: appColors.primary}]}>22%</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text
            style={[
              [
                styles.title,
                {color: isDark ? appColors.white : appColors.darkText},
              ],
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {t('commissionHistory.installation')}
          </Text>
          <Text
            style={[
              styles.content,
              {color: isDark ? appColors.lightText : appColors.darkText},
            ]}>
            25%
          </Text>
        </View>
        <View style={styles.rowStyle}>
          <Text
            style={[
              styles.title,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {t('commissionHistory.hanging')}
          </Text>
          <Text
            style={[
              styles.content,
              {color: isDark ? appColors.lightText : appColors.darkText},
            ]}>
            12%
          </Text>
        </View>
        <View style={styles.rowStyle}>
          <Text
            style={[
              styles.title,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {t('commissionHistory.servicing')}
          </Text>
          <Text
            style={[
              styles.content,
              {color: isDark ? appColors.lightText : appColors.darkText},
            ]}>
            12%
          </Text>
        </View>
        <View style={styles.rowStyle}>
          <Text
            style={[
              styles.title,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {t('commissionHistory.windowCleaning')}
          </Text>
          <Text
            style={[
              styles.content,
              {color: isDark ? appColors.lightText : appColors.darkText},
            ]}>
            10%
          </Text>
        </View>
      </View>
      <Text style={styles.note}>{t('commissionHistory.note')}</Text>
    </View>
  );
}
