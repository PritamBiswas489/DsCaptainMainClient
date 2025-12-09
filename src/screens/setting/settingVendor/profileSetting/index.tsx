import {View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import UserProfile from './userProfile';
import InputView from './inputView';
import CommonModal from '@commonComponents/commonModal';
import ProfileImageOptions from './profileImageOptions';
import ModalComponent from '@commonComponents/modal';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import { Alert } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { updateProfileData } from '@src/services/store/profile.service';
import Toast from 'react-native-toast-message';
import { vendorProfileUpdateErrorFieldActions } from '@src/store/redux/store/profile-error-redux';
import { storeProfileDataActions } from '@src/store/redux/store/store-profile-redux';
import { getAuthUserService as storeAuthService } from '@src/services/store/auth.service';
import { validatePassword } from '@src/utils/functions';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
 import { authAuthorizeRedirect } from '@src/utils/functions';

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

type loginProps = NativeStackNavigationProp<RootStackParamList>;
export function VendorProfileEdit() {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isSkeletonLoaderView, setSkeletionLoaderView] = useState<boolean>(false);
  const [isUpdateLoader, setUpdateLoader] = useState<boolean>(false);
  
  const updatedProfileData = useSelector((state: RootState)=>state['vendorProfileUpdateField'])
   
  const navigation = useNavigation<loginProps>();

   


  const handleModal = () => {
     setShowModal(!showModal);
  };
  const {isDark, t} = useValues();

   
  const set_error_first_name = (error:string)=>{
    dispatch(vendorProfileUpdateErrorFieldActions.setData({
      field: 'firstName',
      data: error,
     }))
  }

  const set_error_last_name = (error:string)=>{
    dispatch(vendorProfileUpdateErrorFieldActions.setData({
      field: 'lastName',
      data: error,
     }))
  }

  const set_error_phone_number = (error:string)=>{
    dispatch(vendorProfileUpdateErrorFieldActions.setData({
      field: 'phoneNumber',
      data: error,
     }))
  }

  const set_error_password = (error:string)=>{
    dispatch(vendorProfileUpdateErrorFieldActions.setData({
        field: 'password',
        data: error,
     }))
  }

  const set_error_confirm_password = (error:string)=>{
    dispatch(vendorProfileUpdateErrorFieldActions.setData({
        field: 'confirm_password',
        data: error,
     }))
  }


  const resetError = () =>{
    dispatch(vendorProfileUpdateErrorFieldActions.resetState())
  }

   


   

  const uploadProfileUpdate = async () =>{
         
         let errorExist = false;
         
         resetError()

         if(updatedProfileData.firstName.trim() === ''){
              set_error_first_name(t('newDeveloper.errorCompanyName'))
              errorExist =  true
         }
         if(updatedProfileData.lastName.trim() === ''){
               set_error_last_name(t('newDeveloper.errorCompanyName'))
               errorExist =  true
         }
         if (updatedProfileData.phoneNumber.trim()==='') {
                set_error_phone_number(t('newDeveloper.errorCompanyPhone'))
                errorExist =  true
         }
         if(updatedProfileData.password.length > 0){
          const validateRes = validatePassword(updatedProfileData.password)
            if( 
              !validateRes.valid
            ){
                set_error_password(t(validateRes.message))
                errorExist =  true;

            }
            if(updatedProfileData.password!==updatedProfileData.confirm_password){
                set_error_confirm_password(t('newDeveloper.confirmPasswordError'))
                errorExist =  true;
            }
        }
       
        if(errorExist){
            return  
        }
        
        const formData = new FormData()
        formData.append('_method', 'PUT'); 
        formData.append('f_name',updatedProfileData.firstName)
        formData.append('l_name',updatedProfileData.lastName)
        formData.append('phone',updatedProfileData.phoneNumber)
        
        if(updatedProfileData.password.length > 0){
           formData.append('password',updatedProfileData.password)
        }

        if(updatedProfileData.logo!==''){
          formData.append('image', {
            uri:  updatedProfileData.logo,
            name: 'image.jpg', 
            type: 'image/jpeg',
          });
        }
         setUpdateLoader(true)

         const response :{
          data: any;
          status: number;
          statusText: string;
          headers: any;
          config: any;
          request?: any;
        } = await updateProfileData(formData)

        if(response?.data?.message){
          setModalVisible(true)
          const responseuser = await storeAuthService()
          if (responseuser?.data?.id) {
               dispatch(storeProfileDataActions.setData(responseuser?.data))
          }else if (response?.data?.errors) {
             await authAuthorizeRedirect(response,navigation)
          }
        }else if (response?.data?.errors) {
          await authAuthorizeRedirect(response,navigation)
          Toast.show({
            type: 'error',
            text1: 'ERROR',
            text2: response?.data?.errors[0]?.message,
          });
         }else {
                Toast.show({
                    type: 'error',
                    text1: 'ERROR',
                    text2: t('newDeveloper.processFailed'),
                });
         }
         setUpdateLoader(false)
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <Header showBackArrow={true} title="profileSetting.setting" />
      <UserProfile setShowModal={setShowModal} />
      <View
        style={[
          GlobalStyle.horizontalLine,
          {
            marginTop: 0,
            borderWidth: 0.3,
            marginHorizontal: 20,
            height: 0.2,
            marginBottom: 2,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}
      />
      <InputView updateprofile={uploadProfileUpdate}   />
      <ModalComponent
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        success={true}
        title="auth.successTitle"
        content="auth.profileUpdate"
        btnTitle="common.okay"
        gotoScreen={()=>setModalVisible(false)}
      />
      <CommonModal
        modal={<ProfileImageOptions setShowModal={setShowModal} />}
        showModal={showModal}
        visibleModal={handleModal}
      />
       <Spinner
            visible={isSkeletonLoaderView}
            textContent={'Loading.....'}
            textStyle={{ color: '#FFF' }}
          />

        <Spinner
            visible={isUpdateLoader}
            textContent={'Updating.....'}
            textStyle={{ color: '#FFF' }}
          />
    </ScrollView>
  );
}
