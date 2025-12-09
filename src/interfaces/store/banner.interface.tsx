interface Storage {
    id: number;
    data_type: string;
    data_id: string;
    key: string;
    value: string;
    created_at: string;
    updated_at: string;
}
//Banner interface
export interface BannerInterface {
    id: number;
    title: string;
    type: string;
    image: string;
    status: boolean;
    data: number;
    created_at: string;
    updated_at: string;
    zone_id: number;
    module_id: number;
    featured: boolean;
    default_link: string;
    created_by: string;
    image_full_url: string;
    storage: Storage[];
    translations: any[];
  }
  