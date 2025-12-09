import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import TextInputComponent from '@otherComponent/auth/textInput';
import PasswordInputComponent from '@otherComponent/auth/passwordInput';
import {
  Email,
  Experience,
  Identity,
  Location,
  Notes,
  Password,
  Person,
} from '@utils/icons';
import { windowHeight, windowWidth } from '@theme/appConstant';
import PhoneTextInput from '@otherComponent/auth/phoneTextInput';
import { IdentityData, experienceData } from './data';
import UploadContainerView from '@otherComponent/auth/uploadContainer';
import MultiSelectionDrodpwn from '@otherComponent/multiSelectionDropdown';
import { InputType } from '@otherComponent/auth/textInput/types';
import appColors from '@theme/appColors';
import { ImageLibraryOptions } from 'react-native-image-picker';
import { handleImagePicker } from '@utils/functions';
import { GlobalStyle } from '@style/styles';
import { DropdownItem } from './data/types';
import { DropdownWithIcon } from '@commonComponents/dropdownWithIcon';
import { useValues } from '../../../../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { addServiceManFieldActions } from '@src/store/redux/add-service-man-redux';
 

interface DataItem {
  label: string;
  value: string;
}


export default function InputView() {
  const dispatch = useDispatch()
  const firstName = useSelector((state: RootState)=>state['addServiceManField'].first_name)  
  const setFirstName = (value:string)=>{
      dispatch(addServiceManFieldActions.setData({
        field: 'first_name',
        data: value,
      }))
  }
  const lastName = useSelector((state: RootState)=>state['addServiceManField'].last_name)  
  const setLastName = (value:string)=>{
      dispatch(addServiceManFieldActions.setData({
        field: 'last_name',
        data: value,
      }))

  }
  const countryCode = useSelector((state: RootState)=>state['addServiceManField'].phone_country) 
  const setCountryCode = (value:string)=>{
      dispatch(addServiceManFieldActions.setData({
        field: 'phone_country',
        data: value,
      }))

  } 
  const dialCode = useSelector((state: RootState)=>state['addServiceManField'].phone_dial_code)
  const setDialCode = (value:string)=>{
        dispatch(addServiceManFieldActions.setData({
          field: 'phone_dial_code',
          data: value,
        }))
  }   
  const phoneNumber = useSelector((state: RootState)=>state['addServiceManField'].phone)  

  const setPhoneNumber = (value:string)=>{
      dispatch(addServiceManFieldActions.setData({
        field: 'phone',
        data: value,
      }))

  } 
  const identitytype = useSelector((state: RootState)=>state['addServiceManField'].identity_type) 
  const setIdentityType = (value:DropdownItem)=>{
      dispatch(addServiceManFieldActions.setData({
        field: 'identity_type',
        data: value,
      }))
  }  
  const identityNo = useSelector((state: RootState)=>state['addServiceManField'].identity_number)  
  const setIdentityNo = (value:string)=>{
      dispatch(addServiceManFieldActions.setData({
        field: 'identity_number',
        data: value,
      }))
  } 
  const identityFrontImage = useSelector((state: RootState)=>state['addServiceManField'].identity_front_image)  
  const setIdentityFrontImage = (value:string)=>{
      dispatch(addServiceManFieldActions.setData({
        field: 'identity_front_image',
        data: value,
      }))
  } 
  const identityBackImage = useSelector((state: RootState)=>state['addServiceManField'].identity_back_image)  
  const setIdentityBackImage = (value:string)=>{
      dispatch(addServiceManFieldActions.setData({
        field: 'identity_back_image',
        data: value,
      }))
  } 
  const emailAddress =useSelector((state: RootState)=>state['addServiceManField'].email)  
  const setEmailAddress = (value:string) =>{
      dispatch(addServiceManFieldActions.setData({
        field: 'email',
        data: value,
      }))
  }
  const password =  useSelector((state: RootState)=>state['addServiceManField'].password)  
  const setPassword = (value:string)=>{
      dispatch(addServiceManFieldActions.setData({
        field: 'password',
        data: value,
      }))
  } 

 

  const { t } = useValues();

  const identityDataItems: DataItem[] = [
    { label: t('identityDetails.driving_license'), value: 'driving_license' },
    { label: t('identityDetails.trade_license'), value: 'trade_license' },
    { label: t('identityDetails.nid'), value: 'nid' },
    { label: t('identityDetails.passport'), value: 'passport' },
  ]



 


  const openImageFront = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    handleImagePicker(options, (imageUri: string) => {
      setIdentityFrontImage(imageUri);
    });
  };
  const openImageBack = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    handleImagePicker(options, (imageUri: string) => {
      setIdentityBackImage(imageUri);
    });
  };
  const errorFirstName = useSelector((state: RootState)=>state['addServiceManErrorField'].first_name)
  const errorLastName = useSelector((state: RootState)=>state['addServiceManErrorField'].last_name)
  const errorPhone = useSelector((state: RootState)=>state['addServiceManErrorField'].phone)
  const errorEmail = useSelector((state: RootState)=>state['addServiceManErrorField'].email)
  const errorPassword = useSelector((state: RootState)=>state['addServiceManErrorField'].password)
  const errorIdentityType = useSelector((state: RootState)=>state['addServiceManErrorField'].identity_type)
  const errorIdentityNumber = useSelector((state: RootState)=>state['addServiceManErrorField'].identity_number)
  const errorIdentityFrontImage = useSelector((state: RootState)=>state['addServiceManErrorField'].identity_front_image)
  const errorIdentityBackImage = useSelector((state: RootState)=>state['addServiceManErrorField'].identity_back_image)


  return (
    <View style={styles.container}>
      <TextInputComponent
        placeholder={t('newDeveloper.addServiceMenFirstName')}
        Icon={<Person />}
        value={firstName}
        onChangeText={value => {
          setFirstName(value);
        }}
        error={errorFirstName}
        containerStyle={{ marginTop: 0 }}
      />

      <TextInputComponent
        placeholder={t('newDeveloper.addServiceMenLastName')}
        Icon={<Person />}
        value={lastName}
        onChangeText={value => {
          setLastName(value);
        }}
        error={errorLastName}
        containerStyle={{ marginTop: 10 }}
      />

      <PhoneTextInput
        phoneCountryCode={countryCode}
        setPhoneCountryCode={setCountryCode}
        phoneDialCode={dialCode}
        setPhoneDialCode={setDialCode}
        phoneContent={
          <>
            <TextInputComponent
              containerStyle={{ marginTop: windowWidth(3) }}
              textContainerStyle={{ width: windowWidth(45) }}
              placeholder={t('auth.phoneNumber')}
              keyboardType="number-pad"
              value={phoneNumber}
              error={errorPhone}
              onChangeText={value => {
                setPhoneNumber(value);
              }}
            />
          </>
        }
      />
      <DropdownWithIcon
        icon={<Identity />}
        label="newDeveloper.addServiceMenIdentityType"
        data={identityDataItems}
        onSelect={(value: DropdownItem) => {
          setIdentityType(value)
        }}
        error={errorIdentityType}
        selectedValue={identitytype}
      />

      <TextInputComponent
        placeholder={t('newDeveloper.addServiceMenIdentityNumber')}
        Icon={<Identity />}
        value={identityNo}
        onChangeText={value => {
          setIdentityNo(value);
        }}
        error={errorIdentityNumber}
        keyboardType={'number-pad'}
      />
      <UploadContainerView
        title={'newDeveloper.uploadidentityFrontImage'}
        onPress={() => openImageFront()}
        image={identityFrontImage}
        setImage={setIdentityFrontImage}
        error={errorIdentityFrontImage}
      />

     {identityFrontImage && <UploadContainerView
        title={'newDeveloper.uploadidentityBackImage'}
        onPress={() => openImageBack()}
        image={identityBackImage}
        setImage={setIdentityBackImage}
        error={errorIdentityBackImage}
      />} 
      <TextInputComponent
        placeholder={t('auth.email')}
        Icon={<Email />}
        value={emailAddress}
        onChangeText={value => {
          setEmailAddress(value);
        }}
        containerStyle={{ marginTop: 10 }}
        keyboardType={'email-address'}
        error={errorEmail}
      />

      <PasswordInputComponent
        placeholder={t('introSlider.passwordPlaceholder')}
        Icon={<Password color={appColors.lightText} />}
        value={password}
        onChangeText={value => {
          setPassword(value)
        }}
        error={errorPassword}
        containerStyle={{ marginBottom: windowHeight(1) }}
        inputType={InputType.PASSWORD}
      />
    </View>
  );
}
