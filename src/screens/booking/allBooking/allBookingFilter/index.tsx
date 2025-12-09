import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {style} from './styles';
import SwitchContainer from '@otherComponent/switchContainer';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';

export default function AllBookingFilter() {
  const [status, setStatus] = useState(false);
  const {isDark,t} = useValues();
  const toggleSwitch = () => {
    setStatus(prevStatus => !prevStatus);
  };
  return (
    <View style={style.container}>
      <Text
        style={[
          style.title,
          {color: isDark ? appColors.white : appColors.darkText},
        ]}>
        {t('booking.allBooking')}
      </Text>
      <View
        style={[
          style.row,
          {backgroundColor: isDark ? appColors.darkCard : appColors.boxBg},
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
    </View>
  );
}
