import { Text, ScrollView, Alert } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import ProfileSection from './profileSection';
import InputView from './inputView';
import GradientBtn from '@commonComponents/gradientBtn';
import { windowHeight } from '@theme/appConstant';
import { RootStackParamList } from 'src/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useValues } from '../../../../../App';
import appColors from '@theme/appColors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { addServiceManErrorFieldActions } from '@src/store/redux/add-service-man-error-redux';
import { addServiceMen } from '@src/services/servicemen.service';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-toast-message';
import { addServiceManFieldActions } from '@src/store/redux/add-service-man-redux';

interface RegisterResponse {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}
export function AddNewServiceMen() {
  
  const [loadingServiceMenAdd,setLoadingServiceMenAdd] = useState(false)
  const dispatch = useDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isDark, t } = useValues()

  const firstName = useSelector((state: RootState) => state['addServiceManField'].first_name)
  const lastName = useSelector((state: RootState) => state['addServiceManField'].last_name)
  const countryCode = useSelector((state: RootState) => state['addServiceManField'].phone_country)
  const dialCode = useSelector((state: RootState) => state['addServiceManField'].phone_dial_code)
  const phoneNumber = useSelector((state: RootState) => state['addServiceManField'].phone)
  const identitytype = useSelector((state: RootState) => state['addServiceManField'].identity_type)
  const identityNo = useSelector((state: RootState) => state['addServiceManField'].identity_number)
  const identityFrontImage = useSelector((state: RootState) => state['addServiceManField'].identity_front_image)
  const identityBackImage = useSelector((state: RootState) => state['addServiceManField'].identity_back_image)

  const emailAddress = useSelector((state: RootState) => state['addServiceManField'].email)
  const password = useSelector((state: RootState) => state['addServiceManField'].password)
  const profile_image = useSelector((state: RootState) => state['addServiceManField'].profile_image)

  const setErrorFirstName = (value: string) => {
    dispatch(addServiceManErrorFieldActions.setData({
      field: 'first_name',
      data: value,
    }))
  }
  const setErrorLastName = (value: string) => {
    dispatch(addServiceManErrorFieldActions.setData({
      field: 'last_name',
      data: value,
    }))
  }

  const setErrorPhoneNumber = (value: string) => {
    dispatch(addServiceManErrorFieldActions.setData({
      field: 'phone',
      data: value,
    }))
  }

  const setErrorIdentitytype = (value: string) => {
    dispatch(addServiceManErrorFieldActions.setData({
      field: 'identity_type',
      data: value,
    }))
  }

  const setErrorIdentityNo = (value: string) => {
    dispatch(addServiceManErrorFieldActions.setData({
      field: 'identity_number',
      data: value,
    }))
  }

  const setErrorIdentityFrontImage = (value: string) => {
    dispatch(addServiceManErrorFieldActions.setData({
      field: 'identity_front_image',
      data: value,
    }))
  }

  const setErrorEmailAddress = (value: string) => {
    dispatch(addServiceManErrorFieldActions.setData({
      field: 'email',
      data: value,
    }))
  }

  const setErrorPassword = (value: string) => {
    dispatch(addServiceManErrorFieldActions.setData({
      field: 'password',
      data: value,
    }))
  }
  const setErrorProfileImage = (value: string) => {
    dispatch(addServiceManErrorFieldActions.setData({
      field: 'profile_image',
      data: value,
    }))

  }
  const resetAddServiceManFormError = () =>{
    dispatch(addServiceManErrorFieldActions.resetState())
  }

  const handleNewServiceMen = async () => {
    const phoneRegex = /^(\+1|1)?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errorExist: boolean = false

    resetAddServiceManFormError();

    if (firstName.trim() === '') {
      setErrorFirstName(t('newDeveloper.addServiceMenFirstNameError'))
      errorExist = true;
    }

    if (lastName.trim() === '') {
      setErrorLastName(t('newDeveloper.addServiceMenLastNameError'))
      errorExist = true;
    }

    if (!phoneRegex.test(phoneNumber)) {
      setErrorPhoneNumber(t('newDeveloper.addServiceMenPhoneError'))
      errorExist = true;
    }

    if (!emailRegex.test(emailAddress)) {
      setErrorEmailAddress(t('newDeveloper.addServiceMenEmailError'))
      errorExist = true;
    }
    if (identitytype.value === '') {
      setErrorIdentitytype(t('newDeveloper.errorIdentityType'))
      errorExist = true;
    }

    if (identityNo.trim() === '') {
      setErrorIdentityNo(t('newDeveloper.errorIdentityNumber'))
      errorExist = true;
    }

    if (identityFrontImage.trim() === '') {
      setErrorIdentityFrontImage(t('newDeveloper.erroridentityFrontImage'))
      errorExist = true;
    }

    if (password.length < 8) {
      setErrorPassword(t('newDeveloper.errorProviderPassword'))
      errorExist = true;
    }
    if(profile_image === ''){
      setErrorProfileImage(t('newDeveloper.addServiceMenProfileImageError'))
      errorExist = true;
    }

    if (!errorExist) {
       
          const formData = new FormData()
          //formData.append('_method', 'PUT');
          formData.append('first_name',firstName)
          formData.append('last_name',lastName)
          formData.append('phone',dialCode+phoneNumber)
          formData.append('email',emailAddress)
          formData.append('password',password)
          formData.append('confirm_password',password)
          formData.append('profile_image', {
                uri:   profile_image,
                name: 'identity.jpg', 
                type: 'image/jpeg',
          });
          formData.append('identity_type',identitytype.value)
          formData.append('identity_number',identityNo)
          formData.append('identity_images[]', {
                uri:   identityFrontImage,
                name: 'identity.jpg', 
                type: 'image/jpeg',
          });
          if(identityBackImage!==''){
                formData.append('identity_images[]', {
                  uri:   identityBackImage,
                  name: 'identity1.jpg', 
                  type: 'image/jpeg',
                });
          }
          setLoadingServiceMenAdd(true)
          const response:RegisterResponse  = await addServiceMen(formData)
          // console.log(response?.data)
          if(response?.data?.response_code === 'default_400'){
            response?.data?.errors.forEach((data:{"error_code": string, "message": string},index:number)=>{
                Toast.show({
                  type: 'error',
                  text1: 'ERROR',
                  text2: data?.message,
                });
            })
          }else if(response?.data?.response_code === 'default_store_200'){
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: response?.data?.message,
            });
            dispatch(addServiceManFieldActions.resetState())
         }else {
              Toast.show({
                type: 'error',
                text1: 'ERROR',
                text2: t('newDeveloper.processFailed'),
              });
         }
         setLoadingServiceMenAdd(false)
         
    }
  }


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[GlobalStyle.mainView, { backgroundColor: isDark ? appColors.darkCard : appColors.white }]}
      contentContainerStyle={{ paddingBottom: windowHeight(3) }}>
      <Header showBackArrow={true} title="servicemen.addServiceMen" />
      <ProfileSection />
      <InputView />
      <GradientBtn
        label={'servicemen.addServiceMen'}
        onPress={handleNewServiceMen}
      />
      <Spinner
            visible={loadingServiceMenAdd}
            textContent={'Processing.....'}
            textStyle={{ color: '#FFF' }}
          />

      
    </ScrollView>
  );
}
