import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 

interface FieldState {
  logo:string;
  cover_photo:string;
  name:string;
  email:string;
  phone_country:string;
  phone_dial_code:string;
  phone:string;
  delivery_time:string;
  password:string;
  zone_id:string;
  module_id:string;
  tax:string;
  store_name:string;
  store_address:string;
}

interface SetDataPayload {
  field: keyof FieldState;
  data: string | number | boolean;
}

const initialState: FieldState = {
    logo:'',
    cover_photo:'',
    name:'',
    email:'',
    phone_country : '',
    phone_dial_code:'',
    phone:'',
    delivery_time:'',
    password:'',
    zone_id:'',
    module_id:'',
    tax:'',
    store_name:'',
    store_address:'',
};

const storeRegisterFieldErrorSlice = createSlice({
  name: "storeRegisterError",
  initialState: initialState,
  reducers: {
    setData(state:any, action: PayloadAction<SetDataPayload>) {
      state[action.payload.field] = action.payload.data;
    },
    resetState(state: FieldState) {
      return initialState;
    },
  },
});

export const storeRegisterFieldErrorActions = storeRegisterFieldErrorSlice.actions;
export default storeRegisterFieldErrorSlice;
