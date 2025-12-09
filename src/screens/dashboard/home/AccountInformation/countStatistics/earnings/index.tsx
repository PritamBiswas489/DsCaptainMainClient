import {ScrollView} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {Chat, Notification} from '@utils/icons';
import EarningSection from './earningSection';
import History from './walletHistory';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type routeProps = NativeStackNavigationProp<RootStackParamList>;

export function Earnings() {
  const {isDark} = useValues();
  const {navigate} = useNavigation<routeProps>();
  return (
    <ScrollView
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}
      showsVerticalScrollIndicator={false}>
      <Header
        showBackArrow={true}
        title={'home.earnings'}
        trailIcon={
          <Chat color={isDark ? appColors.white : appColors.darkText} />
        }
        gotoScreen={() => navigate('Chat')}
        trailIcon1={
          <Notification color={isDark ? appColors.white : appColors.darkText} />
        }
        onTrailIcon={() => navigate('Notification')}
      />
      <EarningSection />
      <History />
    </ScrollView>
  );
}
