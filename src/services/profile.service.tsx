import api from "../config/authApi.config";

interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}

export const updateProfileData = async (data:FormData): Promise<Response> => {
    try {
		const response = await api.post('/provider/update/profile',data);
		return response;
	} catch (error:any) {
		return error.response;
	}
}
export const getUserBankDetails = async(): Promise<Response> => {
	try {
		const response = await api.get('/provider/get-bank-details');
		return response;
	} catch (error:any) {
		return error.response;
	}

}

export const saveBankDetails = async(data:FormData): Promise<Response> => {
	data.append('_method','PUT')
	try {
		
		const response = await api.post('/provider/update-bank-details',data);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const getReviewList = async(queryParam:string): Promise<Response> => {
	try {
		const response = await api.get(`/provider/review${queryParam}`);
		return response;
	} catch (error:any) {
		return error.response;
	}

}
export const getServiceMenList = async(queryParam:string): Promise<Response> => {
	try {
		const response = await api.get(`/provider/serviceman${queryParam}`);
		return response;
	} catch (error:any) {
		return error.response;
	}

}
 
export const deleteServiceMenRequest = async(serviceMenId:string): Promise<Response> => {
	try {
		const response = await api.delete(`/provider/serviceman/delete?serviceman_id[]=${serviceMenId}`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const getServiceMenDetails = async(serviceMenId:string): Promise<Response> => {
	try {
		const response = await api.get(`/provider/serviceman/${serviceMenId}`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}
export const updateServiceMenProfileDetails = async(formData:FormData, serviceMenId:string): Promise<Response> => {
	formData.append('_method','PUT')
	try {
		const response = await api.post(`/provider/serviceman/${serviceMenId}`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const changeStatusServiceMen = async (formData:FormData): Promise<Response> => {
	formData.append('_method','PUT')
	try {
		const response = await api.post(`/provider/serviceman/status/update`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}
export const updateSubscriptionStatusBySubCategoryId = async (subCategoryid:string) :Promise<Response> => {
	try {
		const response = await api.post(`/provider/service/update-subscription?sub_category_id[]=${subCategoryid}`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}
export const fetchMySubscriptions = async (queryParams:string) :Promise<Response> => {
	try {
		const response = await api.get(`/provider/subscribed/sub-categories${queryParams}`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const updatelanguage = async ():Promise<Response> => { 
	try {
		const response = await api.post(`/provider/change-language`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

//save fcm token process
export const saveFcmTokenProcess = async (formData:FormData):Promise<Response> => { 
	formData.append('_method','PUT')
	try {
		const response = await api.post(`/provider/update/fcm-token`,formData);
		console.log(response?.data)
		return response;
	} catch (error:any) {
		return error.response;
	}
}