import React from 'react';
import {View, ScrollView} from 'react-native';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {ProviderExperience, ProfileInfo} from '@otherComponent/index';
import {useValues} from '../../.././../../../App';
import appColors from '@theme/appColors';

export function ProviderInfo() {
  const {isDark} = useValues();
  return (
    <ScrollView
      contentContainerStyle={GlobalStyle.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <View>
        <Header
          showBackArrow={true}
          containerStyle={{height: windowHeight(14)}}
          title="providerDetail.providerDetail"
        />
        <ProviderExperience
          rowContainerStyle={{marginHorizontal: windowWidth(7)}}
          providerContent={'providerDetail.details'}
        />
        <View>
          <View
            style={[
              GlobalStyle.horizontalLine,
              {margin: windowHeight(2)},
            ]}></View>

          <ProfileInfo />
        </View>
      </View>
    </ScrollView>
  );
}
