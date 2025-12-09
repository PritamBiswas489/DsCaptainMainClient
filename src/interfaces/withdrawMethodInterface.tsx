interface MethodField {
    input_type: string;
    input_name: string;
    placeholder: string;
    is_required: number;
}

interface Translation {
    id: number;
    translationable_type: string;
    translationable_id: string;
    locale: string;
    key: string;
    value: string;
}

export interface WithdrawalMethodInterface {
    id: string;
    method_name: string;
    method_fields: MethodField[];
    is_default: number;
    is_active: number;
    created_at: string;
    updated_at: string;
    translations: Translation[];
}
