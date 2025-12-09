import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import appColors from '@src/theme/appColors';
import { useValues } from '../../../App';
export default function DateRangePicker({
    setDatePicker,
    fromDate,
    toDate,
    changeDateFilter,
}: {
    setDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
    fromDate: Date;
    toDate: Date;
    changeDateFilter: (fromDate: Date, toDate: Date) => void;
}) {
    const { isDark, t } = useValues()   
    const [calenderType, setCalenderType] = useState<'fromCalendar' | 'toCalendar'>('fromCalendar');
    const [fromCalenderSelectedDate, setFromCalendarSelectedDate] = useState<Date>(fromDate);
    const [toCalenderSelectedDate, setToCalendarSelectedDate] = useState<Date>(toDate);
    const [checking, startChecking] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedValue: Date | undefined) => {
        if (event.type === 'dismissed') {
            setDatePicker(false);
            setCalenderType('fromCalendar');
            return;
        }

        if (calenderType === 'fromCalendar') {
            setFromCalendarSelectedDate(selectedValue || new Date());
            setCalenderType('toCalendar');
        } else if (calenderType === 'toCalendar') {
            setToCalendarSelectedDate(selectedValue || new Date());
            startChecking(true);
        }
    };

    useEffect(() => {
        if (checking && fromCalenderSelectedDate && toCalenderSelectedDate) {
            const isValidDateRange = new Date(fromCalenderSelectedDate) <= new Date(toCalenderSelectedDate);
            if (isValidDateRange) {
                changeDateFilter(fromCalenderSelectedDate, toCalenderSelectedDate);
                setDatePicker(false);
                setCalenderType('fromCalendar');
                startChecking(false);
            } else {
                Alert.alert('From date must be less than or equal to To date');
            }
        }
    }, [checking, fromCalenderSelectedDate, toCalenderSelectedDate]);

    return (
        <DateTimePicker
            key={calenderType} // Ensure proper re-rendering
            value={calenderType === 'fromCalendar' ? fromCalenderSelectedDate : toCalenderSelectedDate}
            mode="date"
            is24Hour={false}
            display="spinner"
            onChange={onChange}
            maximumDate={new Date()}
            style={{ width: '100%', backgroundColor: isDark ? appColors.darkTheme : appColors.white }}
            positiveButton={{ label: calenderType === 'fromCalendar' ? 'Set from date' : 'Set to date' }}
        />
    );
}
