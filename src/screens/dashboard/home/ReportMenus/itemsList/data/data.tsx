import {
  AcRepair,
 
   
  Painting,
  
  Salon,
  ProfileIcon,
  SubscriptionsIcon,
  ChatIcon,
  SettingIcon,
  WithdrawListIcon,
  ReportsIcon,
   
  AboutUsIcon,
  PrivacyPolicyIcon,
  TermsConditionsIcon,
  RefundPolicyIcon,
  LogoutIcon
} from '@utils/icons';
import {HomeCategoryType} from './types';


export const categoriesData: Array<HomeCategoryType> = [
  {
    icon: <ReportsIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.TransactionsReport',
    goToScreen:'TransactionReports'
  },
  {
    icon: <ReportsIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.BusinessReport', 
    goToScreen:'BusinessReports'
  },
  {
    icon: <ReportsIcon height={'36'} width={'36'} />,
    title: 'newDeveloper.BookingReport',
    goToScreen:'BookingReports'
  },
];
