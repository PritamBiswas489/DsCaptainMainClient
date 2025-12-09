import { View, Text, Alert, ActivityIndicator, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useState, useEffect, useId } from 'react';
import { GlobalStyle } from '@style/styles';
import HeaderView from '@otherComponent/headerWithSearch';
import { styles } from './styles';
import { filterData, serviceMenListData } from './data';
import { ActiveServiceMen } from '@screens/dashboard/home';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { useValues } from '../../../../../App';
import appColors from '@theme/appColors';
 
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { serviceMenDataAction } from '@src/store/redux/servicemen-list';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import { noValue, wifi, notification } from '@utils/images';
import NoDataFound from '@src/commonComponents/noDataFound';
import { windowHeight } from '@theme/appConstant';
import GradientBtn from '@commonComponents/gradientBtn';
 
import { encodeToBase64 } from '@src/config/utility';
import { loadServiceMenData } from '@src/services/load.servicemen';
 

type props = NativeStackNavigationProp<RootStackParamList>;

export function ServiceMenList() {
  const { navigate } = useNavigation<props>();
  const { isDark, t } = useValues();
  const dispatch = useDispatch()
   
  const [searchVal, setSearchVal] = useState('')

  const [refreshing, setRefreshing] = React.useState(false);
 
  const getSearchParam = (searchVal:string) => {
    //console.log( searchVal.trim() !== '' ? `&string=${(encodeToBase64(searchVal))}` : '')
    return searchVal.trim() !== '' &&  searchVal.trim() !=='none' ? `&string=${(encodeToBase64(searchVal))}` : '';
  };
 
  const {
    data: ServiceMenList,
    offsetPageUrl,
    limit,
    isFirstTimeLoading,
    isNoMoreData,
  } = useSelector((state: RootState) => state['serviceMenDataField'])

  const [queryParams, setQueryParams] = useState(`${offsetPageUrl}&limit=${limit}&status=active${getSearchParam(searchVal)}`)
  const [clickLoadMore, setClickLoadMore] = useState(false)
  const [clickSeachButton, setclickSearchButton] = useState(false)

  
  function reset(){
    dispatch(serviceMenDataAction.resetState())
    setQueryParams(`?offset=1&limit=${limit}&status=active${getSearchParam(searchVal)}`)
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    reset()
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  

  const loadData =  (async () => {
    try {
      await loadServiceMenData(queryParams,dispatch)
    } catch (error) {
      console.error('Error fetching service men list:', error);
    } finally {
      setClickLoadMore(false);
      dispatch(serviceMenDataAction.setData({
        field: 'isFirstTimeLoading',
        data: false
      }));
    }
  } );


  useEffect(() => {
    if (isFirstTimeLoading || clickLoadMore) {
      loadData()
    }
  }, [queryParams, isFirstTimeLoading, clickLoadMore])

  useEffect(() => {
    if (!isFirstTimeLoading && clickSeachButton) {
         reset()
        setclickSearchButton(false)
    }
  }, [searchVal])


  useEffect(() => {
    // console.log('========= user effect service men list ==================')
   // console.log(ServiceMenList)
  }, [ServiceMenList])

  const loadMoreDataLoading = () => {
    setClickLoadMore(true)
    setQueryParams(`${offsetPageUrl}&limit=${limit}&status=active${getSearchParam(searchVal)}`)
  }
  const refreshServiceMenData = () => {
    dispatch(serviceMenDataAction.resetState())
  }
  const gotoScreen = React.useCallback(() => {
    navigate('AddNewServiceMen');
  }, [navigate]);


  return (
    <ScrollView
      refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        { backgroundColor: isDark ? appColors.darkCard : appColors.white },
      ]}
      contentContainerStyle={styles.contentContainerStyle}>
      <HeaderView
      showBackArrow ={true}
        title="servicemen.servicemenList"
        setSearchValue={setSearchVal}
        setclickSearchButton={setclickSearchButton}
        gotoScreen={gotoScreen}
        

      />
      <View style={styles.blankView} />
      {isFirstTimeLoading && <SkeletonLoader />}
      {!isFirstTimeLoading && ServiceMenList.length === 0 && <NoDataFound
        headerTitle="newDeveloper.noServiceMenFound"
        image={noValue}
        infoImage={undefined}
        title="newDeveloper.noServiceMenFound"
        content="newDeveloper.noServiceFoundContent"
        gradiantBtn={
          <GradientBtn
            additionalStyle={{ bottom: windowHeight(2) }}
            label={'common.refresh'}
            onPress={refreshServiceMenData}
          />
        }
      />}
      {!isFirstTimeLoading && ServiceMenList.length > 0 && <>
        <ActiveServiceMen data={ServiceMenList} />
        {clickLoadMore && <ActivityIndicator />}
        {!isNoMoreData && !clickLoadMore && <GradientBtn
          additionalStyle={{}}
          label={'newDeveloper.loadMore'}
          onPress={loadMoreDataLoading}
        />}
      </>}
    </ScrollView>
  );
}
