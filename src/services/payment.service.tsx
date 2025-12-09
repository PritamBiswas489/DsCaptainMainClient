import api from "../config/authApi.config";

interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}

//create order rozar pay service
export const createOrderRozarPayService = async(formData:FormData): Promise<Response> => {
	 
	try {
		const response = await api.post(`/provider/razor-pay-create-order-process`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}
// payment success process
export const paymentSuccessProcess = async(formData:FormData): Promise<Response> => {
	try {
		const response = await api.post(`/provider/razor-pay-success-order`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}
// payment listing 
export const paymentListing  = async(limit:number,offset:number):Promise<Response> => {
	try {
        const response = await api.get(`/provider/payment-list?limit=${limit}&offset=${offset}`);
        return response;
    } catch (error:any) {
        return error.response;
    }

}
