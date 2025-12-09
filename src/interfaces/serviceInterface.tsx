//service variant
export interface ServiceVariantInterface {
    id: number,
    variant: string,
    variant_key: string,
    service_id: string,
    price: number,
}
//service interface
export interface ServiceInterface {
    id: string;
    name: string;
    short_description: string;
    description: string;
    cover_image: string;
    thumbnail: string;
    order_count: string;
    avg_rating: number;
    min_bidding_price: number,
    category: string,
    variants:ServiceVariantInterface[]
}