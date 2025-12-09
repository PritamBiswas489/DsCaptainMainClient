import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MySubscriptionInterface } from "@src/interfaces/mySubscriptionInterface";


interface MySubscriptionState {
    data: MySubscriptionInterface[];
    offsetPageUrl: string;
    limit: number;
    searchValue: string;
    isFirstTimeLoading: boolean;
    isNoMoreData: boolean;
    needRefresh:boolean
}

interface SetDataPayload {
    field: keyof MySubscriptionState;
    data: string | boolean | any;
}

const initialState: MySubscriptionState = {
    data: [],
    offsetPageUrl: '?offset=1',
    limit: 10,
    searchValue: '',
    isFirstTimeLoading: true,
    isNoMoreData: true,
    needRefresh:true
};


const mySubscriptionsSlice = createSlice({
    name: "mySubscriptions",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: MySubscriptionState) {
            return initialState;
        },
        addMySubscriptionArr(state, action: PayloadAction<MySubscriptionInterface[]>) {
            state.data.push(...action.payload);
        },
        addMySubscription(state, action: PayloadAction<MySubscriptionInterface>) {
            state.data.push(action.payload);
        },
    }
})


export const mySubscriptionsAction = mySubscriptionsSlice.actions;
export default mySubscriptionsSlice;


