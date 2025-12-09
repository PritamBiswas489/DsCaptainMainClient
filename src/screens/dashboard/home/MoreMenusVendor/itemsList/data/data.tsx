import {
  AcRepair,
 
   
  Painting,
  
  Salon,
  ProfileIcon,
  SubscriptionsIcon,
  ChatIcon,
  SettingIcon,
  WithdrawListIcon,
  PaymentIcon,
  ReportsIcon,
  AboutUsIcon,
  PrivacyPolicyIcon,
  TermsConditionsIcon,
  RefundPolicyIcon,
  LogoutIcon,
  AddItemIcon,
  PendingItemIcon,
  CategoriesIcon,
  BannerIcon,
  CampaignIcon,
  CouponIcon,
  StoreSettingsIcon,
  AnnouncementIcon
} from '@utils/icons';
import {HomeCategoryType} from './types';


export const categoriesData: Array<HomeCategoryType> = [
  {
    icon: <ProfileIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.moreMenuProfile', 
    goToScreen:'VendorProfileSettings'
  },
  {
    icon: <StoreSettingsIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.StoreSettings', 
    goToScreen:'StoreSettings'
  },
  {
    icon: <AddItemIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.updateSchedule', 
    goToScreen:'StoreScheduleSettings'
  },
  {
    icon: <AnnouncementIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.UpdateAnnouncement', 
    goToScreen:'StoreUpdateAnnouncement'
     
  },
  {
    icon: <AddItemIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.ListItem', 
    goToScreen:'ListItem'
  },
  {
    icon: <AddItemIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.Addons', 
    goToScreen:'ListAddons'
  },
  {
    icon: <PendingItemIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.PendingItem', 
  },
  { 
    icon: <CategoriesIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.Categories', 
    goToScreen:'Categories'
  },
  { 
    icon: <BannerIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.Banner', 
    goToScreen:'ListBanners'
  },   
  { 
    icon: <CampaignIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.Campaign',
    goToScreen:'StoreListCampaign'
  },
  { 
    icon: <ChatIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.Conversation',
    goToScreen:'StoreChatHistory'
  },
  {
    icon: <SettingIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.moreMenuSettings',
    goToScreen:'AppSetting'
  },
  // PaymentList
  {
    icon: <ReportsIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.ExpenseReport',
    goToScreen:'StoreExpenseReports'
  },
  {
    icon: <CouponIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.Coupon',
    goToScreen:'StoreCouponList'
  },
  {
    icon: <AddItemIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.Aboutus', 
    goToScreen:'AboutUsContent'
  },
  {
     icon: <PrivacyPolicyIcon height={'36'} width={'36'} />,
     title: 'newDeveloper.moreMenuPrivacyPolicy',
     goToScreen:'PrivacyPolicyContent'
  },
  {
    icon: <TermsConditionsIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.moreMenuTermsandconditions',
    goToScreen:'TermsAndConditionsContent'
  },
  {
    icon: <TermsConditionsIcon height={'36'} width={'36'} />,
    title: 'Notifications',
     goToScreen:'NotificationVendor'
  },
  {
    icon: <LogoutIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.moreMenuLogout',
    goToScreen:'logoutProcess'
  },
];
