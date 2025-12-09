import React from "react"; 
import { RootState, AppDispatch } from '@src/store';
import { paymentListing } from "./payment.service";
import { paymentListingActions } from "@src/store/redux/payment-list-redux";

interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}

export const loadPaymentService = async (
    limit: number,
    offset: number,
    dispatch: AppDispatch
) => {
    const response: Response = await paymentListing(limit, offset);
    if (response?.data?.response_code === 'default_200') {
        dispatch(paymentListingActions.setPayments(response?.data?.content?.data))
        dispatch(paymentListingActions.setData({
            field: 'isNoMoreData',
            data: !response?.data?.content?.next_page_url
        }));
        dispatch(paymentListingActions.setData({
            field: 'isFirstTimeLoading',
            data: false
        }));
    }

}