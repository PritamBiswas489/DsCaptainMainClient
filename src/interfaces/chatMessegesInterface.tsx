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
    fcm_token: string;
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
}

 
export interface ChatMessageInterface {
    id: string;
    channel_id: string;
    message: string;
    user_id: string;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
    user: User;
    conversation_files: string[];
}