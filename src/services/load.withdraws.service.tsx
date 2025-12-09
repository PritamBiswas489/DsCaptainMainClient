import React from "react";
import { getWithdrawList } from "./withdraw.service";
import { RootState, AppDispatch } from '@src/store';
import { withdrawListingActions } from "@src/store/redux/withdraw-list-redux";

interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}

export const loadWithdrawService = async (
    limit: number,
    offset: number,
    dispatch: AppDispatch
) => {
    const response: Response = await getWithdrawList(limit, offset);
    if (response?.data?.response_code === 'default_200') {
        dispatch(withdrawListingActions.setWithdraws(response?.data?.content?.withdraw_requests?.data))
        dispatch(withdrawListingActions.setData({
            field: 'isNoMoreData',
            data: !response?.data?.content?.withdraw_requests?.next_page_url
        }));
        dispatch(withdrawListingActions.setData({
            field: 'isFirstTimeLoading',
            data: false
        }));
    }

}