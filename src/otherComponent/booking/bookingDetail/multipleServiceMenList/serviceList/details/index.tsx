import {ScrollView, View, Text} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {windowHeight} from '@theme/appConstant';
import Profile from './profile';
import {Info} from './info';
import Language from './language';
import Expertise from './expertise';
import {styles} from './styles';
import {useValues} from '../../../../../../../App';

export default function Details() {
  const {t} = useValues();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={GlobalStyle.mainView}
      contentContainerStyle={{paddingBottom: windowHeight(3)}}>
      <Header
        containerStyle={styles.containerStyle}
        title="serviceManDetails.servicemenDetails"
      />
      <Profile />
      <Info />
      <View style={[GlobalStyle.horizontalLine, styles.horizontalLine]}></View>
      <View style={styles.container}>
        <Text style={styles.heading}>
          {t('providerDetail.knownLanguage')} :
        </Text>
        <View style={styles.row}>
          <Language title={'providerDetail.english'} />
          <Language title={'providerDetail.chinese'} />
          <Language title={'providerDetail.spanish'} />
        </View>
      </View>
      <View>
        <View style={styles.expertise}>
          <Text style={styles.heading}>
            {t('serviceManDetails.expertise')} :
          </Text>
          <View style={styles.row}>
            <Expertise title={'home.cleaning'} />
            <Expertise title={'home.painting'} />
            <Expertise title={'home.carpenter'} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
