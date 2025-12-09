import {View} from 'react-native';
import React from 'react';
import TextInputComponent from '@otherComponent/auth/textInput';
import {Email, Person} from '@utils/icons';
import appColors from '@theme/appColors';
import PhoneTextInput from '@otherComponent/auth/phoneTextInput';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '../../../../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
interface textInputProps {}
import CompanyDetails from '../companyDetails';

export default function InputContainer({
  
}: textInputProps) {
  const {t} = useValues();
   
  
  
   
  
   
   

  // const profileData = useSelector((state: RootState)=>state['profileProviderUpdateField'])
  return (
    <View>
      <CompanyDetails/>
    </View>
  );
}
