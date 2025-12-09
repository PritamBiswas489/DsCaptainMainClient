interface Category {
    id: string;
    position: number;
    name: string;
}

interface AddOnTranslation {
    id: number;
    translationable_type: string;
    translationable_id: number;
    locale: string;
    key: string;
    value: string;
    created_at: string | null;
    updated_at: string | null;
}

interface AddOn {
    id: number;
    name: string;
    price: number;
    created_at: string;
    updated_at: string;
    store_id: number;
    status: number;
    translations: AddOnTranslation[];
}

interface VariationValue {
    label: string;
    optionPrice: string;
}

interface FoodVariation {
    name: string;
    type: string;
    min: string;
    max: string;
    required: string;
    values: VariationValue[];
}

interface TagPivot {
    item_id: number;
    tag_id: number;
}

interface Tag {
    id: number;
    tag: string;
    created_at: string;
    updated_at: string;
    pivot: TagPivot;
}

interface Storage {
    id: number;
    data_type: string;
    data_id: string;
    key: string;
    value: string;
    created_at: string;
    updated_at: string;
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
    storage: Storage[];
    translations: Translation[];
}

export interface StoreItemInterface {
    id: number;
    name: string;
    description: string;
    image: string | null;
    category_id: number;
    category_ids: Category[];
    variations: any[];
    add_ons: AddOn[];
    attributes: any[];
    choice_options: any[];
    price: number;
    tax: number;
    tax_type: string;
    discount: number;
    discount_type: string;
    available_time_starts: string;
    available_time_ends: string;
    veg: number;
    status: number;
    store_id: number;
    created_at: string;
    updated_at: string;
    order_count: number;
    avg_rating: number;
    rating_count: number;
    module_id: number;
    stock: number;
    unit_id: number | null;
    images: any[];
    food_variations: FoodVariation[];
    slug: string;
    recommended: number;
    organic: number;
    maximum_cart_quantity: number;
    is_approved: number;
    is_halal: number;
    module_type: string;
    store_name: string;
    is_campaign: number;
    zone_id: number;
    flash_sale: number;
    store_discount: number;
    schedule_order: boolean;
    delivery_time: string;
    free_delivery: boolean;
    unit: string | null;
    min_delivery_time: number;
    max_delivery_time: number;
    common_condition_id: number;
    brand_id: number;
    is_basic: number;
    is_prescription_required: number;
    halal_tag_status: number;
    unit_type: string | null;
    image_full_url: string | null;
    images_full_url: string[];
    tags: Tag[];
    storage: Storage[];
    translations: Translation[];
    module: Module;
    ecommerce_item_details: any;
}
