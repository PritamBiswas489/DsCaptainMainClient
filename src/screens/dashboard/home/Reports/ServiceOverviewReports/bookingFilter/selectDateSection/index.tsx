import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import appColors from '@theme/appColors';
import {Calendar} from '@utils/icons';
import {windowHeight} from '@theme/appConstant';
import {filterDateType} from './types';
import {useValues} from '../../../../../../../../App';

export default function SelectDateSection({
  setShowModal,
  setDatePicker,
  setIsStartDate,
  startDate,
  endDate,
  showInvalidDateError,
}: filterDateType) {
  const handleStartDatePress = () => {
    setShowModal(false);
    setDatePicker(true);
    setIsStartDate(true);
  };

  const handleEndDatePress = () => {
    setShowModal(false);
    setDatePicker(true);
    setIsStartDate(false);
  };

  const {isDark,t} = useValues();

  return (
    <View>
      <View
        style={[
          styles.dateTime,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg},
        ]}>
        <TextInput
          onChangeText={() => {}}
          placeholderTextColor={
            startDate
              ? isDark
                ? appColors.white
                : appColors.darkText
              : appColors.lightText
          }
          style={[
            styles.inputContainer,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}
          placeholder={startDate ? startDate : t('dataFilter.startDate')}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => handleStartDatePress()}>
          <Calendar
            width={'30'}
            color={appColors.primary}
            strokeWidth={'1.3'}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.dateTime,
          {
            marginTop: windowHeight(2),
            backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg,
          },
        ]}>
        <TextInput
          onChangeText={() => {}}
          placeholderTextColor={
            endDate
              ? isDark
                ? appColors.white
                : appColors.darkText
              : appColors.lightText
          }
          style={[
            styles.inputContainer,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}
          placeholder={endDate ? endDate : t('dataFilter.endDate')}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => handleEndDatePress()}>
          <Calendar
            width={'30'}
            color={appColors.primary}
            strokeWidth={'1.3'}
          />
        </TouchableOpacity>
      </View>
      {showInvalidDateError && (
        <Text style={styles.error}>{t('dataFilter.inValidDate')}</Text>
      )}
    </View>
  );
}
