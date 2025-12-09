import api from "../config/authApi.config";

interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}
//get notitfications list
export const getNotifications = async (queryParam:string): Promise<Response> => {
    try {
		const response = await api.get(`/provider/notifications${queryParam}`);
		return response;
	} catch (error:any) {
        console.log(error)
		return error.response;
	}
}