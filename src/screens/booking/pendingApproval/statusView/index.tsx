import {View, Text} from 'react-native';
import React from 'react';
import appFonts from '@theme/appFonts';
import {styles} from './styles';
import {propsType} from './types';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';

export function StatusView({
  containerStyle,
  textStyle,
  statusNote,
  status,
}: propsType) {
  const {isDark,t} = useValues();
  return (
    <View
      style={[
        styles.bottomContainer,
        containerStyle,
        {backgroundColor: isDark ? '#ffb2b2' : appColors.lightRed},
      ]}>
      <Text style={[styles.textStyle, textStyle]}>
        <Text
          style={{
            textTransform: 'uppercase',
            fontFamily: appFonts.NunitoSemiBold,
          }}>
          {status ? t(status) : t('bookingDetail.status')}
        </Text>
        : {statusNote ? t(statusNote) : t('bookingDetail.statusNote')}
      </Text>
    </View>
  );
}
