import api from "@src/config/authApi.config.store";
interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}
//vendor add schedule
export const addSchedule = async(formData:FormData): Promise<Response> => {
	try {
		const response = await api.post('/vendor/schedule/store',formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}


export const deleteSchedule = async (scheduleId:number): Promise<Response> => {
    try {
		const response = await api.delete(`/vendor/schedule/${scheduleId}`);
		return response;
	} catch (error:any) {
		return error.response;
	}

}