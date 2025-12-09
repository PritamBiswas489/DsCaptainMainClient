
  interface BaseUrls {
    item_image_url: string;
    refund_image_url: string;
    customer_image_url: string;
    banner_image_url: string;
    category_image_url: string;
    brand_image_url: string;
    review_image_url: string;
    notification_image_url: string;
    store_image_url: string;
    vendor_image_url: string;
    store_cover_photo_url: string;
    delivery_man_image_url: string;
    chat_image_url: string;
    campaign_image_url: string;
    business_logo_url: string;
    order_attachment_url: string;
    module_image_url: string;
    parcel_category_image_url: string;
    landing_page_image_url: string;
    react_landing_page_images: string;
    react_landing_page_feature_images: string;
    gateway_image_url: string;
  }
  
  interface S3BaseUrls {
    item_image_url: string;
    refund_image_url: string;
    customer_image_url: string;
    banner_image_url: string;
    category_image_url: string;
    brand_image_url: string;
    review_image_url: string;
    notification_image_url: string;
    store_image_url: string;
    vendor_image_url: string;
    store_cover_photo_url: string;
    delivery_man_image_url: string;
    chat_image_url: string;
    campaign_image_url: string;
    business_logo_url: string;
    order_attachment_url: string;
    module_image_url: string;
    parcel_category_image_url: string;
    landing_page_image_url: string;
    react_landing_page_images: string;
    react_landing_page_feature_images: string;
    gateway_image_url: string;
  }
  
  interface Location {
    lat: string;
    lng: string;
  }
  
interface DigitalPaymentInfo {
    digital_payment: boolean;
    plugin_payment_gateways: boolean;
    default_payment_gateways: boolean;
}
  
interface Language {
    key: string;
    value: string;
}
  
interface SysLanguage {
    key: string;
    value: string;
    direction: string;
    default: boolean;
}
  
interface SocialLogin {
    login_medium: string;
    status: boolean;
}
  
interface AppleLogin {
    login_medium: string;
    status: boolean;
    client_id: string;
}
  
interface ModuleConfig {
    module_type: string[];
    grocery: ModuleDetails;
    food: ModuleDetails;
    pharmacy: ModuleDetails;
    ecommerce: ModuleDetails;
    parcel: ModuleDetails;
}
  
interface ModuleDetails {
    order_status: OrderStatus;
    order_place_to_schedule_interval: boolean;
    add_on: boolean;
    stock: boolean;
    veg_non_veg: boolean;
    unit: boolean;
    order_attachment: boolean;
    always_open: boolean;
    all_zone_service: boolean;
    item_available_time: boolean;
    show_restaurant_text: boolean;
    is_parcel: boolean;
    organic: boolean;
    cutlery: boolean;
    common_condition: boolean;
    basic: boolean;
    halal: boolean;
    brand: boolean;
    description: string;
}
  
interface OrderStatus {
    accepted: boolean;
}
  
interface LandingPageLinks {
    app_url_android_status: string;
    app_url_android: string;
    app_url_ios_status: string | null;
    app_url_ios: string;
    web_app_url_status: string;
    web_app_url: string;
}

//Store config interface
export interface StoreConfigInterface {
    business_name: string;
    logo: string;
    logo_full_url: string;
    address: string;
    phone: string;
    email: string;
    base_urls: BaseUrls;
    s3_base_urls: S3BaseUrls;
    country: string;
    default_location: Location;
    currency_symbol: string;
    currency_symbol_direction: string;
    app_minimum_version_android: number;
    app_url_android: string | null;
    app_url_ios: string | null;
    app_minimum_version_ios: number;
    app_minimum_version_android_store: number;
    app_url_android_store: string | null;
    app_minimum_version_ios_store: number;
    app_url_ios_store: string | null;
    app_minimum_version_android_deliveryman: number;
    app_url_android_deliveryman: string | null;
    app_minimum_version_ios_deliveryman: number;
    app_url_ios_deliveryman: string | null;
    customer_verification: boolean;
    prescription_order_status: boolean;
    schedule_order: boolean;
    order_delivery_verification: boolean;
    cash_on_delivery: boolean;
    digital_payment: boolean;
    digital_payment_info: DigitalPaymentInfo;
    per_km_shipping_charge: number;
    minimum_shipping_charge: number;
    free_delivery_over: number;
    demo: boolean;
    maintenance_mode: boolean;
    order_confirmation_model: string;
    show_dm_earning: boolean;
    canceled_by_deliveryman: boolean;
    canceled_by_store: boolean;
    timeformat: string;
    language: Language[];
    sys_language: SysLanguage[];
    social_login: SocialLogin[];
    apple_login: AppleLogin[];
    toggle_veg_non_veg: boolean;
    toggle_dm_registration: boolean;
    toggle_store_registration: boolean;
    refund_active_status: boolean;
    schedule_order_slot_duration: number;
    digit_after_decimal_point: number;
    module_config: ModuleConfig;
    module: null | string;
    parcel_per_km_shipping_charge: number;
    parcel_minimum_shipping_charge: number;
    social_media: any[];
    footer_text: string;
    cookies_text: string;
    fav_icon: string;
    fav_icon_full_url: string;
    landing_page_links: LandingPageLinks;
    dm_tips_status: number;
    loyalty_point_exchange_rate: number;
    loyalty_point_item_purchase_point: number;
    loyalty_point_status: number;
    customer_wallet_status: number;
    ref_earning_status: number;
    ref_earning_exchange_rate: number;
    refund_policy: number;
    cancelation_policy: number;
    shipping_policy: number;
    loyalty_point_minimum_point: number;
    tax_included: number;
    home_delivery_status: number;
    takeaway_status: number;
    active_payment_method_list: any[];
    additional_charge_status: number;
    additional_charge_name: string;
    additional_charge: number;
    partial_payment_status: number;
    partial_payment_method: string;
    dm_picture_upload_status: number;
    add_fund_status: number;
    offline_payment_status: number;
    websocket_status: number;
    websocket_url: string;
    websocket_port: number;
    websocket_key: string;
    guest_checkout_status: number;
    disbursement_type: string;
    restaurant_disbursement_waiting_time: number;
    dm_disbursement_waiting_time: number;
    min_amount_to_pay_store: number;
    min_amount_to_pay_dm: number;
    new_customer_discount_status: number;
    new_customer_discount_amount: number;
    new_customer_discount_amount_type: string;
    new_customer_discount_amount_validity: number;
    new_customer_discount_validity_type: string;
    store_review_reply: number;
    admin_commission: number;
    subscription_business_model: number;
    commission_business_model: number;
    subscription_deadline_warning_days: number;
    subscription_deadline_warning_message: string | null;
    subscription_free_trial_days: number;
    subscription_free_trial_type: string;
    subscription_free_trial_status: number;
    country_picker_status: number;
    external_system: boolean;
    drivemond_app_url_android: string;
    drivemond_app_url_ios: string;
    firebase_otp_verification: number;
}
  