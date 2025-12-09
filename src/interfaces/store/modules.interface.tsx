interface ModuleTranslation {
    id: number;
    translationable_type: string;
    translationable_id: number;
    locale: string;
    key: string;
    value: string;
    created_at: string | null;
    updated_at: string | null;
  }
  
 export interface ModuleInterface {
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
    items_count: number;
    icon_full_url: string;
    thumbnail_full_url: string;
    storage: any[]; // replace `any` with a specific type if storage structure is known
    translations: ModuleTranslation[];
  }
  