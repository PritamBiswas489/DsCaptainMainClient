import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
 
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
 
import { deleteAuthTokens } from '@src/config/auth';
type ItemsProps = NativeStackNavigationProp<RootStackParamList>;
import { logoutClearReduxState } from '@src/services/logout.service';
import { clearValue } from '@src/utils/localstorage';

import messaging from '@react-native-firebase/messaging';
import { logoutSeller } from '@src/services/store/profile.service';

export default function VendorLogout() {
    const { navigate, replace } = useNavigation<ItemsProps>();
    const dispatch = useDispatch()
    const { stores: storesList } = useSelector(
        (state: RootState) => state['storeProfileData']
    );
    const logout = async ()=>{

        const fcmToken = await messaging().getToken();
        // console.log("FCM Token on logout:", fcmToken);
        // return;
        if(fcmToken) {
            const formData = new FormData();
            formData.append('fcmToken',fcmToken);
            const response :{
                data: any;
            } = await logoutSeller(formData);
            console.log("logout response", response?.data); 
        }

        clearValue('loggedInUserType')
        const response = await deleteAuthTokens();
        logoutClearReduxState(dispatch)
        replace('AuthNavigation');
    }
    useEffect(()=>{
       logout()
    },[])

    return (<></>)
}