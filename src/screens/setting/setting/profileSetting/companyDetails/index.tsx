import {Text, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import {styles} from './styles';
import InputField from './inputField';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';
import ContactPersonInputField from './contactPersonInputField';
import AccountInfoInputField from '../accountInfo';

const CompanyDetails=() =>{
  const {isDark,t} = useValues();
  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCardBg : appColors.white},
      ]}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>1. {t('newDeveloper.GeneralInformation')}</Text>
      </View>
      <InputField />
      <View style={styles.container}>
        <Text style={styles.textStyle}>2. {t('newDeveloper.ContactPersonInformation')}</Text>
      </View>
      <ContactPersonInputField />
      <View style={styles.container}>
        <Text style={styles.textStyle}>3. {t('newDeveloper.AccountInfo')}</Text>
      </View>
      <AccountInfoInputField/>
    </View>
  );
}
export default CompanyDetails;
