import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContentPageDataInterface {
    about_us:string;
    terms_and_conditions:string;
    refund_policy:string;
    return_policy:string;
    cancellation_policy:string;
    privacy_policy:string;
    fetched:boolean
}

interface SetDataPayload {
    field: keyof ContentPageDataInterface;
    data: string | boolean | any;
}

const initialState: ContentPageDataInterface = {
    about_us:'',
    terms_and_conditions:'',
    refund_policy:'',
    return_policy:'',
    cancellation_policy:'',
    privacy_policy:'',
    fetched:false,

};

const contentPagesSlice = createSlice({
    name: "contentPages",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: ContentPageDataInterface) {
            return initialState;
        },
    }

})
export const contentPagesActions = contentPagesSlice.actions;
export default contentPagesSlice;
