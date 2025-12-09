import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DropdownItem } from "@src/commonComponents/dropdownWithIcon/types";

interface FieldState {
    company_name:string;
    company_phone_country:string;
    company_phone_dial_code:string;
    company_phone:string;
    company_address:string;
    company_email:string;
    contact_person_name:string;
    contact_person_country:string;
    contact_person_dial_code:string;
    contact_person_phone:string;
    contact_person_email:string;
    provider_name:string;
    provider_email:string;
    provider_phone_country:string;
    provider_phone_dial_code:string;
    provider_phone:string;
    provider_password:string;
    zone_id : string;
    identity_type: DropdownItem;
    identity_number:string;
    latitude:number;
    longitude:number;
    company_logo:string;
    identity_front_image:string;
    identity_back_image:string;

}

interface SetDataPayload {
  field: keyof FieldState;
  data: string | number | boolean|DropdownItem;
}

const initialState: FieldState = {
    company_name: '',
    company_phone_country : 'IN',
    company_phone_dial_code:'91',
    company_phone:'',
    company_address:'',
    company_email:'',
    contact_person_name:'',
    contact_person_country : 'IN',
    contact_person_dial_code:'91',
    contact_person_phone:'',
    contact_person_email:'',
    provider_name:'',
    provider_email:'',
    provider_phone_country:'IN',
    provider_phone_dial_code:'91',
    provider_phone:'',
    provider_password:'',
    zone_id :'',
    identity_type : {
      label: "",
      value: ""
    },
    identity_number : '',
    latitude: 0,
    longitude: 0,
    company_logo:'',
    identity_front_image : '',
    identity_back_image : '',
};

const registerFieldSlice = createSlice({
  name: "user",
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

export const registerFieldActions = registerFieldSlice.actions;
export default registerFieldSlice;
