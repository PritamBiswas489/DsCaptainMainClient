import React from "react";
import { getNotifications } from "./notifications.service";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { NotificationsInterface } from "@src/interfaces/store/notifications.interface";
import { vendorNotificationsActions } from "@src/store/redux/store/notifications-data-redux";
import { datetimeArr } from "@src/config/utility";
import { authAuthorizeRedirect } from "@src/utils/functions";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}
//get formatted data
export const getFormattedData = (content:any) =>{
    const formattedData: NotificationsInterface[] = content.map((notificationData: any) => {
        const {
            day,
            month,
            year,
            hours,
            minutes,
            ampm
           } = datetimeArr(notificationData.created_at)
        return {
        id : notificationData?.id,
        title : notificationData?.data?.title,
        description :  notificationData?.data?.description,
        cover_image : notificationData?.data?.image,
        date:`${day} ${month}`,
        time:`${hours}:${minutes}  ${ampm}`,
       }
    });
      return formattedData
}
//load notifications for store
export  const  loadNotifications = async (dispatch:AppDispatch,navigation:NativeStackNavigationProp<RootStackParamList>) =>{
    const response: Response = await getNotifications();
    if(response?.data?.errors){
        await authAuthorizeRedirect(response,navigation)
    }else {
        const formattedData = getFormattedData(response?.data)
        dispatch(vendorNotificationsActions.addNotificationsArr(formattedData));
    }
}