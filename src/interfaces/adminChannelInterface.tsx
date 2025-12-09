interface AdminUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    profile_image: string;
    fcm_token: string | null;
    user_type: string;
    created_at: string;
    updated_at: string;
    current_language_key: string;
  }
  
  interface AdminChannelUser {
    id: string;
    channel_id: string;
    user_id: string;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
    is_read: number;
    user: AdminUser;
  }
  
  //Admin Channel Interface
  export interface AdminChannelInterface {
    id: string;
    reference_id: string | null;
    reference_type: string;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
    channel_users_count: number;
    last_message_sent_user: string;
    last_sent_message: string;
    last_sent_attachment_type: string | null;
    last_sent_files_count: number;
    channel_users: AdminChannelUser[];
  }
  