import api from "@src/config/authApi.config.store";

interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
  }
export const getAuthUserService =  async (): Promise<Response> => {
	try {
		const response = await api.get('/vendor/profile');
		return response;
	} catch (error:any) {
		return error.response;
	}
};

export const deleteProviderOwnAccount = async(): Promise<Response> => {
	try {
		const response = await api.delete('/vendor/remove-account');
		return response;
	} catch (error:any) {
		return error.response;
	}

}
 
