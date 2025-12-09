import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import SwitchContainer from '@otherComponent/switchContainer';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import { BookingDetailsInterface } from '@src/interfaces/bookingDetailsInterface';

export default function StatusSection(
  {paymentStatus,setPaymentStatus}:{paymentStatus:boolean,setPaymentStatus:(value:boolean)=>void}) {
   
  const toggleSwitch = () => {
    setPaymentStatus(!paymentStatus);
  };
  const {isDark,t} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.border},
      ]}>
      <View
        style={[
          styles.innerContainer,
          {backgroundColor: isDark ? appColors.darkCard : appColors.white},
        ]}>
        <View style={styles.row}>
          <Text
            style={[
              styles.status,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {t('newDeveloper.paymentStatus')}
          </Text>
          <SwitchContainer toggleDarkSwitch={toggleSwitch} switchOn={paymentStatus} />
        </View>
        <Text style={styles.statusNote}>{t('newDeveloper.paymentstatusfieldtext')}</Text>
      </View>
    </View>
  );
}
