import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FieldState {
    first_name:string;
    last_name:string;
    phone:string;
    email:string;
    password:string;
    profile_image:string;
    identity_type: string;
    identity_number:string;
    identity_front_image:string;
    identity_back_image:string;
}

interface SetDataPayload {
    field: keyof FieldState;
    data: string | number | boolean;
}

const initialState: FieldState = {
    first_name:'',
    last_name:'',
    phone:'',
    email:'',
    password:'',
    profile_image:'',
    identity_type:'',
    identity_number:'',
    identity_front_image:'',
    identity_back_image:'',
}

const addServiceManErrorFieldSlice = createSlice({
    name: "addServiceManErrorField",
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

export const addServiceManErrorFieldActions = addServiceManErrorFieldSlice.actions;
export default addServiceManErrorFieldSlice;