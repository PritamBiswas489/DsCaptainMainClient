import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface homeOrderInterface {
   refreshOrders:boolean
}

const initialState: homeOrderInterface = {
   refreshOrders: true,
};

interface SetDataPayload {
   field: keyof homeOrderInterface;
   data: string | boolean | any;
}

const storeHomeOrderSlice = createSlice({
    name: "StorehomeOrderList",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: homeOrderInterface) {
            return initialState;
        },  
    },
})

export const storeHomeOrderActions = storeHomeOrderSlice.actions;
export default storeHomeOrderSlice
