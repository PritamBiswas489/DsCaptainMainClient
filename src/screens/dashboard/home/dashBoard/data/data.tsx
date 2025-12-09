import appColors from '@theme/appColors';
import {dashBoardType} from './types';
import {MoneyReceive, AllBooking, Services, Category} from '@utils/icons';

export const dashBoardData: Array<dashBoardType> = [
  {
    icon: <MoneyReceive />,
    name: 'home.totalEarning',
    count: '3,263.03',
    gotoScreen: 'Earnings',
    darkIcon: <MoneyReceive color={appColors.primary} />,
  },
  {
    icon: <AllBooking />,
    name: 'home.totalBooking',
    count: '153',
    gotoScreen: 'Booking',
    darkIcon: <AllBooking color={appColors.primary} />,
  },
  {
    icon: <Services />,
    name: 'home.totalService',
    count: '56',
    gotoScreen: 'ServiceList',
    darkIcon: <Services color={appColors.primary} />,
  },
  {
    icon: <Category height={'22'} width={'22'} />,
    name: 'home.totalCategory',
    count: '72',
    gotoScreen: 'Categories',
    darkIcon: <Category color={appColors.primary} />,
  },
];
