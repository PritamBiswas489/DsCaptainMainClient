import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { 
    Transaction, 
    TransactionReportInterface 
} from "@src/interfaces/TransactionsReportInterface";


const initialState: TransactionReportInterface = {
    zones:[],
    filteredTransaction:[],
    accountInfo:{
        id: '',
        user_id: '',
        balance_pending: 0,
        received_balance: 0,
        account_payable: 0,
        account_receivable: 0,
        total_withdrawn: 0,
        total_expense: '',
        created_at: '',
        updated_at: '',
    },
    limit:20,
    offset: 1,
    isFirstTimeLoading: true,
    isNoMoreData: true,
}

interface SetDataPayload {
    field: keyof TransactionReportInterface;
    data: string | number | boolean | any;
}

const transactionReportSlice = createSlice({
    name: "transactionReports",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        setReports(state: any, action: PayloadAction<Transaction[]>) {
            state.filteredTransaction = [...state.filteredTransaction, ...action.payload];
        },
        resetState(state: TransactionReportInterface) {
            return initialState;
        },
    },
});

export const transactionReportActions = transactionReportSlice.actions;
export default transactionReportSlice;