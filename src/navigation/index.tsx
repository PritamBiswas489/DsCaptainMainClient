import React, { useState, useEffect } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import AuthNavigation from './authNavigation';
import { RootStack } from './RootStackNavigator';
import { BottomTab } from './tabNavigation';
import { BottomTabSeller } from './tabNavigationStore';
import StoreOrderDetails from '@src/screens/dashboard/home/StoreOrderDetails';
import {
  AddNewAddress,
  AddNewService,
  AddNewServiceSubCategory,
  AddNewServiceMen,
  EditServiceMen,
  BlogDetail,
  Categories,
  Earnings,
  EmptyNotification,
  History,
  LatestBlog,
  Notification,
  Reviews,
  ServiceDetail,
  ServiceList,
  MySubscriptions,
  ServiceMenList,
  PopularServiceView,
  ServiceMenDetail,
  PendingBooking,
  PendingApproval,
  MapView,
  Chat,
  AcceptedBooking,
  AssignedBooking,
  OngoingBooking,
  CompletedBooking,
  CancelledBooking,
  HoldBooking,
  AppSetting,
  ChangeCurrency,
  ChangeLanguage,
  ChangePassword,
  Subscription,
  SubscriptionPlan,
  CompanyDetail,
  CurrentLocation,
  AddNewArea,
  UserProfileSetting,
  BankDetails,
  IdVerification,
  DocumentPreview,
  CommissionHistory,
  Packages,
  AddPackage,
  PackageDetail,
  TimeSlots,
  BookingDetails,
  CommissionInfo,
  CommissionDetail,
  ChatHistory,
  Booking,
  EditBooking,
  AddressCurrentLocation,
  CoverLocationList,
  MoreMenus,
  Setting,
  StoreAddressCurrentLocation,
  SubCategories


} from '../screens';
import { MultipleServiceMenList } from '@otherComponent/booking/bookingDetail/multipleServiceMenList';
import { AddExtraCharges } from '@otherComponent/booking/addExtraCharges';
import { ServiceProof } from '@otherComponent/booking/serviceProof';
import { ProviderInfo } from '@screens/dashboard/serviceMan/home';
import NoInternet from '@otherComponent/noInternet';
import NetInfo from '@react-native-community/netinfo';
import ContentPages from '@src/screens/dashboard/home/ContentPages';
import BusinessInformation from '@src/screens/dashboard/home/BusinessInformation';
import BusinessSettings from '@src/screens/dashboard/home/BusinessSettings';
import { ProfileAccountInformation } from '@src/screens/dashboard/home/AccountInformation';
import { ReportMenus } from '@src/screens/dashboard/home/ReportMenus';
import { TransactionReports } from '@src/screens/dashboard/home/Reports/TransactionReports';
import { BookingReports } from '@src/screens/dashboard/home/Reports/BookingReports';
import { BusinessReports } from '@src/screens/dashboard/home/Reports/BusinessReports';
import { WithdrawRequest } from '@src/screens/dashboard/home/WithdrawRequest';
import WithdrawList from '@src/screens/dashboard/home/WithdrawList';
import AdjustBalance from '@src/screens/dashboard/home/AdjustBalance';
import RazorPay from '@src/screens/dashboard/home/RazorPay';
import PaymentList from '@src/screens/dashboard/home/PaymentList';
import { MoreMenusVendor } from '@src/screens/dashboard/home/MoreMenusVendor';
import { SettingVendor } from '@src/screens/setting/settingVendor/setting';
import { VendorProfileEdit } from '@src/screens/setting/settingVendor/profileSetting';
import { NotificationVendor } from '@src/screens/notificationVendor';
import { VendorAddNewBanner } from '@src/screens/dashboard/bannerVendor/addNewBanner';
import { VendorAddItem } from '@src/screens/dashboard/storeItem/addItem';
import { StoreSettings } from '@src/screens/dashboard/home/StoreSettings';
import { StoreAddCoupon } from '@src/screens/dashboard/home/StoreAddCoupon';
import { StoreScheduleSettings } from '@src/screens/dashboard/home/StoreScheduleSettings';
import { VendorCreateAddons } from '@src/screens/dashboard/storeAddons/createAddons';
import AboutUsContent from '@src/screens/dashboard/home/StoreContentPage/AboutUs';
import PrivacyPolicyContent from '@src/screens/dashboard/home/StoreContentPage/PrivacyPolicy';
import TermsAndConditionsContent from '@src/screens/dashboard/home/StoreContentPage/TermsAndConditions';
import { StoreUpdateAnnouncement } from '@src/screens/dashboard/home/storeUpdateAnnouncement';
import StoreCouponList from '@src/screens/dashboard/home/StoreCouponList';
import ListAddons from '@src/screens/dashboard/storeAddons/listAddons';
import ListBanners from '@src/screens/dashboard/bannerVendor/listBanner';
import ListItem from '@src/screens/dashboard/storeItem/listItem';
import VendorLogout from '@src/screens/dashboard/home/VendorLogout';
import StoreOrders from '@src/screens/dashboard/home/StoreOrders';
import StoreExpenseReports from '@src/screens/dashboard/home/StoreExpenseReports';
import  StoreWallet  from '@src/screens/dashboard/home/StoreWallet';
import StoreHome from '@src/screens/dashboard/home/StoreHome';
import StoreListCampaign from '@src/screens/dashboard/home/StoreCampaign/listCampaign';
import { StoreChatHistory } from '@src/screens/dashboard/storeChatHistory';
import { StoreChatMessages } from '@src/screens/dashboard/storeChatMessages';
import { RootStackParamList } from './types';

export const navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();

export const navigateExtra = (name: keyof RootStackParamList, params?: object) => {
  //@ts-ignore
  navigationRef.current?.navigate(name, params);
};
export default function MyStack() {
  const [isConnected, setIsConnected] = useState<boolean | null>(true);


  useEffect(() => {
    NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
        }}>
        {!isConnected ? (
          <RootStack.Screen name="NoInternet" component={NoInternet} />
        ) : (
          <>

            <RootStack.Screen
              name="AuthNavigation"
              component={AuthNavigation}
            />

            <RootStack.Screen name="Booking" component={Booking} />

            <RootStack.Screen name="EditBooking" component={EditBooking} />
            <RootStack.Screen name="BottomTab" component={BottomTab} />
            <RootStack.Screen name="Earnings" component={Earnings} />
            <RootStack.Screen name="History" component={History} />
            <RootStack.Screen
              name="EmptyNotification"
              component={EmptyNotification}
            />
            <RootStack.Screen name="Notification" component={Notification} />
            {/* Service list */}
            <RootStack.Screen name="ServiceList" component={ServiceList} />
            {/* Service details */}
            <RootStack.Screen name="ServiceDetail" component={ServiceDetail} />
            <RootStack.Screen name="LatestBlog" component={LatestBlog} />
            <RootStack.Screen name="BlogDetail" component={BlogDetail} />
            <RootStack.Screen
              name="ServiceMenDetail"
              component={ServiceMenDetail}
            />
            <RootStack.Screen name="Reviews" component={Reviews} />
            {/* Add new service */}
            <RootStack.Screen name="AddNewService" component={AddNewService} />
            {/* Add new Service SubCategory */}
            <RootStack.Screen name="AddNewServiceSubCategory" component={AddNewServiceSubCategory} />



            {/* Popular service view */}
            <RootStack.Screen
              name="PopularServiceView"
              component={PopularServiceView}
            />

            <RootStack.Screen
              name="MySubscriptions"
              component={MySubscriptions}
            />




            <RootStack.Screen
              name="AddNewServiceMen"
              component={AddNewServiceMen}
            />
            <RootStack.Screen
              name="EditServiceMen"
              component={EditServiceMen}
            />
            <RootStack.Screen name="AddNewAddress" component={AddNewAddress} />
            <RootStack.Screen name="CoverLocationList" component={CoverLocationList} />


            <RootStack.Screen name="Categories" component={Categories} />
            <RootStack.Screen
              name="ServiceMenList"
              component={ServiceMenList}
            />

            <RootStack.Screen
              name="AcceptedBooking"
              component={AcceptedBooking}
            />

            <RootStack.Screen
              name="OngoingBooking"
              component={OngoingBooking}
            />
            <RootStack.Screen
              name="PendingBooking"
              component={PendingBooking}
            />
            <RootStack.Screen
              name="PendingApproval"
              component={PendingApproval}
            />
            <RootStack.Screen name="MapView" component={MapView} />
            <RootStack.Screen name="Chat" component={Chat} />
            <RootStack.Screen name="ChatHistory" component={ChatHistory} />

            <RootStack.Screen
              name="CompletedBooking"
              component={CompletedBooking}
            />
            <RootStack.Screen
              name="AddExtraCharges"
              component={AddExtraCharges}
            />
            <RootStack.Screen name="ServiceProof" component={ServiceProof} />
            <RootStack.Screen
              name="CancelledBooking"
              component={CancelledBooking}
            />
            <RootStack.Screen name="HoldBooking" component={HoldBooking} />
            <RootStack.Screen
              name="AssignedBooking"
              component={AssignedBooking}
            />
            <RootStack.Screen name="AppSetting" component={AppSetting} />
            <RootStack.Screen
              name="ChangeCurrency"
              component={ChangeCurrency}
            />
            <RootStack.Screen
              name="ChangeLanguage"
              component={ChangeLanguage}
            />

            <RootStack.Screen
              name="SubscriptionPlan"
              component={SubscriptionPlan}
            />
            <RootStack.Screen name="Subscription" component={Subscription} />

            <RootStack.Screen
              name="MultipleServiceMenList"
              component={MultipleServiceMenList}
            />
            <RootStack.Screen
              name="ChangePassword"
              component={ChangePassword}
            />
            <RootStack.Screen
              name="UserProfileSetting"
              component={UserProfileSetting}
            />
            <RootStack.Screen name="BankDetails" component={BankDetails} />
            <RootStack.Screen
              name="IdVerification"
              component={IdVerification}
            />
            <RootStack.Screen
              name="DocumentPreview"
              component={DocumentPreview}
            />
            <RootStack.Screen name="Packages" component={Packages} />

            <RootStack.Screen name="TimeSlots" component={TimeSlots} />
            <RootStack.Screen
              name="CommissionHistory"
              component={CommissionHistory}
            />
            <RootStack.Screen name="PackageDetail" component={PackageDetail} />
            <RootStack.Screen name="AddPackage" component={AddPackage} />
            <RootStack.Screen
              name="BookingDetails"
              component={BookingDetails}
            />
            <RootStack.Screen name="CompanyDetail" component={CompanyDetail} />
            <RootStack.Screen name="AddNewArea" component={AddNewArea} />
            <RootStack.Screen
              name="CommissionInfo"
              component={CommissionInfo}
            />
            <RootStack.Screen
              name="CommissionDetail"
              component={CommissionDetail}
            />
            <RootStack.Screen
              name="AddressCurrentLocation"
              component={AddressCurrentLocation}
            />
            <RootStack.Screen name="ProviderInfo" component={ProviderInfo} />
            <RootStack.Screen
              name="CurrentLocation"
              component={CurrentLocation}
            />

            <RootStack.Screen
              name="MoreMenus"
              component={MoreMenus}
            />

            <RootStack.Screen
              name="ProfileSettings"
              component={Setting}
            />
            <RootStack.Screen
              name="ContentPages"
              component={ContentPages}
            />
            <RootStack.Screen
              name="BusinessInformation"
              component={BusinessInformation}
            />

            <RootStack.Screen
              name="BusinessSettings"
              component={BusinessSettings}
            />

            <RootStack.Screen
              name="ProfileAccountInformation"
              component={ProfileAccountInformation}
            />
            <RootStack.Screen
              name="ReportMenus"
              component={ReportMenus}
            />
            <RootStack.Screen
              name="TransactionReports"
              component={TransactionReports}
            />
            <RootStack.Screen
              name="BookingReports"
              component={BookingReports}
            />
            <RootStack.Screen
              name="BusinessReports"
              component={BusinessReports}
            />
            <RootStack.Screen
              name="WithdrawRequest"
              component={WithdrawRequest}
            />
            <RootStack.Screen
              name="WithdrawList"
              component={WithdrawList}
            />
            <RootStack.Screen
              name="AdjustBalance"
              component={AdjustBalance}
            />

            <RootStack.Screen
              name="RazorPay"
              component={RazorPay}
            />
            <RootStack.Screen
              name="PaymentList"
              component={PaymentList}
            />
            {/****************  Store seller app menu **********************/}
            <RootStack.Screen
              name="BottomTabSeller"
              component={BottomTabSeller}
            />
            <RootStack.Screen
              name="StoreAddressCurrentLocation"
              component={StoreAddressCurrentLocation}
            />
            <RootStack.Screen
              name="MoreMenusVendor"
              component={MoreMenusVendor}
            />

            <RootStack.Screen
              name="VendorProfileSettings"
              component={SettingVendor}
            />

            <RootStack.Screen
              name="VendorProfileEdit"
              component={VendorProfileEdit}
            />

            <RootStack.Screen name="SubCategories" component={SubCategories} />

            <RootStack.Screen name="NotificationVendor" component={NotificationVendor} />

            <RootStack.Screen name="VendorAddNewBanner" component={VendorAddNewBanner} />
            <RootStack.Screen name="EditVendorBanner" component={VendorAddNewBanner} />



            <RootStack.Screen name="VendorAddItem" component={VendorAddItem} />


            <RootStack.Screen name="StoreSettings" component={StoreSettings} />

            <RootStack.Screen name="StoreAddCoupon" component={StoreAddCoupon} />

            <RootStack.Screen name="EditVendorCoupon" component={StoreAddCoupon} />



            <RootStack.Screen name="StoreScheduleSettings" component={StoreScheduleSettings} />


            <RootStack.Screen name="VendorCreateAddons" component={VendorCreateAddons} />
            <RootStack.Screen name="EditVendorAddon" component={VendorCreateAddons} />



            <RootStack.Screen name="AboutUsContent" component={AboutUsContent} />

            <RootStack.Screen name="PrivacyPolicyContent" component={PrivacyPolicyContent} />

            <RootStack.Screen name="TermsAndConditionsContent" component={TermsAndConditionsContent} />


            <RootStack.Screen name="StoreUpdateAnnouncement" component={StoreUpdateAnnouncement} />

            <RootStack.Screen name="EditVendorItem" component={VendorAddItem} />


            <RootStack.Screen name="StoreCouponList" component={StoreCouponList} />

            <RootStack.Screen name="ListAddons" component={ListAddons} />

            <RootStack.Screen name="ListBanners" component={ListBanners} />

            <RootStack.Screen name="ListItem" component={ListItem} />

            <RootStack.Screen name="VendorLogout" component={VendorLogout} />


            <RootStack.Screen name="StoreOrders" component={StoreOrders} />

            <RootStack.Screen name="StoreExpenseReports" component={StoreExpenseReports} />
            
            <RootStack.Screen name="StoreWallet" component={StoreWallet} />

            <RootStack.Screen name="StoreHome" component={StoreHome} />

            <RootStack.Screen name="StoreOrderDetails" component={StoreOrderDetails} />
            
            <RootStack.Screen name="StoreListCampaign" component={StoreListCampaign} />

           
            <RootStack.Screen name="StoreChatHistory" component={StoreChatHistory} />

            <RootStack.Screen name="StoreChatMessages" component={StoreChatMessages} />
            
            
            
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
