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
      <InputField /> 
    </View>
  );
}
export default CompanyDetails;
