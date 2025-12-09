import {View, Text} from 'react-native';
import React, {useState,useEffect} from 'react';
import {styles} from './styles';
import TextInputComponent from '@otherComponent/auth/textInput';
import {Company, Experience} from '@utils/icons';

import {windowHeight, windowWidth} from '@theme/appConstant';
import {Email} from '@utils/icons';

import {useValues} from '../../../../../../../App';
import { Checkbox } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { registerFieldActions } from '@src/store/redux/register-field-redux';
import { registerFieldErrorActions } from '@src/store/redux/register-error-redux';
import PhoneTextInput from '@otherComponent/auth/phoneTextInput';
import appColors from '@src/theme/appColors';


export default function ContactPersonInputField() {
  const dispatch = useDispatch()
  const company = useSelector((state: RootState)=>state['registerProviderField'].contact_person_name)
  const setCompany = (value:string)=>{
     dispatch(registerFieldActions.setData({
      field: 'contact_person_name',
      data: value,
     }))

     dispatch(registerFieldErrorActions.setData({
      field: 'contact_person_name',
      data: '',
     }))
  }
  const errorContactPersonName = useSelector((state: RootState)=>state['registerProviderErrorField'].contact_person_name)

  const email = useSelector((state: RootState)=>state['registerProviderField'].contact_person_email)
  const setEmail = (value:string)=>{
     dispatch(registerFieldActions.setData({
      field: 'contact_person_email',
      data: value,
     }))

     dispatch(registerFieldErrorActions.setData({
      field: 'contact_person_email',
      data: '',
     }))


  }

  const errorContactPersonEmail = useSelector((state: RootState)=>state['registerProviderErrorField'].contact_person_email)
  
  const phoneCountryCode = useSelector((state: RootState)=>state['registerProviderField'].contact_person_country)
  const setPhoneCountryCode = (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'contact_person_country',
      data: value,
    }))
 }

 const phoneCountryDialCode = useSelector((state: RootState)=>state['registerProviderField'].contact_person_dial_code)
 const  setPhoneCountryDialCode = (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'contact_person_dial_code',
      data: value,
    }))
 }

 const phoneNo = useSelector((state: RootState)=>state['registerProviderField'].contact_person_phone)
 const  setPhoneNo = (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'contact_person_phone',
      data: value,
    }))

    dispatch(registerFieldErrorActions.setData({
      field: 'contact_person_phone',
      data: '',
     }))
  }
  const errorContactPersonPhoneNo = useSelector((state: RootState)=>state['registerProviderErrorField'].contact_person_phone)


  const {t,isDark} = useValues(); 
  const [sameAsGeneralInfo, setSameAsGeneralInfo] = useState(false);

  const genInfoCompanyName =  useSelector((state: RootState)=>state['registerProviderField'].company_name)
  const genInfoCompanyEmail =  useSelector((state: RootState)=>state['registerProviderField'].company_email)
  const genInfoCompanyPhoneCountry = useSelector((state: RootState)=>state['registerProviderField'].company_phone_country)
  const genInfoCompanyPhonedialCode = useSelector((state: RootState)=>state['registerProviderField'].company_phone_dial_code)
  const genInfoCompanyPhone = useSelector((state: RootState)=>state['registerProviderField'].company_phone)

  useEffect(()=>{
    if(sameAsGeneralInfo){
      setCompany(genInfoCompanyName)
      setEmail(genInfoCompanyEmail)
      setPhoneCountryCode(genInfoCompanyPhoneCountry)
      setPhoneCountryDialCode(genInfoCompanyPhonedialCode)
      setPhoneNo(genInfoCompanyPhone)
    }
  },[sameAsGeneralInfo])

   
  return (
    

    
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
          <Checkbox
            status={sameAsGeneralInfo ? 'checked' : 'unchecked'}
            onPress={() => setSameAsGeneralInfo(!sameAsGeneralInfo)}
            color={sameAsGeneralInfo ? 'orange' : undefined}
          />
            <Text style={[styles.label,{color: isDark ? appColors.white : appColors.darkText,}]}>{t('newDeveloper.SameAsGeneralInfo')}</Text>
      </View>
     {/* Company/Individual Name */}
     <TextInputComponent
        placeholder={t('newDeveloper.ContactPersonName')} 
        error={errorContactPersonName}
        Icon={<Company />}
        value={company}
        onChangeText={value => {
          setCompany(value);
        }}
        containerStyle={{marginBottom: windowHeight(1)}}
      />
     <PhoneTextInput
        phoneCountryCode= {phoneCountryCode}
        setPhoneCountryCode = {setPhoneCountryCode}
        phoneDialCode={phoneCountryDialCode}
        setPhoneDialCode={setPhoneCountryDialCode}
        phoneContent={
          <>
            <TextInputComponent
              containerStyle={{marginTop: windowWidth(3)}}
              textContainerStyle={{width: windowWidth(45)}}
              error={errorContactPersonPhoneNo}
              placeholder={t('auth.phoneNumber')}
              keyboardType="number-pad"
              value={phoneNo}
              onChangeText={value => {
                setPhoneNo(value);
              }}
            />
          </>
        }
      />

     <TextInputComponent
        placeholder={t('auth.companyMail')}
        Icon={<Email />}
        value={email}
        error={errorContactPersonEmail}
        onChangeText={value => {
          setEmail(value);
        }}
        containerStyle={{
          marginBottom: windowWidth(1),
          marginTop: windowWidth(1),
        }}
      />




     

      
      
     

      
    </View>
  );
}
