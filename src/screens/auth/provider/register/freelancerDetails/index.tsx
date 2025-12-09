import {View, Text} from 'react-native';
import React from 'react';
import {useValues} from '../../../../../../App';
import {GlobalStyle} from '@style/styles';
import appColors from '@theme/appColors';
import {styles} from './styles';
import InputField from './inputField';

const FreeLancerDetails=() =>{
  const {isDark,t} = useValues();
  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCardBg : appColors.white},
      ]}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>1. {t('freelancerDetails.title')}</Text>
      </View>
      <InputField />
    </View>
  );
}

export default FreeLancerDetails;
