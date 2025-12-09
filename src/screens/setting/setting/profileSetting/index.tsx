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
import { getZoneList } from '@src/services/settings.service';
import Spinner from 'react-native-loading-spinner-overlay';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { zoneDataActions } from '@src/store/redux/zone-list-redux';
import { updateProfileData } from '@src/services/profile.service';
import Toast from 'react-native-toast-message';
import { profileUpdateErrorFieldActions } from '@src/store/redux/profile-error-redux';

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}


export function UserProfileSetting() {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isSkeletonLoaderView, setSkeletionLoaderView] = useState<boolean>(true);
  const [isUpdateLoader, setUpdateLoader] = useState<boolean>(false);
  const {zones} = useSelector((state: RootState)=>state['zoneList'])

  const updatedProfileData = useSelector((state: RootState)=>state['profileProviderUpdateField'])
  // console.log(updatedProfileData.zone_id)
  //console.log(updatedProfileData)

  let zoneList = []; 
  if(zones!=''){
    zoneList = JSON.parse(zones)
  }
  const [isZoneLoaded,setZoneLoaded] = useState<boolean>(zoneList && false);
  useEffect(()=>{
    if(isZoneLoaded){
       setSkeletionLoaderView(false)
    }
  },[isZoneLoaded])

  useEffect(()=>{
    const getzones = async()=>{
      const response:Response = await getZoneList();
      setZoneLoaded(true);
      if(response?.data?.content?.data){
        //console.log(response?.data?.content?.data)
        dispatch(zoneDataActions.setData({
          field: 'zones',
          data: JSON.stringify(response?.data?.content?.data),
         }))
      }
    }
    if(!isZoneLoaded){
      getzones()
    }
 },[isZoneLoaded ])

  const handleModal = () => {
     setShowModal(!showModal);
  };
  const {isDark, t} = useValues();

  //set error contact person name
  const set_error_contact_person_name = (error:string)=>{
    dispatch(profileUpdateErrorFieldActions.setData({
      field: 'contact_person_name',
      data: error,
     }))

  }

  //set error contact person phone
  const set_error_contact_person_phone = (error:string)=>{
    dispatch(profileUpdateErrorFieldActions.setData({
      field: 'contact_person_phone',
      data: error,
     }))

  }

  //set error contact person email
  const set_error_contact_person_email = (error:string)=>{
    dispatch(profileUpdateErrorFieldActions.setData({
      field: 'contact_person_email',
      data: error,
     }))

  }

  //set error zone id
  const set_error_zone_id = (error:string)=>{
    dispatch(profileUpdateErrorFieldActions.setData({
      field: 'zone_id',
      data: error,
     }))

  }

  //set error company name
  const set_error_company_name = (error:string)=>{
    dispatch(profileUpdateErrorFieldActions.setData({
      field: 'company_name',
      data: error,
     }))

  }

  //set error company phone
  const set_error_company_phone = (error:string)=>{
    dispatch(profileUpdateErrorFieldActions.setData({
      field: 'company_phone',
      data: error,
     }))

  }
  //set error company email
  const set_error_company_email = (error:string)=>{
     dispatch(profileUpdateErrorFieldActions.setData({
      field: 'company_email',
      data: error,
     }))

  }
 
  //set error company address
  const set_error_company_address = (error:string)=>{
    dispatch(profileUpdateErrorFieldActions.setData({
        field: 'company_address',
        data: error,
     }))
  }

  const set_error_password = (error:string)=>{
    dispatch(profileUpdateErrorFieldActions.setData({
        field: 'password',
        data: error,
     }))
  }

  const set_error_confirm_password = (error:string)=>{
    dispatch(profileUpdateErrorFieldActions.setData({
        field: 'confirm_password',
        data: error,
     }))
  }
  const resetError = () =>{
    dispatch(profileUpdateErrorFieldActions.resetState())
  }

   


   

  const uploadProfileUpdate = async () =>{
         console.log("//================================ UPDATE PROFILE ==========================================================//")
         const phoneRegex = /^(\+1|1)?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

         let errorExist = false;
         
         resetError()

         if(updatedProfileData.company_name.trim() === ''){
              set_error_company_name(t('newDeveloper.errorCompanyName'))
              errorExist =  true
         }
         
         if (updatedProfileData.company_phone.trim()==='') {
              set_error_company_phone(t('newDeveloper.errorCompanyPhone'))
              errorExist =  true
         }

         if (!emailRegex.test(updatedProfileData.company_email.trim())) {
              set_error_company_email(t('newDeveloper.errorCompanyEmail'))
              errorExist =  true;
        }

        if(updatedProfileData.company_address.trim() === ''){
              set_error_company_address(t('newDeveloper.errorCompanyAddress'))
              errorExist =  true
        }

        if(updatedProfileData.zone_id.trim() === ''){
              set_error_zone_id(t('newDeveloper.errorZoneId'))
              errorExist =  true
        }

        if(updatedProfileData.contact_person_name.trim() === ''){
            set_error_contact_person_name(t('newDeveloper.errorContactPerson'))
            errorExist =  true
        }

        if(updatedProfileData.contact_person_phone.trim() === ''){
          set_error_contact_person_phone(t('newDeveloper.errorContactPersonPhone'))
          errorExist =  true
        }

        if (!emailRegex.test(updatedProfileData.contact_person_email.trim())) {
            set_error_contact_person_email(t('newDeveloper.errorContactPersonEmail'))
            errorExist =  true;
        }
        if(updatedProfileData.password.length > 0){
          if(updatedProfileData.password.length < 8){
              set_error_password(t('newDeveloper.errorProviderPassword'))
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
        formData.append('contact_person_name',updatedProfileData.contact_person_name)
        formData.append('contact_person_phone',updatedProfileData.contact_person_phone)
        formData.append('contact_person_email',updatedProfileData.contact_person_email)
        formData.append('zone_ids[]',updatedProfileData.zone_id)
        formData.append('company_name',updatedProfileData.company_name)
        formData.append('company_phone',updatedProfileData.company_phone)
        formData.append('company_email',updatedProfileData.company_email)
        formData.append('company_address',updatedProfileData.company_address)
        formData.append('latitude',updatedProfileData.latitude)
        formData.append('longitude',updatedProfileData.longitude)
       
        if(updatedProfileData.logo!==''){
          formData.append('logo', {
            uri:  updatedProfileData.logo,
            name: 'logo.jpg', 
            type: 'image/jpeg',
          });
        }
        if(updatedProfileData.password.length > 0){
            formData.append('password',updatedProfileData.password)
            formData.append('confirm_password',updatedProfileData.confirm_password)
        }

        // console.log(formData)
        // return 

         setUpdateLoader(true)

         const response :{
          data: any;
          status: number;
          statusText: string;
          headers: any;
          config: any;
          request?: any;
        } = await updateProfileData(formData)

        console.log("============= Profile update response ===================")
        console.log(response?.data)

        if(response?.data?.response_code === 'default_400'){
                response?.data?.errors.forEach((data:{"error_code": string, "message": string},index:number)=>{
                      Toast.show({
                        type: 'error',
                        text1: 'ERROR',
                        text2: data?.message,
                      });
                })
        } else if(response?.data?.response_code === 'default_update_200'){
                setModalVisible(true)
        }else {
                Toast.show({
                    type: 'error',
                    text1: 'ERROR',
                    text2: t('newDeveloper.processFailed'),
                });
         }
         setUpdateLoader(false)

         //setModalVisible(true)
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
