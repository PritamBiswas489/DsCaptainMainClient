import api from "@src/config/authApi.config.store";
interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}
export const getExpense = async (
    limit:number, 
    offset:number,
    from:string,
    to:string,
    search:string = ''): Promise<Response>=>{
    try {
		const response = await api.get(`/vendor/get-expense?limit=${limit}&offset=${offset}&from=${from}&to=${to}&search=${search}`);
		return response;
	} catch (error:any) {
		return error.response;
	}
} 