import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingDetailsInterface } from "@src/interfaces/bookingDetailsInterface";


interface BookingDetailsState {
    data: {id:string,details:BookingDetailsInterface}[],
    updateData:boolean
}

interface SetDataPayload {
    field: keyof BookingDetailsState;
    data: string | boolean | any;
}

const initialState: BookingDetailsState = {
    data: [],
    updateData:false
};

const bookingDetailsSlice = createSlice({
    name: "bookingServiceDetails",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: BookingDetailsState) {
            return initialState;
        },
        addBookingDetailsArr(state, action: PayloadAction<BookingDetailsInterface>) {
            state.data.push({id:action.payload.id,details:action.payload});
        },
        updateBookingDetails(state, action: PayloadAction<BookingDetailsInterface>) {
            const details = action.payload;
            const index = state.data.findIndex(serviceMan => serviceMan.id === details.id);
            if (index !== -1) {
                state.data[index].details = {
                    ...state.data[index].details,
                    ...details,
                };
            }else{
               state.data.push({id:action.payload.id,details:action.payload});
            }
        },
        
    }
});

export const bookingDetailsAction = bookingDetailsSlice.actions;
export default bookingDetailsSlice;