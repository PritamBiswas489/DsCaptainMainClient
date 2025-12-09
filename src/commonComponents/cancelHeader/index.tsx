import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {Cross} from '@utils/icons';
import {GlobalStyle} from '@style/styles';
import {styles} from './styles';
import {cancelHeaderProps} from './types';
import {useValues} from '../../../App';
import appColors from '@theme/appColors';

export default function CancelHeader(props: cancelHeaderProps) {
  const {isDark,t} = useValues();
  return (
    <View style={styles.row}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.crossView}
        onPress={
          props.gotoScreen as unknown as (event: GestureResponderEvent) => void
        }>
        <Cross color={isDark ? appColors.white : appColors.darkText} />
      </TouchableOpacity>
      <View>
        <Text
          style={[
            GlobalStyle.title,
            styles.titleStyle,
            {
              color: isDark ? appColors.white : appColors.darkText,
            },
          ]}>
          {t(props.title)}
        </Text>
      </View>
      <View></View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={
          props.onButtonClick as unknown as (
            event: GestureResponderEvent,
          ) => void
        }>
        {props.leftTitle && (
          <Text style={styles.content}>{t(props.leftTitle)}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
