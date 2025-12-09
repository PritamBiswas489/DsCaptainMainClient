import {ScrollView, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import Header from '@commonComponents/header';
import {GlobalStyle} from '@style/styles';
import ChoosePlan from './choosePlan';
import DetailContainer from '../commonComponents/detailContainer';
import ContentView from './contentView';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '../../../../App';

export function SubscriptionPlan() {
  const [duration, setDuration] = useState(0);
  const {isDark,t} = useValues();
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Header showBackArrow={true} title="subscription.subscriptionPlan" />
      <ChoosePlan duration={duration} setDuration={setDuration} />
      <DetailContainer content={<ContentView />} />
      <Text style={styles.textStyle}>
        {t('subscription.note')} : {t('subscription.noteContent')}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    marginHorizontal: windowWidth(1),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(2),
  },
});
