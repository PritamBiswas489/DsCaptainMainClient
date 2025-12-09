import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Coordinates {
  latitude: string;
  longitude: string;
}

interface OwnerAccount {
  id: string;
  user_id: string;
  balance_pending: number;
  received_balance: number;
  account_payable: number;
  account_receivable: number;
  total_withdrawn: number;
  total_expense: string;
  created_at: string;
  updated_at: string;
}

interface Owner {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  identification_number: string;
  identification_type: string;
  identification_image: string[];
  date_of_birth: string | null;
  gender: string;
  profile_image: string;
  fcm_token: string;
  is_phone_verified: number;
  is_email_verified: number;
  phone_verified_at: string | null;
  email_verified_at: string | null;
  is_active: number;
  user_type: string;
  remember_token: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  wallet_balance: number;
  loyalty_point: number;
  ref_code: string;
  referred_by: string | null;
  login_hit_count: number;
  is_temp_blocked: number;
  temp_block_time: string | null;
  current_language_key: string;
  account: OwnerAccount;
}
interface ServiceProvider {
  id: string;
  user_id: string;
  company_name: string;
  company_phone: string;
  company_address: string;
  company_email: string;
  logo: string;
  contact_person_name: string;
  contact_person_phone: string;
  contact_person_email: string;
  order_count: number;
  service_man_count: number;
  service_capacity_per_day: number;
  rating_count: number;
  avg_rating: number;
  commission_status: number;
  commission_percentage: number;
  is_active: number;
  created_at: string;
  updated_at: string;
  is_approved: number;
  zone_id: string;
  coordinates: Coordinates;
  is_suspended: number;
  deleted_at: string | null;
  service_availability: number;
  cash_limit_status: string;
  owner: Owner;
}




const initialState: ServiceProvider =  {
  id: "",
  user_id: "",
  company_name: "",
  company_phone: "",
  company_address: "",
  company_email: "",
  logo: "",
  contact_person_name: "",
  contact_person_phone: "",
  contact_person_email: "",
  order_count: 0,
  service_man_count: 0,
  service_capacity_per_day: 0,
  rating_count: 0,
  avg_rating: 0,
  commission_status: 0,
  commission_percentage: 0,
  is_active: 0,
  created_at: "",
  updated_at: "",
  is_approved: 0,
  zone_id: "",
  coordinates: {
    latitude: "",
    longitude: ""
  },
  is_suspended: 0,
  deleted_at: null,
  service_availability: 0,
  cash_limit_status: "",
  owner: {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    identification_number: "",
    identification_type: "",
    identification_image: [],
    date_of_birth: null,
    gender: "",
    profile_image: "",
    fcm_token: "",
    is_phone_verified: 0,
    is_email_verified: 0,
    phone_verified_at: null,
    email_verified_at: null,
    is_active: 0,
    user_type: "",
    remember_token: null,
    deleted_at: null,
    created_at: "",
    updated_at: "",
    wallet_balance: 0,
    loyalty_point: 0,
    ref_code: "",
    referred_by: null,
    login_hit_count: 0,
    is_temp_blocked: 0,
    temp_block_time: null,
    current_language_key: "",
    account: {
      id: "",
      user_id: "",
      balance_pending: 0,
      received_balance: 0,
      account_payable: 0,
      account_receivable: 0,
      total_withdrawn: 0,
      total_expense: "0",
      created_at: "",
      updated_at: ""
    }
  }
};

 

const serviceProviderAccountDataSlice = createSlice({
  name: "serviceProvider",
  initialState: initialState,
  reducers: {
    setData(state:any, action: PayloadAction<ServiceProvider>) {
      return action.payload
    },
    resetState(state: ServiceProvider) {
      return initialState;
    },
  },
});

export const serviceProviderAccountDataActions = serviceProviderAccountDataSlice.actions;
export default serviceProviderAccountDataSlice;
