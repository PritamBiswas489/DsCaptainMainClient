export interface CampaignInterface {
    id: number;
    title: string;
    image: string;
    description: string;
    status: number;
    admin_id: number | null;
    created_at: string;
    updated_at: string;
    start_time: string;
    end_time: string;
    module_id: number;
    available_date_starts: string;
    available_date_ends: string;
    vendor_status: number | null;
    is_joined: boolean;
    image_full_url: string;
    storage: Storage[];
    translations: Translation[];
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
  