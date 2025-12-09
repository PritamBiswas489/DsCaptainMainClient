import { Text, ScrollView, Alert } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
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
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ServiceMenDetailsInterface } from '@src/interfaces/serviceMenDetailsInterface';
import { getServiceMenDetails } from '@src/services/profile.service';
import { serviceMenDetailsAction } from '@src/store/redux/servicemen-details-redux';
import NoDataFound from '@src/commonComponents/noDataFound';
import { noValue, wifi, notification } from '@utils/images';
import { getMediaUrl } from '@src/config/utility';
import { updateServiceMenProfileDetails } from '@src/services/profile.service';
import { serviceMenDataAction } from '@src/store/redux/servicemen-list';


interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}
type EditServiceMenRouteProp = RouteProp<RootStackParamList, 'EditServiceMen'>;
export function EditServiceMen() {

  const [loadingServiceMenAdd, setLoadingServiceMenAdd] = useState(false)
  const dispatch = useDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isDark, t } = useValues()
  const route = useRoute<EditServiceMenRouteProp>();
  const { id } = route.params;
  const { data: ServiceMenDetailState } = useSelector((state: RootState) => state['serviceMenDetailsField'])
  const [detailServiceMenDetails, setDetailsServiceMenDetails] = useState<ServiceMenDetailsInterface>()
  const [loaderSkeleton, setLoaderSkeleton] = useState(true)
  const [password, setPassword] = useState('')
  const [identityImageOne, setIdentityImageOne] = useState('')
  const [identityImageTwo, setIndentityImageTwo] = useState('')
  const [updatedIdentityImageOne, setUpdatedIdentityImageOne] = useState('')
  const [updatedIdentityImageTwo, setUpdatedIdentityImageTwo] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [updatedProfileImage, setUpdatedProfileImage] = useState('')
  const [isUpdateLoader, setUpdateLoader] = useState<boolean>(false);


  //Service Men Details Handle
  const getServiceMenDetailHandle = async (updateType:string) => {
    
    const response: Response = await getServiceMenDetails(id);
    if (response?.data?.content?.id) {
      setLoaderSkeleton(false)
      const d = {
        id: response?.data?.content?.id,
        user_id: response?.data?.content?.user_id,
        provider_id: response?.data?.content?.provider_id,
        first_name: response?.data?.content?.user?.first_name,
        last_name: response?.data?.content?.user?.last_name,
        email: response?.data?.content?.user?.email,
        phone: response?.data?.content?.user?.phone,
        identification_number: response?.data?.content?.user?.identification_number,
        identification_type: response?.data?.content?.user?.identification_type,
        identification_image: response?.data?.content?.user?.identification_image,
        gender: response?.data?.content?.user?.gender,
        profile_image: response?.data?.content?.user?.profile_image,
        created_at: response?.data?.content?.user?.created_at,
        ongoing: response?.data?.content?.bookings_count?.ongoing,
        completed: response?.data?.content?.bookings_count?.completed,
        canceled: response?.data?.content?.bookings_count?.canceled,
      }

      
     if(updateType === 'update'){
       dispatch(serviceMenDetailsAction.updateServiceMenDetails({id,details:d}))

       const details = { ...d };
       delete details['ongoing'];
       delete details['completed'];
       delete details['canceled'];
       
       dispatch(serviceMenDataAction.updateServiceMenDetails(
        {
          id:d.id,
          details
        }
       ))
     }else{
       dispatch(serviceMenDetailsAction.addServiceMenArr(d))
     }
     setDetailsServiceMenDetails(d)  
    }
  }

  useEffect(() => {
    const checkExisting = ServiceMenDetailState.find(elementDet => elementDet.id === id);
    if (checkExisting?.id) {
      setDetailsServiceMenDetails(checkExisting.details)
      setLoaderSkeleton(false)
    } else {
      setLoaderSkeleton(true)
      getServiceMenDetailHandle('new')
    }
  }, [id])

  const refreshServiceMenDetailsDataHandle = () => {
    setLoaderSkeleton(true)
    getServiceMenDetailHandle('new')
  }

  useEffect(() => {
    let imageOne = '';
    let imageTwo = '';
    if (detailServiceMenDetails?.identification_image && detailServiceMenDetails.identification_image.length > 0) {
      detailServiceMenDetails?.identification_image.forEach((imageValue, imageIndex) => {
        if (imageIndex === 0) {
          imageOne = `${getMediaUrl()}/serviceman/identity/${imageValue}`
        }
        if (imageIndex === 1) {
          imageTwo = `${getMediaUrl()}/serviceman/identity/${imageValue}`
        }
      })
      setIdentityImageOne(imageOne)
      setIndentityImageTwo(imageTwo)
    }
    let profileImg = ''
    if (detailServiceMenDetails?.profile_image !== '') {
      profileImg = `${getMediaUrl()}/serviceman/profile/${detailServiceMenDetails?.profile_image}`
    }
     
    setProfileImage(profileImg)
  }, [detailServiceMenDetails])


  //========== update details service men =========================//
  const updateDetailsServiceMen = async () => {
    const formData = new FormData()
    formData.append('first_name', detailServiceMenDetails?.first_name)
    formData.append('last_name', detailServiceMenDetails?.last_name)
    formData.append('phone', detailServiceMenDetails?.phone)
    formData.append('email', detailServiceMenDetails?.email)
    if (password !== '') {
      formData.append('password', password)
    }
    if (updatedProfileImage !== '') {
        formData.append('profile_image', {
          uri:  updatedProfileImage,
          name: 'profileImage.jpg', 
          type: 'image/jpeg',
        });
    }
    formData.append('identity_type', detailServiceMenDetails?.identification_type)
    formData.append('identity_number', detailServiceMenDetails?.identification_number)
    if (updatedIdentityImageOne !== '') {
          formData.append('identity_images[]', {
            uri:  updatedIdentityImageOne,
            name: 'updatedIdentityImageOne.jpg', 
            type: 'image/jpeg',
          });
    }
    if (updatedIdentityImageTwo !== '') {
          formData.append('identity_images[]', {
            uri:  updatedIdentityImageTwo,
            name: 'updatedIdentityImageTwo.jpg', 
            type: 'image/jpeg',
          });
    }
     
    setUpdateLoader(true)

    if (detailServiceMenDetails?.id) {
      const response: Response = await updateServiceMenProfileDetails(
        formData,
        detailServiceMenDetails?.id
      )
      if (response?.data?.response_code === 'default_400') {
        response?.data?.errors.forEach((data: { "error_code": string, "message": string }, index: number) => {
          Toast.show({
            type: 'error',
            text1: 'ERROR',
            text2: data?.message,
          });
        })
        setUpdateLoader(false)
      } else if (response?.data?.response_code === 'default_update_200') {
          Toast.show({
            type: 'success',
            text1: 'SUCCESS',
            text2: response?.data?.message,
          });
          await getServiceMenDetailHandle('update');
          setUpdateLoader(false)
      } else {
        Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.processFailed'),
        });
        setUpdateLoader(false)
      }
     
    } else {
      Toast.show({
        type: 'error',
        text1: 'ERROR',
        text2: t('newDeveloper.processFailed'),
      });
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[GlobalStyle.mainView, { backgroundColor: isDark ? appColors.darkCard : appColors.white }]}
      contentContainerStyle={{ paddingBottom: windowHeight(3) }}>
      <Header showBackArrow={true} title="newDeveloper.editServiceMen" />

      {loaderSkeleton && <SkeletonLoader />}
      {!loaderSkeleton && detailServiceMenDetails?.id &&
        <>
          <ProfileSection
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            setUpdatedProfileImage={setUpdatedProfileImage}
          />
          <InputView
            detailServiceMenDetails={detailServiceMenDetails}
            password={password}
            identityImageOne={identityImageOne}
            identityImageTwo={identityImageTwo}
            setIdentityImageOne={setIdentityImageOne}
            setIndentityImageTwo={setIndentityImageTwo}
            setDetailsServiceMenDetails={setDetailsServiceMenDetails}
            setPassword={setPassword}
            setUpdatedIdentityImageOne={setUpdatedIdentityImageOne}
            setUpdatedIdentityImageTwo={setUpdatedIdentityImageTwo}

          />
          <GradientBtn
            label={'newDeveloper.updateServiceMen'}
            onPress={updateDetailsServiceMen}
          />

        </>}


      {!loaderSkeleton && !detailServiceMenDetails?.id && <>
        <NoDataFound
          headerTitle="newDeveloper.noServiceMenDetailsFound"
          image={noValue}
          infoImage={undefined}
          title="newDeveloper.noServiceMenDetailsFound"
          content="newDeveloper.noServiceMenDetailsFoundContent"
          gradiantBtn={
            <GradientBtn
              additionalStyle={{ bottom: windowHeight(2) }}
              label={'common.refresh'}
              onPress={refreshServiceMenDetailsDataHandle}
            />
          }
        />

      </>}
      <Spinner
        visible={loadingServiceMenAdd}
        textContent={'Processing.....'}
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
