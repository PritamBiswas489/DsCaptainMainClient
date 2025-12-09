import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DropdownItem } from "@src/commonComponents/dropdownWithIcon/types";

//
interface FieldState {
    logo:string;
    cover_photo:string;
    name:string;
    email:string;
    phone_country:string;
    phone_dial_code:string;
    phone:string;
    minimum_delivery_time:string;
    maximum_delivery_time:string;
    delivery_time_type:string;
    password:string;
    module_id:string;
    tax:string;
    store_name:string;
    
}


interface SetDataPayload {
    field: keyof FieldState;
    data: string | number | boolean|DropdownItem;
  }

const initialState: FieldState = {
    logo:'',
    cover_photo:'',
    name:'',
    email:'',
    phone_country : 'IN',
    phone_dial_code:'91',
    phone:'',
    minimum_delivery_time:'',
    maximum_delivery_time:'',
    delivery_time_type:'',
    password:'',
    
    module_id:'',
    tax:'',
    store_name:'',
    
}

const storeRegisterFieldSlice = createSlice({
    name: "storeRegister",
    initialState: initialState,
    reducers: {
        setData(state:any, action: PayloadAction<SetDataPayload>) {
          state[action.payload.field] = action.payload.data;
        },
        resetState(state: FieldState) {
          return initialState;
        },
      },
})

export const storeRegisterFieldActions = storeRegisterFieldSlice.actions;
export default storeRegisterFieldSlice;