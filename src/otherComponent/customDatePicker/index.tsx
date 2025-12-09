import React, {useState, Fragment} from 'react';
import {ScrollView} from 'react-native';
import {Calendar, CalendarUtils} from 'react-native-calendars';
import testIDs from './testIDs';
import appColors from '@theme/appColors';

const current_date = new Date();
const INITIAL_DATE = current_date.toISOString().split('T')[0];
export const CustomDatePicker = () => {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);
  const [multipleDate, setMultipleDate] = useState<any>([]);
  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const handleDayPress = (day: any) => {
    if (multipleDate.length === 2) {
      setMultipleDate([]);
    } else if (multipleDate.length === 1) {
      const start = new Date(multipleDate[0]);
      const end = new Date(day.dateString);
      const datesInRange = [];
      const loopDate = new Date(start);

      while (loopDate <= end) {
        datesInRange.push(CalendarUtils.getCalendarDateString(loopDate));
        loopDate.setDate(loopDate.getDate() + 1);
      }
      setMultipleDate(datesInRange);
    } else {
      setMultipleDate([day.dateString]);
    }
  };

  const getMarkedDates = () => {
    const markedDates = {};
    multipleDate.forEach(date => {
      markedDates[date] = {marked: false, color: appColors.lightOrange};
    });
    return markedDates;
  };

  const renderCalendarWithPeriodMarkingAndDotMarking = () => {
    return (
      <Fragment>
        <Calendar
          current={INITIAL_DATE}
          minDate={getDate(-14)}
          markingType={'period'}
          markedDates={{
            [INITIAL_DATE]: {marked: true},
            ...getMarkedDates(),
          }}
          disabledDaysIndexes={[0, 6]}
          onDayPress={handleDayPress}
        />
      </Fragment>
    );
  };

  const renderExamples = () => {
    return (
      <Fragment>{renderCalendarWithPeriodMarkingAndDotMarking()}</Fragment>
    );
  };

  return (
    <ScrollView
      style={{marginTop: 10}}
      showsVerticalScrollIndicator={false}
      testID={testIDs.calendars.CONTAINER}>
      {renderExamples()}
    </ScrollView>
  );
};
