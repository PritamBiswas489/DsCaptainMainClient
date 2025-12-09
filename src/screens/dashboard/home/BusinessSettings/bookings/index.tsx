import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-virtualized-view';
import { View, Text, TouchableOpacity, StyleSheet, Alert, RefreshControl } from 'react-native';
import Header from '@src/commonComponents/header';
import appColors from '@src/theme/appColors';
import { useValues } from '../../../../../../App';
import GradientBtn from '@commonComponents/gradientBtn';
import { BookingSettings } from './bookingSettings';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { updateBookingSettings } from '@src/services/business.settings.service';
import Toast from 'react-native-toast-message';
interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}
// Business booking settings function
const BusinessBookingSettings = ({
    setWithoutLoaderTwoRefresh,
    setSpinnerText,
    setLoadSpinner
}:
    {
        setWithoutLoaderTwoRefresh: (value: boolean) => void,
        setSpinnerText: (value: string) => void,
        setLoadSpinner: (value: boolean) => void,
    }) => {
    const { isDark, t } = useValues()
    const [servicemanCanEditBooking, setServicemanCanEditBooking] = useState(false)
    const [servicemanCanCancelBooking, setServicemanCancelBooking] = useState(false)
    const businessSetting = useSelector((state: RootState) => state['businessSetting'])
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setWithoutLoaderTwoRefresh(true)
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);



    useEffect(() => {
        const checkOne = businessSetting.data.find(ele => ele.key_name === 'provider_serviceman_can_edit_booking')
        const checktwo = businessSetting.data.find(ele => ele.key_name === 'provider_serviceman_can_cancel_booking')

        if (checkOne?.mode === 'live') {
            setServicemanCanEditBooking(checkOne?.live_values && parseInt(checkOne?.live_values) === 1 ? true : false)
        } else {
            setServicemanCanEditBooking(checkOne?.test_values && parseInt(checkOne?.test_values) === 1 ? true : false)
        }

        if (checktwo?.mode === 'test') {
            setServicemanCancelBooking(checktwo?.live_values && parseInt(checktwo?.live_values) === 1 ? true : false)
        } else {
            setServicemanCancelBooking(checktwo?.test_values && parseInt(checktwo?.test_values) === 1 ? true : false)
        }



    }, [businessSetting])

    //handle update booking settings
    const handleUpdateBookingSettings = async () => {
        const formData = new FormData()
        formData.append('data', JSON.stringify([{
            'key': 'provider_serviceman_can_edit_booking',
            'value': servicemanCanEditBooking ? "1" : "0"
        },
        {
            'key': 'provider_serviceman_can_cancel_booking',
            'value': servicemanCanCancelBooking ? "1" : "0"
        }
        ]))

        setLoadSpinner(true)
        setSpinnerText(t('newDeveloper.spinnerTextOne'))
        const response: Response = await updateBookingSettings(formData)
        console.log(response?.data)
        if (response?.data?.response_code === 'default_update_200') {
            Toast.show({
                type: 'success',
                text1: 'SUCCESS',
                text2: response.data.message,
            });
            setWithoutLoaderTwoRefresh(true)
        } else {

            Toast.show({
                type: 'error',
                text1: 'ERROR',
                text2: response.data.message,
            });
            setWithoutLoaderTwoRefresh(true)
        }
        setLoadSpinner(false)
        setSpinnerText(t('newDeveloper.SpinnerLoader'))


    }

    return (
        <>
            <ScrollView contentContainerStyle={styles.contentContainer}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <BookingSettings
                    servicemanCanEditBooking={servicemanCanEditBooking}
                    setServicemanCanEditBooking={setServicemanCanEditBooking}
                    servicemanCanCancelBooking={servicemanCanCancelBooking}
                    setServicemanCancelBooking={setServicemanCancelBooking}
                />
            </ScrollView>
            <GradientBtn label="newDeveloper.updateSettings" onPress={handleUpdateBookingSettings} />
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
export default BusinessBookingSettings;
