import { configureStore } from "@reduxjs/toolkit";
import serviceProviderAccountDataSlice from "./redux/service-provider-account-data.redux";
import registerFieldSlice from "./redux/register-field-redux";
import zoneDataSlice from "./redux/zone-list-redux";
import registerFieldErrorSlice from "./redux/register-error-redux";
import profileUpdateFieldSlice from "./redux/profile-field-redux";
import mapFieldSlice from "./redux/map-address-redux";
import profileUpdateErrorFieldSlice from "./redux/profile-error-redux";
import addServiceManFieldSlice from "./redux/add-service-man-redux";
import addServiceManErrorFieldSlice from "./redux/add-service-man-error-redux";
import bankDetailsSlice from "./redux/bank-details-redux";
import reviewsDataSlice from "./redux/reviews-list-redux";
import serviceMenDataSlice from "./redux/servicemen-list";
import ServiceMenSearchFieldSlice from "./redux/servicemen-search-field";
import serviceMenDetailsSlice from "./redux/servicemen-details-redux";
import serviceCategoriesDataSlice from "./redux/service-category-redux";
import serviceSubCategoriesSlice from "./redux/service-sub-category-redux";
import servicesSlice from "./redux/service-redux";
import serviceDetailsSlice from "./redux/service-details-redux";
import mySubscriptionsSlice from "./redux/my-subscriptions-redux";
import bookingSearchFieldSlice from "./redux/booking-search-field";
import allListingSlice from "./redux/all-listing-redux";
import pendingListingSlice from "./redux/pending-listing-redux";
import acceptedListingSlice from "./redux/accepted.listing-redux";
import ongoingListingSlice from "./redux/ongoing-listing-redux";
import completedListingSlice from "./redux/completed-listing-redux";
import canceledListingSlice from "./redux/canceled-listing-redux";
import bookingDetailsSlice from "./redux/booking-details-redux";
import servicesFormSlice from "./redux/service-form-redux";
import configAppSlice from "./redux/config-redux";
import homeDataSlice from "./redux/home-data-redux";
import notificationListSlice from "./redux/notifications-data-redux";
import forgetPasswordSlice from "./redux/forgetpassword-redux";
import contentPagesSlice from "./redux/content-pages-redux";
import serviceProviderBookingReviewSlice from "./redux/service-provider-booking-review-redux";
import serviceProviderPomotionalCostSlice from "./redux/service-provider-pomotional-cost-redux";
import availableTimeSlotSlice from "./redux/available-time-slot-redux";
import businessSettingsSlice from "./redux/business-settings-redux";
import bookingReportSlice from "./redux/booking-reports-redux";
import reportFilterSlice from "./redux/reports-filter-redux";
import transactionReportSlice from "./redux/transactions-reports-redux";
import transactionReportFilterSlice from "./redux/transactions-reports-filter-redux";
import serviceOverviewSlice from "./redux/service-overview-redux";
import businessEarningSlice from "./redux/business-earning-listing-redux";
import businessExpensesSlice from "./redux/business-expenses-redux";
import businessReportFilterSlice from "./redux/business-reports-filter-redux";
import homeStatisticsGraphSlice from "./redux/home-statistics-graph-redux";
import adminChannelSlice from "./redux/admin-channel-redux";
import serviceMenChannelSlice from "./redux/serviceman-channels-redux";
import customerChannelSlice from "./redux/customer-channels-redux";
import chatMessagesSlice from "./redux/chat-messages-redux";
import withdrawListingSlice from "./redux/withdraw-list-redux";
import withdrawMethodSlice from "./redux/withdraw-method-redux";
import paymentListingSlice from "./redux/payment-list-redux";
import storeRegisterFieldSlice from "./redux/store/register-field-redux";
import storeRegisterFieldErrorSlice from "./redux/store/register-error-redux";
import modulesSlice from "./redux/store/modules-redux";
import mapStoreFieldSlice from "./redux/store/map-address-redux";
import storeConfigAppSlice from "./redux/store/store-config-redux";
import storeProfileDataSlice from "./redux/store/store-profile-redux";
import vendorProfileUpdateFieldSlice from "./redux/store/profile-field-redux";
import vendorProfileUpdateErrorFieldSlice from "./redux/store/profile-error-redux";
import vendorCategoriesSlice from "./redux/store/categories.redux";
import vendorSubCategoriesSlice from "./redux/store/subcategories-redux";
import vendorNotificationListSlice from "./redux/store/notifications-data-redux";
import vendorBannerListSlice from "./redux/store/banner-redux";
import vendorAttributeSlice from "./redux/store/attributes-redux";
import vendorUnitSlice from "./redux/store/units.redux";
import vendorAddonsSlice from "./redux/store/addons-redux";
import couponSlice from "./redux/store/coupon-redux";
import storeItemSlice from "./redux/store/store-item-redux";
import itemStatusUpdateSlice from "./redux/store/itemstatus-update-redux";
import storeHomeOrderSlice from "./redux/store/store-home-order";
import conversationChannelSlice from "./redux/store/customer-conversations-redux";
import StoreItemSearchFieldSlice from "./redux/store/store-item-search-field.redux";

//configure store
const store = configureStore({
    reducer: { 
        serviceProviderAccountData:serviceProviderAccountDataSlice.reducer,
        serviceProviderBookingReview:serviceProviderBookingReviewSlice.reducer,
        serviceProviderPomotionalCost:serviceProviderPomotionalCostSlice.reducer,
        registerProviderField:registerFieldSlice.reducer,
        registerProviderErrorField:registerFieldErrorSlice.reducer,
        zoneList:zoneDataSlice.reducer,
        profileProviderUpdateField:profileUpdateFieldSlice.reducer,
        mapField:mapFieldSlice.reducer,
        profileUpdateErrorField:profileUpdateErrorFieldSlice.reducer,
        addServiceManField:addServiceManFieldSlice.reducer,
        addServiceManErrorField:addServiceManErrorFieldSlice.reducer,
        bankDetailsField:bankDetailsSlice.reducer,
        reviewsDataField:reviewsDataSlice.reducer,
        serviceMenDataField:serviceMenDataSlice.reducer,
        serviceMenSearchField:ServiceMenSearchFieldSlice.reducer,
        serviceMenDetailsField:serviceMenDetailsSlice.reducer,
        serviceCategories : serviceCategoriesDataSlice.reducer,
        serviceSubCategories : serviceSubCategoriesSlice.reducer,
        servicesData : servicesSlice.reducer,
        serviceDetailsData:serviceDetailsSlice.reducer,
        mysubscriptionsData:mySubscriptionsSlice.reducer,  
        bookingSearchField:bookingSearchFieldSlice.reducer,
        allListingSearch: allListingSlice.reducer,
        pendingListingSearch:pendingListingSlice.reducer,
        acceptedListingSearch:acceptedListingSlice.reducer,
        ongoingListingSearch:ongoingListingSlice.reducer,
        completedListingSearch:completedListingSlice.reducer,
        cancelListingSearch:canceledListingSlice.reducer,
        bookingDetails:bookingDetailsSlice.reducer,
        servicesFormData:servicesFormSlice.reducer,
        providerAppConfig:configAppSlice.reducer,
        homeData:homeDataSlice.reducer,
        notificationsData:notificationListSlice.reducer,
        forgetPassword:forgetPasswordSlice.reducer,
        contentPages:contentPagesSlice.reducer,
        availableTimeSlot:availableTimeSlotSlice.reducer,
        businessSetting:businessSettingsSlice.reducer,
        bookingReports:bookingReportSlice.reducer,
        reportFilter:reportFilterSlice.reducer,
        transactionReports:transactionReportSlice.reducer,
        transactionReportFilter:transactionReportFilterSlice.reducer,
        serviceOverview:serviceOverviewSlice.reducer,
        businessEarning:businessEarningSlice.reducer,
        businessExpenses:businessExpensesSlice.reducer,
        businessReportsFilter:businessReportFilterSlice.reducer,
        homeStatisticGraph:homeStatisticsGraphSlice.reducer,
        adminChannel:adminChannelSlice.reducer,
        serviceMenChannel:serviceMenChannelSlice.reducer,
        customerChannel:customerChannelSlice.reducer,
        chatMessages:chatMessagesSlice.reducer,
        withdrawList:withdrawListingSlice.reducer,
        withdrawMethod:withdrawMethodSlice.reducer,
        paymentListing:paymentListingSlice.reducer,
        //============ store field redux list ==========================//
        storeRegisterField:storeRegisterFieldSlice.reducer,
        storeRegisterFieldError:storeRegisterFieldErrorSlice.reducer,
        storeModules:modulesSlice.reducer,
        storeMapField:mapStoreFieldSlice.reducer,
        storeConfig:storeConfigAppSlice.reducer, //store config
        storeProfileData:storeProfileDataSlice.reducer, //store profile data
        vendorProfileUpdateField:vendorProfileUpdateFieldSlice.reducer,
        vendorProfileUpdateErrorField:vendorProfileUpdateErrorFieldSlice.reducer,
        vendorCategories:vendorCategoriesSlice.reducer,
        vendorSubCategories:vendorSubCategoriesSlice.reducer,
        vendorNotificationList:vendorNotificationListSlice.reducer,
        vendorBannerList:vendorBannerListSlice.reducer,
        vendorAttribute:vendorAttributeSlice.reducer,
        vendorUnits:vendorUnitSlice.reducer,
        vendorAddons:vendorAddonsSlice.reducer,
        coupon:couponSlice.reducer,
        storeItem:storeItemSlice.reducer,
        itemUpdateStatus:itemStatusUpdateSlice.reducer,
        storeHomeOrder:storeHomeOrderSlice.reducer,
        conversationChannel:conversationChannelSlice.reducer,
        storeItemSearchField:StoreItemSearchFieldSlice.reducer
        //DONOT FORGET CLEAR REDUX STATE AFTER LOGOUT DEVELOPER
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Increase the timeout threshold for warnings
          warnAfter: 128,  // Increase threshold to 128ms
        },
      }),
  });
  
export default store;
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
  