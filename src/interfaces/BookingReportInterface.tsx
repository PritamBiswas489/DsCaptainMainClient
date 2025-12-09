 

// Define the type for a translation object
export interface TransactionInterface {
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
    translations: TransactionInterface[];
}
export interface CategoryDataInterface {
    id: string;
    name: string;
    translations: TransactionInterface[];
}

export interface SubCategoryDataInterface {
    id: string;
    name: string;
    translations: TransactionInterface[];
}

export interface CustomerInterface {
    id: string;
    first_name: string;
    last_name: string | null;
    email: string | null;
    phone: string;
    identification_number: string | null;
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
  }

  interface Coordinates {
    latitude: string;
    longitude: string;
  }
  
  // Define the interface for Owner
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
  }
  
  // Define the interface for the Company data
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
    owner: Owner;
  }
export interface BookingFilterData{
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
    customer:CustomerInterface;
    provider:Provider;
}
  
export interface BookingCount {
    total_bookings: number;
    accepted: number;
    ongoing: number;
    completed: number;
    canceled: number;
}

export interface BookingAmount {
    total_booking_amount: number;
    total_paid_booking_amount: number;
    total_unpaid_booking_amount: number;
}

export interface ChartData{
  booking_amount:number[];
  tax_amount:number[];
  admin_commission:number[];
  timeline:number[];
}


export interface BookingReportInterface {
    zones:ZoneInterface[];
    categories:CategoryDataInterface[];
    sub_categories:SubCategoryDataInterface[];
    filtered_bookings : BookingFilterData[];
    bookings_count:BookingCount;
    booking_amount:BookingAmount;
    chart_data:ChartData;
    limit:number;
    offset:number;
    isFirstTimeLoading: boolean,
    isNoMoreData: boolean,
}



