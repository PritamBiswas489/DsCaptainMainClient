export interface ServiceDetailsInterface {
        id: string;
        name: string;
        short_description: string;
        description: string;
        cover_image: string;
        thumbnail: string;
        order_count: number;
        is_active: number;
        rating_count:  number;
        avg_rating: number;
        min_bidding_price: string;
        category:string;
        zone:string[];
}