import {View, Text} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import {useValues} from '../../../App';
import appColors from '@theme/appColors';

export function DashLine() {
  const {isDark} = useValues();
  return (
    <View
      style={[
        GlobalStyle.dashLine,
        {
          borderColor: isDark ? appColors.darkBorder : appColors.border,
        },
      ]}
    />
  );
}
