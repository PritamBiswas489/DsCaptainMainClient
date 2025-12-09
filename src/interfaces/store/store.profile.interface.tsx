interface Translation {
    id: number;
    translationable_type: string;
    translationable_id: number;
    locale: string;
    key: string;
    value: string;
    created_at: string | null;
    updated_at: string | null;
}

export interface Schedule {
    id: number;
    store_id: number;
    day: number;
    opening_time: string;
    closing_time: string;
    created_at: string;
    updated_at: string;
}

interface Module {
    id: number;
    module_name: string;
    module_type: string;
    thumbnail: string;
    status: string;
    stores_count: number;
    created_at: string;
    updated_at: string;
    icon: string;
    theme_id: number;
    description: string;
    all_zone_service: number;
    icon_full_url: string;
    thumbnail_full_url: string;
    storage: any[];
    translations: Translation[];
}

interface Rating {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
}

interface Store {
    id: number;
    name: string;
    phone: string;
    email: string;
    logo: string;
    latitude: string;
    longitude: string;
    address: string;
    footer_text: string | null;
    minimum_order: number;
    comission: number | null;
    schedule_order: boolean;
    status: number;
    vendor_id: number;
    created_at: string;
    updated_at: string;
    free_delivery: boolean;
    cover_photo: string;
    delivery: boolean;
    take_away: boolean;
    item_section: boolean;
    tax: number;
    zone_id: number;
    reviews_section: boolean;
    active: boolean;
    off_day: string;
    self_delivery_system: number;
    pos_system: boolean;
    minimum_shipping_charge: number;
    delivery_time: string;
    veg: number;
    non_veg: number;
    order_count: number;
    total_order: number;
    module_id: number;
    order_place_to_schedule_interval: number;
    featured: number;
    per_km_shipping_charge: number;
    prescription_order: boolean;
    slug: string;
    maximum_shipping_charge: number | null;
    cutlery: boolean;
    meta_title: string | null;
    meta_description: string | null;
    meta_image: string | null;
    announcement: number;
    announcement_message: string | null;
    store_business_model: string;
    package_id: number | null;
    is_recommended: boolean;
    halal_tag_status: boolean;
    extra_packaging_status: boolean | null;
    extra_packaging_amount: number;
    ratings: Rating;
    avg_rating: number;
    rating_count: number;
    positive_rating: number;
    total_items: number | null;
    total_campaigns: number | null;
    current_opening_time: string;
    discount: number | null;
    schedules: Schedule[];
    module: Module;
    gst_status: boolean;
    gst_code: string;
    logo_full_url: string | null;
    cover_photo_full_url: string | null;
    meta_image_full_url: string | null;
    translations: Translation[];
    storage: {
        id: number;
        data_type: string;
        data_id: string;
        key: string;
        value: string;
        created_at: string;
        updated_at: string;
    }[];
}
//store profile interface
export interface StoreProfileInterface {
    id: number;
    f_name: string;
    l_name: string;
    phone: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    bank_name: string | null;
    branch: string | null;
    holder_name: string | null;
    account_no: string | null;
    image: string | null;
    status: number;
    firebase_token: string;
    order_count: number;
    todays_order_count: number;
    this_week_order_count: number;
    this_month_order_count: number;
    member_since_days: number;
    cash_in_hands: number;
    balance: number;
    total_earning: number;
    todays_earning: number;
    this_week_earning: number;
    this_month_earning: number;
    Payable_Balance: number;
    withdraw_able_balance: number;
    adjust_able: boolean;
    show_pay_now_button: boolean;
    pending_withdraw: number;
    total_withdrawn: number;
    dynamic_balance: number;
    dynamic_balance_type: string;
    over_flow_warning: boolean;
    over_flow_block_warning: boolean;
    stores: Store[];
    translations: Translation[];
    subscription_transactions: boolean;
    image_full_url: string | null;
    storage: any[];
}
