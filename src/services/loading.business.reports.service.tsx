import React from "react";
import { serviceOverviewActions } from "@src/store/redux/service-overview-redux";
import { businessEarningListingActions } from "@src/store/redux/business-earning-listing-redux";
import { businessExpenseActions } from "@src/store/redux/business-expenses-redux";
import { getServiceOverviewData, getEarningReportData, getExpenseReportData } from "./reports.service";
import Toast from "react-native-toast-message";
import { RootState, AppDispatch } from '@src/store';


interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}
//load service overview data
export const loadServiceOverviewData = async (
    postData:FormData,
    dispatch:AppDispatch
) =>{
    const response:Response = await getServiceOverviewData(postData);
    if(response?.data?.response_code === 'default_200'){
        dispatch(serviceOverviewActions.setData({field:'zones',data:response?.data?.content?.zones}))
        dispatch(serviceOverviewActions.setData({field:'categories',data:response?.data?.content?.categories}))
        dispatch(serviceOverviewActions.setData({field:'sub_categories',data:response?.data?.content?.sub_categories}))
        dispatch(serviceOverviewActions.setReports(response?.data?.content?.amounts))
        dispatch(serviceOverviewActions.setData({field:'chart_data',data:response?.data?.content?.chart_data}))
        dispatch(serviceOverviewActions.setData({field:'promotional_cost',data:response?.data?.content?.promotional_cost}))
        dispatch(serviceOverviewActions.setData({
            field: 'isFirstTimeLoading',
            data: false
        })); //is first time loading
    }else{
        Toast.show({
            type: 'error',
            text1: 'ERROR',
            text2: response?.data?.message,
        });
        dispatch(serviceOverviewActions.setData({
          field: 'isFirstTimeLoading',
          data: false
      })); //is first time loading

    }

}
//load business earning data
export const loadEarningReportData = async (
    postData:FormData,
    dispatch:AppDispatch
)=>{
    const response:Response = await getEarningReportData(postData);
    if(response?.data?.response_code === 'default_200'){
         
        dispatch(businessEarningListingActions.setData({field:'zones',data:response?.data?.content?.zones}))
        dispatch(businessEarningListingActions.setData({field:'categories',data:response?.data?.content?.categories}))
        dispatch(businessEarningListingActions.setData({field:'sub_categories',data:response?.data?.content?.sub_categories}))
        dispatch(businessEarningListingActions.setReports(response?.data?.content?.bookings?.data))
        dispatch(businessEarningListingActions.setData({field:'chart_data',data:response?.data?.content?.chart_data}))   
        dispatch(businessEarningListingActions.setData({
                    field: 'isNoMoreData',
                    data: !response?.data?.content?.bookings?.next_page_url
        })); //is no more data 
        dispatch(businessEarningListingActions.setData({
                    field: 'isFirstTimeLoading',
                    data: false
        })); //is first time loading
    }else{
        Toast.show({
            type: 'error',
            text1: 'ERROR',
            text2: response?.data?.message,
        });
        dispatch(businessEarningListingActions.setData({
          field: 'isFirstTimeLoading',
          data: false
      })); //is first time loading

    }

}

//load busniess expense data
export const loadExpenseReportData = async (
    postData:FormData,
    dispatch:AppDispatch
)=>{
    const response:Response = await getExpenseReportData(postData);
    if(response?.data?.response_code === 'default_200'){
        dispatch(businessExpenseActions.setData({field:'zones',data:response?.data?.content?.zones}))
        dispatch(businessExpenseActions.setData({field:'categories',data:response?.data?.content?.categories}))
        dispatch(businessExpenseActions.setData({field:'sub_categories',data:response?.data?.content?.sub_categories}))
        dispatch(businessExpenseActions.setReports(response?.data?.content?.filtered_booking_amounts?.data))
        dispatch(businessExpenseActions.setData({field:'chart_data',data:response?.data?.content?.chart_data}))  
        dispatch(businessExpenseActions.setData({field:'promotionalCost',data:response?.data?.content?.total_promotional_cost}))    
        dispatch(businessExpenseActions.setData({
            field: 'isNoMoreData',
            data: !response?.data?.content?.filtered_booking_amounts?.next_page_url
        })); //is no more data 
        dispatch(businessExpenseActions.setData({
                    field: 'isFirstTimeLoading',
                    data: false
        })); //is first time loading
   
    }else{
        Toast.show({
            type: 'error',
            text1: 'ERROR',
            text2: response?.data?.message,
        });
        dispatch(businessExpenseActions.setData({
          field: 'isFirstTimeLoading',
          data: false
      })); //is first time loading

    }

}
