import api from "@src/config/authApi.config.store";
interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}


export const updateAnnouncement = async(formData:FormData): Promise<Response> => {
	formData.append('_method','PUT')
	try {
		const response = await api.post('/vendor/update-announcment',formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}