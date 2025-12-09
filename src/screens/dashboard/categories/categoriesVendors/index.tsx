import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {GridIcon, Listviewicon, Search} from '@utils/icons';
import ItemsList from './itemsList';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import {styles} from './styles';
import { getVendorCategories } from '@src/services/store/category.service';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
 import { authAuthorizeRedirect } from '@src/utils/functions';
 import { vendorCategoriesActions } from '@src/store/redux/store/categories.redux';
 import Spinner from 'react-native-loading-spinner-overlay';

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}
type ItemsProps = NativeStackNavigationProp<RootStackParamList>;

export function Categories() {
  const [isGrid, setIsGrid] = useState(false);
  const {isDark} = useValues();
  const [showSpinnerLoader,setSpinnerLoader] =  useState(false); 
  const navigation = useNavigation<ItemsProps>();
  const dispatch = useDispatch()
  const {
    isFirstTimeLoading: selectedFirstTimeLoading,
  } = useSelector(
    (state: RootState) => state['vendorCategories']
  );

  const loadCategories = async () =>{
    setSpinnerLoader(true)
    const response: Response = await getVendorCategories();
    if (response?.data?.errors) {
      await authAuthorizeRedirect(response,navigation)
    }
    dispatch(vendorCategoriesActions.setData({field:'data',data:response?.data}))
    dispatch(vendorCategoriesActions.setData({field:'isFirstTimeLoading',data:false}))
    setSpinnerLoader(false)
  }

  useEffect(()=>{
    if(selectedFirstTimeLoading){
       loadCategories()
    }
  },[selectedFirstTimeLoading])

  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Header
        showBackArrow={true}
        title={'serviceList.categories'}
        searchContainerStyle={styles.searchContainer}
      />
      <ItemsList isGrid={isGrid} />

      <Spinner
          visible={showSpinnerLoader}
          textContent={'Processing.....'}
          textStyle={{ color: '#FFF' }}
        />
    </View>
  );
}
