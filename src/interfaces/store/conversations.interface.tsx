export interface ConversationInterface {
    id: number;
    sender_id: number;
    sender_type: string;
    receiver_id: number;
    receiver_type: string;
    last_message_id: number;
    last_message_time: string;
    unread_message_count: number;
    created_at: string;
    updated_at: string;
    sender: Sender | undefined;
    receiver: Receiver | undefined;
    last_message: LastMessage | undefined;
}

interface Sender {
    id: number;
    f_name: string;
    l_name: string;
    phone: string;
    email: string;
    image: string;
    admin_id: number | null;
    user_id: number | null;
    vendor_id: number | null;
    deliveryman_id: number | null;
    created_at: string;
    updated_at: string;
    image_full_url: string;
    storage: any[];
    vendor: Vendor;
}

interface Vendor {
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
    image: string;
    status: number;
    firebase_token: string;
    image_full_url: string;
    storage: any[];
    stores: Store[];
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
    rating: number[];
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
    order_place_to_schedule_interval: string | null;
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
    announcement_message: string;
    store_business_model: string;
    package_id: string | null;
    gst_status: boolean;
    gst_code: string;
    logo_full_url: string;
    cover_photo_full_url: string;
    meta_image_full_url: string | null;
    translations: Translation[];
    storage: any[];
}

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

interface Receiver {
    id: number;
    f_name: string;
    l_name: string;
    phone: string;
    email: string;
    image: string | null;
    admin_id: number | null;
    user_id: number | null;
    vendor_id: number | null;
    deliveryman_id: number | null;
    created_at: string;
    updated_at: string;
    image_full_url: string | null;
    storage: any[];
    user: User;
}

interface User {
    id: number;
    f_name: string;
    l_name: string;
    phone: string;
    email: string;
    image: string | null;
    is_phone_verified: number;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    cm_firebase_token: string;
    status: number;
    order_count: number;
    login_medium: string | null;
    social_id: string | null;
    zone_id: number;
    wallet_balance: number;
    loyalty_point: number;
    ref_code: string;
    current_language_key: string;
    ref_by: string | null;
    temp_token: string | null;
    module_ids: string;
    image_full_url: string | null;
    storage: any[];
}

interface LastMessage {
    id: number;
    conversation_id: number;
    sender_id: number;
    message: string;
    file: string | null;
    is_seen: number;
    created_at: string;
    updated_at: string;
    file_full_url: any[];
}
