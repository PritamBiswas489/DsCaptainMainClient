import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaymentDetailInterface } from "@src/interfaces/paymentInterface";

export interface PaymentInterface {
    isFirstTimeLoading: boolean;
    isNoMoreData: boolean;
    offset: number;
    limit: number;
    data: PaymentDetailInterface[]
}


const initialState: PaymentInterface = {
    data: [],
    limit: 40,
    offset: 1,
    isFirstTimeLoading: true,
    isNoMoreData: true,
}

interface SetDataPayload {
    field: keyof PaymentInterface;
    data: string | number | any;
}

const paymentListingSlice = createSlice({
    name: "paymentList",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        setPayments(state: any, action: PayloadAction<PaymentInterface[]>) {
            state.data = [...state.data, ...action.payload];
        },
        resetState(state: PaymentInterface) {
            return initialState;
        },
    },
});
export const paymentListingActions = paymentListingSlice.actions;
export default paymentListingSlice;
