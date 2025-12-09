import React from "react";
import { getNotifications } from "./notifications.service";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { NotificationsInterface } from "@src/interfaces/notificationsInterface";
import { notificationsAction } from "@src/store/redux/notifications-data-redux";
import { datetimeArr } from "@src/config/utility";
 
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
        title : notificationData?.title,
        description :  notificationData?.description,
        cover_image : notificationData?.cover_image,
        date:`${day} ${month}`,
        time:`${hours}:${minutes}  ${ampm}`,
       }
    });
      return formattedData
}
//load notifications
export  const  loadNotifications = async (queryParams:string,dispatch:AppDispatch) =>{
    const response: Response = await getNotifications(queryParams);
    // Handle response data and update Redux state
    dispatch(notificationsAction.setData({
      field: 'offsetPageUrl',
      data: response?.data?.content?.next_page_url || ''
    }));
    dispatch(notificationsAction.setData({
      field: 'isNoMoreData',
      data: !response?.data?.content?.next_page_url
    }));
    if (response?.data?.content?.data) {
      const formattedData = getFormattedData(response.data.content.data)
     // console.log("==================== formattedData ========================")
      //console.log({formattedData})
      dispatch(notificationsAction.addNotificationsArr(formattedData));
    }


}