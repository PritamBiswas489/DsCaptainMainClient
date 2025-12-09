// forget password redux
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ForgetPasswordInterface {
    email:string;
    phoneCountryCode:string;
    phoneDialCode:string;
    phone:string;
    identity_type:string;
    otp:string;
    enteredOtp:string
    
}

const initialState: ForgetPasswordInterface = {
   email:'',
   phoneCountryCode:'IN',
   phoneDialCode:'91',
   phone:'',
   identity_type:'',
   otp:'',
   enteredOtp:'',
   
};
interface SetDataPayload {
    field: keyof ForgetPasswordInterface;
    data: string | boolean | any;
}

const forgetPasswordSlice = createSlice({
    name: "forgetPassword",
    initialState: initialState,
    reducers: {
        //set data
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        //reset state
        resetState(state: ForgetPasswordInterface) {
            return initialState;
        },  
    },
})
export const forgetPasswordAction = forgetPasswordSlice.actions;
export default forgetPasswordSlice
