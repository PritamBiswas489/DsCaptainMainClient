import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WithDrawListInterface } from "@src/interfaces/withdrawListInterface";


export interface withdrawsInterface {
    isFirstTimeLoading: boolean;
    isNoMoreData: boolean;
    offset: number;
    limit: number;
    data: WithDrawListInterface[]
}

const initialState: withdrawsInterface = {
    data: [],
    limit: 40,
    offset: 1,
    isFirstTimeLoading: true,
    isNoMoreData: true,
}


interface SetDataPayload {
    field: keyof withdrawsInterface;
    data: string | number | any;
}

const withdrawListingSlice = createSlice({
    name: "withdrawList",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        setWithdraws(state: any, action: PayloadAction<WithDrawListInterface[]>) {
            state.data = [...state.data, ...action.payload];
        },
        resetState(state: withdrawsInterface) {
            return initialState;
        },
    },
});


export const withdrawListingActions = withdrawListingSlice.actions;
export default withdrawListingSlice;