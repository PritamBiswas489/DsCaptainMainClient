import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 
interface ReportFilterInterface {
    zone: string;
    transaction_type: string;
    timerange:string;
    fromDate:string;
    toDate:string;     
}


const initialState: ReportFilterInterface = {
    zone: '',
    transaction_type:'all',
    timerange:'',
    fromDate:'',
    toDate:'',   
}

interface SetDataPayload {
    field: keyof ReportFilterInterface;
    data: string | number | boolean | any;
}

const transactionReportFilterSlice = createSlice({
    name: "transactionReportFilter",
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

export const transactionsReportFiltersActions = transactionReportFilterSlice.actions;
export default transactionReportFilterSlice;


