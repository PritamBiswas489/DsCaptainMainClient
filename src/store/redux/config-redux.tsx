import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConfigInterface } from "@src/interfaces/configInterface";

 
const initialConfig: ConfigInterface = {
    provider_can_cancel_booking: 0, // defaulting to 0 (false/no)
    provider_self_registration: 0,
    provider_self_delete: 0,
    min_payable_amount: 0,
    provider_can_edit_booking: 0,
    currency_symbol_position: "", // empty string for text
    business_name: "",
    logo: "",
    favicon: "",
    country_code: "",
    business_address: "",
    business_phone: "",
    business_email: "",
    base_url: "",
    currency_decimal_point: "0", // default to "0" or "2" depending on expected behavior
    currency_code: "",
    currency_symbol: "",
    about_us: "",
    privacy_policy: "",
    terms_and_conditions: "",
    refund_policy: "",
    cancellation_policy: "",
    default_location: {
      default: {
        lat: "0.0000", // default to a neutral value
        lon: "0.0000",
      },
    },
    image_base_url: "",
    pagination_limit: 10, // default to 10 or another reasonable number
    time_format: "24", // default to 24-hour format
    max_cash_in_hand_limit_provider: "0",
    suspend_on_exceed_cash_limit_provider: 0,
    default_commission: "0",
    admin_details: {
      id: "",
      first_name: "",
      last_name: "",
      profile_image: "",
    },
    footer_text: "",
    min_versions: {
      min_version_for_android: "1.0",
      min_version_for_ios: "1.0",
    },
    minimum_withdraw_amount: 0,
    maximum_withdraw_amount: 0,
    phone_number_visibility_for_chatting: 0,
    bid_offers_visibility_for_providers: 0,
    bidding_status: 0,
    phone_verification: 0,
    email_verification: 0,
    forget_password_verification_method: "phone",
    otp_resend_time: 0,
    booking_otp_verification: 0,
    service_complete_photo_evidence: 0,
    booking_additional_charge: 0,
    additional_charge_label_name: "",
    additional_charge_fee_amount: 0,
    payment_gateways: [], // empty array
    system_language: [
      {
        id: 1,
        direction: "ltr",
        code: "en",
        status: 1,
        default: true,
      },
    ],
    instant_booking: 0,
    schedule_booking: 0,
    schedule_booking_time_restriction: 0,
    advanced_booking: {
      advanced_booking_restriction_value: 0,
      advanced_booking_restriction_type: "hour",
    },
    googlekey:''
  };

  const initialState: ConfigInterface = initialConfig

const configAppSlice = createSlice({
    name: "configApp",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<ConfigInterface>) {
            return action.payload
      },
      resetState(state: ConfigInterface) {
        return initialState;
      },
    },
  });

  export const configAppActions = configAppSlice.actions;
  export default configAppSlice; 