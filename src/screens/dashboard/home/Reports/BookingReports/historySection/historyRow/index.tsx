import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {propsType} from './types';
import {useValues} from '../../../../../../../../App';
import appColors from '@theme/appColors';

export function HistoryRow({title, price, priceStyle}: propsType) {
  const {currSymbol, currValue, isDark,t} = useValues();
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          {color: isDark ? appColors.white : appColors.darkText},
        ]}>
        {t(title)}
      </Text>
      <Text style={[styles.price, priceStyle]}>
        {currSymbol}
        {currValue * price}
      </Text>
    </View>
  );
}
