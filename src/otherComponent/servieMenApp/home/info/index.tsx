import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Email} from '@assets/icons/auth/email';
import {Call} from '@assets/icons/auth/Call';
import Title from '@commonComponents/title';
import appColors from '@theme/appColors';
import {Location, State} from '@utils/icons';
import {useValues} from '../../../../../App';

export function ProfileInfo() {
  const {isDark,t} = useValues();
  return (
    <View style={styles.container}>
      <Title title="providerDetail.personalInfo" color={appColors.darkText} />
      <View
        style={[
          styles.infoContainer,
          {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <View style={styles.row}>
          <Email color={isDark ? appColors.white : appColors.lightText} />
          <Text
            style={[
              styles.text,
              {color: isDark ? appColors.white : appColors.lightText},
            ]}>
            {t('providerDetail.mail')}
          </Text>
        </View>
        <Text
          style={[
            styles.textStyle,
            styles.containerView,
            {color: isDark ? appColors.lightText : appColors.darkText},
          ]}>
          {t('providerDetail.email')}
        </Text>
        <View style={styles.blankView}></View>
        <View style={styles.row}>
          <Call color={isDark ? appColors.white : appColors.lightText} />
          <Text
            style={[
              styles.text,
              {color: isDark ? appColors.white : appColors.lightText},
            ]}>
            {t('providerDetail.call')}
          </Text>
        </View>
        <Text
          style={[
            styles.textStyle,
            styles.containerView,
            {color: isDark ? appColors.lightText : appColors.darkText},
          ]}>
          +1 236 236 5653
        </Text>
        <View style={styles.blankView}></View>
        <View style={styles.row}>
          <Location color={isDark ? appColors.white : appColors.lightText} />
          <Text
            style={[
              styles.text,
              {color: isDark ? appColors.white : appColors.lightText},
            ]}>
            {t('customTime.location')}
          </Text>
        </View>
        <Text
          style={[
            styles.textStyle,
            styles.containerView,
            {color: isDark ? appColors.lightText : appColors.darkText},
          ]}>
          {t('booking.location')}
        </Text>
        <View style={styles.blankView}></View>
        <View style={[styles.row, {marginTop: 1}]}>
          <State color={isDark ? appColors.white : appColors.lightText} />
          <Text
            style={[
              styles.text,
              {color: isDark ? appColors.white : appColors.lightText},
            ]}>
            {t('providerDetail.knownLanguage')}
          </Text>
        </View>
        <View style={styles.row}>
          <View
            style={[
              styles.containerStyle,
              {
                backgroundColor: isDark ? appColors.darkTheme : appColors.white,
                borderColor: isDark ? appColors.darkBorder : appColors.border,
              },
            ]}>
            <Text
              style={[
                styles.textStyle,
                {color: isDark ? appColors.white : appColors.darkText},
              ]}>
              {t('providerDetail.english')}
            </Text>
          </View>
          <View
            style={[
              styles.containerStyle,
              {
                backgroundColor: isDark ? appColors.darkTheme : appColors.white,
                borderColor: isDark ? appColors.darkBorder : appColors.border,
              },
            ]}>
            <Text
              style={[
                styles.textStyle,
                {color: isDark ? appColors.white : appColors.darkText},
              ]}>
              {t('providerDetail.spanish')}
            </Text>
          </View>
          <View
            style={[
              styles.containerStyle,
              {
                backgroundColor: isDark ? appColors.darkTheme : appColors.white,
                borderColor: isDark ? appColors.darkBorder : appColors.border,
              },
            ]}>
            <Text
              style={[
                styles.textStyle,
                {color: isDark ? appColors.white : appColors.darkText},
              ]}>
              {t('providerDetail.chinese')}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
