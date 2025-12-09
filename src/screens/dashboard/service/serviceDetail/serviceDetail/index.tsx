import { View, Alert } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useState, useEffect } from 'react';
import { Delete, Edit } from '@utils/icons';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import appColors from '@theme/appColors';
import SliderContainer from '@otherComponent/sliderContainer';
import { sliderData } from '../data/data';
import { styles } from './styles';
import HeadingRow from '@commonComponents/headingRow';
import { ReviewDetail } from '@otherComponent/index';
import { windowWidth } from '@theme/appConstant';
import ServiceArea from '@otherComponent/home/serviceArea';
import AddressList from '../../locationList/addressList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { useValues } from '../../../../../../App';
import { Detail } from './detail';
import { getServiceDetails } from '@src/services/services-service';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { serviceDetailsAction } from '@src/store/redux/service-details-redux';
import { ServiceDetailsInterface } from '@src/interfaces/serviceDetailsInterface';
import { RouteProp, useRoute } from '@react-navigation/native';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import NoDataFound from '@src/commonComponents/noDataFound';
import { windowHeight } from '@theme/appConstant';
import GradientBtn from '@commonComponents/gradientBtn';
import { noValue, wifi, notification } from '@utils/images';
 

type ReviewRouteProps = NativeStackNavigationProp<RootStackParamList>;
type ServiceDetailRouteProp = RouteProp<RootStackParamList, 'ServiceDetail'>;

//Response
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

//Service detail
export function ServiceDetail() {
   
  const [address, setAddress] = useState<number[]>([]);
  const { navigate } = useNavigation<ReviewRouteProps>();
  const { isDark } = useValues();
  const dispatch = useDispatch()
  const route = useRoute<ServiceDetailRouteProp>();
  const { id: serviceId } = route.params;
  const [loadingDetails, setloadingDetails] = useState(true)

  const {
    data: serviceDetailsData,
    selected:selectedDetailsData
  } = useSelector((state: RootState) => state['serviceDetailsData'])


  const loadServiceDetails = async () => {
    const response: Response = await getServiceDetails(serviceId)
    
    if (response?.data?.content?.id) {
      
      //zone list 
      const zoneList =response?.data?.content?.category?.zones_basic_info &&  response?.data?.content?.category?.zones_basic_info.map((zoneDt: any, zoneindex: number) => {
        return zoneDt?.name
      })
       
      const dt = {
        id: response?.data?.content?.id,
        name: response?.data?.content?.name,
        short_description: response?.data?.content?.short_description,
        description: response?.data?.content?.description,
        cover_image: response?.data?.content?.cover_image,
        thumbnail: response?.data?.content?.thumbnail,
        order_count: response?.data?.content?.order_count,
        is_active: response?.data?.content?.is_active,
        rating_count: response?.data?.content?.rating_count,
        avg_rating: response?.data?.content?.avg_rating,
        min_bidding_price: response?.data?.content?.variations?.[0]?.price,
        category: response?.data?.content?.category?.name,
        zone: zoneList
      }
      
       
      dispatch(serviceDetailsAction.addServiceArr(dt))
      dispatch(serviceDetailsAction.setData({ field: 'selected', data: dt }))
    }
    setloadingDetails(false)
  }
  useEffect(() => {
    const checkExisting = serviceDetailsData.find(elementDet => elementDet.id === serviceId);
    if (!checkExisting) {
      loadServiceDetails()
    } else {
      dispatch(serviceDetailsAction.setData({ field: 'selected', data: checkExisting?.details }))
      setloadingDetails(false)
    }
  }, [serviceId])

  // useEffect(()=>{
  //    console.log("========= selectedDetailsData =============")
  //    console.log(selectedDetailsData) 
  // },[selectedDetailsData])

  return (
    <View
      style={[
        GlobalStyle.mainView,
        { backgroundColor: isDark ? appColors.darkTheme : appColors.white },
      ]}>
      {loadingDetails && <SkeletonLoader/>}

      {!loadingDetails &&  !selectedDetailsData?.id && 
      <>
      <Header
          showBackArrow={true}
          title={'serviceDetail.title'}
          // trailIcon={
          //   <Edit color={isDark ? appColors.white : appColors.darkText} />
          // }
          gotoScreen={() => { }}
          // trailIcon1={<Delete color={appColors.error} />}
          trail1IconContainer={{ backgroundColor: '#FAE8E8' }}
        />
      <NoDataFound
        headerTitle="newDeveloper.noServiceMenFound"
        image={noValue}
        infoImage={undefined}
        title="newDeveloper.noServiceMenFound"
        content="newDeveloper.noServiceDetailsFoundContent"
        gradiantBtn={
          <GradientBtn
            additionalStyle={{ bottom: windowHeight(2) }}
            label={'common.refresh'}
            onPress={loadServiceDetails}
          />
        }
      /></>}
      
      {!loadingDetails &&  selectedDetailsData?.id &&  <>
        <Header
          showBackArrow={true}
          title={'serviceDetail.title'}
          // trailIcon={
          //   <Edit color={isDark ? appColors.white : appColors.darkText} />
          // }
          gotoScreen={() => { }}
          // trailIcon1={<Delete color={appColors.error} />}
          trail1IconContainer={{ backgroundColor: '#FAE8E8' }}
        />
        <ScrollView
          style={[
            GlobalStyle.mainView,
            { backgroundColor: isDark ? appColors.darkTheme : appColors.white },
          ]}
          showsVerticalScrollIndicator={false}>
          <SliderContainer data={sliderData} />
          <View
            style={[
              styles.mainContainer,
              {
                borderBottomColor: isDark
                  ? appColors.darkBorder
                  : appColors.border,
                backgroundColor: isDark ? appColors.darkText : appColors.boxBg,
                borderBottomWidth: isDark ? 0.1 : 1,
              },
            ]}>
            <View
              style={[styles.innerContainer, { borderWidth: isDark ? 0.1 : 1.4 }]}>
              <Detail />
              <View
                style={[
                  GlobalStyle.horizontalLine,
                  {
                    marginTop: 0,
                    borderColor: isDark ? appColors.darkBorder : appColors.border,
                  },
                ]}
              />
              <ServiceArea setAddress={setAddress} />
              {address.length > 0 && (
                <AddressList
                  containerStyle={{ marginHorizontal: 0, marginTop: 0 }}
                  selectedAddress={address}
                />
              )}
              {/* Review component is here  */}
              {/* <HeadingRow
              rowStyle={{marginTop: windowWidth(4), marginHorizontal: 0}}
              title={'reviews.reviews'}
              content={'reviews.seeAll'}
              gotoScreen={() => navigate('Reviews')}
            />
            <ReviewDetail /> */}
            </View>
          </View>
        </ScrollView>
      </>}
    </View>
  );
}
