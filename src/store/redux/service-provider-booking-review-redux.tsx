import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingStatus {
    booking_status: string;
    total: number;
  }
const initialState: BookingStatus[] = []

// service provider booking review slice
const serviceProviderBookingReviewSlice = createSlice({
    name: "serviceProviderbookingReview",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<BookingStatus[]>) {
        return action.payload
      },
      resetState(state: BookingStatus[]) {
        return initialState;
      },
    },
});
  
export const serviceProviderBookingReviewActions = serviceProviderBookingReviewSlice.actions;
export default serviceProviderBookingReviewSlice;