import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {propsType} from './types';
import {useValues} from '../../../../../../../App';
import appColors from '@theme/appColors';

export function PackageRow({title, date, totalService}: propsType) {
  const {isDark,t} = useValues();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t(title)}:</Text>
      {date && (
        <Text
          style={[
            styles.price,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {t(date)}
        </Text>
      )}
      {totalService && (
        <Text
          style={[
            styles.price,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {totalService} {t('packages.service')}
        </Text>
      )}
    </View>
  );
}
