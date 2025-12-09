import {View} from 'react-native';
import React, {useState} from 'react';
import Header from '@commonComponents/header';
import {GlobalStyle} from '@style/styles';
import {Search} from '@utils/icons';
import {CommissionList} from './commissionList';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';

export function CommissionInfo() {
  const [showSearchBar, setSearchBar] = useState(false);
  const {isDark} = useValues();
  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <Header
        showBackArrow={true}
        title="commissionHistory.commissionInfo"
        trailIcon={
          <Search color={isDark ? appColors.white : appColors.lightText} />
        }
        gotoScreen={() => setSearchBar(!showSearchBar)}
        showSearchBar={showSearchBar}
      />
      <CommissionList />
    </View>
  );
}
