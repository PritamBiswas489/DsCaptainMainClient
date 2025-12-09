import { Text, View, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { useState } from 'react';
import { serviceActions } from '@src/store/redux/service-redux';
import { serviceSubCategoriesActions } from '@src/store/redux/service-sub-category-redux';
import { updateSubscriptionStatusBySubCategoryId } from '@src/services/profile.service';
import { mySubscriptionsAction } from '@src/store/redux/my-subscriptions-redux';
 

export function SubscribeBtn({subscribeText,unsubscribeText,isFloating}:{
    subscribeText:string,
    unsubscribeText:string,
    isFloating?:boolean
}) {
     const {
        selected:Services,
        loading:loadingServices
      } = useSelector((state: RootState) => state['servicesData'])

      const {
        selected:SubCategories,
        data:allSubCategories
      } = useSelector((state: RootState) => state['serviceSubCategories'])

      const {
        data:allSubscribedSubCategories
      } = useSelector((state: RootState) => state['mysubscriptionsData'])

      const dispatch = useDispatch()
      
    //console.log("============ Servicessssss =======================//")
    //console.log(Services)
      
    return ( Services.services.length > 0 && !loadingServices  &&  
      <TouchableOpacity
       style={[isFloating ? styles.floatingButton : styles.nonFloatingButton, { backgroundColor: Services.isSubscribed === 0 ? 'green' : 'red' }]}
       onPress={() => {
           const updateStatus = Services.isSubscribed === 1 ? 0 : 1
        dispatch(serviceActions.setData({field:'selected',data:{...Services,isSubscribed:updateStatus}}))

           let listSubcategories = [...SubCategories.subcategories];

           const updatedListSubcategories = listSubcategories.map(elementDet => 
           Services.subCategoryId === elementDet.id
          ? { ...elementDet, is_subscribed: updateStatus }   
          : elementDet   
           );

           const listAllSubCategories = [...allSubCategories]
           const updateAllCategoriesSubCategories =  listAllSubCategories.map(elementDet => 
              elementDet.categoryId === SubCategories.categoryId ? 
           {...elementDet,subcategories:updatedListSubcategories}

           :elementDet
           )
           dispatch(serviceSubCategoriesActions.setData({ field: 'data', data: updateAllCategoriesSubCategories }));  

          if(updateStatus === 0){
            const listAllSubscribedSubCategories = [...allSubscribedSubCategories]
            const updateAllCategoriesSubscribedSubCategories =  listAllSubscribedSubCategories.filter(elementDet => elementDet.subCategoryId !== Services.subCategoryId)
            dispatch(mySubscriptionsAction.setData({field:'data','data':updateAllCategoriesSubscribedSubCategories}))
            
          }
          dispatch(mySubscriptionsAction.setData({field:'needRefresh',data:true}))

          
           //================= update service status in server ========================//
         updateSubscriptionStatusBySubCategoryId(Services?.subCategoryId)

       }}>
       <Icon name="subscriptions" size={15} color={appColors.white} />
       <Text style={styles.floatingButtonText}>{Services.isSubscribed === 0 ? subscribeText : unsubscribeText}</Text>
      
          </TouchableOpacity>)

}
const styles = StyleSheet.create({
    nonFloatingButton: {
      backgroundColor: appColors.primary,
      padding: windowWidth(2),
      marginRight:windowWidth(2),
      borderRadius: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    floatingButton: {
        position: 'absolute',
        bottom: windowWidth(4),
        right: windowWidth(30),
        backgroundColor: appColors.primary,
        padding: windowWidth(4),
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
      },
    floatingButtonText: {
      color: appColors.white,
      marginLeft: windowWidth(2),
      fontSize: fontSizes.FONT4,
      fontFamily: appFonts.NunitoExtraBold,
    },
  });
  