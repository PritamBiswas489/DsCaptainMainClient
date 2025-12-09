import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '@style/styles';
import CancelHeader from '@commonComponents/cancelHeader';
import {styles} from './styles';
import {singleServiceMen, multipleServiceMen} from '@utils/images';
import {windowWidth} from '@theme/appConstant';
import GradientBtn from '@commonComponents/gradientBtn';
import appColors from '@theme/appColors';
import {propsType} from './types';
import {useValues} from '../../../../App';

export function SelectServiceMenModal({
  serviceMenOptions,
  setSelectedOptions,
  gotoScreen,
  setSelectServiceMenModal,
}: propsType) {
  const {isDark,t} = useValues();
  return (
    <View
      style={[
        GlobalStyle.modal,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <CancelHeader
        gotoScreen={() => setSelectServiceMenModal(false)}
        title="bookingDetail.selectServiceMen"
      />
      <Text style={styles.title}>{t('bookingDetail.assignService')}</Text>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setSelectedOptions(0)}
          style={[
            styles.container,
            {
              borderColor:
                serviceMenOptions === 0
                  ? appColors.primary
                  : isDark
                  ? appColors.darkBorder
                  : appColors.border,
              backgroundColor:
                serviceMenOptions == 0
                  ? appColors.lightOrange
                  : isDark
                  ? appColors.darkCard
                  : appColors.boxBg,
            },
          ]}>
          <Image source={singleServiceMen} style={styles.imageStyle} />
          <Text
            style={[
              styles.heading,
              {
                color:
                  serviceMenOptions === 0
                    ? appColors.primary
                    : isDark
                    ? appColors.white
                    : appColors.darkText,
              },
            ]}>
            {t('providerDetail.mySelf')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setSelectedOptions(1)}
          style={[
            styles.container,
            {
              borderColor:
                serviceMenOptions === 1
                  ? appColors.primary
                  : isDark
                  ? appColors.darkBorder
                  : appColors.border,
              backgroundColor:
                serviceMenOptions == 1
                  ? appColors.lightOrange
                  : isDark
                  ? appColors.darkCard
                  : appColors.boxBg,
            },
          ]}>
          <Image source={multipleServiceMen} style={styles.image} />
          <Text
            style={[
              styles.heading,
              {
                bottom: windowWidth(2),
                color:
                  serviceMenOptions == 1
                    ? appColors.primary
                    : isDark
                    ? appColors.white
                    : appColors.darkText,
              },
            ]}>
            {t('bookingDetail.otherServiceMen')}
          </Text>
        </TouchableOpacity>
      </View>
      <GradientBtn
        additionalStyle={{marginHorizontal: 0}}
        label="auth.continue"
        onPress={gotoScreen}
      />
    </View>
  );
}
