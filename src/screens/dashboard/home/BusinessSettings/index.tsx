import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-virtualized-view';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Header from '@src/commonComponents/header';
import appColors from '@src/theme/appColors';
import { useValues } from '../../../../../App';
 
import BusinessBookingSettings from './bookings';
import { getBusinessSettingsAvailabletimeSchedule } from '@src/services/business.settings.service';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { availableTimeSlotActions, ServiceAvailabilityType } from '@src/store/redux/available-time-slot-redux';
import ServiceAvailability from './serviceAvailability';
import { getBusinessSettings } from '@src/services/business.settings.service';
import { businessSettingsActions } from '@src/store/redux/business-settings-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';

type props = NativeStackNavigationProp<RootStackParamList>;

interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}
const BusinessSettings = () => {
    const [activeTab, setActiveTab] = useState('Tab1');
    const [loadSpinner,setLoadSpinner] = useState(false)
    const { isDark, t } = useValues()
    const [spinnertext,setSpinnerText] = useState(t('newDeveloper.SpinnerLoader'))
    const [withoutLoaderOneRefresh,setWithoutLoaderOneRefresh] =  useState(false)
    const [withoutLoaderTwoRefresh,setWithoutLoaderTwoRefresh] =  useState(false)

    const dispatch = useDispatch()
    const {isFirstTimeLoading:loadingOne} = useSelector((state: RootState)=>state['availableTimeSlot'])
    const {isFirstTimeLoading:loadingTwo} = useSelector((state: RootState)=>state['businessSetting'])
    const { navigate } = useNavigation<props>();

    //Available time slot data
    const loadFunctionOne = async()=>{
        const response:Response = await getBusinessSettingsAvailabletimeSchedule()
        if(response?.data?.response_code === 'default_200'){ 
            if(response?.data?.content?.time_schedule){
               const ct =  response?.data?.content
               Object.keys(ct).forEach((key)=>{
                   const typedKey = key as keyof ServiceAvailabilityType;
                  dispatch(availableTimeSlotActions.setData({field:typedKey,data:ct[key]}))
               })
            }
            dispatch(availableTimeSlotActions.setData({field:'isFirstTimeLoading',data:false}))
            setWithoutLoaderOneRefresh(false)
        }else{
            Alert.alert("Can't able to load data")
            navigate('ProfileSettings')
            dispatch(availableTimeSlotActions.setData({field:'isFirstTimeLoading',data:true}))
        }
       
    }

    //Business settings data
    const loadFunctionTwo = async()=>{
        const response:Response = await getBusinessSettings()
        if(response?.data?.content){
            dispatch(businessSettingsActions.setData({field:'data',data:response?.data?.content})) 
        }
        dispatch(businessSettingsActions.setData({field:'isFirstTimeLoading',data:false}))
        setWithoutLoaderTwoRefresh(false)
    }

     useEffect(()=>{
        if(loadingOne || withoutLoaderOneRefresh){
            loadFunctionOne() 
        }
     },[loadingOne,withoutLoaderOneRefresh])

     useEffect(()=>{
        if(loadingTwo || withoutLoaderTwoRefresh){
            loadFunctionTwo() 
        }
     },[loadingTwo,withoutLoaderTwoRefresh])


     useEffect(()=>{
        if(loadingOne || loadingTwo){
            setLoadSpinner(true)
        }else{
            setActiveTab('Tab1')
            setLoadSpinner(false)
        }

     },[loadingOne,loadingTwo])





    return (
        <View style={[styles.container, { backgroundColor: isDark ? appColors.darkTheme : appColors.white }]}>
            <Header
                title="newDeveloper.Businesssettings"
                showBackArrow={true}
            />
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tabButton, { borderBottomColor: isDark ? appColors.white : appColors.darkText, }, activeTab === 'Tab1' && styles.activeTabButton]}
                    onPress={() => setActiveTab('Tab1')}
                >
                    <Text style={[styles.tabText, , { color: isDark ? appColors.white : appColors.darkText, }, activeTab === 'Tab1' && styles.activeTabText]}>{t('newDeveloper.ServiceAvailability')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, { borderBottomColor: isDark ? appColors.white : appColors.darkText, }, activeTab === 'Tab2' && styles.activeTabButton]}
                    onPress={() => setActiveTab('Tab2')}
                >
                    <Text style={[styles.tabText, , { color: isDark ? appColors.white : appColors.darkText, }, activeTab === 'Tab2' && styles.activeTabText]}>{t('newDeveloper.BookingsSettings')}</Text>
                </TouchableOpacity>
            </View>
            {/* Scrollable Content Based on Active Tab */}
           
                {activeTab === 'Tab1' ? (
                    <ServiceAvailability setSpinnerText={setSpinnerText} setLoadSpinner={setLoadSpinner} setWithoutLoaderOneRefresh={setWithoutLoaderOneRefresh} />
                ) : (
                    <BusinessBookingSettings setSpinnerText={setSpinnerText} setLoadSpinner={setLoadSpinner} setWithoutLoaderTwoRefresh={setWithoutLoaderTwoRefresh} />
                )}

                <Spinner
                    visible={loadSpinner}
                    // overlayColor={isDark ? appColors.darkTheme : appColors.white}
                    textContent={spinnertext}
                    textStyle={{ color: '#FFF' }}
                    
                />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 5
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomWidth: 2


    },
    activeTabButton: {
        borderColor: appColors.primary
    },
    tabText: {
        fontSize: 16,
    },
    activeTabText: {
        color: appColors.primary,
        fontWeight: 'bold',
    },
    contentContainer: {
        padding: 20,
    },
    contentText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
});
export default BusinessSettings;
