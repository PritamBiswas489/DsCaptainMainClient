import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceManChannelInterface } from "@src/interfaces/serviceManChannelsInterface";

interface serviceManChannelStateInterface{
    channels:ServiceManChannelInterface[];
    isFirstTimeLoading: boolean;
    limit:number;
    offset:number;
    isNoMoreData:boolean;
} 

interface SetDataPayload {
    field: keyof serviceManChannelStateInterface;
    data: any;
}

const initialState: serviceManChannelStateInterface = {
    channels:[],
    limit:20,
    offset: 1,
    isFirstTimeLoading: true,
    isNoMoreData: true,
}

const serviceMenChannelSlice = createSlice({
    name: "serviceMenChannelState",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        setChannels(state: any, action: PayloadAction<serviceManChannelStateInterface[]>) {
            state.channels = [...state.channels, ...action.payload];
        },
        resetState(state: serviceManChannelStateInterface) {
            return initialState;
        },
    },
});

export const serviceMenChannelActions = serviceMenChannelSlice.actions;
export default serviceMenChannelSlice;