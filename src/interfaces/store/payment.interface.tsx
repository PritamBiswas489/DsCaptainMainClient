export interface PaymentInterface {
    amount: number;
    created_at: string; // ISO 8601 datetime string
    created_by: string;
    current_balance: number;
    from_id: number;
    from_type: string;
    id: number;
    method: string;
    payment_time: string; // Human-readable datetime string
    ref: string;
    status: string; // Assuming status is an enum
    type: string; // Assuming this is a constant string
    updated_at: string; // ISO 8601 datetime string
}