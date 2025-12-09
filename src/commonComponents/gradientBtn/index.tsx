import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import {PrimaryButtonProps} from './types';
import { useValues } from '../../../App';

export default function GradientBtn({
  label,
  onPress,
  accountText,
  authText,
  gotoScreen,
  additionalStyle,
  labelTextStyle,
  color,
  labelColor,
  checkout,
}: PrimaryButtonProps) {
  const {isDark,t} = useValues()
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress as unknown as (event: GestureResponderEvent) => void}>
      <LinearGradient
        colors={[
          color ? color : appColors.gradientBtn,
          color ? color : appColors.primary,
        ]}
        style={[styles.container, additionalStyle]}
        start={{x: 1, y: 0.2}}
        end={{x: 1, y: 1}}>
        <View>
          <Text
            style={[
              styles.btnText,
              labelTextStyle,
              {color: labelColor ? labelColor : appColors.white},
            ]}>
            {t(label)} {checkout && <Text> {'>>'}</Text>}
          </Text>
        </View>
      </LinearGradient>
      <View style={styles.accountText}>
        {accountText && (
          <Text style={styles.accountStyle}>{t(accountText)}</Text>
        )}
        {authText && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={
              gotoScreen as unknown as (event: GestureResponderEvent) => void
            }>
            <Text style={[styles.registerText,{color: isDark ? appColors.white : appColors.darkText}]}> {t(authText)}</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}
