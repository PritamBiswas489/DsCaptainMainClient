import {View} from 'react-native';
import React, {useState} from 'react';
import {Person, Email, Identity, Password} from '@utils/icons';
import {windowHeight, windowWidth} from '@theme/appConstant';
import TextInputComponent from '@otherComponent/auth/textInput';
import PasswordInputComponent from '@otherComponent/auth/passwordInput';
import PhoneTextInput from '@otherComponent/auth/phoneTextInput';
import appColors from '@theme/appColors';
import {InputType} from '@otherComponent/auth/textInput/types';
import MultiSelectionDrodpwn from '@otherComponent/multiSelectionDropdown';
import {IdentityData} from './data/data';
import UploadContainerView from '@otherComponent/auth/uploadContainer';
import {ImageLibraryOptions} from 'react-native-image-picker';
import {handleImagePicker} from '@utils/functions';
import {DropdownWithIcon} from '@commonComponents/dropdownWithIcon';
import {DropdownItem} from './data/types';
import {useValues} from '../../../../../../../App';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { registerFieldActions } from '@src/store/redux/register-field-redux';
import { registerFieldErrorActions } from '@src/store/redux/register-error-redux';


export default function InputView() {
  const dispatch = useDispatch()
  


  const provider_name = useSelector((state: RootState)=>state['registerProviderField'].provider_name)  
  const setProviderName = (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'provider_name',
      data: value,
    }))

    dispatch(registerFieldErrorActions.setData({
      field: 'provider_name',
      data: '',
    }))
 }
  const errorProviderName = useSelector((state: RootState)=>state['registerProviderErrorField'].provider_name)  

  const provider_email = useSelector((state: RootState)=>state['registerProviderField'].provider_email)  
  const setProviderEmail = (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'provider_email',
      data: value,
    }))

    dispatch(registerFieldErrorActions.setData({
      field: 'provider_email',
      data: '',
    }))
  }

  const errorProviderEmail =  useSelector((state: RootState)=>state['registerProviderErrorField'].provider_email)  
  
  const provider_phone_country = useSelector((state: RootState)=>state['registerProviderField'].provider_phone_country)  
  const setProviderPhoneCountry = (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'provider_phone_country',
      data: value,
    }))
  }
  const provider_phone_dial_code = useSelector((state: RootState)=>state['registerProviderField'].provider_phone_dial_code)  
  const setProviderPhoneDialCode = (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'provider_phone_dial_code',
      data: value,
    }))
  }
  const provider_phone = useSelector((state: RootState)=>state['registerProviderField'].provider_phone)  
  const setProviderPhone = (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'provider_phone',
      data: value,
    }))

    dispatch(registerFieldErrorActions.setData({
      field: 'provider_phone',
      data: '',
    }))
  }

  const errorProviderPhone =  useSelector((state: RootState)=>state['registerProviderErrorField'].provider_phone)  

  const provider_password = useSelector((state: RootState)=>state['registerProviderField'].provider_password)
  const setProviderPassword =  (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'provider_password',
      data: value,
    }))
    dispatch(registerFieldErrorActions.setData({
      field: 'provider_password',
      data: '',
    }))
  }
  const errorPassword =  useSelector((state: RootState)=>state['registerProviderErrorField'].provider_password)  
  
  const {t} = useValues();
   
  return (
    <View>
      <TextInputComponent
        placeholder={t('auth.enterName')}
        Icon={<Person />}
        value={provider_name}
        onChangeText={value => {
          setProviderName(value)
        }}
        error={errorProviderName}
        containerStyle={{marginBottom: windowHeight(1)}}
      />
      <TextInputComponent
        placeholder={t('auth.enterMail')}
        Icon={<Email />}
        value={provider_email}
        onChangeText={value => {
          setProviderEmail(value)
        }}
        error={errorProviderEmail}
        containerStyle={{marginBottom: windowHeight(1)}}
        keyboardType="email-address"
      />

     <PhoneTextInput
        phoneCountryCode= {provider_phone_country}
        setPhoneCountryCode = {setProviderPhoneCountry}
        phoneDialCode={provider_phone_dial_code}
        setPhoneDialCode={setProviderPhoneDialCode}
        phoneContent={
          <>
            <TextInputComponent
              containerStyle={{marginTop: windowWidth(3)}}
              textContainerStyle={{width: windowWidth(45)}}
              placeholder={t('auth.phoneNumber')}
              keyboardType="number-pad"
              error={errorProviderPhone}
              value={provider_phone}
              onChangeText={value => {
                  setProviderPhone(value)
              }}
            />
          </>
        }
      />
      <PasswordInputComponent
        placeholder={t('introSlider.passwordPlaceholder')}
        Icon={<Password color={appColors.lightText} />}
        value={provider_password}
        onChangeText={value => {
            setProviderPassword(value)
        }}
        error={errorPassword}
        containerStyle={{marginBottom: windowHeight(1)}}
        inputType={InputType.PASSWORD}
      />
    </View>
  );
}
