import api from "../config/authApi.config";

interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}

export const getBookingReports = async(data:FormData): Promise<Response> => {
	try {
		const response = await api.post('/provider/report/booking',data);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const getTransactionReports = async(data:FormData): Promise<Response> => {
	try {
		const response = await api.post('/provider/report/transaction',data);
		return response;
	} catch (error:any) {
		return error.response;
	}

}

//service overviewdata
export const getServiceOverviewData = async(data:FormData): Promise<Response> => {
	try {
		const response = await api.post('/provider/report/business/overview',data);
		return response;
	} catch (error:any) {
		return error.response;
	}

}
//Earning report data
export const getEarningReportData =  async(data:FormData): Promise<Response> => {
	try {
		const response = await api.post('/provider/report/business/earning',data);
		return response;
	} catch (error:any) {
		return error.response;
	}

}
//expense report data
export const getExpenseReportData =  async(data:FormData): Promise<Response> => {
	try {
		const response = await api.post('/provider/report/business/expense',data);
		return response;
	} catch (error:any) {
		return error.response;
	}

}