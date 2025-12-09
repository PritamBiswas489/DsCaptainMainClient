import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceMenDetailsInterface } from '@src/interfaces/serviceMenDetailsInterface';

 

interface ServiceMenDetailsState {
    data: {id:string,details:ServiceMenDetailsInterface}[]
}

interface SetDataPayload {
    field: keyof ServiceMenDetailsState;
    data: string | boolean | any;
}
interface UpdateServiceMenDetailsPayload {
    id: string;
    details: Partial<ServiceMenDetailsInterface>;
}
const initialState: ServiceMenDetailsState = {
    data: [],
};
const serviceMenDetailsSlice = createSlice({
    name: "serviceMenDetail",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: ServiceMenDetailsState) {
            return initialState;
        },
        addServiceMenArr(state, action: PayloadAction<ServiceMenDetailsInterface>) {
            state.data.push({id:action.payload.id,details:action.payload});
        },
        updateServiceMenDetails(state, action: PayloadAction<UpdateServiceMenDetailsPayload>) {
            const { id, details } = action.payload;
            const index = state.data.findIndex(serviceMan => serviceMan.id === id);
            if (index !== -1) {
                state.data[index].details = {
                    ...state.data[index].details,
                    ...details,
                };
            }
        },
    },
});

export const serviceMenDetailsAction = serviceMenDetailsSlice.actions;
export default serviceMenDetailsSlice;
