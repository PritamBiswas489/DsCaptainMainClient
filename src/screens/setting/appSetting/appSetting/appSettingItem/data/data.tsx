import {
  Password,
  Currency,
  DarkTheme,
  LanguageTranslator,
  Notification,
} from '@utils/icons';
import {settingItemType} from './types';
import appColors from '@theme/appColors';

export const profileSettingData: Array<settingItemType> = [
  {
    icon: <DarkTheme />,
    name: 'profileSetting.darkTheme',
    showArrowIcon: false,
    darkIcon: <DarkTheme color={appColors.white} />,
  },
  // {
  //   icon: <Notification />,
  //   name: 'newDeveloper.NotificationSound',
  //   showArrowIcon: false,
  //   darkIcon: <Notification color={appColors.white} />,
  // },
  {
    icon: <LanguageTranslator />,
    name: 'profileSetting.changeLanguage',
    gotoScreen: 'ChangeLanguage',
    showArrowIcon: true,
    darkIcon: <LanguageTranslator color={appColors.white} />,
  },
];
