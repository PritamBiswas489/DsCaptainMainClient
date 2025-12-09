import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceDetailsInterface } from '@src/interfaces/serviceDetailsInterface';


interface ServiceDetailsState {
    data: {id:string,details:ServiceDetailsInterface}[]
    selected:ServiceDetailsInterface
}

const defaultServiceDetails: ServiceDetailsInterface = {
        id: '',
        name: '',
        short_description: '',
        description: '',
        cover_image: '',
        thumbnail: '',
        order_count: 0,
        is_active: 0,
        rating_count:  0,
        avg_rating: 0,
        min_bidding_price: '',
        category:'',
        zone: [],
};

interface SetDataPayload {
    field: keyof ServiceDetailsState;
    data: string | boolean | any;
}

const initialState: ServiceDetailsState = {
    data: [],
    selected:defaultServiceDetails
};

const serviceDetailsSlice = createSlice({
    name: "serviceDetail",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: ServiceDetailsState) {
            return initialState;
        },
        addServiceArr(state, action: PayloadAction<ServiceDetailsInterface>) {
            state.data.push({id:action.payload.id,details:action.payload});
        },
    }
})


export const serviceDetailsAction = serviceDetailsSlice.actions;
export default serviceDetailsSlice;
