import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingFilterData, BookingReportInterface } from "@src/interfaces/BookingReportInterface";

const initialState: BookingReportInterface = {
    zones: [],
    categories: [],
    sub_categories: [],
    filtered_bookings: [],
    bookings_count: {
        total_bookings: 0,
        accepted: 0,
        ongoing: 0,
        completed: 0,
        canceled: 0,
    },
    booking_amount: {
        total_booking_amount: 0,
        total_paid_booking_amount: 0,
        total_unpaid_booking_amount: 0,
    },
    chart_data: {
        booking_amount: [],
        tax_amount: [],
        admin_commission: [],
        timeline: [],
    },
    limit: 20,
    offset: 1,
    isFirstTimeLoading: true,
    isNoMoreData: true,
};

interface SetDataPayload {
    field: keyof BookingReportInterface;
    data: string | number | boolean | any;
}

const bookingReportSlice = createSlice({
    name: "bookingReports",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        setReports(state: any, action: PayloadAction<BookingFilterData[]>) {
            // Merge existing filtered_bookings with new bookings
            state.filtered_bookings = [...state.filtered_bookings, ...action.payload];
        },
        resetState(state: BookingReportInterface) {
            return initialState;
        },
    },
});

export const bookingReportActions = bookingReportSlice.actions;
export default bookingReportSlice;
