import {View, FlatList, Alert} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {subCategoryData} from './data/data';
import {styles} from './styles';
import {categoryType} from './data/types';
import RenderItem from './renderItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { getServices } from '@src/services/services-service';
import { serviceActions } from '@src/store/redux/service-redux';
import { ServiceInterface } from '@src/interfaces/serviceInterface';
import { ActivityIndicator } from 'react-native';
import { SubCategoriesInterface } from '@src/interfaces/subCategoriesInterface';
import { MySubscriptionInterface } from '@src/interfaces/mySubscriptionInterface';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { ServiceVariantInterface } from '@src/interfaces/serviceInterface';

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

type MysubscriptionRouteProp = RouteProp<RootStackParamList, 'ServiceDetail'>;

export default function SubscriptionsSubCategory({}) {
  const flatListRef = useRef<FlatList>(null);
  const [selectedSubCategory,setSubCategory]  = useState<MySubscriptionInterface>()
  const dispatch = useDispatch()
  const route = useRoute<MysubscriptionRouteProp>();
  const { id: subCategoryIdFromParam }:{id:string | undefined} = route?.params ?? {id:''};

  //mysubscription data
  const {
    data:ServiceSubCategories,
  } = useSelector((state: RootState) => state['mysubscriptionsData'])

  //service data
  const {
    data:Services
  } = useSelector((state: RootState) => state['servicesData'])

  const [subcategories,setsubcategories] = useState([...ServiceSubCategories])  

  useEffect(()=>{
     if(ServiceSubCategories){
         let hasSelectedCategory  = false;
         if(subCategoryIdFromParam){
            const checkCatExist = ServiceSubCategories.filter(ele=>ele.subCategoryId === subCategoryIdFromParam)
            if(checkCatExist){
              setSubCategory(checkCatExist?.[0])
              hasSelectedCategory =  true
            }
         }

         if(!hasSelectedCategory){
              const firstSubCategory = ServiceSubCategories.slice(0,1)
              setSubCategory(firstSubCategory?.[0])
         }
       
     }
  },[ServiceSubCategories])


  useEffect(()=>{
    if(selectedSubCategory){
      const indexToMove = subcategories.findIndex(subcat => subcat.subCategoryId === selectedSubCategory.subCategoryId);
      if (indexToMove !== -1 && subCategoryIdFromParam) {
        // Remove the object from its current position
        const [objectToMove] = subcategories.splice(indexToMove, 1);
        // Insert the object at the start of the array
        subcategories.unshift(objectToMove);
      }
    }
  },[selectedSubCategory, subCategoryIdFromParam])
 
  const loadingServices = async () =>{
     const queryParam = `?limit=200&offset=1&sub_category_id=${selectedSubCategory?.subCategoryId}`
     const response:Response = await getServices(queryParam)
     if (response?.data?.content?.data) {
      //console.log(response?.data?.content?.data)
      const services = response?.data?.content?.data
      if (services.length > 0) {
        const formattedData: ServiceInterface[] = response.data.content.data.map((serviceData: any) =>{
          const variants:ServiceVariantInterface[] = serviceData?.variations.map((vData:ServiceVariantInterface,vIndex:number)=>{
             return {
               id: vData.id,
               variant: vData.variant,
               variant_key: vData.variant_key,
               service_id: vData.service_id,
               price: vData.price,
             }
          }); 
           
          
                return {
                id: serviceData?.id,
                name: serviceData?.name,
                short_description: serviceData?.short_description,
                description: serviceData?.description,
                cover_image: serviceData?.cover_image,
                thumbnail: serviceData?.thumbnail,
                order_count: serviceData?.order_count,
                avg_rating: serviceData?.avg_rating,
                min_bidding_price: serviceData?.variations?.[0]?.price,
                category:serviceData?.category?.name,
                variants:variants
              }
          })

              //console.log("=============== checking formatted data =========")
             //console.log(formattedData)
              if(selectedSubCategory?.subCategoryId){
                dispatch(serviceActions.addServices({id:selectedSubCategory?.subCategoryId,services:formattedData}))
                dispatch(serviceActions.setData({
                  field:'selected',data:{
                    subCategoryId:selectedSubCategory?.subCategoryId,
                    isSubscribed:selectedSubCategory.isSubscribed,
                    services:formattedData}}))

              }
             
              
      }
    }
    dispatch(serviceActions.setData({field:'loading',data:false}))
  }
 
  useEffect(()=>{
    if(selectedSubCategory){
      dispatch(serviceActions.setData({field:'loading',data:true}))
       const checkExisting = Services.find(elementDet => elementDet.subCategoryId === selectedSubCategory.subCategoryId);  
       if(!checkExisting){
          loadingServices()   
       } else{
        dispatch(serviceActions.setData({field:'selected',data:{
          subCategoryId:selectedSubCategory.subCategoryId,
          isSubscribed:selectedSubCategory.isSubscribed,  
          services:checkExisting.services}}))
          dispatch(serviceActions.setData({field:'loading',data:false}))
       }   
    }
  },[selectedSubCategory])



 
  return (
    <View>
    <FlatList
        ref={flatListRef}
        keyExtractor={item=>item.id}
        contentContainerStyle={styles.mainContainer}
        data={subcategories}
        renderItem={({index, item}) => {
          return (
            <RenderItem
              selectedCategory={selectedSubCategory}
              setCategory={setSubCategory}
              item={item}
              index={index}
              flatListRef={flatListRef}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
