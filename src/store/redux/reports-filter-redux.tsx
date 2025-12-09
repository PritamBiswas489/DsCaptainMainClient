import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 
interface ReportFilterInterface {
    zone: string;
    category : string;
    subcategory: string;
    status: string;
    timerange:string;
    fromDate:string;
    toDate:string;     
}


const initialState: ReportFilterInterface = {
    zone: '',
    category : '',
    subcategory: '',
    status: '',
    timerange:'',
    fromDate:'',
    toDate:'',   
}

interface SetDataPayload {
    field: keyof ReportFilterInterface;
    data: string | number | boolean | any;
}

const reportFilterSlice = createSlice({
    name: "reportFilter",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<SetDataPayload>) {
        state[action.payload.field] = action.payload.data;
      },
      resetState(state: ReportFilterInterface) {
        return initialState;
      },
    },
});

export const reportFiltersActions = reportFilterSlice.actions;
export default reportFilterSlice;


