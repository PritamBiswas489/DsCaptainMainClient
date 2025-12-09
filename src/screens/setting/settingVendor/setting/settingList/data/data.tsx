import {
  Delete,
  Person,
  Password
} from '@utils/icons';
import { settingType } from './types';
import appColors from '@theme/appColors';

export const settingData: Array<settingType> = [
  {
    title: 'profileSetting.general',
    data: [
      //edit profile
      {
        icon: <Person />,
        name: 'newDeveloper.editProfileMenu',
        gotoScreen: 'VendorProfileEdit',
        darkIcon: <Person color={appColors.white} />,
      },
      
    ],
  },
  //delete account
  {
    showDivider: true,
    title: 'profileSetting.redZone',
    data: [
      {
        icon: <Delete color={appColors.error} />,
        name: 'profileSetting.deleteAccount',
        gotoScreen: 'showModal',
        darkIcon: <Delete color={appColors.error} />,
      },
    ],
  },
];

 
