import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceMenInterface } from "@src/interfaces/serviceMenInteface";

 
interface ServiceMenState {
    data: ServiceMenInterface[];
    offsetPageUrl: string;
    limit: number;
    searchValue: string;
    isFirstTimeLoading: boolean;
    isNoMoreData: boolean;
}

interface SetDataPayload {
    field: keyof ServiceMenState;
    data: string | boolean | any;
}

interface UpdateServiceMenDetailsPayload {
    id: string;
    details: Partial<ServiceMenInterface>;
}

interface changeStatusServiceMenDetailsPayload{
    id:string,
    status:number
}

const initialState: ServiceMenState = {
    data: [],
    offsetPageUrl: '?offset=1',
    limit: 10,
    searchValue: '',
    isFirstTimeLoading: true,
    isNoMoreData: true,
};

const serviceMenDataSlice = createSlice({
    name: "serviceMenList",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: ServiceMenState) {
            return initialState;
        },
        addServiceMenArr(state, action: PayloadAction<ServiceMenInterface[]>) {
            state.data.push(...action.payload);
        },
        addServiceMen(state, action: PayloadAction<ServiceMenInterface>) {
            state.data.push(action.payload);
        },
        deleteServiceMenById(state, action: PayloadAction<string>) {
            state.data = state.data.filter(serviceMen => serviceMen.id !== action.payload);
        },
        updateServiceMenDetails(state, action: PayloadAction<UpdateServiceMenDetailsPayload>) {
            const { id, details } = action.payload;
            const index = state.data.findIndex(serviceMan => serviceMan.id === id);
            if (index !== -1) {
                state.data[index] = {
                    ...state.data[index],
                    ...details,
                };
            }
        },
        changeStatusServiceMenDetails(state, action: PayloadAction<changeStatusServiceMenDetailsPayload>){
            const { id, status } = action.payload;
            const index = state.data.findIndex(serviceMan => serviceMan.id === id);
            if (index !== -1) {
                state.data[index].is_active = status;
            }
        }
    },
});

export const serviceMenDataAction = serviceMenDataSlice.actions;
export default serviceMenDataSlice;
