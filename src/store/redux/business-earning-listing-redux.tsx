import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EarningListingInterface, BookingInterface } from "@src/interfaces/EarningListInterface";

const initialState: EarningListingInterface = {
    zones: [],
    categories: [],
    sub_categories: [],
    bookings:[],
    chart_data:{
        net_profit: [],
        total_earning: [],
        total_expense: [],
        timeline: [],
    },
    limit: 20,
    offset: 1,
    isFirstTimeLoading: true,
    isNoMoreData: true,
}


interface SetDataPayload {
    field: keyof EarningListingInterface;
    data: string | number | boolean | any;
}

const businessEarningSlice = createSlice({
    name: "businessEarningListing",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        setReports(state: any, action: PayloadAction<BookingInterface[]>) {
            // Merge existing filtered_bookings with new bookings
            state.bookings = [...state.bookings, ...action.payload];
        },
        resetState(state: EarningListingInterface) {
            return initialState;
        },
    },
});

export const businessEarningListingActions = businessEarningSlice.actions;
export default businessEarningSlice;

