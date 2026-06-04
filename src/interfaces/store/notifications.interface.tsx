export interface NotificationsInterface {
    id : string;
    title : string;
    description : string;
    cover_image : string;
    date:string;
    time:string;
    status:boolean;
    image_full_url : string;
    order_id : number | string;
}