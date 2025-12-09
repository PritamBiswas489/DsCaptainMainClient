import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreConfigInterface } from "@src/interfaces/store/store.config.interface";

 
const initialConfig: StoreConfigInterface = {
  "business_name": "Dorkar Mall",
  "logo": "2024-03-13-65f1990f6559e.png",
  "logo_full_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/business/2024-03-13-65f1990f6559e.png",
  "address": "Kolkata",
  "phone": "18008890579",
  "email": "we.dorkar@gmail.com",
  "base_urls": {
    "item_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/product",
    "refund_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/refund",
    "customer_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/profile",
    "banner_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/banner",
    "category_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/category",
    "brand_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/brand",
    "review_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/review",
    "notification_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/notification",
    "store_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/store",
    "vendor_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/vendor",
    "store_cover_photo_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/store/cover",
    "delivery_man_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/delivery-man",
    "chat_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/conversation",
    "campaign_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/campaign",
    "business_logo_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/business",
    "order_attachment_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/order",
    "module_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/module",
    "parcel_category_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/parcel_category",
    "landing_page_image_url": "https://dorkarmall.aqualeafitsol.com/public/assets/landing/image",
    "react_landing_page_images": "https://dorkarmall.aqualeafitsol.com/storage/app/public/react_landing",
    "react_landing_page_feature_images": "https://dorkarmall.aqualeafitsol.com/storage/app/public/react_landing/feature",
    "gateway_image_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/payment_modules/gateway_image"
  },
  "s3_base_urls": {
    "item_image_url": "//product",
    "refund_image_url": "//refund",
    "customer_image_url": "//profile",
    "banner_image_url": "//banner",
    "category_image_url": "//category",
    "brand_image_url": "//brand",
    "review_image_url": "//review",
    "notification_image_url": "//notification",
    "store_image_url": "//store",
    "vendor_image_url": "//vendor",
    "store_cover_photo_url": "//store/cover",
    "delivery_man_image_url": "//delivery-man",
    "chat_image_url": "//conversation",
    "campaign_image_url": "//campaign",
    "business_logo_url": "//business",
    "order_attachment_url": "//order",
    "module_image_url": "//module",
    "parcel_category_image_url": "//parcel_category",
    "landing_page_image_url": "//landing/image",
    "react_landing_page_images": "//react_landing",
    "react_landing_page_feature_images": "//react_landing/feature",
    "gateway_image_url": "//payment_modules/gateway_image"
  },
  "country": "IN",
  "default_location": {
    "lat": "22.572646",
    "lng": "88.36389500000001"
  },
  "currency_symbol": "₹",
  "currency_symbol_direction": "left",
  "app_minimum_version_android": 0,
  "app_url_android": null,
  "app_url_ios": null,
  "app_minimum_version_ios": 0,
  "app_minimum_version_android_store": 0,
  "app_url_android_store": null,
  "app_minimum_version_ios_store": 0,
  "app_url_ios_store": null,
  "app_minimum_version_android_deliveryman": 0,
  "app_url_android_deliveryman": null,
  "app_minimum_version_ios_deliveryman": 0,
  "app_url_ios_deliveryman": null,
  "customer_verification": false,
  "prescription_order_status": true,
  "schedule_order": true,
  "order_delivery_verification": true,
  "cash_on_delivery": true,
  "digital_payment": true,
  "digital_payment_info": {
    "digital_payment": true,
    "plugin_payment_gateways": false,
    "default_payment_gateways": true
  },
  "per_km_shipping_charge": 2,
  "minimum_shipping_charge": 10,
  "free_delivery_over": 999,
  "demo": false,
  "maintenance_mode": false,
  "order_confirmation_model": "store",
  "show_dm_earning": true,
  "canceled_by_deliveryman": true,
  "canceled_by_store": true,
  "timeformat": "24",
  "language": [
    {
      "key": "en",
      "value": "English"
    }
  ],
  "sys_language": [
    {
      "key": "en",
      "value": "English",
      "direction": "ltr",
      "default": true
    }
  ],
  "social_login": [
    {
      "login_medium": "google",
      "status": false
    },
    {
      "login_medium": "facebook",
      "status": false
    }
  ],
  "apple_login": [
    {
      "login_medium": "apple",
      "status": false,
      "client_id": ""
    }
  ],
  "toggle_veg_non_veg": true,
  "toggle_dm_registration": false,
  "toggle_store_registration": true,
  "refund_active_status": false,
  "schedule_order_slot_duration": 0,
  "digit_after_decimal_point": 0,
  "module_config": {
    "module_type": [
      "grocery",
      "food",
      "pharmacy",
      "ecommerce",
      "parcel"
    ],
    "grocery": {
      "order_status": {
        "accepted": false
      },
      "order_place_to_schedule_interval": true,
      "add_on": false,
      "stock": true,
      "veg_non_veg": false,
      "unit": true,
      "order_attachment": false,
      "always_open": false,
      "all_zone_service": false,
      "item_available_time": false,
      "show_restaurant_text": false,
      "is_parcel": false,
      "organic": true,
      "cutlery": false,
      "common_condition": false,
      "basic": false,
      "halal": true,
      "brand": false,
      "description": "In this type, You can set delivery slot start after x minutes from current time, No available time for items and has stock for items."
    },
    "food": {
      "order_status": {
        "accepted": true
      },
      "order_place_to_schedule_interval": false,
      "add_on": true,
      "stock": false,
      "veg_non_veg": true,
      "unit": false,
      "order_attachment": false,
      "always_open": false,
      "all_zone_service": false,
      "item_available_time": true,
      "show_restaurant_text": true,
      "is_parcel": false,
      "organic": false,
      "cutlery": true,
      "common_condition": false,
      "basic": false,
      "halal": true,
      "brand": false,
      "description": "In this type, you can set item available time, no stock management for items and has option to add add-on."
    },
    "pharmacy": {
      "order_status": {
        "accepted": false
      },
      "order_place_to_schedule_interval": false,
      "add_on": false,
      "stock": true,
      "veg_non_veg": false,
      "unit": true,
      "order_attachment": true,
      "always_open": false,
      "all_zone_service": false,
      "item_available_time": false,
      "show_restaurant_text": false,
      "is_parcel": false,
      "organic": false,
      "cutlery": false,
      "common_condition": true,
      "basic": true,
      "halal": false,
      "brand": false,
      "description": "In this type, Customer can upload prescription when place order, No available time for items and has stock for items."
    },
    "ecommerce": {
      "order_status": {
        "accepted": false
      },
      "order_place_to_schedule_interval": false,
      "add_on": false,
      "stock": true,
      "veg_non_veg": false,
      "unit": true,
      "order_attachment": false,
      "always_open": true,
      "all_zone_service": true,
      "item_available_time": false,
      "show_restaurant_text": false,
      "is_parcel": false,
      "organic": false,
      "cutlery": false,
      "common_condition": false,
      "basic": false,
      "halal": false,
      "brand": true,
      "description": "In this type, No opening and closing time for store, no available time for items and has stock for items."
    },
    "parcel": {
      "order_status": {
        "accepted": false
      },
      "order_place_to_schedule_interval": false,
      "add_on": false,
      "stock": false,
      "veg_non_veg": false,
      "unit": false,
      "order_attachment": false,
      "always_open": true,
      "all_zone_service": false,
      "item_available_time": false,
      "show_restaurant_text": false,
      "is_parcel": true,
      "organic": false,
      "cutlery": false,
      "common_condition": false,
      "basic": false,
      "halal": false,
      "brand": false,
      "description": ""
    }
  },
  "module": null,
  "parcel_per_km_shipping_charge": 0,
  "parcel_minimum_shipping_charge": 0,
  "social_media": [],
  "footer_text": "Dorkar India Pvt Ltd. @ 2024",
  "cookies_text": "Demo cookie text",
  "fav_icon": "2024-03-13-65f1990f668f0.png",
  "fav_icon_full_url": "https://dorkarmall.aqualeafitsol.com/storage/app/public/business/2024-03-13-65f1990f668f0.png",
  "landing_page_links": {
    "app_url_android_status": "1",
    "app_url_android": "https://play.google.com/store/apps/details?id=com.dorkar.mall_user&hl=en-IN",
    "app_url_ios_status": null,
    "app_url_ios": "https://www.apple.com/app-store/",
    "web_app_url_status": "1",
    "web_app_url": "https://stackfood.6amtech.com/"
  },
  "dm_tips_status": 1,
  "loyalty_point_exchange_rate": 0,
  "loyalty_point_item_purchase_point": 0,
  "loyalty_point_status": 0,
  "customer_wallet_status": 0,
  "ref_earning_status": 1,
  "ref_earning_exchange_rate": 2,
  "refund_policy": 1,
  "cancelation_policy": 0,
  "shipping_policy": 1,
  "loyalty_point_minimum_point": 0,
  "tax_included": 0,
  "home_delivery_status": 1,
  "takeaway_status": 1,
  "active_payment_method_list": [],
  "additional_charge_status": 1,
  "additional_charge_name": "Platform Charge",
  "additional_charge": 3,
  "partial_payment_status": 0,
  "partial_payment_method": "both",
  "dm_picture_upload_status": 1,
  "add_fund_status": 0,
  "offline_payment_status": 1,
  "websocket_status": 0,
  "websocket_url": "",
  "websocket_port": 6001,
  "websocket_key": "",
  "guest_checkout_status": 0,
  "disbursement_type": "manual",
  "restaurant_disbursement_waiting_time": 0,
  "dm_disbursement_waiting_time": 0,
  "min_amount_to_pay_store": 200000,
  "min_amount_to_pay_dm": 1000000,
  "new_customer_discount_status": 0,
  "new_customer_discount_amount": 0,
  "new_customer_discount_amount_type": "amount",
  "new_customer_discount_amount_validity": 0,
  "new_customer_discount_validity_type": "day",
  "store_review_reply": 0,
  "admin_commission": 0,
  "subscription_business_model": 0,
  "commission_business_model": 1,
  "subscription_deadline_warning_days": 7,
  "subscription_deadline_warning_message": null,
  "subscription_free_trial_days": 7,
  "subscription_free_trial_type": "day",
  "subscription_free_trial_status": 1,
  "country_picker_status": 1,
  "external_system": false,
  "drivemond_app_url_android": "",
  "drivemond_app_url_ios": "",
  "firebase_otp_verification": 0
};

const initialState: StoreConfigInterface = initialConfig

const storeConfigAppSlice = createSlice({
    name: "storeConfigApp",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<StoreConfigInterface>) {
            return action.payload
      },
      resetState(state: StoreConfigInterface) {
        return initialState;
      },
    },
  });

  export const storeConfigAppActions = storeConfigAppSlice.actions;
  export default storeConfigAppSlice; 