import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceInterface } from "@src/interfaces/serviceInterface";

interface ServicesState {
    data: {subCategoryId:string,services:ServiceInterface[]}[];
    selected:{subCategoryId:string,services:ServiceInterface[]}
    offsetPageUrl: string;
    limit: number,
    loading:boolean
}

interface SetDataPayload {
    field: keyof ServicesState;
    data: string | boolean | any;
}


const initialState: ServicesState = {
    data: [],
    selected:{subCategoryId:'', services:[]},
    offsetPageUrl: '?offset=1',
    limit: 200,
    loading:true
};

const servicesFormSlice = createSlice({
    name: "servicesForm",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: ServicesState) {
            return initialState;
        },
        addServices(state, action: PayloadAction<{id:string,services:ServiceInterface[]}>) {
            state.data.push({subCategoryId:action.payload.id,services:action.payload.services});
        },
    }
})


export const serviceFormActions = servicesFormSlice.actions;
export default servicesFormSlice;