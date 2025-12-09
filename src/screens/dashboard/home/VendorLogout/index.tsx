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

export default function VendorLogout() {
    const { navigate, replace } = useNavigation<ItemsProps>();
    const dispatch = useDispatch()
    const { stores: storesList } = useSelector(
        (state: RootState) => state['storeProfileData']
    );
    const logout = async ()=>{
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