import {View, ScrollView} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {EarningBackground} from '@otherComponent/home';
import {Alert} from '@utils/icons';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {HistorySection} from './historySection';
import {BookingFilter} from './bookingFilter';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {useValues} from '../../../../../App';

export function CommissionHistory() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {isDark} = useValues();
  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <Header
        showBackArrow={true}
        title="commissionHistory.title"
        trailIcon={
          <Alert color={isDark ? appColors.white : appColors.darkText} />
        }
        gotoScreen={() => navigation.navigate('CommissionInfo')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: windowHeight(4)}}>
        <View style={{height: windowWidth(6)}} />
        <EarningBackground
          title="commissionHistory.receivedCommission"
          price="$3,263.03"
        />
        <BookingFilter />
        <HistorySection />
      </ScrollView>
    </View>
  );
}
