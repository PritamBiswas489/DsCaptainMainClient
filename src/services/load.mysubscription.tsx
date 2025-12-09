import React  from 'react';
import { fetchMySubscriptions } from '@src/services/profile.service';
import { MySubscriptionInterface } from '@src/interfaces/mySubscriptionInterface';
import { mySubscriptionsAction } from '@src/store/redux/my-subscriptions-redux';
import {   AppDispatch } from '@src/store';
interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
  }
export const loadMySubscriptionFunc = async (dispatch:AppDispatch, queryParams:string) =>{
    const response: Response = await fetchMySubscriptions(queryParams)
    if (response?.data?.content?.data) {
      const mySubscriptionData = response?.data?.content?.data
      if (mySubscriptionData.length > 0) {
        const formattedData: MySubscriptionInterface[] = response.data.content.data.map((subscriptionData: any) => ({
          id: subscriptionData?.id,
          categoryId:subscriptionData?.category_id,
          subCategoryId: subscriptionData?.sub_category_id,
          isSubscribed: subscriptionData?.is_subscribed,
          subCategoryName: subscriptionData?.sub_category?.name,
          image: subscriptionData?.sub_category?.image,
          servicesCount: subscriptionData?.sub_category?.services_count,
        }))
        dispatch(mySubscriptionsAction.setData({field:'data',data:formattedData}))
      }
    }
}