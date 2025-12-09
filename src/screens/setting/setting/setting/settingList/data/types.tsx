export type settingType = {
  showDivider?: boolean;
  title: string;
  data: settingData[];
};

export type settingData = {
  icon: React.ReactNode;
  name: string;
  subTitle?: string;
  isProvider?: boolean;
  gotoScreen: string;
  darkIcon: React.ReactNode;
};
