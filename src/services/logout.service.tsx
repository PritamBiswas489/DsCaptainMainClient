import { useDispatch } from 'react-redux';
import { serviceProviderAccountDataActions } from '@src/store/redux/service-provider-account-data.redux';
import { mySubscriptionsAction } from '@src/store/redux/my-subscriptions-redux';
import { homeDataActions } from '@src/store/redux/home-data-redux';
import { serviceMenDataAction } from '@src/store/redux/servicemen-list';
import { serviceMenDetailsAction } from '@src/store/redux/servicemen-details-redux';
import { serviceActions } from '@src/store/redux/service-redux';
import { RootState, AppDispatch } from '@src/store';
import { serviceDetailsAction } from '@src/store/redux/service-details-redux';
import { bankDetailsActions } from '@src/store/redux/bank-details-redux';
import { reviewsDataActions } from '@src/store/redux/reviews-list-redux';
import { serviceCategoriesDataActions } from '@src/store/redux/service-category-redux';
import { serviceSubCategoriesActions } from '@src/store/redux/service-sub-category-redux';
import { serviceProviderBookingReviewActions } from '@src/store/redux/service-provider-booking-review-redux';
import { serviceProviderPomotionalCostActions } from '@src/store/redux/service-provider-pomotional-cost-redux';
import { notificationsAction } from '@src/store/redux/notifications-data-redux';
import { allListingActions } from '@src/store/redux/all-listing-redux';
import { pendingListingActions } from '@src/store/redux/pending-listing-redux';
import { completedListingActions } from '@src/store/redux/completed-listing-redux';
import { acceptedListingActions } from '@src/store/redux/accepted.listing-redux';
import { canceledListingActions } from '@src/store/redux/canceled-listing-redux';
import { ongoingListingActions } from '@src/store/redux/ongoing-listing-redux';
import { availableTimeSlotActions } from '@src/store/redux/available-time-slot-redux';
import { businessSettingsActions } from '@src/store/redux/business-settings-redux';
import { bookingReportActions } from '@src/store/redux/booking-reports-redux';
import { reportFiltersActions } from '@src/store/redux/reports-filter-redux';
import { transactionReportActions } from '@src/store/redux/transactions-reports-redux';
import { serviceOverviewActions } from '@src/store/redux/service-overview-redux';
import { transactionsReportFiltersActions } from '@src/store/redux/transactions-reports-filter-redux';
import { businessEarningListingActions } from '@src/store/redux/business-earning-listing-redux';
import { businessExpenseActions } from '@src/store/redux/business-expenses-redux';
import { businessReportFiltersActions } from '@src/store/redux/business-reports-filter-redux';
import { homeStatisticsGraphActions } from '@src/store/redux/home-statistics-graph-redux';
import { adminChannelActions } from '@src/store/redux/admin-channel-redux';
import { serviceMenChannelActions } from '@src/store/redux/serviceman-channels-redux';
import { customerChannelActions } from '@src/store/redux/customer-channels-redux';
import { chatMessagesActions } from '@src/store/redux/chat-messages-redux';
import { withdrawListingActions } from '@src/store/redux/withdraw-list-redux';
import { withdrawMethodActions } from '@src/store/redux/withdraw-method-redux';
import { paymentListingActions } from '@src/store/redux/payment-list-redux';

import { storeRegisterFieldActions } from '@src/store/redux/store/register-field-redux';
import { storeRegisterFieldErrorActions } from '@src/store/redux/store/register-error-redux';
import { modulesAction } from '@src/store/redux/store/modules-redux';
import { mapStoreFieldActions } from '@src/store/redux/store/map-address-redux';
import { storeConfigAppActions } from '@src/store/redux/store/store-config-redux';
import { storeProfileDataActions } from '@src/store/redux/store/store-profile-redux';

import { vendorCategoriesActions } from '@src/store/redux/store/categories.redux';
import { vendorSubCategoriesActions } from '@src/store/redux/store/subcategories-redux';
import { vendorNotificationsActions } from '@src/store/redux/store/notifications-data-redux';
import { vendorBannerActions } from '@src/store/redux/store/banner-redux';
import { vendorAddonsActions } from '@src/store/redux/store/addons-redux';
import { couponActions } from '@src/store/redux/store/coupon-redux';
import { storeItemsActions } from '@src/store/redux/store/store-item-redux';
import { itemStatusActions } from '@src/store/redux/store/itemstatus-update-redux';
import { storeHomeOrderActions } from '@src/store/redux/store/store-home-order';
import { conversationChannelActions } from '@src/store/redux/store/customer-conversations-redux';
//logout clear redux function


export function  logoutClearReduxState(dispatch:AppDispatch){
      dispatch(serviceProviderAccountDataActions.resetState())
      dispatch(mySubscriptionsAction.resetState())
      dispatch(homeDataActions.resetState())
      dispatch(serviceMenDataAction.resetState())
      dispatch(serviceMenDetailsAction.resetState())
      dispatch(serviceActions.resetState())
      dispatch(serviceDetailsAction.resetState())
      dispatch(bankDetailsActions.resetState())
      dispatch(reviewsDataActions.resetState())
      dispatch(serviceCategoriesDataActions.resetState())
      dispatch(serviceSubCategoriesActions.resetState())
      dispatch(serviceProviderBookingReviewActions.resetState())
      dispatch(serviceProviderPomotionalCostActions.resetState())
      dispatch(notificationsAction.resetState())
      dispatch(allListingActions.resetState())
      dispatch(pendingListingActions.resetState())
      dispatch(completedListingActions.resetState())
      dispatch(acceptedListingActions.resetState())
      dispatch(canceledListingActions.resetState())
      dispatch(ongoingListingActions.resetState())
      dispatch(availableTimeSlotActions.resetState())
      dispatch(businessSettingsActions.resetState())
      dispatch(bookingReportActions.resetState()) //booking report actions
      dispatch(reportFiltersActions.resetState())
      dispatch(transactionReportActions.resetState())
      dispatch(transactionsReportFiltersActions.resetState())
      dispatch(serviceOverviewActions.resetState())
      dispatch(businessEarningListingActions.resetState()) //business earning listing actions
      dispatch(businessExpenseActions.resetState()) //business expense actions
      dispatch(businessReportFiltersActions.resetState()) //business report filter actions
      dispatch(homeStatisticsGraphActions.resetState())
      dispatch(adminChannelActions.resetState())
      dispatch(serviceMenChannelActions.resetState())
      dispatch(customerChannelActions.resetState())
      dispatch(chatMessagesActions.resetState())
      dispatch(withdrawListingActions.resetState())
      dispatch(withdrawMethodActions.resetState()) //withdraw method actions
      dispatch(paymentListingActions.resetState())
      
      // store redux actions reset
      dispatch(storeRegisterFieldActions.resetState())
      dispatch(storeRegisterFieldErrorActions.resetState())
      dispatch(modulesAction.resetState())
      dispatch(mapStoreFieldActions.resetState())
      dispatch(storeConfigAppActions.resetState())
      dispatch(storeProfileDataActions.resetState())

      dispatch(vendorCategoriesActions.resetState())
      dispatch(vendorSubCategoriesActions.resetState())
      dispatch(vendorNotificationsActions.resetState())
      dispatch(vendorBannerActions.resetState())
      dispatch(vendorAddonsActions.resetState())
      dispatch(couponActions.resetState())
      dispatch(storeItemsActions.resetState())
      dispatch(itemStatusActions.resetState())
      dispatch(storeHomeOrderActions.resetState())
      dispatch(conversationChannelActions.resetState())
}
