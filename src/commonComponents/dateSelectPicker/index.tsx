import React, { useEffect, useState } from 'react';
import { View, Button, Text, Platform, Modal, Alert } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import CancelHeader from '@commonComponents/cancelHeader';
import { GlobalStyle } from '@style/styles';
import appColors from '@theme/appColors';
import GradientBtn from '@commonComponents/gradientBtn';
import { useValues } from '../../../App';
import Toast from 'react-native-toast-message';

export default function DatePickerSelector({
    setDatePicker,
    setScheduleDate

}: {
    setDatePicker: React.Dispatch<React.SetStateAction<boolean>>,
    setScheduleDate:(value:string)=>void

}) {
    const { isDark, t } = useValues();
    const [date, setDate] = useState<Date>(new Date());
    const [mode, setMode] = useState<'date'>('date');
    const [show, setShow] = useState<boolean>(true);
    
    

    const onChange = (event: DateTimePickerEvent, selectedValue: Date | undefined) => {
        if (event.type === 'dismissed') {
             setDatePicker(false); // Close the picker
             return;
        }
        const currentDate = selectedValue || date;
        if (mode === 'date') {
                    const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
                    setScheduleDate(formattedDate);
                    setDatePicker(false);
                     
        }  
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
             // Asia/Kolkata timezone offset is +5:30 hours or 330 minutes
            
            style={{ width: '100%', backgroundColor: isDark ? appColors.darkTheme : appColors.white }}
        />
    );
}
