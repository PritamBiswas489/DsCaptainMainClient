import React from 'react';
import {View, Text, ViewStyle} from 'react-native';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import appFonts from '@theme/appFonts';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';

export default function Experience({
  icon,
  experience,
  totalExperience,
  services,
  containerStyle,
}: {
  icon: React.ReactNode;
  experience: string;
  totalExperience: number;
  services: string;
  containerStyle?: ViewStyle;
}) {
  const {isDark} = useValues();
  return (
    <View style={[styles.row, containerStyle]}>
      <View
        style={[
          styles.innerContainer,
          {
            backgroundColor: isDark ? appColors.darkTheme : appColors.white,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        {icon}
      </View>
      <View style={styles.mainView}>
        <Text
          style={[GlobalStyle.content, {fontFamily: appFonts.NunitoMedium}]}>
          {experience}
        </Text>
        <Text
          style={[
            GlobalStyle.title,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {totalExperience} {services}
        </Text>
      </View>
    </View>
  );
}
