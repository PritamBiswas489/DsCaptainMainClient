import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {style} from './styles';
import SwitchContainer from '@otherComponent/switchContainer';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';

export function BookingFilter() {
  const [status, setStatus] = useState(false);
  const toggleSwitch = () => {
    setStatus(prevStatus => !prevStatus);
  };
  const {isDark,t} = useValues();
  return (
    <View
      style={[
        style.row,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg},
      ]}>
      <Text
        style={[
          style.content,
          {color: isDark ? appColors.white : appColors.darkText},
        ]}>
        {t('booking.bookAssigned')}
      </Text>
      <SwitchContainer toggleDarkSwitch={toggleSwitch} switchOn={status} />
    </View>
  );
}
