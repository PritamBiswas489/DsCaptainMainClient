import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConversationInterface } from "@src/interfaces/store/conversations.interface";
interface conversationChannelStateInterface{
    channels:ConversationInterface[];
    isFirstTimeLoading: boolean;
    limit:number;
    offset:number;
    isNoMoreData:boolean;
} 

interface SetDataPayload {
    field: keyof conversationChannelStateInterface;
    data: any;
}

const initialState: conversationChannelStateInterface = {
    channels:[],
    limit:20,
    offset: 1,
    isFirstTimeLoading: true,
    isNoMoreData: true,
}

const conversationChannelSlice = createSlice({
    name: "conversationChannelState",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        setChannels(state: any, action: PayloadAction<ConversationInterface[]>) {
            state.channels = [...state.channels, ...action.payload];
        },
        resetState(state: conversationChannelStateInterface) {
            return initialState;
        },
    },
});

export const conversationChannelActions = conversationChannelSlice.actions;
export default conversationChannelSlice;