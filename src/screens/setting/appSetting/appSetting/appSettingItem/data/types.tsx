import React from 'react';

export type settingItemType = {
  icon: React.ReactNode;
  name: string;
  subTitle?: string;
  gotoScreen?: string | any;
  showArrowIcon?: boolean;
  darkIcon: React.ReactNode;
};
