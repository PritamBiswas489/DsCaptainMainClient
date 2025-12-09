import {Text, View} from 'react-native';
import React from 'react';
import appColors from '@theme/appColors';
import {styles} from './styles';
import GridButton from '@commonComponents/gridButton';
import {propsType} from './types';
import { useValues } from '../../../../App';
export function NoteContainer({
  isAssigned,
  setCancelBookingModal,
  setAcceptBookingModal,
}: propsType) {
  const {t} = useValues()
  return (
    <>
      {isAssigned === false && (
        <>
          <Text style={[styles.title, {color: appColors.error}]}>
            {t('subscription.note')} :{' '}
            <Text style={[styles.title, {color: appColors.error}]}>
              {t('booking.detail')}
            </Text>
          </Text>
        </>
      )}

      {isAssigned === true && (
        <>
          <Text style={styles.title}>
            {t('subscription.note')} :{' '}
            <Text style={styles.note}>{t('booking.serviceManNote')}</Text>
          </Text>
          <View style={styles.mainContainer}>
            <GridButton
              label1="booking.reject"
              onButtonClick={() => setAcceptBookingModal?.(true)}
              label="booking.accept"
              onButton1Click={() => setCancelBookingModal?.(true)}
              button1TextStyle={styles.button1TextStyle}
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={styles.buttonTextStyle}
              buttonContainerStyle={styles.buttonContainerStyle}
              btnColor={appColors.border}
            />
          </View>
        </>
      )}
    </>
  );
}
