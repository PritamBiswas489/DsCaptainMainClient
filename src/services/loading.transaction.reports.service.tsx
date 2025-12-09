import React from "react";
import { getTransactionReports } from "./reports.service";
import { transactionReportActions } from "@src/store/redux/transactions-reports-redux";
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

export const loadTransactionReportsService = async (
    postData:FormData,
    dispatch:AppDispatch
) =>{
    const response:Response = await getTransactionReports(postData);
    if(response?.data?.response_code === 'default_200'){
        dispatch(transactionReportActions.setData({field:'zones',data:response?.data?.content?.zones}))
        dispatch(transactionReportActions.setReports(response?.data?.content?.filtered_transactions?.data))
        dispatch(transactionReportActions.setData({field:'accountInfo',data:response?.data?.content?.account_info}))
        dispatch(transactionReportActions.setData({
            field: 'isNoMoreData',
            data: !response?.data?.content?.filtered_transactions?.next_page_url
        }));  

        dispatch(transactionReportActions.setData({
            field: 'isFirstTimeLoading',
            data: false
        }));  
    }else{
        Toast.show({
            type: 'error',
            text1: 'ERROR',
            text2: response?.data?.message,
        });
        dispatch(transactionReportActions.setData({
          field: 'isFirstTimeLoading',
          data: false
      })); //is first time loading
    }

}