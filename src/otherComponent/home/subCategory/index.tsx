import {View, FlatList} from 'react-native';
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
import { ServiceVariantInterface } from '@src/interfaces/serviceInterface';
 

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}


export default function SubCategory({}) {
  const flatListRef = useRef<FlatList>(null);
  const [selectedSubCategory,setSubCategory]  = useState<SubCategoriesInterface>()
  const dispatch = useDispatch()

  const {
    selected:ServiceSubCategories,
    loading:ServiceSubCategoriesLoading,
  } = useSelector((state: RootState) => state['serviceSubCategories'])

  const {
    data:Services
  } = useSelector((state: RootState) => state['servicesData'])

 
  useEffect(()=>{
     if(ServiceSubCategories?.subcategories){
        const firstSubCategory = ServiceSubCategories.subcategories.slice(0,1)
        setSubCategory(firstSubCategory?.[0])
     }
  },[ServiceSubCategories])
 
  const loadingServices = async () =>{
     const queryParam = `?limit=200&offset=1&sub_category_id=${selectedSubCategory?.id}`
     const response:Response = await getServices(queryParam)
     if (response?.data?.content?.data) {
      const services = response?.data?.content?.data
      // console.log("=========== services =================================")
      // console.log(services)
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

              // console.log("=============== checking formatted data =========")
              // console.log(formattedData)
              if(selectedSubCategory?.id){
                dispatch(serviceActions.addServices({id:selectedSubCategory?.id,services:formattedData}))
                dispatch(serviceActions.setData({
                  field:'selected',data:{
                    subCategoryId:selectedSubCategory?.id,
                    isSubscribed:selectedSubCategory.is_subscribed,
                    services:formattedData}}))

              }
             
              
      }else{
        if(selectedSubCategory?.id){
          dispatch(serviceActions.addServices({id:selectedSubCategory?.id,services:[]}))
          dispatch(serviceActions.setData({
            field:'selected',data:{
              subCategoryId:selectedSubCategory?.id,
              isSubscribed:selectedSubCategory.is_subscribed,
              services:[]}}))

        }
      }
    }
    dispatch(serviceActions.setData({field:'loading',data:false}))
  }
 
  useEffect(()=>{
    if(selectedSubCategory){
      dispatch(serviceActions.setData({field:'loading',data:true}))
       const checkExisting = Services.find(elementDet => elementDet.subCategoryId === selectedSubCategory.id);  
       if(!checkExisting){
          loadingServices()   
       } else{
        dispatch(serviceActions.setData({field:'selected',data:{
          subCategoryId:selectedSubCategory.id,
          isSubscribed:selectedSubCategory.is_subscribed,  
          services:checkExisting.services}}))
          dispatch(serviceActions.setData({field:'loading',data:false}))
       }   
    }

  },[selectedSubCategory])



 
  return (
    <View>
    {ServiceSubCategoriesLoading && <ActivityIndicator style={{marginTop:10}}/> }  
    {!ServiceSubCategoriesLoading && <FlatList
        ref={flatListRef}
        contentContainerStyle={styles.mainContainer}
        data={ServiceSubCategories.subcategories}
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
      />}
    </View>
  );
}
