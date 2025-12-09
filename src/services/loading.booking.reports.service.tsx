import React from "react";
import { getBookingReports } from "./reports.service";
import { RootState, AppDispatch } from '@src/store';
import { BookingFilterData, BookingReportInterface } from "@src/interfaces/BookingReportInterface";
import { bookingReportActions } from "@src/store/redux/booking-reports-redux";
import Toast from "react-native-toast-message";



interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}

//load booking reports service
export const loadBookingReportsService = async (
    postData:FormData,
    dispatch:AppDispatch
) =>{
      const response:Response = await getBookingReports(postData);
      //=============== get booking reports =============//
      if(response?.data?.response_code === 'default_200'){
                    dispatch(bookingReportActions.setData({field:'zones',data:response?.data?.content?.zones}))
                    dispatch(bookingReportActions.setData({field:'categories',data:response?.data?.content?.categories}))
                    dispatch(bookingReportActions.setData({field:'sub_categories',data:response?.data?.content?.sub_categories}))
                    dispatch(bookingReportActions.setReports(response?.data?.content?.filtered_bookings?.data))
                    dispatch(bookingReportActions.setData({field:'bookings_count',data:response?.data?.content?.bookings_count}))
                    dispatch(bookingReportActions.setData({field:'booking_amount',data:response?.data?.content?.booking_amount}))
                    dispatch(bookingReportActions.setData({field:'chart_data',data:response?.data?.content?.chart_data}))   
                    dispatch(bookingReportActions.setData({
                            field: 'isNoMoreData',
                            data: !response?.data?.content?.filtered_bookings?.next_page_url
                    })); //is no more data 
                    dispatch(bookingReportActions.setData({
                        field: 'isFirstTimeLoading',
                        data: false
                    })); //is first time loading
      }else{
          Toast.show({
              type: 'error',
              text1: 'ERROR',
              text2: response?.data?.message,
          });
          dispatch(bookingReportActions.setData({
            field: 'isFirstTimeLoading',
            data: false
        })); //is first time loading
      }
}