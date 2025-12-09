// Define the interface for a translation
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
  
  // Define the interface for the main object
 export interface AttributeInterface {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    translations: Translation[];
  }