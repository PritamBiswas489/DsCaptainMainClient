import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReportFilterInterface {
    zone: string;
    category : string;
    subcategory: string;
    timerange:string;
    fromDate:string;
    toDate:string;     
}

const initialState: ReportFilterInterface = {
    zone: '',
    category : '',
    subcategory: '',
    timerange:'',
    fromDate:'',
    toDate:'',   
}

interface SetDataPayload {
    field: keyof ReportFilterInterface;
    data: string | number | boolean | any;
}

const businessReportFilterSlice = createSlice({
    name: "businessReportFilter",
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

export const businessReportFiltersActions = businessReportFilterSlice.actions;
export default businessReportFilterSlice;
