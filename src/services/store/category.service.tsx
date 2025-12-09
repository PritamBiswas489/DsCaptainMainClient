import api from "@src/config/authApi.config.store";
interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}

//vendor categories
export const getVendorCategories = async(): Promise<Response> => {
	try {
		const response = await api.get('/vendor/categories');
		return response;
	} catch (error:any) {
		return error.response;
	}
}
//vendor subcategories
export const getVendorSubCategories = async(categoryId:string): Promise<Response> => {
	try {
		const response = await api.get(`/vendor/categories/childes/${categoryId}`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}