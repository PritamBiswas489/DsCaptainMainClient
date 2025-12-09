import {View, Alert} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {GridIcon, Listviewicon, Search} from '@utils/icons';
import ItemsList from './itemsList';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import {styles} from './styles';

//More menus page showing
export function MoreMenusVendor() {
  
  const [isGrid, setIsGrid] = useState(false);
  const {isDark} = useValues();
  const [showSearchBar, setSearchBar] = useState<boolean>();
  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Header
        showBackArrow={false}
        title={'newDeveloper.moreMenuHeading'}
        showSearchBar={false}
        searchContainerStyle={styles.searchContainer}
        gotoScreen={() => setSearchBar(!showSearchBar)}
      />
      <ItemsList isGrid={isGrid} />
    </View>
  );
}
