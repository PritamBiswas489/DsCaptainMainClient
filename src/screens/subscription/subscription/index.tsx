import {ScrollView} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import ImageBackground from './imageBackground';
import DetailContainer from '../commonComponents/detailContainer';
import UnLockNotes from './unlockNotes';
import GradientBtn from '@commonComponents/gradientBtn';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';

type routeProps = NativeStackNavigationProp<RootStackParamList>;

export function Subscription() {
  const {navigate} = useNavigation<routeProps>();
  const {isDark} = useValues();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <ImageBackground />
      <DetailContainer />
      <UnLockNotes />
      <GradientBtn
        additionalStyle={styles.additionalStyle}
        label="subscription.freeTrial"
        onPress={() => navigate('IntroSlider')}
      />
    </ScrollView>
  );
}
