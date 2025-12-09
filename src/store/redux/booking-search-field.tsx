import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FieldState {
    selectedStatus:string;
    accepted:number;
    canceled:number;
    completed:number;
    ongoing:number;
    pending:number;
    all:number,
    refreshData:boolean
}

interface SetDataPayload {
    field: keyof FieldState;
    data: string|number|boolean;
}

const initialState: FieldState = {
    selectedStatus: 'all',
    accepted:0,
    canceled:0,
    completed:0,
    ongoing:0,
    pending:0,
    all:0,
    refreshData:false
}

const bookingSearchFieldSlice = createSlice({
    name: "bookingSearchField",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<SetDataPayload>) {
        state[action.payload.field] = action.payload.data;
      },
      resetState(state: FieldState) {
        return initialState;
      },
    },
});

export const bookingSearchFieldActions = bookingSearchFieldSlice.actions;
export default bookingSearchFieldSlice;