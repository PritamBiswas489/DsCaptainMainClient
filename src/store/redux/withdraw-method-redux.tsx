import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WithdrawalMethodInterface } from "@src/interfaces/withdrawMethodInterface";

const initialState: WithdrawalMethodInterface[] = [];

const withdrawMethodSlice = createSlice({
    name: "withdrawMethod",
    initialState: initialState,
    reducers: {
        setWithdrawMethod(state: any, action: PayloadAction<WithdrawalMethodInterface[]>) {
            return action.payload;
        },
        resetState(state: WithdrawalMethodInterface[]) {
            return initialState;
        },
    }
})

export const withdrawMethodActions = withdrawMethodSlice.actions;
export default withdrawMethodSlice;