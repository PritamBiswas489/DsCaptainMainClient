import {View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import CancelHeader from '@commonComponents/cancelHeader';
import SelectDate from './selectDate';
import moment from 'moment';
import GradientBtn from '@commonComponents/gradientBtn';
import {calenderType} from './selectDate/types';
import {useValues} from '../../../App';
import appColors from '@theme/appColors';

export function CalenderModal({
  setDatePicker,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  isStartDate,
  setShowModal,
}: calenderType) {
  const handleStartDate = (date: string) => {
    setStartDate(date);
  };

  const openStartDatePicker = (date: string) => {
    const formattedDate = moment(date).format('YY-MM-DD');
    handleStartDate(formattedDate);
  };

  const handleEndDate = (date: string) => {
    setEndDate(date);
  };

  const openEndDatePicker = (date: string) => {
    const formattedDate = moment(date).format('YY-MM-DD');
    handleEndDate(formattedDate);
  };

  const {isDark, t} = useValues();

  return (
    <View
      style={[
        GlobalStyle.modal,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <CancelHeader
        title={isStartDate ? t('booking.startDate') : t('booking.endDate')}
        gotoScreen={() => {
          setDatePicker(false);
          setShowModal && setShowModal(true);
        }}
      />
      {isStartDate ? (
        <SelectDate
          selectedDate={startDate}
          handleDateChange={openStartDatePicker}
        />
      ) : (
        <SelectDate
          selectedDate={endDate}
          handleDateChange={openEndDatePicker}
        />
      )}
      <GradientBtn
        additionalStyle={{marginHorizontal: 0, marginTop: 0}}
        label="filterModal.apply"
        onPress={() => {
          setDatePicker(false);
          setShowModal && setShowModal(true);
        }}
      />
    </View>
  );
}
