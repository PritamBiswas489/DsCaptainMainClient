import api from "@src/config/authApi.config.store";
interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}
//get conversations
export const getConverstions = async(limit:number,offset:number): Promise<Response> => {
    try {
		const response = await api.get(`/vendor/message/list?limit=${limit}&offset=${offset}`);
		return response;
	} catch (error:any) {
		return error.response;
	}

}
//get conversation messages
export const getConversationMessages    = async(query:string): Promise<Response> => {
	try {
		const response = await api.get(`/vendor/message/details?${query}`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const sendConversationMessage = async(formData:FormData): Promise<Response> => {
	try {
		const response = await api.post(`/vendor/message/send`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}

}