import React from "react";
import { getServiceMenList } from "./profile.service";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { serviceMenDataAction } from "@src/store/redux/servicemen-list";
import { ServiceMenInterface } from "@src/interfaces/serviceMenInteface";
import { homeDataActions } from "@src/store/redux/home-data-redux";
interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
  }
const getFormattedData = (content:any) =>{
  const formattedData: ServiceMenInterface[] = content.map((serviceMenData: any) => ({
    id: serviceMenData.serviceman.id,
    user_id: serviceMenData.serviceman.user_id,
    provider_id: serviceMenData.serviceman.provider_id,
    first_name: serviceMenData.first_name,
    last_name: serviceMenData.last_name,
    email: serviceMenData.email,
    phone: serviceMenData.phone,
    identification_number: serviceMenData.identification_number,
    identification_type: serviceMenData.identification_type,
    identification_image: serviceMenData.identification_image,
    gender: serviceMenData.gender,
    is_active:serviceMenData.is_active,
    profile_image: serviceMenData.profile_image,
    created_at: serviceMenData.created_at
  }));
  return formattedData
}
export  const  loadServiceMenData = async (queryParams:string,dispatch:AppDispatch) =>{
    
    const response: Response = await getServiceMenList(queryParams);
      // Handle response data and update Redux state
      dispatch(serviceMenDataAction.setData({
        field: 'offsetPageUrl',
        data: response?.data?.content?.next_page_url || ''
      }));
      dispatch(serviceMenDataAction.setData({
        field: 'isNoMoreData',
        data: !response?.data?.content?.next_page_url
      }));
      if (response?.data?.content?.data) {
        const formattedData = getFormattedData(response.data.content.data)
       // console.log("==================== formattedData ========================")
        //console.log({formattedData})
        dispatch(serviceMenDataAction.addServiceMenArr(formattedData));
      }
}

export const homeloadServiceMenData = async (queryParams:string,dispatch:AppDispatch) =>{
  const response: Response = await getServiceMenList(queryParams);
  if (response?.data?.content?.data) {
      const formattedData = getFormattedData(response.data.content.data)
       // console.log("==================== formattedData ========================")
      //console.log({formattedData})
      dispatch(homeDataActions.setData({field:'serviceMenData',data:formattedData}));
      
  }
 

}