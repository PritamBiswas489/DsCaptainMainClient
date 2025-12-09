import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {styles} from '../styles';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {Alert} from '@utils/icons';
import {fontSizes} from '@theme/appConstant';
import {propsType} from './types';

export function BillRow({
  color,
  title,
  price,
  subTitle,
  showPlus,
  titleStyle,
  priceStyle,
  showMinus,
  showIcon,
  onIconClick,
  subTitleStyle,
}: propsType) {
  const {currSymbol, currValue, isDark,t} = useValues();
  return (
    <View style={styles.rowView}>
      <View style={styles.row}>
        <Text style={[styles.billText, titleStyle]}>{t(title)}</Text>
        {showIcon && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={
              onIconClick as unknown as (event: GestureResponderEvent) => void
            }
            style={styles.icon}>
            <Alert color={appColors.primary} strokeWidth={'1.5'} />
          </TouchableOpacity>
        )}
      </View>
      {price || price === 0 ? (
        <Text
          style={[
            styles.price,
            {
              color: color
                ? color
                : isDark
                ? appColors.white
                : appColors.darkText,
              fontFamily: appFonts.NunitoSemiBold,
              fontSize: fontSizes.FONT4,
            },
            priceStyle,
          ]}>
          {showPlus && <Text style={styles.price}>+</Text>}
          {showMinus && <Text style={styles.minus}>-</Text>}
          {currSymbol}
          {(price).toFixed(2)}
        </Text>
      ) : (
        <Text
          style={[
            styles.price,
            {color: isDark ? appColors.white : appColors.darkText},
            subTitleStyle,
          ]}>
          {subTitle}
        </Text>
      )}
    </View>
  );
}
