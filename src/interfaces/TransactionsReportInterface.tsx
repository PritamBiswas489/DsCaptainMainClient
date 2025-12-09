
export interface FinancialAccount {
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
  
interface TranslationInterface {
    id: number;
    translationable_type: string;
    translationable_id: string;
    locale: string;
    key: string;
    value: string;
}

// Define the type for the main data object
export interface ZoneInterface {
    id: string;
    name: string;
    translations: TranslationInterface[];
}
  
interface Booking {
  id: string;
  readable_id: number;
  customer_id: string;
  provider_id: string;
  zone_id: string;
  booking_status: string;
  is_paid: number;
  payment_method: string;
  transaction_id: string;
  total_booking_amount: number;
  total_tax_amount: number;
  total_discount_amount: number;
  service_schedule: string;
  service_address_id: string;
  created_at: string;
  updated_at: string;
  category_id: string;
  sub_category_id: string;
  serviceman_id: string;
  total_campaign_discount_amount: number;
  total_coupon_discount_amount: number;
  coupon_code: string | null;
  is_checked: number;
  additional_charge: number;
  additional_tax_amount: number;
  additional_discount_amount: number;
  additional_campaign_discount_amount: number;
  removed_coupon_amount: string;
  evidence_photos: string[];
  booking_otp: string;
  is_guest: number;
  is_verified: number;
  extra_fee: number;
  total_referral_discount_amount: number;
}

interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  identification_number: string | null;
  identification_type: string;
  identification_image: string[];
  date_of_birth: string | null;
  gender: string;
  profile_image: string;
  fcm_token: string | null;
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
  provider?: Provider | null;
}

interface Provider {
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
}

interface Coordinates {
  latitude: string;
  longitude: string;
}


export interface Transaction {
    id: string;
    ref_trx_id: string;
    booking_id: string;
    trx_type: string;
    debit: number;
    credit: number;
    balance: number;
    from_user_id: string;
    to_user_id: string;
    created_at: string;
    updated_at: string;
    from_user_account: string;
    to_user_account: string | null;
    reference_note: string | null;
    is_guest: number;
    booking: Booking;
    from_user: User;
    to_user: User;
  }

  //Transaction report interface
  export interface TransactionReportInterface {
     zones : ZoneInterface[];
     filteredTransaction: Transaction[];
     accountInfo: FinancialAccount;
     limit: number;
     offset: number;
     isFirstTimeLoading: boolean;
     isNoMoreData: boolean;
  }