export interface PaymentDetailInterface {
    id: string;
    user_id: string;
    provider_id: string;
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
    payment_amount: string;
    payment_status: string;
    is_balance_refunded: number;
    currency_code: string;
    created_at: string;
    updated_at: string;
}
