export interface ExpenseInterface {
    id: number;
    type: string;
    amount: number;
    order_id: number;
    created_at: string; // ISO 8601 format
    updated_at: string; // ISO 8601 format
    description: string;
    created_by: string; // Allows for other creators if needed
    store_id: number;
    delivery_man_id: number | null;
    user_id: number | null;
}
