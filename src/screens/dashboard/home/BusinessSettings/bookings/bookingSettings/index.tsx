import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import SwitchContainer from '@otherComponent/switchContainer';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../../../App';

import { Tooltip, Button } from 'react-native-elements';

export function BookingSettings({
  servicemanCanEditBooking,
  setServicemanCanEditBooking,
  servicemanCanCancelBooking,
  setServicemanCancelBooking
}:{
  servicemanCanEditBooking:boolean,
  setServicemanCanEditBooking:(value:boolean)=>void,
  servicemanCanCancelBooking:boolean,
  setServicemanCancelBooking:(value:boolean)=>void,
}) {
  const { t, isDark } = useValues();

  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <View style={styles.rowContainer}>
          <Text
            style={[
              styles.day,
              { color: isDark ? appColors.white : appColors.darkText },
            ]}>
            Serviceman can edit booking
          </Text>
          <SwitchContainer
            toggleDarkSwitch={() => setServicemanCanEditBooking(!servicemanCanEditBooking)}
            switchOn={servicemanCanEditBooking}
            containerStyle={{ marginTop: 0 }}
          />

        </View>
        <Text
          style={[
            styles.day,
            { marginVertical: 10 },
            { color: appColors.lightOrange },
          ]}>{t('newDeveloper.Servicemancaneditbookingtext')}</Text>




      </View>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <View style={styles.rowContainer}>
          <Text
            style={[
              styles.day,
              { color: isDark ? appColors.white : appColors.darkText },
            ]}>
            {t('newDeveloper.Servicemancancancelbooking')}
          </Text>
          <SwitchContainer
            toggleDarkSwitch={() => setServicemanCancelBooking(!servicemanCanCancelBooking)}
            switchOn={servicemanCanCancelBooking}
            containerStyle={{ marginTop: 0 }}
          />
        </View>
        <Text
          style={[
            styles.day,
            { marginVertical: 10 },
            { color: appColors.lightOrange },
          ]}>{t('newDeveloper.Servicemancancancelbookingtext')}</Text>
      </View>

    </>
  );
}
