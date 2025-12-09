import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert,Image} from 'react-native';
import {category} from './data/data';
import {styles} from './styles';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';
import { CategoriesInterface } from '@src/interfaces/categoriesInterface';
import { getMediaUrl } from '@src/config/utility';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { serviceSubCategoriesActions } from '@src/store/redux/service-sub-category-redux';
import {  getSubCategories } from '@src/services/services-service';
import { SubCategoriesInterface } from '@src/interfaces/subCategoriesInterface';
import { limitWords } from '@src/config/utility';
import { serviceActions } from '@src/store/redux/service-redux';

import {
  AcRepair,
  Carpenter,
  Cleaning,
  Cooking,
  Electrician,
  Painting,
  Plumber,
  Salon,
} from '@utils/icons';


 
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}
export default function HomeCategory({
  serviceCategories, 
 
}:{
  serviceCategories:CategoriesInterface[], 
   
}) {
  const {isDark,t} = useValues();
  const [selectedCategory,setSelectedCategory] = useState<string>('')
  const handleEndReached = () => {
    console.log('You have reached the end of the list!');
  };
  const dispatch = useDispatch()
   

  //========================= load service sub categories =============================//
  const loadServiceSubCategories = async () => {
    const response: Response = await getSubCategories(`${suboffsetPageUrl}&limit=${sublimit}&id=${selectedCategory}`)
    if (response?.data?.content?.data) {
      const catData = response?.data?.content?.data
      if (catData.length > 0) {
        const formattedData: SubCategoriesInterface[] = response.data.content.data.map((serviceData: any) => ({
          id: serviceData?.id,
          name: serviceData?.name,
          image: serviceData?.image,
          is_subscribed:serviceData?.is_subscribed
          
        }))
        
        dispatch(serviceSubCategoriesActions.addServiceSubCategories({id:selectedCategory,subcategories:formattedData}))
        dispatch(serviceSubCategoriesActions.setData({field:'selected',data:{categoryId:selectedCategory,subcategories:formattedData}}))
        
      }
    }
    dispatch(serviceSubCategoriesActions.setData({field:'loading',data:false}))
     
  }

  useEffect(() => {
    if (selectedCategory !== '') {
      dispatch(serviceSubCategoriesActions.setData({field:'loading',data:true}))
      dispatch(serviceActions.setData({field:'loading',data:true}))
      
      const checkExisting = ServiceSubCategories.find(elementDet => elementDet.categoryId === selectedCategory);
      if(!checkExisting){
         loadServiceSubCategories();
      } else{
        console.log("======= Checking existing =================")
        console.log(checkExisting)
        dispatch(serviceSubCategoriesActions.setData({field:'selected',data:{categoryId:selectedCategory,subcategories:checkExisting.subcategories}}))
        dispatch(serviceSubCategoriesActions.setData({field:'loading',data:false}))
      }
    }
  }, [selectedCategory])

  const {
    data: ServiceSubCategories,
    offsetPageUrl:suboffsetPageUrl,
    limit:sublimit
  } = useSelector((state: RootState) => state['serviceSubCategories'])

  useEffect(() => {
     
    if (serviceCategories.length > 0) {
        //setSelectedCategory('2962b5d6-a041-4fb7-8b63-6357d4a027e9')
        setSelectedCategory(serviceCategories.slice(0, 1)?.[0]?.id)
    }
  }, [serviceCategories])


   
  
  

  return (
    <View style={styles.container}>
      <FlatList
        data={serviceCategories}
        keyExtractor={(item)=>item?.id}
        renderItem={({item, index}) => {
          const itemImage= `${getMediaUrl()}/category/${item.image}`
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => { setSelectedCategory(item.id) }}
              style={styles.textContainer}>
              <View
                style={[
                  styles.categoryView,
                  {
                    backgroundColor: isDark
                      ? appColors.darkTheme
                      : selectedCategory === item.id
                      ? appColors.border
                      : appColors.white,
                    borderColor: isDark
                      ? appColors.darkBorder
                      : selectedCategory === item.id
                      ? appColors.darkText
                      : appColors.border,
                  },
                ]}>
                <Image source={{ uri: itemImage }} height={36} width={36} />
              </View>
              <Text
                style={[
                  styles.textStyle,
                  {color: isDark ? appColors.white : appColors.darkText},
                ]}>
                {limitWords(item.name,2)}
              </Text>
            </TouchableOpacity>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={true}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5} // Adjust this threshold as needed
      />
    </View>
  );
}
