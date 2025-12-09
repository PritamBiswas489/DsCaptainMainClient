import React, { useEffect, useState } from 'react';
import { View, Button, Text, Platform, Modal, Alert } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import CancelHeader from '@commonComponents/cancelHeader';
import { GlobalStyle } from '@style/styles';
import appColors from '@theme/appColors';
import GradientBtn from '@commonComponents/gradientBtn';
import { useValues } from '../../../App';
import Toast from 'react-native-toast-message';

export default function DateTimeSelector({
    setDatePicker,
    setScheduleDate

}: {
    setDatePicker: React.Dispatch<React.SetStateAction<boolean>>,
    setScheduleDate:(value:string)=>void

}) {
    const { isDark, t } = useValues();
    const [date, setDate] = useState<Date>(new Date());
    const [mode, setMode] = useState<'date' | 'time'>('date');
    const [show, setShow] = useState<boolean>(true);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [updateMainDateTime,setUpdateMainDateTime] = useState<boolean>(false)

    const onChange = (event: DateTimePickerEvent, selectedValue: Date | undefined) => {
        if (event.type === 'dismissed') {
             setDatePicker(false); // Close the picker
             return;
        }
        const currentDate = selectedValue || date;
        if (mode === 'date') {
                    const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
                    setSelectedDate(formattedDate);
                    setMode('time');
                    setShow(true); // Show time picker
        } else {
                    const exactTime = currentDate.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second:'2-digit',
                        hour12: false, // Use 24-hour format
                    });
                    setSelectedTime(exactTime);
                    setShow(false); // Close picker after selecting time
                    setUpdateMainDateTime(true)
                    setDatePicker(false); // Hide the entire component after selection
                    
        }
        setDate(currentDate);
    };


    useEffect(()=>{
        if(updateMainDateTime){
            const myDate  =  new Date()
            const myCurrentDate = `${myDate.getFullYear()}-${String(myDate.getMonth() + 1).padStart(2, '0')}-${String(myDate.getDate()).padStart(2, '0')}`;
            const myCurrentTime = myDate.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second:'2-digit',
                hour12: false, // Use 24-hour format
            });
            if(myCurrentDate === selectedDate && myCurrentTime === selectedTime){
                Toast.show({
                    type: 'error',
                    text1: 'ERROR',
                    text2: t('Schedule time must after current time'),
                  });
            }else{

                Alert.alert(
                    "Confirmation", // Title of the alert
                    t('newDeveloper.SetScheduleTimeConfirmation'), // Message
                    [
                      {
                        text: "Cancel",  
                        onPress: () => console.log("Cancel Pressed"), // Action when Cancel is pressed
                        style: "cancel", 
                      },
                      {
                        text: "Confirm",  
                        onPress: () => {
                            // console.log("====== Update current time =======")
                            // console.log(`${selectedDate} ${selectedTime}`)
                            setScheduleDate(`${selectedDate} ${selectedTime}`)
                        },  
                      },
                    ],
                    { cancelable: false } 
                  );



               
               
            }
            
        }

    },[updateMainDateTime,selectedDate,selectedTime])


    

    return (
        <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={false}
            display="spinner"
            onChange={onChange}
             // Asia/Kolkata timezone offset is +5:30 hours or 330 minutes
            minimumDate={new Date()} // Disable past dates
            style={{ width: '100%', backgroundColor: isDark ? appColors.darkTheme : appColors.white }}
        />
    );
}
