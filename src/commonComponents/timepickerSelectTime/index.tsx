import React, { useEffect, useState } from 'react';
import { View, Button, Text, Platform, Modal, Alert } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import CancelHeader from '@commonComponents/cancelHeader';
import { GlobalStyle } from '@style/styles';
import appColors from '@theme/appColors';
import GradientBtn from '@commonComponents/gradientBtn';
import { useValues } from '../../../App';
import Toast from 'react-native-toast-message';

export default function TimepickerSelectTime({
    setDatePicker,
    setScheduleDate

}: {
    setDatePicker: React.Dispatch<React.SetStateAction<boolean>>,
    setScheduleDate:(value:string)=>void

}) {
    const { isDark, t } = useValues();
    const [date, setDate] = useState<Date>(new Date());
    const [mode, setMode] = useState<'time'>('time');
     
    
   

    const onChange = (event: DateTimePickerEvent, selectedValue: Date | undefined) => {
        if (event.type === 'dismissed') {
             setDatePicker(false); // Close the picker
             return;
        }
        const currentDate = selectedValue || date;
        const exactTime = currentDate.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false, // Use 24-hour format
        });
     
        
        setScheduleDate(exactTime)
        setDatePicker(false); // Hide the entire component after selection
        setDate(currentDate);
    };

 


    return (
        <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={false}
            display="spinner"
            onChange={onChange}
            minimumDate={new Date()} // Disable past dates
            style={{ width: '100%', backgroundColor: isDark ? appColors.darkTheme : appColors.white }}
        />
    );
}
