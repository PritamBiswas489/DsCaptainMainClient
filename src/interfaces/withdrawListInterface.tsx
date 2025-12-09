interface WithdrawalMethodFields {
    field_one: string;
    field_two: string;
}

interface Account {
    id: string;
    user_id: string;
    balance_pending: number;
    received_balance: number;
    account_payable: number;
    account_receivable: number;
    total_withdrawn: number;
    total_expense: string;
    created_at: string;
    updated_at: string;
}

interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    identification_number: string;
    identification_type: string;
    identification_image: string[];
    date_of_birth: string | null;
    gender: string;
    profile_image: string;
    fcm_token: string | null;
    is_phone_verified: number;
    is_email_verified: number;
    phone_verified_at: string | null;
    email_verified_at: string | null;
    is_active: number;
    user_type: string;
    remember_token: string | null;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
    wallet_balance: number;
    loyalty_point: number;
    ref_code: string;
    referred_by: string | null;
    login_hit_count: number;
    is_temp_blocked: number;
    temp_block_time: string | null;
    current_language_key: string;
    account: Account;
}

interface RequestUpdater {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    identification_number: string;
    identification_type: string;
    identification_image: string[];
    date_of_birth: string | null;
    gender: string;
    profile_image: string;
    fcm_token: string | null;
    is_phone_verified: number;
    is_email_verified: number;
    phone_verified_at: string | null;
    email_verified_at: string | null;
    is_active: number;
    user_type: string;
    remember_token: string | null;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
    wallet_balance: number;
    loyalty_point: number;
    ref_code: string;
    referred_by: string | null;
    login_hit_count: number;
    is_temp_blocked: number;
    temp_block_time: string | null;
    current_language_key: string;
    account: Account;
}

export interface WithDrawListInterface {
    id: string;
    user_id: string;
    request_updated_by: string;
    amount: number;
    request_status: string;
    created_at: string;
    updated_at: string;
    is_paid: number;
    note: string;
    admin_note: string;
    withdrawal_method_id: string;
    withdrawal_method_fields: WithdrawalMethodFields;
    user: User;
    request_updater: RequestUpdater;
}
