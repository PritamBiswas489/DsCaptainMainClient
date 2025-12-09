export interface BookingServiceListInterface {
    serviceId:string;
    variantKey:string;
    serviceName: string;
    serviceUnitCost: number;
    serviceQuantity: number;
    serviceTotalCost: number;
    serviceImage: string;
    servicethumbnail:string;
    
}

export interface BookingServiceAddressInterface {
    lat: string;
    lon: string;
    city: string;
    street: string;
    zip_code: string;
    country: string;
    address: string;
    contact_person_name: string;
    contact_person_number: string;
    address_label: string;
}

export interface BookingServiceCustomerInterface {
    firstName: string;
    lastName: string;
    phone: string;
    gender: string;
    profileImage: string;
}
export interface BookingServiceProviderInterface {
    companyName: string,
    companyPhone: string,
    companyAddress: string,
    logo: string,
    contactPersonName: string,
    contactPersonPhone: string,
    contactPersonEmail: string,
    avg_rating:number
}

export interface BookingServiceServicemenInterface {
    name:string;
    phone:string;
    gender:string;
    profileImage:string;
    user_id:string;
    
}
export interface BookingServiceStatusHistories {
    booking_status:string;
    created_at:string;
}

export interface BookingDetailsInterface {
    id: string;
    readable_id: string;
    customer_id: string | null;
    provider_id: string | null;
    serviceman_id: string | null;
    category_id:string | null;
    sub_category_id:string | null;
    booking_status: string;
    is_paid: number;
    payment_method: string;
    transaction_id: string;
    total_booking_amount: number;
    total_tax_amount: number;
    total_discount_amount: number;
    total_campaign_discount_amount: number;
    total_coupon_discount_amount: number;
    is_checked: number;
    additional_charge: number;
    additional_tax_amount: number;
    additional_discount_amount: number;
    additional_campaign_discount_amount: number;
    service_schedule: string;
    created_at: string;
    servicesList: BookingServiceListInterface[];
    serviceAddress: BookingServiceAddressInterface;
    customerInfo: BookingServiceCustomerInterface;
    providerInfo: BookingServiceProviderInterface;
    serviceMeninfo:BookingServiceServicemenInterface;
    statusHistories:BookingServiceStatusHistories[];
    evidence_photos:string[]
}