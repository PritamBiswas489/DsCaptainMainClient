import {View} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {Search} from '@utils/icons';
import {data} from './data/data';
import {PopularService} from '@screens/dashboard/home';
import {styles} from './styles';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';

export function PopularServiceView() {
  const [popularService, setPopularService] = useState(data);
  const {isDark} = useValues();
  const [showSearchBar, setSearchBar] = useState<boolean>();
  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkText : appColors.white},
      ]}>
      <Header
        title="home.popularService"
        showBackArrow={true}
        trailIcon={<Search />}
        gotoScreen={() => setSearchBar(!showSearchBar)}
        showSearchBar={showSearchBar}
      />
      <View style={GlobalStyle.blankView} />
      <PopularService
        data={data}
        setData={setPopularService}
        providerImageStyle={styles.providerImageStyle}
        itemSeparator={styles.itemSeparator}
        contentContainerStyle={{paddingBottom: windowHeight(18)}}
      />
    </View>
  );
}
