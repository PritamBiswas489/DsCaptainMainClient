import { Text, View, Alert, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import { Plus, Search } from '@utils/icons';
import { styles } from './styles';
import HomeCategory from '@otherComponent/home/homeCategory';
import appColors from '@theme/appColors';
import SubCategory from '@otherComponent/home/subCategory';
import { ServiceListing } from '@screens/dashboard/home';
import { serviceListData } from './data/data';
import { useValues } from '../../../../../App';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { getCategories, getSubCategories } from '@src/services/services-service';
import { CategoriesInterface } from "@src/interfaces/categoriesInterface";
import { serviceCategoriesDataActions } from '@src/store/redux/service-category-redux';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SubscribeBtn } from './subscribeBtn';
import { serviceSubCategoriesActions } from '@src/store/redux/service-sub-category-redux';
import { serviceActions } from '@src/store/redux/service-redux';



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
export function ServiceList() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const [popularService, setPopularService] = useState(serviceListData);
  const { isDark, t } = useValues();
  const [showSearchBar, setSearchBar] = useState<boolean>();
  const { navigate } = useNavigation<routeProps>();
  const dispatch = useDispatch()
  const [loadingCategories, setLoadingCategories] = useState(true)

  const [loadingSkeleton, setLoadingSkeleton] = useState(true)

  const [refreshing, setRefreshing] = React.useState(false);

  const {
    data: ServiceCategories,
    offsetPageUrl,
    limit
  } = useSelector((state: RootState) => state['serviceCategories'])



  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(serviceCategoriesDataActions.resetState())
    dispatch(serviceSubCategoriesActions.resetState())
    dispatch(serviceActions.resetState())
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  //============== load service categories ==========================// 
  const loadServiceCategories = async () => {
    if (ServiceCategories.length === 0) {
      const response: Response = await getCategories(`${offsetPageUrl}&limit=${limit}`)
      if (response?.data?.content?.data) {
        const catData = response?.data?.content?.data
        if (catData.length > 0) {
          const formattedData: CategoriesInterface[] = response.data.content.data.map((serviceData: any) => ({
            id: serviceData?.id,
            name: serviceData?.name,
            image: serviceData?.image
          }))
          dispatch(serviceCategoriesDataActions.setData({field:'data',data:formattedData}))
        }
      }
    }
    //stop categories loader
    setLoadingCategories(false)
  }


  useEffect(() => {
    loadServiceCategories()
  }, [ServiceCategories])



  useEffect(() => {
    if (!loadingCategories) {
      setLoadingSkeleton(false)
    }
  }, [loadingCategories])



  return (
    <>
      <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        style={[
          GlobalStyle.mainView,
          { backgroundColor: isDark ? appColors.darkCard : appColors.white },
        ]}>
        {loadingSkeleton && <SkeletonLoader />}
        {!loadingSkeleton && <>
          <Header
            title={'serviceList.title'}
            // trailIcon={
            //   <Search color={isDark ? appColors.white : appColors.lightText} />
            // }
            trailIcon1={
              <Plus color={isDark ? appColors.white : appColors.darkText} />
            }
            subscribeServiceBtn={<SubscribeBtn
              subscribeText={t('newDeveloper.Subscribe')}
              unsubscribeText={t('newDeveloper.Unsubscribe')}

            />}
            onTrailIcon={() => navigate('AddNewService')}
            showBackArrow={false}
            gotoScreen={() => setSearchBar(!showSearchBar)}
            showSearchBar={showSearchBar}
            searchContainerStyle={styles.searchContainer}
            content={
              <View style={styles.contentView}>
                <Text
                  style={[
                    styles.titleStyle,
                    { color: isDark ? appColors.white : appColors.darkText },
                  ]}>
                  {t('serviceList.categories')}
                </Text>
                <HomeCategory serviceCategories={ServiceCategories} />
              </View>
            }
          />
          <SubCategory />

          <View style={styles.blankView} />
          <ServiceListing
            data={popularService}
            setData={setPopularService}
            providerImageStyle={styles.providerImageStyle}
            itemSeparator={styles.itemSeparator}
          />
          {/* Floating Subscribe Button */}


        </>}

      </ScrollView>



    </>
  );
}
