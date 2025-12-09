import api from "@src/config/authApi.config.store";
interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}
//get withdraw list
export const getWithdraws = async(): Promise<Response> => {
	try {
		const response = await api.get('/vendor/get-withdraw-list');
		return response;
	} catch (error:any) {
		return error.response;
	}
}
 

export const getWalletPaymentList = async(): Promise<Response> => {
    try {
		const response = await api.get(`/vendor/wallet-payment-list?limit=${100}`);
		return response;
	} catch (error:any) {
		return error.response;
	}

}