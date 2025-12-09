import api from "../config/authApi.config";

interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}


export const getWithdrawList = async(limit:number,offset:number): Promise<Response> => {
	try {
		const response = await api.get(`/provider/withdraw?limit=${limit}&offset=${offset}`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const getWithdrawMethodList = async(): Promise<Response> => {
    try {
        const response = await api.get(`/provider/withdraw/methods?limit=100&offset=1`);
        return response;
    } catch (error:any) {
        return error.response;
    }
}

export const sendWithdrawRequest = async(formData:FormData): Promise<Response> => {
    try {
        const response = await api.post(`/provider/withdraw`,formData);
        return response;
    } catch (error:any) {
        return error.response;
    }
}

export const adjustBalance = async(): Promise<Response> => {
    try {
        const response = await api.get(`/provider/adjust`);
        return response;
    } catch (error:any) {
        return error.response;
    }
}