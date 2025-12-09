import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DropdownItem } from "@src/commonComponents/dropdownWithIcon/types";

interface FieldState {
    first_name:string;
    last_name:string;
    phone_country:string;
    phone_dial_code:string;
    phone:string;
    email:string;
    password:string;
    profile_image:string;
    identity_type: DropdownItem;
    identity_number:string;
    identity_front_image:string;
    identity_back_image:string;
}

interface SetDataPayload {
    field: keyof FieldState;
    data: string | number | boolean|DropdownItem;
}

const initialState: FieldState = {
    first_name:'',
    last_name:'',
    phone_country:'IN',
    phone_dial_code:'91',
    phone:'',
    email:'',
    password:'',
    profile_image:'',
    identity_type: {
        label: "",
        value: ""
    },
    identity_number:'',
    identity_front_image:'',
    identity_back_image:'',
}

const addServiceManFieldSlice = createSlice({
    name: "addServiceMan",
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

export const addServiceManFieldActions = addServiceManFieldSlice.actions;
export default addServiceManFieldSlice;
  