import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {infoType} from './types';
import appColors from '@theme/appColors';
import {useValues} from '../../../App';

export function PersonalInfo({
  icon,
  name,
  detail,
  containerStyle: containerStyle,
  contentStyle,
  titleStyle,
}: infoType) {
  const {isDark, t} = useValues();
  return (
    <View style={styles.row}>
      {icon}
      <Text
        style={[
          styles.titleStyle,
          titleStyle,
          {color: isDark ? appColors.white : appColors.darkText},
        ]}>
        {t(name)}
      </Text>
      <View style={[styles.verticalLine, containerStyle]}></View>
      <Text style={[styles.content, contentStyle]}>{t(detail)}</Text>
    </View>
  );
}
