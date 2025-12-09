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
  Call
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
import { ServiceMenDetailsInterface } from '@src/interfaces/serviceMenDetailsInterface';
import { getMediaUrl } from '@src/config/utility';


interface DataItem {
  label: string;
  value: string;
}


export default function InputView(
  {
    detailServiceMenDetails,
    password,
    identityImageOne,
    identityImageTwo,
    setIdentityImageOne,
    setIndentityImageTwo,
    setDetailsServiceMenDetails,
    setPassword,
    setUpdatedIdentityImageOne,
    setUpdatedIdentityImageTwo
  }:
    {
      detailServiceMenDetails: ServiceMenDetailsInterface,
      password: string,
      identityImageOne:string,
      identityImageTwo:string
      setIdentityImageOne:(value:string)=>void,
      setIndentityImageTwo:(value:string)=>void,
      setDetailsServiceMenDetails:(value:ServiceMenDetailsInterface)=>void,
      setPassword:(value:string)=>void,
      setUpdatedIdentityImageOne:(value:string)=>void,
      setUpdatedIdentityImageTwo:(value:string)=>void,
    }) {

  const { t } = useValues();

  const identityDataItems: DataItem[] = [
    { label: t('identityDetails.driving_license'), value: 'driving_license' },
    { label: t('identityDetails.trade_license'), value: 'trade_license' },
    { label: t('identityDetails.nid'), value: 'nid' },
    { label: t('identityDetails.passport'), value: 'passport' },
  ]
  const selectedIdentityType = identityDataItems.find(eleIdentity => eleIdentity.value === detailServiceMenDetails?.identification_type)

  // console.log(selectedIdentityType)
  const openImageFront = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    handleImagePicker(options, (imageUri: string) => {
      setIdentityImageOne(imageUri);
      setUpdatedIdentityImageOne(imageUri)
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
        setIndentityImageTwo(imageUri);
        setUpdatedIdentityImageTwo(imageUri)
    });
  };



  return (
    <View style={styles.container}>
      <TextInputComponent
        placeholder={t('newDeveloper.addServiceMenFirstName')}
        Icon={<Person />}
        value={detailServiceMenDetails?.first_name}
        onChangeText={value => {
          setDetailsServiceMenDetails({...detailServiceMenDetails,first_name:value});
        }}
        error={''}
        containerStyle={{ marginTop: 0 }}
      />

      <TextInputComponent
        placeholder={t('newDeveloper.addServiceMenLastName')}
        Icon={<Person />}
        value={detailServiceMenDetails?.last_name}
        onChangeText={value => {
          setDetailsServiceMenDetails({...detailServiceMenDetails,last_name:value});
        }}
        error={''}
        containerStyle={{ marginTop: 10 }}
      />

      <TextInputComponent
        containerStyle={{ marginTop: windowWidth(3) }}
        textContainerStyle={{ width: windowWidth(45) }}
        Icon={<Call />}
        placeholder={t('auth.phoneNumber')}
        keyboardType="number-pad"
        value={detailServiceMenDetails?.phone}
        error={''}
        onChangeText={value => {
          setDetailsServiceMenDetails({...detailServiceMenDetails,phone:value});
        }}
      />
      <DropdownWithIcon
        icon={<Identity />}
        label="newDeveloper.addServiceMenIdentityType"
        data={identityDataItems}
        onSelect={(value: DropdownItem) => { 
          setDetailsServiceMenDetails({...detailServiceMenDetails,identification_type:value?.value});
        }}
        error={''}
        selectedValue={selectedIdentityType?.value ? { label: selectedIdentityType.label, value: selectedIdentityType.value } : { label: '', value: '' }}
      />

      <TextInputComponent
        placeholder={t('newDeveloper.addServiceMenIdentityNumber')}
        Icon={<Identity />}
        value={detailServiceMenDetails?.identification_number}
        onChangeText={value => {
          setDetailsServiceMenDetails({...detailServiceMenDetails,identification_number:value});
        }}
        error={''}
        keyboardType={'number-pad'}
      />
      <UploadContainerView
        title={'newDeveloper.uploadidentityFrontImage'}
        onPress={() => openImageFront()}
        image={identityImageOne}
        setImage={(value)=>{
           setIdentityImageOne(value)
           setUpdatedIdentityImageOne(value)
        }}
        error={''}
      />

      <UploadContainerView
        title={'newDeveloper.uploadidentityBackImage'}
        onPress={() => openImageBack()}
        image={identityImageTwo}
        setImage={(value)=>{
          setIndentityImageTwo(value)
          setUpdatedIdentityImageTwo(value)
        }}
        error={''}
      />
      <TextInputComponent
        placeholder={t('auth.email')}
        Icon={<Email />}
        value={detailServiceMenDetails?.email}
        onChangeText={value => {
          setDetailsServiceMenDetails({...detailServiceMenDetails,email:value});
        }}
        containerStyle={{ marginTop: 10 }}
        keyboardType={'email-address'}
        error={''}
      />
      <PasswordInputComponent
        placeholder={t('introSlider.passwordPlaceholder')}
        Icon={<Password color={appColors.lightText} />}
        value={password}
        onChangeText={value => {
          setPassword(value)
        }}
        error={''}
        containerStyle={{ marginBottom: windowHeight(1) }}
        inputType={InputType.PASSWORD}
      />
    </View>
  );
}
