import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatMessageInterface } from "@src/interfaces/chatMessegesInterface";

//channel interface
export interface channelInterface  {
        channel_id:string;
        isFirstTimeLoading: boolean;
        isNoMoreData: boolean;
        offset:number;
        limit:number;
        dateMessages:{
            date:string,
            mainDate:string,
            messages: ChatMessageInterface[]
        }[]
}
//chat messages interface 
interface ChatMessagesInterface{
    
    data: channelInterface[],
}
interface SetDataPayload {
    field: keyof ChatMessagesInterface;
    data: string|number|any;
}

const initialState: ChatMessagesInterface = {
    data:[],
}
//chat messages slice
const chatMessagesSlice = createSlice({
    name: "chatMessages",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<SetDataPayload>) {
        state[action.payload.field] = action.payload.data;
      },
      initChannel(state, action: PayloadAction<channelInterface>) {
        const existingChannelIndex = state.data.findIndex(
            (channel) => channel.channel_id === action.payload.channel_id
        );
        if (existingChannelIndex === -1) {
            state.data.push(action.payload);
        }
      },
      updateData(state, action: PayloadAction<channelInterface>) {
        const existingChannelIndex = state.data.findIndex(
            (channel) => channel.channel_id === action.payload.channel_id
        );
        if (existingChannelIndex !== -1) {
            state.data[existingChannelIndex] = {
                ...state.data[existingChannelIndex],   
                ...action.payload,                    
            };
        } else {
            state.data.push(action.payload);
        }
    },
    
    resetState(state: ChatMessagesInterface) {
        return initialState;
    },
    },
});

export const chatMessagesActions = chatMessagesSlice.actions;
export default chatMessagesSlice;
