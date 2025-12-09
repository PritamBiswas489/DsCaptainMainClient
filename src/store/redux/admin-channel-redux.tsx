import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdminChannelInterface } from "@src/interfaces/adminChannelInterface";

interface adminChannelStateInterface{
    channel:AdminChannelInterface | null;
    isFirstTimeLoading: boolean;
}
interface SetDataPayload {
    field: keyof adminChannelStateInterface;
    data: any;
}
const initialState: adminChannelStateInterface = {
    channel:null,
    isFirstTimeLoading:true,
}
const adminChannelSlice = createSlice({
    name: "adminChannelState",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: adminChannelStateInterface) {
            return initialState;
        },
    },
});

export const adminChannelActions = adminChannelSlice.actions;
export default adminChannelSlice;