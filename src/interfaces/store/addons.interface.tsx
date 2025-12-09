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
  
 export interface AddonInterface {
    id: number;
    name: string;
    price: number;
    created_at: string;
    updated_at: string;
    store_id: number;
    status: number;
    translations: Translation[];
  }
  