import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchBookingInterface } from "@src/interfaces/searchBookingInterface";

 

interface SetDataPayload {
    field: keyof SearchBookingInterface;
    data: string|number|any;
}

const initialState: SearchBookingInterface = {
    data:[],
    limit:10,
    offset:1,
    isFirstTimeLoading: true,
    isNoMoreData: true,
    searchType:'all'
}

const allListingSlice = createSlice({
    name: "allListingBooking",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<SetDataPayload>) {
        state[action.payload.field] = action.payload.data;
      },
      resetState(state: SearchBookingInterface) {
        return initialState;
      },
    },
});

export const allListingActions = allListingSlice.actions;
export default allListingSlice;