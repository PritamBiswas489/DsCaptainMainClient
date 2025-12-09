import api from "@src/config/authApi.config.store";
interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}

export const getVendorAddons = async(): Promise<Response> => {
	try {
		const response = await api.get('/vendor/addon');
		return response;
	} catch (error:any) {
		return error.response;
	}
}
//create vendor addons
export const createVendorAddons = async(formData:FormData): Promise<Response> => {
	try {
		const response = await api.post('/vendor/addon/store',formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

 
//update vendor addons
export const updateVendorAddons = async(formData:FormData): Promise<Response> => {
	formData.append('_method','PUT')
	try {
		const response = await api.post('/vendor/addon/update',formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const deleteAddon = async(addonID:number): Promise<Response> => {
	try {
		const response = await api.delete(`/vendor/addon/delete?id=${addonID}`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}