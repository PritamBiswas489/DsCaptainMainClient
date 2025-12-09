import api from "../config/frontApi.config";
import { AxiosResponse } from 'axios'; // Import the AxiosResponse type from axios

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

export const getSettings = async (): Promise<Response> => {
   
  try {
    const response = await api.get<Response>('/front/get-settings');
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getZoneList = async (): Promise<Response> => {
  try {
    const response = await api.get<Response>('/zones?limit=200&offset=1');
    return response;
  } catch (error:any) {
    return error.response;
  }
};

export const getProviderConfig = async () : Promise<Response> => {
  try {
    const response = await api.get<Response>('/provider/config');
    return response;
  } catch (error:any) {
    return error.response;
  }

}

export const getPagesContent = async () : Promise<Response> => {
  try {
    const response = await api.get<Response>('/customer/config/pages');
    return response;
  } catch (error:any) {
    return error.response;
  }

}
