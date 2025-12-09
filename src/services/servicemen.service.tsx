import api from "../config/authApi.config";

interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}

export const addServiceMen = async (data:any): Promise<Response> => {
     
    try {
		const response = await api.post('/provider/serviceman',data);
		return response;
	} catch (error:any) {
        console.log(error)
		return error.response;
	}
}