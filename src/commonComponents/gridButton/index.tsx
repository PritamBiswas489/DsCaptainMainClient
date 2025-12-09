import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '@theme/appColors';
import {GridButtonProps} from './types';
import { useValues } from '../../../App';
export default function GridButton({
  label,
  onButtonClick,
  label1,
  onButton1Click,
  buttonStyle,
  buttonTextStyle,
  buttonContainerStyle,
  btnColor,
  btn1Color,
  button1TextStyle,
}: GridButtonProps) {
  const {t} = useValues()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={
          onButton1Click as unknown as (event: GestureResponderEvent) => void
        }>
        <LinearGradient
          style={[styles.gradientContainer, buttonContainerStyle]}
          colors={[
            btnColor ? btnColor : appColors.gradientBtn,
            btnColor ? btnColor : appColors.primary,
          ]}>
          <Text style={[styles.buttonStyle, button1TextStyle]}>
            {t(label1)}
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={
          onButtonClick as unknown as (event: GestureResponderEvent) => void
        }>
        <LinearGradient
          style={[styles.gradientContainer, buttonStyle]}
          colors={[
            btn1Color ? btn1Color : appColors.gradientBtn,
            btn1Color ? btn1Color : appColors.primary,
          ]}>
          <Text style={[styles.buttonText, buttonTextStyle]}>{t(label)}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
