import api from "@src/config/frontApi.config";
import API_PROCESS from "@src/config/frontApiMultipart.config";

interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}

export const getForgetpasswordOtp = async (formData: {identity:string,identity_type:string}): Promise<Response> => {
    try {
        const response = await api.post(`/user/forget-password/send-otp`,formData);
        return response;
    } catch (error: any) {
        return error.response;
    }
}

export const resetPassword = async(formData:{identity:string,identity_type:string,otp:string,
    password:string,
    confirm_password:string,
    _method:string
  }): Promise<Response> => {
	try {
		const response = await api.post(`/user/forget-password/reset`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}


export const resetPasswordNew = async(formData:FormData): Promise<Response> => {
	 
    try {
		const response = await API_PROCESS.post(`/user/forget-password/reset`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}