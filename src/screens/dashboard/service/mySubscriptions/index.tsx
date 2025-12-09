import { Text, View, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import { Plus, Search } from '@utils/icons';
import { styles } from './styles';
 
import appColors from '@theme/appColors';
 
import { ServiceListing } from '@screens/dashboard/home';
import { serviceListData } from './data/data';
import { useValues } from '../../../../../App';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
 
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import { mySubscriptionsAction } from '@src/store/redux/my-subscriptions-redux';
 
import NoDataFound from '@src/commonComponents/noDataFound';
import SubscriptionsSubCategory from '@src/otherComponent/home/SubscriptionsSubCategory';
import { noValue, wifi, notification } from '@utils/images';
import GradientBtn from '@commonComponents/gradientBtn';
import { windowHeight } from '@theme/appConstant';
import { SubscribeBtn } from '../serviceList/subscribeBtn';
import { loadMySubscriptionFunc } from '@src/services/load.mysubscription';


//?limit=10&offset=1&id=20abbb9f-af1c-489e-968f-e9b0a8c4ea3b
//?limit=200&offset=1

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

type routeProps = NativeStackNavigationProp<RootStackParamList>;

// service list 
export function MySubscriptions() {

  
  const [popularService, setPopularService] = useState(serviceListData);
  const { isDark, t } = useValues();
  
  const { navigate, goBack: goBackToPreviousScreen } = useNavigation<routeProps>();
  const dispatch = useDispatch()
 
   
  const [loadingSkeleton, setLoadingSkeleton] = useState(true)
  const {
    data:MyData,
    needRefresh 
  } = useSelector((state: RootState) => state['mysubscriptionsData'])


  useEffect(() => {
    if(needRefresh){
       loadMySubscriptionFunc(dispatch,'?limit=200&offset=1')
       dispatch(mySubscriptionsAction.setData({field:'needRefresh',data:false}))
    }else{
      setLoadingSkeleton(false)
    }
  }, [needRefresh])

  return (
    <>
      <ScrollView
        style={[
          GlobalStyle.mainView,
          { backgroundColor: isDark ? appColors.darkCard : appColors.white },
        ]}>

        {loadingSkeleton && <SkeletonLoader />}

        {!loadingSkeleton && MyData.length > 0 &&
          <>
            <Header
              title={'newDeveloper.MySubscriptions'}
              showBackArrow={true}

              searchContainerStyle={styles.searchContainer}
            />
            <SubscriptionsSubCategory />
            <View style={styles.blankView} />
            <ServiceListing
              data={popularService}
              setData={setPopularService}
              providerImageStyle={styles.providerImageStyle}
              itemSeparator={styles.itemSeparator}
            />
          </>}

        {!loadingSkeleton && MyData.length === 0 &&
          <>
            <NoDataFound
              headerTitle="newDeveloper.NoSubscriptionFound"
              image={noValue}
              infoImage={undefined}
              title="newDeveloper.NoSubscriptionFound"
              content="newDeveloper.NoSubscriptionFoundContent"
              gradiantBtn={
                <GradientBtn
                  additionalStyle={{ bottom: windowHeight(2) }}
                  label={'common.refresh'}
                  onPress={()=>{ loadMySubscriptionFunc(dispatch,'?limit=200&offset=1') }}
                />
              }
            /></>}
        
      </ScrollView>
    { MyData.length > 0 &&  <SubscribeBtn
          subscribeText={t('newDeveloper.Subscribe')}
          unsubscribeText={t('newDeveloper.Unsubscribe')}
          isFloating={true}
        />} 
    </>
  );
}
