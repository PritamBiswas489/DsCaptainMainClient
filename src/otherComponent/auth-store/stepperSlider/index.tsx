import React, {useEffect, useState} from 'react';
import {View, Text, Animated, Alert} from 'react-native';
import {styles} from './styles';
import ProgressBar from './progressBar';
import {progressIndicatorProps} from '../header/types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import CompanyDetails from '@screens/auth-store/provider/register/companyDetails';
import ProviderDetails from '@screens/auth-store/provider/register/providerDetails';
import {getValue} from '@utils/localstorage';
import {  useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import {useValues} from '../../../../App';
import { storeRegisterFieldActions } from '@src/store/redux/store/register-field-redux';
import { storeRegisterFieldErrorActions } from '@src/store/redux/store/register-error-redux';
import { validatePassword } from '@src/utils/functions'; 
 
 

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
  //logo
  const logo = useSelector((state: RootState)=>state['storeRegisterField'].logo) 
  const set_error_logo = (value:string)=>{
    dispatch(storeRegisterFieldErrorActions.setData({
      field: 'logo',
      data: value,
     }))  
  }
  //cover photo
  const cover_photo = useSelector((state: RootState)=>state['storeRegisterField'].cover_photo) 
  const set_error_cover_photo = (value:string)=>{
    dispatch(storeRegisterFieldErrorActions.setData({
      field: 'cover_photo',
      data: value,
     }))  
  }

  //name
  const name = useSelector((state: RootState)=>state['storeRegisterField'].name) 
  const set_error_name = (value:string)=>{
    dispatch(storeRegisterFieldErrorActions.setData({
      field: 'name',
      data: value,
     }))  
  }
  //email
  const email = useSelector((state: RootState)=>state['storeRegisterField'].email) 
  const set_error_email = (value:string)=>{
    dispatch(storeRegisterFieldErrorActions.setData({
      field: 'email',
      data: value,
     }))  
  }
  //phone
  const phone_dial_code = useSelector((state: RootState)=>state['storeRegisterField'].phone_dial_code)
  const phone =  useSelector((state: RootState)=>state['storeRegisterField'].phone) 
  const set_error_phone = (value:string)=>{
      dispatch(storeRegisterFieldErrorActions.setData({
        field: 'phone',
        data: value,
      }))
  }
  //delivery time
  const minimum_delivery_time = useSelector((state: RootState)=>state['storeRegisterField'].minimum_delivery_time)
  const maximum_delivery_time = useSelector((state: RootState)=>state['storeRegisterField'].maximum_delivery_time)
  const delivery_time_type = useSelector((state: RootState)=>state['storeRegisterField'].delivery_time_type)
  const set_error_delivery_time = (value:string)=>{
    dispatch(storeRegisterFieldErrorActions.setData({
      field: 'delivery_time',
      data: value,
    }))
  }
  //password
  const password = useSelector((state: RootState)=>state['storeRegisterField'].password)
  const set_error_password = (value:string)=>{
    dispatch(storeRegisterFieldErrorActions.setData({
      field: 'password',
      data: value,
    }))
  }

  //module id

  const module_id = useSelector((state: RootState)=>state['storeRegisterField'].module_id)
  const set_error_module_id = (value:string)=>{
    dispatch(storeRegisterFieldErrorActions.setData({
      field: 'module_id',
      data: value,
    }))
  }

  //tax
  const tax = useSelector((state: RootState)=>state['storeRegisterField'].tax)
  //set error tax
  const set_error_tax = (value:string)=>{
    dispatch(storeRegisterFieldErrorActions.setData({
      field: 'tax',
      data: value,
    }))
  }
  //Store name
  const store_name = useSelector((state: RootState)=>state['storeRegisterField'].store_name)
  //set error store name
  const set_error_store_name = (value:string)=>{
    dispatch(storeRegisterFieldErrorActions.setData({
      field: 'store_name',
      data: value,
    }))
  }
  //store map field
  const address = useSelector((state: RootState)=>state['storeMapField'].address)
  const zone_id = useSelector((state: RootState)=>state['storeMapField'].zone_id)
  const latitude = useSelector((state: RootState)=>state['storeMapField'].latitude)
  const longitude = useSelector((state: RootState)=>state['storeMapField'].longitude)
   //set error store address
  const set_error_store_address = (value:string)=>{
    dispatch(storeRegisterFieldErrorActions.setData({
      field: 'store_address',
      data: value,
    }))
  }
 


  const handleNextStep = async () => {
    const phoneRegex = /^(\+1|1)?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (currentStep <= stepCount) {
      if(currentStep === 1){

        let errorFirstStep = false;
      
        if(logo.trim() === ''){
            set_error_logo(t('newDeveloper.errorStoreLogo'))
            errorFirstStep =  true;
        } 
        if(cover_photo.trim() === ''){
          set_error_cover_photo(t('newDeveloper.errorCoverLogo'))
          errorFirstStep =  true;
        } 
        if(store_name.trim() === ''){
          set_error_store_name(t('newDeveloper.errorStoreName'))
          errorFirstStep =  true;
        }
       
        if(module_id.trim() === ''){
          set_error_module_id(t('newDeveloper.errorModuleId'))
          errorFirstStep =  true;
        }

        if(address.trim()===''){
          set_error_store_address(t('newDeveloper.errorAddress'))
          errorFirstStep =  true;
        }

        if(tax === ''){
          set_error_tax(t('newDeveloper.errorTax'))
          errorFirstStep =  true;
        }
        if(minimum_delivery_time === '' || maximum_delivery_time === '' || delivery_time_type===''){
            set_error_delivery_time(t('newDeveloper.errorDeliveryTime'))
            errorFirstStep =  true;
        }

        if(errorFirstStep){
          return
        }
        dispatch(storeRegisterFieldErrorActions.resetState())
         
        setCurrentStep(currentStep + 1);
        Animated.timing(progress, {
            toValue: currentStep / stepCount,
            duration: 200,
            useNativeDriver: false,
        }).start();
      
    }  else if (currentStep === stepCount) {
         let errorFinishStep = false
         
         if(name.trim()===''){
           set_error_name(t('newDeveloper.errorStoreOwnerName'))
           errorFinishStep =  true;
         }

         if (!phoneRegex.test(phone)) {
              set_error_phone(t('newDeveloper.errorStorePhoneNumber'))
              errorFinishStep =  true;
          }
       
          if (!emailRegex.test(email)) {
              set_error_email(t('newDeveloper.errorStoreEmail'))
              errorFinishStep =  true;
          }

          //password validation
          const validPassword = validatePassword(password)

          if(validPassword.valid === false){
              set_error_password(t(validPassword.message))
              errorFinishStep =  true;
          }

          if(errorFinishStep){
            return
          }
          
          
          const formData = new FormData()
          const nameSplit = name.split(' ')
          const firstName = nameSplit?.[0]
          const lastName = nameSplit?.[1]

          formData.append('f_name',firstName)
          formData.append('l_name',lastName)
          formData.append('latitude',latitude)
          formData.append('longitude',longitude)
          formData.append('email',email)
          formData.append('phone',phone)
          formData.append('minimum_delivery_time',minimum_delivery_time)
          formData.append('maximum_delivery_time',maximum_delivery_time)
          formData.append('delivery_time_type',delivery_time_type)
          formData.append('password',password)
          formData.append('zone_id',zone_id)
          formData.append('module_id',module_id)

          formData.append('logo', {
            uri:  logo,
            name: '1000017942.jpg', 
            type: 'image/jpeg',
          });
    
          formData.append('cover_photo', {
            uri :  cover_photo,
            name: 'cover_image.jpg', 
            type: 'image/jpeg',
          });
          formData.append('tax',tax)
          formData.append('translations',
            JSON.stringify([
              {key:'storeName',value:store_name},
              {key:'storeAddress',value:address}]))
          
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
        return <CompanyDetails /> ; //Company details
      case 2:
        return <ProviderDetails />; //Store Login Details
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
