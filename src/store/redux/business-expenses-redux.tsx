import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExpensesReportInterface, BookingInterface } from "@src/interfaces/ExpensesReportInterface";

const initialState: ExpensesReportInterface = {
    zones: [],
    categories: [],
    sub_categories: [],
    filteredBookingAmounts:[],
    chart_data:{
        normal_discount: [],
        campaign_discount: [],
        coupon_discount: [],
        expenses: [],
        timeline: [],
    },
    promotionalCost:{
        total_expense:0,
        discount:0,
        coupon:0,
        campaign:0,
    },
    limit: 20,
    offset: 1,
    isFirstTimeLoading: true,
    isNoMoreData: true,
}


interface SetDataPayload {
    field: keyof ExpensesReportInterface;
    data: string | number | boolean | any;
}

const businessExpensesSlice = createSlice({
    name: "businessExpensesListing",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        setReports(state: any, action: PayloadAction<BookingInterface[]>) {
            // Merge existing filtered_bookings with new bookings
            state.filteredBookingAmounts = [...state.filteredBookingAmounts, ...action.payload];
        },
        resetState(state: ExpensesReportInterface) {
            return initialState;
        },
    },
});


export const businessExpenseActions = businessExpensesSlice.actions;
export default businessExpensesSlice;