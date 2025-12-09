
import React, {FormEvent} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {styles} from './styles';
import {useValues} from '../../../App';
import appColors from '@theme/appColors';

export default function HeadingRow({
  title,
  content,
  gotoScreen,
  rowStyle,
  titleStyle,
}: {
  title: string;
  content?: string;
  gotoScreen?: (props: FormEvent<HTMLFormElement> | undefined) => void;
  rowStyle?: ViewStyle;
  titleStyle?: TextStyle;
}) {
  const {isDark,t} = useValues();

  return (
    <View style={[styles.row, rowStyle]}>
      <Text
        style={[
          styles.title,
          titleStyle,
          {color: isDark ? appColors.white : appColors.darkText},
        ]}>
        {t(title)}
      </Text>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={
          gotoScreen as unknown as (event: GestureResponderEvent) => void
        }>
        {content && <Text style={styles.content}>{t(content)}</Text>}
      </TouchableOpacity>
    </View>
  );
}
