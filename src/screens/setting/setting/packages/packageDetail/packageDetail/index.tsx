import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {packageServiceBg} from '@utils/images';
import {useValues} from '../../../../../../../App';
import {GlobalStyle} from '@style/styles';
import appColors from '@theme/appColors';

export default function PackageDetail() {
  const {currSymbol, currValue, isDark,t} = useValues();
  return (
    <View>
      <View
        style={[
          styles.innerContainer,
          {
            backgroundColor: isDark ? appColors.darkCard : appColors.white,
            borderBottomColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}></View>
      <View style={styles.container}>
        <View style={styles.mainView}>
          <Image source={packageServiceBg} style={styles.image} />
          <View style={styles.containerStyle}>
            <Text
              style={[
                styles.title,
                {color: isDark ? appColors.white : appColors.darkText},
              ]}>
              {t('packages.cleaningServicePackage')}
            </Text>
            <Text style={styles.price}>
              {currSymbol}
              {currValue * 32.08}
            </Text>
          </View>
        </View>
        <Text style={styles.detail}>{t('packages.detail')}</Text>
        <View
          style={[
            GlobalStyle.horizontalLine,
            {borderColor: isDark ? appColors.darkBorder : appColors.border},
          ]}></View>
      </View>
    </View>
  );
}
