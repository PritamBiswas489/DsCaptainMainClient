import API_PROCESS from "@src/config/frontApiMultipart.config";

interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
  }

export const registrationService = async (data: FormData): Promise<Response> => {
	try {
		const response = await API_PROCESS.post('/provider/auth/provider_registration', data);
		return response;
	} catch (error: any) {
	    return error.response;
	}
};
