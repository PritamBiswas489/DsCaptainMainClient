import {View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import CancelHeader from '@commonComponents/cancelHeader';
import {Header} from './header';
import StepIndicator from './stepIndicator';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import { BookingDetailsInterface } from '@src/interfaces/bookingDetailsInterface';

export function BookingStatus({
  bookingDetails,
  setShowModal,
}: {
  bookingDetails:BookingDetailsInterface
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        GlobalStyle.modal,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <CancelHeader
        gotoScreen={() => {
          setShowModal(false);
        }}
        title={'bookingStatus.bookingStatus'}
      />
      <Header bookingDetails={bookingDetails} />
      <StepIndicator bookingDetails={bookingDetails} />
    </View>
  );
}
