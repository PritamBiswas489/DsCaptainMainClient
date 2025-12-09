import {View} from 'react-native';
import React from 'react';
import Header from '@commonComponents/header';
import {GlobalStyle} from '@style/styles';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../App';
import {AppSettingItem} from './appSettingItem';

export function AppSetting() {
  const {isDark} = useValues();
  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Header showBackArrow={true} title="profileSetting.appSetting" />
      <AppSettingItem />
    </View>
  );
}
