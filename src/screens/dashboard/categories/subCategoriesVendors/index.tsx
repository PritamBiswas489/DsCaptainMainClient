import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {GridIcon, Listviewicon, Search} from '@utils/icons';
import ItemsList from './itemsList';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import {styles} from './styles';
 
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
 import { authAuthorizeRedirect } from '@src/utils/functions';
 import { getVendorSubCategories } from '@src/services/store/category.service';
 import { vendorSubCategoriesActions } from '@src/store/redux/store/subcategories-redux';
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

export function SubCategories({ route }: any) {
  const [isGrid, setIsGrid] = useState(false);
  const {isDark} = useValues();
   
  const navigation = useNavigation<ItemsProps>();
  
  const dispatch = useDispatch()
  const categoryId = route?.params?.id;
  const serviceTitle = route?.params?.categoryname

  const {
    loading:showSpinnerLoader,
    data: SubCategories,
  } = useSelector(
    (state: RootState) => state['vendorSubCategories']
  );

  //load categories
  const loadCategories = async () =>{
    dispatch(vendorSubCategoriesActions.setData({ field: 'selected', data: { categoryId: '', subcategories: []  } }))
    const response: Response = await getVendorSubCategories(categoryId);
    if (response?.data?.errors) {
      await authAuthorizeRedirect(response,navigation)
    }
    
    dispatch(vendorSubCategoriesActions.addServiceSubCategories({ id: categoryId, subcategories: response?.data }))
    dispatch(vendorSubCategoriesActions.setData({ field: 'selected', data: { categoryId: categoryId, subcategories: response?.data  } }))
    dispatch(vendorSubCategoriesActions.setData({ field: 'loading', data: false }))
  }

  useEffect(()=>{
    dispatch(vendorSubCategoriesActions.setData({ field: 'loading', data: true }))
    const checkExisting = SubCategories.find(elementDet => elementDet.categoryId === categoryId);
    if (!checkExisting) {
      loadCategories();
    } else {
      dispatch(vendorSubCategoriesActions.setData({ field: 'selected', data: { categoryId: categoryId, subcategories: checkExisting.subcategories } }))
      dispatch(vendorSubCategoriesActions.setData({ field: 'loading', data: false }))
    }
  },[categoryId])

  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Header
        showBackArrow={true}
        title={serviceTitle}
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
