import API_PROCESS from "@src/config/frontApiMultipart.config.store";

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
		const response = await API_PROCESS.post('/auth/vendor/register', data);
		return response;
	} catch (error: any) {
	    return error.response;
	}
};
