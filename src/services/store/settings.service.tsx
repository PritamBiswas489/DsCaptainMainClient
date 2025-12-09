import api from "../../config/frontApi.config.store"

interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}

export const getStoreSettings = async (): Promise<Response> => {
  try {
    const response = await api.get<Response>('/config');
    return response;
  } catch (error:any) {
    return error.response;
  }
}

export const getModuleList = async (): Promise<Response> => {
    try {
      const response = await api.get<Response>('/module');
      return response;
    } catch (error:any) {
      return error.response;
    }
};

export const getConfigZoneId = async(lat:any,lng:any): Promise<Response> => {
    try {
        const response = await api.get<Response>(`/config/get-zone-id?lat=${lat}&lng=${lng}`);
        return response;
      } catch (error:any) {
        return error.response;
      }

}

export const geoCodeApi = async(lat:any,lng:any): Promise<Response> => {
  try {
    const response = await api.get<Response>(`/config/geocode-api?lat=${lat}&lng=${lng}`);
    return response;
  } catch (error:any) {
    return error.response;
  }
}