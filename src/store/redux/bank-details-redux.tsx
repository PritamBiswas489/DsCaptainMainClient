import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FieldState {
    is_details_loaded:boolean;
    bank_name:string;
    branch_name:string;
    acc_no:string;
    acc_holder_name:string;
    routing_number:string;
}

interface SetDataPayload {
    field: keyof FieldState;
    data: string | number | boolean;
}

const initialState: FieldState = {
    is_details_loaded:false,
    bank_name:'',
    branch_name:'',
    acc_no:'',
    acc_holder_name:'',
    routing_number:'',
}

const bankDetailsSlice = createSlice({
    name: "bankDetails",
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

export  const   bankDetailsActions = bankDetailsSlice.actions;
export  default bankDetailsSlice;