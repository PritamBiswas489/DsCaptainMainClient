import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ServiceOverViewInterface, amountInterface } from "@src/interfaces/ServiceOverviewInterface";

const initialState: ServiceOverViewInterface = {
    zones: [],
    categories: [],
    sub_categories: [],
    amounts:[],
    chart_data:{
        earnings: [],
        expenses: [],
        timeline: [],
    },
    promotional_cost:{
        discount : 0,
        coupon: 0,
        campaign: 0
    },
    limit: 20,
    offset: 1,
    isFirstTimeLoading: true,
    isNoMoreData: true,

}

interface SetDataPayload {
    field: keyof ServiceOverViewInterface;
    data: string | number | boolean | any;
}

const serviceOverviewSlice = createSlice({
    name: "serviceOverview",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        setReports(state: any, action: PayloadAction<amountInterface[]>) {
            // Merge existing filtered_bookings with new bookings
            state.amounts = [...state.amounts, ...action.payload];
        },
        resetState(state: ServiceOverViewInterface) {
            return initialState;
        },
    },
});

export const serviceOverviewActions = serviceOverviewSlice.actions;
export default serviceOverviewSlice;
