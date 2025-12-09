import React from 'react';
import {View, Text, TextStyle, ViewStyle} from 'react-native';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import { useValues } from '../../../../../App';
import appColors from '@theme/appColors';

export default function TextRow({
  title,
  icon,
  content,
  color,
  titleStyle,
  rowStyle,
}: {
  title: string;
  icon?: React.ReactNode;
  content: string;
  color?: string;
  titleStyle?: TextStyle;
  rowStyle?: ViewStyle;
}) {
  const {isDark,t} = useValues()
  return (
    <View style={[styles.rowContainer, rowStyle]}>
      <View style={styles.row}>
        {icon}
        <Text style={[styles.text,{ color: isDark ? appColors.white : appColors.darkText}]}>{t(title)}</Text>
      </View>
      <Text
        style={[
          GlobalStyle.title,
          {color: color, textAlign: 'right'},
          titleStyle,
        ]}>
        {t(content)}
      </Text>
    </View>
  );
}
