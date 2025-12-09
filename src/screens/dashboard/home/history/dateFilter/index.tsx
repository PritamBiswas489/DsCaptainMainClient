import {View} from 'react-native';
import React, {useState} from 'react';
import CancelHeader from '@commonComponents/cancelHeader';
import {propsType} from './types';
import moment from 'moment';
import GradientBtn from '@commonComponents/gradientBtn';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {CustomDatePicker} from '@otherComponent/customDatePicker';

export default function DateFilter({setShowModal}: propsType) {
  const [date, setDate] = useState('');

  const handleDate = (date: string) => {
    setDate(date);
  };

  const openDatePicker = (date: string) => {
    const formattedDate = moment(date).format('DD/MM/YY');
    handleDate(formattedDate);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        marginTop: windowHeight(2),
      }}>
      <CancelHeader
        gotoScreen={() => setShowModal(false)}
        title="dataFilter.selectDate"
      />
      <CustomDatePicker />
      <GradientBtn
        additionalStyle={{marginHorizontal: windowWidth(3), marginTop: 10}}
        label="filterModal.apply"
        onPress={() => {
          setShowModal(false);
        }}
      />
    </View>
  );
}
