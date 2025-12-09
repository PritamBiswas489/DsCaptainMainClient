import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GlobalStyle} from '@style/styles';
import {styles} from './styles';
import InputView from './inputView';
import {ServiceArea} from '@otherComponent/auth/serviceArea';
import LocationList from './locationList';
import {locationType} from './addNewArea/types';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';
import {getValue} from '@utils/localstorage';

const  CompanyLocation=({data}: {data?: locationType})=> {
  const {isDark, t} = useValues();
  const [isFreelancerLogin, setIsFreelancerLogin] = useState<boolean>();

  useEffect(() => {
    checkFreelancerLogin();
  }, []);

  const checkFreelancerLogin = async () => {
    const freelancerLogin = await getValue('freelancerLogin');
    freelancerLogin && setIsFreelancerLogin(true);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCardBg : appColors.white},
      ]}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          2.{' '}
          {t(
            isFreelancerLogin
              ? 'freelancerDetails.locationDetails'
              : 'auth.companyLocation',
          )}
        </Text>
        <InputView />
      </View>
      <View
        style={[
          GlobalStyle.horizontalLine,
          styles.lineView,
          {borderColor: isDark ? appColors.darkBorder : appColors.border},
        ]}
      />
      <ServiceArea />
      <LocationList data={data} />
    </ScrollView>
  );
}
export default CompanyLocation;
