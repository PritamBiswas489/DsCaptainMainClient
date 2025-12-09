import api from "@src/config/authApi.config.store";
interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}
//upload banner
export const uploadBanner = async(formData:FormData): Promise<Response> => {
	try {
		const response = await api.post('/vendor/banner/store',formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}
 
//update banner
export const updateBanner = async(formData:FormData): Promise<Response> => {
	formData.append('_method','PUT')
	try {
		const response = await api.post('/vendor/banner/update',formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

//list banner 
export const getBanners = async(): Promise<Response> =>{
	try {
		const response = await api.get('/vendor/banner');
		return response;
	} catch (error:any) {
		return error.response;
	}
}

//delete banner 

export const deleteBanner = async(id:number): Promise<Response> => {
	try {
		const response = await api.delete(`/vendor/banner/delete?id=${id}`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}