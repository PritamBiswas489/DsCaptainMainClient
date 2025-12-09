import {Services, AllBooking, MoneyReceive} from '@utils/icons';
import {dashBoardType} from './types';
import appColors from '@theme/appColors';
export const dashBoardData: Array<dashBoardType> = [
  {
    icon: <Services />,
    name: 'serviceMenLogin.service',
    totalService: 5,
    gotoScreen: 'ServiceList',
    darkIcon: <Services color={appColors.white} />,
  },
  {
    icon: <AllBooking />,
    name: 'serviceMenLogin.totalBooking',
    totalService: 50,
    gotoScreen: 'Booking',
    darkIcon: <AllBooking color={appColors.white} />,
  },
  {
    icon: <MoneyReceive />,
    name: 'serviceMenLogin.totalEarnings',
    price: 345.67,
    gotoScreen: 'Earnings',
    darkIcon: <MoneyReceive color={appColors.white} />,
  },
];
