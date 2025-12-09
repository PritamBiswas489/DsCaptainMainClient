//withdraw interface
export interface WithdrawInterface {
    admin_id: number | null;
    amount: number;
    bank_name: string;
    delivery_man_id: number | null;
    detail: string | null;
    id: number;
    method: string | null;
    requested_at: string;  
    status: string;  
    transaction_note: string;
    type: string; 
    updated_at: string;  
    vendor_id: number;
    withdrawal_method_fields: any | null;  
    withdrawal_method_id: number | null;
}
