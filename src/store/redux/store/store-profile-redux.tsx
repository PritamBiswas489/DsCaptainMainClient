import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreProfileInterface } from "@src/interfaces/store/store.profile.interface";

const initialState: StoreProfileInterface = {
    id: 0,
    f_name: "",
    l_name: "",
    phone: "",
    email: "",
    email_verified_at: null,
    created_at: "",
    updated_at: "",
    bank_name: null,
    branch: null,
    holder_name: null,
    account_no: null,
    image: null,
    status: 0,
    firebase_token: "",
    order_count: 0,
    todays_order_count: 0,
    this_week_order_count: 0,
    this_month_order_count: 0,
    member_since_days: 0,
    cash_in_hands: 0,
    balance: 0,
    total_earning: 0,
    todays_earning: 0,
    this_week_earning: 0,
    this_month_earning: 0,
    Payable_Balance: 0,
    withdraw_able_balance: 0,
    adjust_able: false,
    show_pay_now_button: false,
    pending_withdraw: 0,
    total_withdrawn: 0,
    dynamic_balance: 0,
    dynamic_balance_type: "",
    over_flow_warning: false,
    over_flow_block_warning: false,
    stores: [],
    translations: [],
    subscription_transactions: false,
    image_full_url: null,
    storage: []
};

const storeProfileDataSlice = createSlice({
    name: "storeProfileData",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<StoreProfileInterface>) {
        return action.payload
      },
      resetState(state: StoreProfileInterface) {
        return initialState;
      },
    },
  });
  
  export const storeProfileDataActions = storeProfileDataSlice.actions;
  export default storeProfileDataSlice;
