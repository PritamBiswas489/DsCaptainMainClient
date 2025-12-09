import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DropdownItem } from "@src/commonComponents/dropdownWithIcon/types";

interface FieldState {
  firstName:string;
  lastName:string;
  phoneNumber:string;
  password:string;
  confirm_password:string;
}

interface SetDataPayload {
    field: keyof FieldState;
    data: string | number | boolean| DropdownItem;
}

const initialState: FieldState = {
    firstName:'',
    lastName:'',
    phoneNumber:'',
    password:'',
    confirm_password:''
}

const vendorProfileUpdateErrorFieldSlice = createSlice({
    name: "vendorProfileErrorField",
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
  
  export const vendorProfileUpdateErrorFieldActions = vendorProfileUpdateErrorFieldSlice.actions;
  export default vendorProfileUpdateErrorFieldSlice;
