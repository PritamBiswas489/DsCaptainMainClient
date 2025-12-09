import {View, ScrollView} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {ServiceDetail} from './serviceDetail';
import {Info} from './info';
import {ServiceRange} from '@otherComponent/index';
import {styles} from './styles';
import HeadingRow from '@commonComponents/headingRow';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LocationList} from './locationList';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import {addressData} from './data';

type props = NativeStackNavigationProp<RootStackParamList>;

export function CompanyDetail({route}: {route: any}) {
  const {navigate} = useNavigation<props>();
  const locationData = route?.params?.data;
  const {isDark, t} = useValues();
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}
      showsVerticalScrollIndicator={false}>
      <Header showBackArrow={true} title="auth.companyDetails" />
      <ServiceDetail />
      <Info /> 
      <View
        style={[
          GlobalStyle.dashLine,
          {borderColor: isDark ? appColors.darkBorder : appColors.border},
        ]}
      />
      <HeadingRow
        rowStyle={styles.rowStyle}
        title={'companyDetails.serviceAvailable'}
        content={'+ ' + t('companyDetails.add')}
        gotoScreen={() =>
          navigate('CurrentLocation', {screen: 'companyDetailPage'})
        }
        titleStyle={styles.title}
      />
      {/* <View style={styles.container}>
        <ServiceRange />
      </View>
      <LocationList data={locationData ? locationData : addressData} /> */}
    </ScrollView>
  );
}
