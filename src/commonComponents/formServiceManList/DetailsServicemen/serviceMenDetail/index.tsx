import { ScrollView, View, Text, Image, Alert, TouchableOpacity, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import { windowHeight } from '@theme/appConstant';
import Profile from './profile';
import Info from './info';
import Language from './language';
import Expertise from './expertise';
import { styles } from './styles';
import { Delete } from '@utils/icons';
import appColors from '@theme/appColors';
import ModalComponent from '@commonComponents/modal';
import { useValues } from '../../../../../../App';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { deleteServiceMenRequest, getServiceMenDetails } from '@src/services/profile.service';
import { serviceMenDataAction } from '@src/store/redux/servicemen-list';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { serviceMenDetailsAction } from '@src/store/redux/servicemen-details-redux';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import NoDataFound from '@src/commonComponents/noDataFound';
import { noValue, wifi, notification } from '@utils/images';
import GradientBtn from '@commonComponents/gradientBtn';
import { ServiceMenDetailsInterface } from '@src/interfaces/serviceMenDetailsInterface';
import { getMediaUrl } from '@src/config/utility';

type ServiceMenDetailRouteProp = RouteProp<RootStackParamList, 'ServiceMenDetail'>;

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}


export function ServiceMenDetail() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const { data: ServiceMenDetailState } = useSelector((state: RootState) => state['serviceMenDetailsField'])
  const [showDeleteModal, setModalVisible] = useState(false);
  const { t, isDark } = useValues();
  const route = useRoute<ServiceMenDetailRouteProp>();
  const { id } = route.params;
  const [loaderSkeleton, setLoaderSkeleton] = useState(false)
  const [detailServiceMenDetails, setDetailsServiceMenDetails] = useState<ServiceMenDetailsInterface>()
  const [isImageModalVisible, setImageModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  //delete service men   
  const deleteServiceMenProcessing = () => {
    dispatch(serviceMenDataAction.deleteServiceMenById(id));
    deleteServiceMenRequest(id);
    navigation.navigate('ServiceMenList');
  };
  //get service men  
  const getServiceMenDetailHandle = async () => {
    setLoaderSkeleton(true)
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
      dispatch(serviceMenDetailsAction.addServiceMenArr(d))
      setDetailsServiceMenDetails(d)
    }
  }

  useEffect(() => {
    const checkExisting = ServiceMenDetailState.find(elementDet => elementDet.id === id);
    if (checkExisting?.id) {
      setDetailsServiceMenDetails(checkExisting.details)
    } else {
      getServiceMenDetailHandle()
    }
  }, [id])

  useEffect(() => {
    //console.log(detailServiceMenDetails)
  }, [detailServiceMenDetails])

  const refreshServiceMenDetailsDataHandle = () => {
    getServiceMenDetailHandle()
  }

  const handleImagePress = (image: string) => {
    setSelectedImage(image);
    setImageModalVisible(true);
  };

  const closeImageModal = () => {
    setImageModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        { backgroundColor: isDark ? appColors.darkTheme : appColors.white },
      ]}
      contentContainerStyle={{ paddingBottom: windowHeight(3) }}>
      {loaderSkeleton && <SkeletonLoader />}
      {!loaderSkeleton && detailServiceMenDetails?.id && <>
        <Header
          showBackArrow={true}
          title="serviceManDetails.servicemenDetails"
          trailIcon={<Delete color={appColors.error} />}
          circleStyle={{ backgroundColor: appColors.lightRed }}
          gotoScreen={() => setModalVisible(true)}
        />
        {/* profile details */}
        <Profile details={detailServiceMenDetails} />
        {/* info details */}
        <Info details={detailServiceMenDetails} />
        <View style={[GlobalStyle.horizontalLine, styles.horizontalLine]}></View>
        {/* Identification images will show here */}
        {detailServiceMenDetails.identification_image && detailServiceMenDetails.identification_image.map((identityDetImage) => {
          const identityImage = `${getMediaUrl()}/serviceman/identity/${identityDetImage}`
          return  <TouchableOpacity
          key={identityImage}
          style={styles.imageContainer}
          onPress={() => handleImagePress(identityImage)}
        >
          <Image
            source={{ uri: identityImage }}
            style={styles.identificationImage}
          />
        </TouchableOpacity>
        })}
        <ModalComponent
          icon={<Delete color={appColors.error} height={'60'} width={'60'} />}
          visible={showDeleteModal}
          onClose={() => setModalVisible(false)}
          success={false}
          title="servicemen.deleteServiceMen"
          content="servicemen.deleteServiceMenContent"
          btnTitle="profileSetting.delete"
          gotoScreen={deleteServiceMenProcessing}
          showText={t('wallet.cancel')}
          onShowText={() => setModalVisible(false)}
        />
      </>}

      {!loaderSkeleton && !detailServiceMenDetails?.id && <>
        <Header
          showBackArrow={true}
          title="serviceManDetails.servicemenDetails"
          circleStyle={{ backgroundColor: appColors.lightRed }}
          gotoScreen={() => setModalVisible(true)}
        />
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

    {selectedImage && <Modal
        visible={isImageModalVisible}
        transparent={true}
        onRequestClose={closeImageModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Image
              source={{ uri: selectedImage }}
              style={styles.fullImage}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeImageModal}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>}  
    </ScrollView>
  );
}

