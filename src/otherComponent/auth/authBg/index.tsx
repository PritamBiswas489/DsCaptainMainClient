import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '../../../../App';

interface authComponentProps {
  authContent: ReactNode;
  containerStyle?: ViewStyle;
}

export default function authBg({
  authContent,
  containerStyle,
}: authComponentProps) {
  const {isDark} = useValues();

  return (
    <View
      style={[
        styles.container,

        {
          backgroundColor: isDark ? appColors.darkCard : appColors.white,
          borderWidth: isDark ? windowWidth(0) : windowWidth(0.4),
        },
        containerStyle,
      ]}>
      {authContent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.white,
    borderBottomLeftRadius: windowHeight(4),
    borderBottomRightRadius: windowHeight(4),
    borderColor: appColors.border,
    borderWidth: windowWidth(0.4),
  },
});
