export interface ConversationsMessageInterface {
    date: string;
    id: number;
    conversation_id: number;
    sender_id: number;
    message: string;
    file: string | null;
    is_seen: number;
    created_at: string; // ISO 8601 format
    updated_at: string; // ISO 8601 format
    file_full_url: string[]; // An array of strings (URLs)
  }
  