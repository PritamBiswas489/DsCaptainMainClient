import {Alert, TouchableOpacity, View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import UploadContainerView from '@otherComponent/auth/uploadContainer';
import TextInputComponent from '@otherComponent/auth/textInput';
import {Company, Experience} from '@utils/icons';
import PhoneTextInput from '@otherComponent/auth/phoneTextInput';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {Notes, Email, Location} from '@utils/icons';
import {experienceData} from '../data/data';
import {ImageLibraryOptions} from 'react-native-image-picker';
import {handleImagePicker} from '@utils/functions';
import {DropdownWithIcon} from '@commonComponents/dropdownWithIcon';
import {GlobalStyle} from '@style/styles';
import {dropDownType} from './types';
import {useValues} from '../../../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { registerFieldActions  } from '@src/store/redux/register-field-redux';
import { registerFieldErrorActions } from '@src/store/redux/register-error-redux';

import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';

type props = NativeStackNavigationProp<RootStackParamList>;
export default function InputField() {
  const dispatch = useDispatch()
  const {navigate} = useNavigation<props>();
  const company = useSelector((state: RootState)=>state['registerProviderField'].company_name)
  const setCompany = (value:string)=>{
     dispatch(registerFieldActions.setData({
      field: 'company_name',
      data: value,
     }))

     dispatch(registerFieldErrorActions.setData({
      field: 'company_name',
      data: '',
     }))
     
  }
  const errorCompany = useSelector((state: RootState)=>state['registerProviderErrorField'].company_name)

  const email = useSelector((state: RootState)=>state['registerProviderField'].company_email)
  const setEmail = (value:string)=>{
     dispatch(registerFieldActions.setData({
      field: 'company_email',
      data: value,
     }))

     dispatch(registerFieldErrorActions.setData({
      field: 'company_email',
      data: '',
     }))
     
  }

  const errorEmail = useSelector((state: RootState)=>state['registerProviderErrorField'].company_email)
  
  const phoneCountryCode = useSelector((state: RootState)=>state['registerProviderField'].company_phone_country)
  const setPhoneCountryCode = (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'company_phone_country',
      data: value,
    }))
    
 }
 const errorPhoneCountryCode= useSelector((state: RootState)=>state['registerProviderErrorField'].company_phone_country)

 const phoneCountryDialCode = useSelector((state: RootState)=>state['registerProviderField'].company_phone_dial_code)
 const  setPhoneCountryDialCode = (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'company_phone_dial_code',
      data: value,
    }))
 }

 const errorPhoneCountryDialCode = useSelector((state: RootState)=>state['registerProviderErrorField'].company_phone_dial_code)

 const phoneNo = useSelector((state: RootState)=>state['registerProviderField'].company_phone)
 const  setPhoneNo = (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'company_phone',
      data: value,
    }))

    dispatch(registerFieldErrorActions.setData({
      field: 'company_phone',
      data: '',
     }))
    
  }
  const errorPhoneNo = useSelector((state: RootState)=>state['registerProviderErrorField'].company_phone)

  const company_address = useSelector((state: RootState)=>state['mapField'].address)

  const errorCompanyAddress = useSelector((state: RootState)=>state['registerProviderErrorField'].company_address)

  const {t} = useValues();
   
  const image = useSelector((state: RootState)=>state['registerProviderField'].company_logo)
  const setImage = (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'company_logo',
      data: value,
    }))

    dispatch(registerFieldErrorActions.setData({
      field: 'company_logo',
      data: '',
     }))
    
  }

  const imageError = useSelector((state: RootState)=>state['registerProviderErrorField'].company_logo)

  const openImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    handleImagePicker(options, (imageUri: string) => {
      setImage(imageUri);
    });
  };
  useEffect(()=>{
     console.log(image)
  },[image])

  return (

    
    <View style={styles.container}>
     {/* Company/Individual Name */}
     <TextInputComponent
        placeholder={t('newDeveloper.CompanyIndividualName')}
        Icon={<Company />}
        error={errorCompany}
        value={company}
        onChangeText={value => {
          setCompany(value);
        }}
        containerStyle={{marginBottom: windowHeight(1)}}
      />
    {/* Company phone number */}
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
              placeholder={t('auth.phoneNumber')}
              keyboardType="number-pad"
              value={phoneNo}
              error={errorPhoneNo}
              onChangeText={value => {
                setPhoneNo(value);
              }}
            />
          </>
        }
      />
   {/* Company address */}
   <TouchableOpacity onPress={()=>navigate('AddressCurrentLocation')}>
    <TextInputComponent
        placeholder={t('newDeveloper.AddYourAddress')}
        Icon={<Location />}
        error={errorCompanyAddress}
        value={company_address}
        editable={false}
        onFocus={()=>navigate('AddressCurrentLocation')}
        onChangeText={value => {
        }}
        containerStyle={{
          marginBottom: windowWidth(1),
          marginTop: windowWidth(1),
        }}
      />
      </TouchableOpacity>

     <TextInputComponent
        placeholder={t('auth.companyMail')}
        error={errorEmail}
        Icon={<Email />}
        value={email}
        onChangeText={value => {
          setEmail(value);
        }}
        containerStyle={{
          marginBottom: windowWidth(1),
          marginTop: windowWidth(1),
        }}
      />
      <UploadContainerView
        title={'auth.uploadLogo'}
        onPress={() => openImage()}
        image={image}
        setImage={setImage}
        error={imageError}
      />
    </View>
  );
}
