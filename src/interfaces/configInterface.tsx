export interface DefaultLocationInterface {
    lat: string;
    lon: string;
  }
  
export interface LocationInterface {
    default: DefaultLocationInterface;
  }
  
export interface AdminDetailsInterface {
    id: string;
    first_name: string;
    last_name: string;
    profile_image: string;
  }
  
export interface SystemLanguageInterface {
    id: number;
    direction: string;
    code: string;
    status: number;
    default: boolean;
  }
  
export interface AdvancedBookingInterface {
    advanced_booking_restriction_value: number;
    advanced_booking_restriction_type: string;
  }
  
export  interface ConfigInterface {
    provider_can_cancel_booking: number;
    provider_self_registration: number;
    provider_self_delete: number;
    min_payable_amount: number;
    provider_can_edit_booking: number;
    currency_symbol_position: string;
    business_name: string;
    logo: string;
    favicon: string;
    country_code: string;
    business_address: string;
    business_phone: string;
    business_email: string;
    base_url: string;
    currency_decimal_point: string;
    currency_code: string;
    currency_symbol: string;
    about_us: string;
    privacy_policy: string;
    terms_and_conditions: string;
    refund_policy: string;
    cancellation_policy: string;
    default_location: LocationInterface;
    image_base_url: string;
    pagination_limit: number;
    time_format: string;
    max_cash_in_hand_limit_provider: string;
    suspend_on_exceed_cash_limit_provider: number;
    default_commission: string;
    admin_details: AdminDetailsInterface;
    footer_text: string;
    min_versions: {
      min_version_for_android: string;
      min_version_for_ios: string;
    };
    minimum_withdraw_amount: number;
    maximum_withdraw_amount: number;
    phone_number_visibility_for_chatting: number;
    bid_offers_visibility_for_providers: number;
    bidding_status: number;
    phone_verification: number;
    email_verification: number;
    forget_password_verification_method: string;
    otp_resend_time: number;
    booking_otp_verification: number;
    service_complete_photo_evidence: number;
    booking_additional_charge: number;
    additional_charge_label_name: string;
    additional_charge_fee_amount: number;
    payment_gateways: any[]; // Assuming this is an array of objects, you can define a specific type if needed
    system_language: SystemLanguageInterface[];
    instant_booking: number;
    schedule_booking: number;
    schedule_booking_time_restriction: number;
    advanced_booking: AdvancedBookingInterface;
    googlekey:string;
  }
  