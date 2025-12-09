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

export interface UnitInterface {
    id: number;
    unit: string;
    created_at: string;
    updated_at: string;
    translations: Translation[];
}


