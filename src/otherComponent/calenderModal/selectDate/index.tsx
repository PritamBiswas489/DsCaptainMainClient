import {View} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-styled-datepicker';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {styles} from './styles';
import moment from 'moment';
import {useValues} from '../../../../App';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

const currentDate = new Date();
const minDate = currentDate.toISOString().split('T')[0];

export default function SelectDate({
  selectedDate,
  handleDateChange,
}: {
  selectedDate: string;
  handleDateChange: (data: string) => void;
}) {
  const formattedDate = selectedDate
    ? moment(selectedDate).format('DD/MM/YY')
    : '';

  const {isDark} = useValues();

  return (
    <View>
      <DatePicker
        initialSelectedDate={formattedDate}
        minDate={minDate}
        maxDate="2025-12-31"
        arrowStyles={{
          height: windowHeight(8),
          width: windowWidth(8),
          tintColor: isDark ? appColors.white : appColors.lightText,
        }}
        selectedDateStyles={styles.selectedDateStyle}
        calendarHeaderTextStyles={{
          color: isDark ? appColors.white : appColors.darkText,
          fontSize: fontSizes.FONT4HALF,
          fontFamily: appFonts.NunitoMedium,
        }}
        calendarHeaderWrapperStyles={styles.wrapperStyle}
        disabledDateStyles={{color: 'gray'}}
        arrowWrapperStyles={{
          // backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,

          borderRadius: windowHeight(10),
          height: windowHeight(4),
          width: windowHeight(4),
          alignItems: 'center',
          justifyContent: 'center',
        }}
        monthWrapperStyles={{padding: 5}}
        selectedMonthWrapperStyles={{backgroundColor: appColors.primary}}
        monthTextStyles={styles.monthTextStyle}
        selectedMonthTextStyles={{
          color: isDark ? appColors.darkTheme : appColors.primary,
        }}
        yearWrapperStyles={{marginTop: 5}}
        yearTextStyles={{fontWeight: 'bold'}}
        todayDateColor={appColors.primary}
        weekendDateColor={isDark ? appColors.white : appColors.darkText}
        weekDateColor={isDark ? appColors.darkText : appColors.darkText}
        disabledDateColor={appColors.lightText}
        selectedDateColor={appColors.white}
        fontFamily={appFonts.NunitoMedium}
        onChange={handleDateChange}
      />
    </View>
  );
}
