import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerChannelInterface } from "@src/interfaces/customerChannelsInterface";

interface customerChannelStateInterface{
    channels:CustomerChannelInterface[];
    isFirstTimeLoading: boolean;
    limit:number;
    offset:number;
    isNoMoreData:boolean;
} 

interface SetDataPayload {
    field: keyof customerChannelStateInterface;
    data: any;
}

const initialState: customerChannelStateInterface = {
    channels:[],
    limit:20,
    offset: 1,
    isFirstTimeLoading: true,
    isNoMoreData: true,
}

const customerChannelSlice = createSlice({
    name: "customerChannelState",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        setChannels(state: any, action: PayloadAction<CustomerChannelInterface[]>) {
            state.channels = [...state.channels, ...action.payload];
        },
        resetState(state: customerChannelStateInterface) {
            return initialState;
        },
    },
});

export const customerChannelActions = customerChannelSlice.actions;
export default customerChannelSlice;