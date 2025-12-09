import {View, Text} from 'react-native';
import React, {useState,useEffect} from 'react';
import {styles} from './styles';
import TextInputComponent from '@otherComponent/auth/textInput';
import {Company, Experience} from '@utils/icons';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {Email, Call} from '@utils/icons';
import {useValues} from '../../../../../../../App';
import { Checkbox } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import PhoneTextInput from '@otherComponent/auth/phoneTextInput';
import { profileUpdateFieldActions } from '@src/store/redux/profile-field-redux';
import appColors from '@src/theme/appColors';


export default function ContactPersonInputField() {
  const dispatch = useDispatch()
  
  const company = useSelector((state: RootState)=>state['serviceProviderAccountData'].contact_person_name)
  const [contactPersonName,setContactPersonName] = useState<string>(company)
  const setCompany = (value:string)=>{
    setContactPersonName(value)
  }
  const errorContactPersonName = useSelector((state: RootState)=>state['profileUpdateErrorField'].contact_person_name) //person name

  const email = useSelector((state: RootState)=>state['serviceProviderAccountData'].contact_person_email)
  const [contactPersonEmail,setContactPersonEmail] = useState<string>(email)
  const setEmail = (value:string)=>{
    setContactPersonEmail(value)
  }

 const errorContactPersonEmail = useSelector((state: RootState)=>state['profileUpdateErrorField'].contact_person_email) //person email

 const phoneNo = useSelector((state: RootState)=>state['serviceProviderAccountData'].contact_person_phone)
 const [contactPersonPhoneNumber,setContactPersonPhoneNumber] = useState<string>(phoneNo)
 const  setPhoneNo = (value:string)=>{
     setContactPersonPhoneNumber(value)
  }
  const errorContactPersonPhoneNo = useSelector((state: RootState)=>state['profileUpdateErrorField'].contact_person_phone) //person phone

  const {t,isDark} = useValues(); 
  const [sameAsGeneralInfo, setSameAsGeneralInfo] = useState(false);

  const genInfoCompanyName =  useSelector((state: RootState)=>state['profileProviderUpdateField'].company_name)
  const genInfoCompanyEmail =  useSelector((state: RootState)=>state['profileProviderUpdateField'].company_email)
  const genInfoCompanyPhone = useSelector((state: RootState)=>state['profileProviderUpdateField'].company_phone)
   
  useEffect(()=>{
    if(sameAsGeneralInfo){
      setCompany(genInfoCompanyName)
      setEmail(genInfoCompanyEmail)
      setPhoneNo(genInfoCompanyPhone)
    }
  },[sameAsGeneralInfo])

  useEffect(()=>{
    dispatch(profileUpdateFieldActions.setData({
          field: 'contact_person_name',
          data: contactPersonName,
     })) 

  },[contactPersonName])

  useEffect(()=>{
      dispatch(profileUpdateFieldActions.setData({
            field: 'contact_person_email',
            data: contactPersonEmail,
      })) 
  },[contactPersonEmail])

  useEffect(()=>{
    dispatch(profileUpdateFieldActions.setData({
          field: 'contact_person_phone',
          data: contactPersonPhoneNumber,
    })) 
},[contactPersonPhoneNumber])
 
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
        value={contactPersonName}
        onChangeText={value => {
          setCompany(value);
        }}
        containerStyle={{marginBottom: windowHeight(1)}}
      />
      <TextInputComponent
              containerStyle={{marginTop: windowWidth(3)}}
              textContainerStyle={{width: windowWidth(45)}}
              error={errorContactPersonPhoneNo}
              placeholder={t('auth.phoneNumber')}
              keyboardType="number-pad"
              Icon={<Call />}
              value={contactPersonPhoneNumber}
              onChangeText={value => {
                setPhoneNo(value);
              }}
      />

     <TextInputComponent
        placeholder={t('auth.companyMail')}
        Icon={<Email />}
        value={contactPersonEmail}
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
