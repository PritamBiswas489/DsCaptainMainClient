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

export interface SubCategoriesInterface {
    id: number;
    name: string;
    image: string;
    parent_id: number;
    position: number;
    status: number;
    created_at: string;
    updated_at: string;
    priority: number;
    module_id: number;
    slug: string;
    featured: number;
    image_full_url: string | null;
    storage: any[];
    translations: Translation[];
}

 
