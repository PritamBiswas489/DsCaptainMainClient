import React, {useEffect, useState} from 'react';
import {View, Text, Animated, Alert} from 'react-native';
import {styles} from './styles';
import ProgressBar from './progressBar';
import {progressIndicatorProps} from '../header/types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import CompanyDetails from '@screens/auth/provider/register/companyDetails';
import CompanyLocation from '@screens/auth/provider/register/companyLocation';
import ProviderDetails from '@screens/auth/provider/register/providerDetails';
import {FreeLancerDetails} from '@screens/auth';
import {getValue} from '@utils/localstorage';
import BusinessInformation from '@src/screens/auth/provider/register/businessInformation';
import {  useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { registerFieldErrorActions } from '@src/store/redux/register-error-redux';
import { registerFieldActions } from '@src/store/redux/register-field-redux';
import {useValues} from '../../../../App';
 

export function ProgressStepsSlider({
  data,
  currentStep,
  handlePrevStep,
  stepCount,
  setCurrentStep,
  progress,
  processRegistration
}: progressIndicatorProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [isFreelancerLogin, setIsFreelancerLogin] = useState<boolean>();

  const dispatch = useDispatch()
 
  const {t} = useValues()
  useEffect(() => {
    checkFreelancerLogin();
  }, []);

  const checkFreelancerLogin = async () => {
    const freelancerLogin = await getValue('freelancerLogin');
    freelancerLogin && setIsFreelancerLogin(true);
  };

  const company_name =  useSelector((state: RootState)=>state['registerProviderField'].company_name) 
  const set_error_company_name = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'company_name',
      data: value,
     }))
  }
  const phoneCountryCode = useSelector((state: RootState)=>state['registerProviderField'].company_phone_country)
  const phoneCountryDialCode = useSelector((state: RootState)=>state['registerProviderField'].company_phone_dial_code)
  
  
  const company_phone_dial_code = useSelector((state: RootState)=>state['registerProviderField'].company_phone_dial_code)
  const company_phone =  useSelector((state: RootState)=>state['registerProviderField'].company_phone) 
  const set_error_company_phone = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'company_phone',
      data: value,
     }))
     
  }
  const company_address =  useSelector((state: RootState)=>state['mapField'].address) 
  const set_error_company_address = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'company_address',
      data: value,
     }))

  }

  const latitude =  useSelector((state: RootState)=>state['mapField'].latitude) 
  const longitude =  useSelector((state: RootState)=>state['mapField'].longitude) 

  const company_email =  useSelector((state: RootState)=>state['registerProviderField'].company_email) 
  const set_error_company_email = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'company_email',
      data: value,
     }))
     
  }
  const company_logo = useSelector((state: RootState)=>state['registerProviderField'].company_logo) 
  const set_error_company_logo = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'company_logo',
      data: value,
     }))
     
  }

  const contact_person_name = useSelector((state: RootState)=>state['registerProviderField'].contact_person_name)
  const set_error_contact_person_name = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'contact_person_name',
      data: value,
     })) 
  }

  const contact_person_dial_code = useSelector((state: RootState)=>state['registerProviderField'].contact_person_dial_code)

  const contact_person_phone = useSelector((state: RootState)=>state['registerProviderField'].contact_person_phone)
  const set_error_contact_person_phone = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'contact_person_phone',
      data: value,
     }))
  }

  const contact_person_email = useSelector((state: RootState)=>state['registerProviderField'].contact_person_email)
  const set_error_contact_person_email = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'contact_person_email',
      data: value,
     }))
  }

  const zone_id = useSelector((state: RootState)=>state['registerProviderField'].zone_id)
  const set_error_zone_id = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'zone_id',
      data: value,
     }))
  }
  const identity_type = useSelector((state: RootState)=>state['registerProviderField'].identity_type)
  const set_error_identity_type = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'identity_type',
      data: value,
     }))
  }

  const identity_number = useSelector((state: RootState)=>state['registerProviderField'].identity_number)
  const set_error_identity_number = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'identity_number',
      data: value,
     }))
  }
  const identity_front_image = useSelector((state: RootState)=>state['registerProviderField'].identity_front_image)

  const set_error_identity_front_image = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'identity_front_image',
      data: value,
     }))
  }

  const identity_back_image = useSelector((state: RootState)=>state['registerProviderField'].identity_back_image)

  const provider_name = useSelector((state: RootState)=>state['registerProviderField'].provider_name)
  const provider_email = useSelector((state: RootState)=>state['registerProviderField'].provider_email)
  const provider_phone_dial_code = useSelector((state: RootState)=>state['registerProviderField'].provider_phone_dial_code)
  const provider_phone = useSelector((state: RootState)=>state['registerProviderField'].provider_phone)
  //provider name
  const set_error_provider_name = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'provider_name',
      data: value,
     }))
  }

  //provider email
  const set_error_provider_email = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'provider_email',
      data: value,
     }))
  }

  //provider phone
  const set_error_provider_phone = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'provider_phone',
      data: value,
     }))
  }

  //provieer password
  const provider_password = useSelector((state: RootState)=>state['registerProviderField'].provider_password)
  const set_error_provider_password = (value:string)=>{
    dispatch(registerFieldErrorActions.setData({
      field: 'provider_password',
      data: value,
     }))
  }

  const handleNextStep = () => {
    const phoneRegex = /^(\+1|1)?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (currentStep < stepCount) {
      if(currentStep === 1){
        let errorFirstStep = false;
        if(company_name.trim() === ''){
          set_error_company_name(t('newDeveloper.errorCompanyName'))
          errorFirstStep =  true;
        }
        
        if (!phoneRegex.test(company_phone)) {
            set_error_company_phone(t('newDeveloper.errorCompanyPhone'))
            errorFirstStep =  true;
        }
        if(company_address.trim() === ''){
          set_error_company_address(t('newDeveloper.errorCompanyAddress'))
          errorFirstStep =  true;
        }
       
        if (!emailRegex.test(company_email)) {
          set_error_company_email(t('newDeveloper.errorCompanyEmail'))
          errorFirstStep =  true;
        }

        if(company_logo.trim() === ''){
          set_error_company_logo(t('newDeveloper.uploadCompanyLogo'))
          errorFirstStep =  true;
        }

        if(contact_person_name.trim() === ''){
          set_error_contact_person_name(t('newDeveloper.errorContactPerson'))
          errorFirstStep =  true;
        }

        if (!phoneRegex.test(contact_person_phone)) {
          set_error_contact_person_phone(t('newDeveloper.errorContactPersonPhone'))
          errorFirstStep =  true;
        }

        if (!emailRegex.test(contact_person_email)) {
           set_error_contact_person_email(t('newDeveloper.errorCompanyEmail'))
           errorFirstStep =  true;
        }

        if(errorFirstStep){
          return;
        }

        dispatch(registerFieldActions.setData({
          field: 'provider_name',
          data: company_name,
       }))

       dispatch(registerFieldActions.setData({
          field: 'provider_email',
          data: company_email,
       }))

       dispatch(registerFieldActions.setData({
          field: 'provider_phone',
          data: company_phone,
       }))

       dispatch(registerFieldActions.setData({
          field: 'provider_phone_country',
          data: phoneCountryCode,
       }))

       dispatch(registerFieldActions.setData({
          field: 'provider_phone_dial_code',
          data: phoneCountryDialCode,
       }))
      }
      if(currentStep ===2){
        console.log({zone_id})
        let errorSecondStep = false;

        if(zone_id ==='' || typeof zone_id === 'undefined'){
              set_error_zone_id(t('newDeveloper.errorZoneId'))
              errorSecondStep =  true;
        }

        if(identity_type.value ===''){
              set_error_identity_type(t('newDeveloper.errorIdentityType'))
              errorSecondStep =  true;
        }

        if(identity_number.trim() === ''){
              set_error_identity_number(t('newDeveloper.errorIdentityNumber'))
              errorSecondStep =  true;
        }

        if(identity_front_image.trim() === ''){
              set_error_identity_front_image(t('newDeveloper.erroridentityFrontImage'))
              errorSecondStep =  true;
        }

        if(errorSecondStep){
          return;
        }
         
      }
      setCurrentStep(currentStep + 1);
      Animated.timing(progress, {
        toValue: currentStep / stepCount,
        duration: 200,
        useNativeDriver: false,
      }).start();
      
    } else if (currentStep === stepCount) {

      let errorFinishStep = false;
      
       
      if(provider_name.trim() === ''){
          set_error_provider_name(t('newDeveloper.errorProviderName'))
          errorFinishStep =  true;
      }
      
      if (!phoneRegex.test(provider_phone)) {
          set_error_provider_phone(t('newDeveloper.errorProviderPhoneNumber'))
          errorFinishStep =  true;
      }

      if (!emailRegex.test(provider_email)) {
          set_error_provider_email(t('newDeveloper.errorProviderEmailAddress'))
          errorFinishStep =  true;
      }

      if(provider_password.length < 8){
          set_error_provider_password(t('newDeveloper.errorProviderPassword'))
          errorFinishStep =  true;
      }

      
      if(!errorFinishStep){
        const formData = new FormData()
        formData.append('contact_person_name',contact_person_name)
        formData.append('contact_person_phone',contact_person_dial_code+contact_person_phone)
        formData.append('contact_person_email',contact_person_email)
        formData.append('account_first_name',provider_name.split(' ')?.[0])
        formData.append('account_last_name',provider_name.split(' ')?.[1])
        formData.append('zone_id',zone_id)
        formData.append('account_email',provider_email)
        formData.append('account_phone',provider_phone_dial_code+provider_phone)
        formData.append('password',provider_password)
        formData.append('confirm_password',provider_password)
        formData.append('company_name',company_name)
        formData.append('company_phone',company_phone_dial_code+company_phone)
        formData.append('company_address',company_address)
        formData.append('company_email',company_email)
        formData.append('logo', {
          uri:  company_logo,
          name: 'logo.jpg', 
          type: 'image/jpeg',
        });
        formData.append('identity_type',identity_type?.value)
        formData.append('identity_number',identity_number)
        formData.append('identity_images[]', {
            uri:   identity_front_image,
            name: 'identity.jpg', 
            type: 'image/jpeg',
         });
         if(identity_back_image!==''){
            formData.append('identity_images[]', {
              uri:   identity_back_image,
              name: 'identity.jpg', 
              type: 'image/jpeg',
          });
         }

         formData.append('latitude', latitude.toString())
         formData.append('longitude',longitude.toString())

        // console.log(formData);

         processRegistration(formData)
      }

       
    }
  };

  const renderProgressIndicator = () => {
    const indicators = [];
    for (let i = 1; i <= stepCount; i++) {
      const isCurrentStep = i <= currentStep;
      const indicatorStyle = isCurrentStep
        ? [styles.indicator, styles.currentIndicator]
        : styles.indicator;
      indicators.push(
        <View key={i} style={indicatorStyle}>
          <Text style={styles.indicatorText}>{i}</Text>
        </View>,
      );
    }
    return indicators;
  };
  const renderScreen = () => {
    switch (currentStep) {
      case 1:
        return isFreelancerLogin ? <FreeLancerDetails /> : <CompanyDetails />;
      case 2:
        return <BusinessInformation />;
      case 3:
        return isFreelancerLogin ? null : <ProviderDetails />;
      default:
        return null;
    }
    
  };
  return (
    <ProgressBar
      handleNextStep={handleNextStep}
      renderProgressIndicator={renderProgressIndicator}
      renderScreen={renderScreen}
      currentStep={currentStep}
      handlePrevStep= {handlePrevStep}
      stepCount={stepCount}
    />
    
    
  );
}
