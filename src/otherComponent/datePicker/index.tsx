import {View, Text} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-styled-datepicker';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import moment from 'moment';
import {styles} from './styles';

const currentDate = new Date();
const minDate = currentDate.toISOString().split('T')[0];

export default function DatePickerView({
  selectedDate,
  handleDateChange,
}: {
  selectedDate: string[];
  handleDateChange: (data: string[]) => void;
}) {
  const [selectedRange, setSelectedRange] = useState(selectedDate || []);

  const formattedDates = selectedRange.map(date =>
    date ? moment(date).format('DD/MM/YY') : '',
  );

  const handleRangeChange = (date: string) => {
    let newSelectedRange = [...selectedRange];
    if (newSelectedRange.length === 2) {
      // Reset if already selected two dates
      newSelectedRange = [];
    }
    newSelectedRange.push(date);
    setSelectedRange(newSelectedRange);

    if (newSelectedRange.length === 2) {
      // If two dates are selected, update parent component
      handleDateChange(newSelectedRange);
    }
  };

  return (
    <View style={styles.container}>
      <DatePicker
        multiple
        initialSelectedDate={formattedDates[0]}
        minDate={minDate}
        maxDate="2025-12-31"
        arrowStyles={styles.arrowStyle}
        selectedDateStyles={styles.selectedDateStyle}
        calendarHeaderTextStyles={styles.headerText}
        calendarHeaderWrapperStyles={styles.wrapperStyle}
        disabledDateStyles={{color: 'gray'}}
        arrowWrapperStyles={styles.arrowWrapperStyle}
        monthWrapperStyles={{padding: 5}}
        selectedMonthWrapperStyles={{backgroundColor: appColors.primary}}
        monthTextStyles={styles.monthTextStyle}
        selectedMonthTextStyles={{color: appColors.white}}
        yearWrapperStyles={{marginTop: 5}}
        yearTextStyles={{fontWeight: 'bold'}}
        todayDateColor={appColors.darkText}
        weekendDateColor={appColors.darkText}
        weekDateColor={appColors.darkText}
        disabledDateColor={appColors.lightText}
        selectedDateColor={appColors.white}
        fontFamily={appFonts.NunitoMedium}
        onChange={handleRangeChange}
      />
      {formattedDates.length === 2 && (
        <View>
          <Text style={{color: 'red'}}>Start Date: {formattedDates[0]}</Text>
          <Text style={{color: 'blue'}}>End Date: {formattedDates[1]}</Text>
        </View>
      )}
    </View>
  );
}
