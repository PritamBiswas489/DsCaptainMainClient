import {TextStyle, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import GridButton from '@commonComponents/gridButton';
import appColors from '@theme/appColors';
import {propsType} from './types';
import {useValues} from '../../../../../App';

export function ServiceOptions({
  onButtonClick,
  onButton1Click,
  label,
  label1,
  btnColor,
  buttonStyle,
}: propsType) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        styles.bottom,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.white,
          borderColor: isDark ? appColors.darkBorder : appColors.border,
        },
      ]}>
      <GridButton
        label1={label1 ? label1 : 'booking.reject'}
        onButtonClick={onButtonClick}
        label={label ? label : 'booking.accept'}
        onButton1Click={onButton1Click}
        button1TextStyle={[
          styles.button1TextStyle as TextStyle,
          buttonStyle as TextStyle,
        ]}
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        buttonContainerStyle={styles.buttonContainerStyle}
        btnColor={btnColor ? btnColor : appColors.border}
      />
    </View>
  );
}
