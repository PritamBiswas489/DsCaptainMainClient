export interface TranslationInterface {
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

export interface CategoryDataInterface {
    id: string;
    name: string;
    translations: TranslationInterface[];
}

export interface SubCategoryDataInterface {
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
    evidence_photos: string[];  // Array of strings for photo paths
    booking_otp: string;
    is_guest: number;
    is_verified: number;
    extra_fee: number;
    total_referral_discount_amount: number;
}

export interface BookingInterface {
    id: string;
    booking_details_id: string;
    booking_id: string;
    service_unit_cost: number;
    service_quantity: number;
    service_tax: number;
    discount_by_admin: number;
    discount_by_provider: number;
    coupon_discount_by_admin: number;
    coupon_discount_by_provider: number;
    campaign_discount_by_admin: number;
    campaign_discount_by_provider: number;
    admin_commission: number;
    provider_earning: number;
    created_at: string;
    updated_at: string;
    booking: Booking;  // Nested booking object
}

interface chartDataInterface {
    normal_discount:number[],
    campaign_discount:number[],
    coupon_discount:number[],
    expenses:number[],
    timeline:number[],
}

interface promotionalCostInterface {
    total_expense:number;
    discount:number;
    coupon:number;
    campaign:number;
}


export interface ExpensesReportInterface {
    zones:ZoneInterface[];
    categories:CategoryDataInterface[];
    sub_categories:SubCategoryDataInterface[];
    filteredBookingAmounts:BookingInterface[];
    chart_data:chartDataInterface;
    promotionalCost:promotionalCostInterface;
    limit:number;
    offset:number;
    isFirstTimeLoading: boolean,
    isNoMoreData: boolean,
}