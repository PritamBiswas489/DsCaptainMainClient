import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-virtualized-view';
import { View, Text, TouchableOpacity, StyleSheet, Alert, RefreshControl } from 'react-native';
import Header from '@src/commonComponents/header';
import appColors from '@src/theme/appColors';
import { useValues } from '../../../../../../App';
import GradientBtn from '@commonComponents/gradientBtn';
import SwitchContainer from '@otherComponent/switchContainer';
import { EnableAvailability } from './enableAvailabilty';
import { AvailabilitySchedules } from './availabilitySchedules';
import { ClosedDayService } from './weekendList';
import TimepickerSelectTime from '@src/commonComponents/timepickerSelectTime';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { validateTime } from '@src/config/utility';
import Toast from 'react-native-toast-message';
import { saveServiceAvailability } from '@src/services/business.settings.service';

interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}

//==== Service availability function ======//
const ServiceAvailability = ({
    setWithoutLoaderOneRefresh,
    setSpinnerText,
    setLoadSpinner
}:
    {
        setWithoutLoaderOneRefresh: (value: boolean) => void,
        setSpinnerText: (value: string) => void,
        setLoadSpinner: (value: boolean) => void,
    }
) => {
    const { isDark, t } = useValues()
    const availableSlotdata = useSelector((state: RootState) => state['availableTimeSlot'])

    const [availability, setAvailability] = useState(false)
    const [sunday, setSunday] = useState(false)
    const [monday, setMonday] = useState(false)
    const [tuesday, setTuesday] = useState(false)
    const [wednesday, setWednesday] = useState(false)
    const [thursday, setThursday] = useState(false)
    const [friday, setFriday] = useState(false)
    const [saturday, setSaturday] = useState(false)

    const [fromTimePicker, setFromTimePicker] = useState(false)
    const [toTimePicker, setToTimePicker] = useState(false)

    const [fromTime, setFromTime] = useState('')
    const [toTime, setToTime] = useState('')

    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        setAvailability(availableSlotdata.service_availability === 0 ? false : true)
        setSunday(availableSlotdata.weekends.includes('sunday') ? false : true)
        setMonday(availableSlotdata.weekends.includes('monday') ? false : true)
        setTuesday(availableSlotdata.weekends.includes('tuesday') ? false : true)
        setWednesday(availableSlotdata.weekends.includes('wednesday') ? false : true)
        setThursday(availableSlotdata.weekends.includes('thursday') ? false : true)
        setFriday(availableSlotdata.weekends.includes('friday') ? false : true)
        setSaturday(availableSlotdata.weekends.includes('saturday') ? false : true)

        setFromTime(availableSlotdata.time_schedule.start_time)
        setToTime(availableSlotdata.time_schedule.end_time)
    }, [availableSlotdata])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setWithoutLoaderOneRefresh(true)
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    //handle update service availability data
    const handleUpdateServiceAvailablityData = async () => {
        const formData = new FormData()
        formData.append('service_availability', availability ? 1 : 0)
        if (fromTime && toTime) {
            formData.append('start_time', fromTime)
            formData.append('end_time', toTime)
        }
        if (!validateTime(fromTime, toTime)) {
            Toast.show({
                type: 'error',
                text1: 'ERROR',
                text2: t('newDeveloper.timeErrorOne'),
              });
            return
        }
        if (!sunday) {
            formData.append('weekends[]', 'sunday')
        }
        if (!monday) {
            formData.append('weekends[]', 'monday')
        }
        if (!tuesday) {
            formData.append('weekends[]', 'tuesday')
        }
        if (!wednesday) {
            formData.append('weekends[]', 'wednesday')
        }
        if (!thursday) {
            formData.append('weekends[]', 'thursday')
        }
        if (!friday) {
            formData.append('weekends[]', 'friday')
        }
        if (!saturday) {
            formData.append('weekends[]', 'saturday')
        }
        setLoadSpinner(true)
        setSpinnerText(t('newDeveloper.spinnerTextOne'))
        const response: Response = await saveServiceAvailability(formData)
        if(response?.data?.response_code === 'default_update_200'){
            Toast.show({
                type: 'success',
                text1: 'SUCCESS',
                text2: response.data.message,
              });
            setWithoutLoaderOneRefresh(true)
        }else{
            
            Toast.show({
                type: 'error',
                text1: 'ERROR',
                text2: response.data.message,
              });
              setWithoutLoaderOneRefresh(true)
        }
        setLoadSpinner(false)
        setSpinnerText(t('newDeveloper.SpinnerLoader'))
    }


    return (
        <>
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <View>
                    <EnableAvailability availability={availability} setAvailability={setAvailability} />
                </View>
                <View>
                    <AvailabilitySchedules fromTime={fromTime} toTime={toTime} setFromTimePicker={setFromTimePicker} setToTimePicker={setToTimePicker} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <ClosedDayService day={'Sunday'} value={sunday} setValue={setSunday} />
                    <ClosedDayService day={'Monday'} value={monday} setValue={setMonday} />
                    <ClosedDayService day={'Tuesday'} value={tuesday} setValue={setTuesday} />
                    <ClosedDayService day={'Wednesday'} value={wednesday} setValue={setWednesday} />
                    <ClosedDayService day={'Thursday'} value={thursday} setValue={setThursday} />
                    <ClosedDayService day={'Friday'} value={friday} setValue={setFriday} />
                    <ClosedDayService day={'Saturday'} value={saturday} setValue={setSaturday} />
                </View>
            </ScrollView>
            <GradientBtn label="timeSlots.updateHours" onPress={handleUpdateServiceAvailablityData} />
            {fromTimePicker && <TimepickerSelectTime setDatePicker={setFromTimePicker} setScheduleDate={setFromTime} />}
            {toTimePicker && <TimepickerSelectTime setDatePicker={setToTimePicker} setScheduleDate={setToTime} />}

        </>

    );
};

const styles = StyleSheet.create({
    contentText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    contentContainer: {
        padding: 20,
    },
});
export default ServiceAvailability;
