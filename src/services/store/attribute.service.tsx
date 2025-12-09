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
export const getAttributesService = async(): Promise<Response> => {
	try {
		const response = await api.get('/vendor/attributes');
		return response;
	} catch (error:any) {
		return error.response;
	}
}