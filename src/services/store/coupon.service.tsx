import api from "@src/config/authApi.config.store";
interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}

export const createCoupon = async(formData:FormData): Promise<Response> => {
	try {
		const response = await api.post('/vendor/coupon/store',formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}
export const updateCoupon = async(formData:FormData): Promise<Response> => {
	try {
		const response = await api.post('/vendor/coupon/update',formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}
 
export const getCouponDetails = async(coupon_id:string): Promise<Response> => {
	try {
		const response = await api.get(`/vendor/coupon/view-without-translate?coupon_id=${coupon_id}`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const deleteCoupon = async(coupon_id:string | number): Promise<Response> => {
	const formData = new FormData()
	formData.append('coupon_id',coupon_id)
	try {
		const response = await api.post(`/vendor/coupon/delete`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const listCoupons = async (limit:number,offset:number): Promise<Response>=>{
	try {
		const response = await api.get(`/vendor/coupon/list?limit=${limit}&offset=${offset}`);
		return response;
	} catch (error:any) {
		return error.response;
	}
}
export const updateStatus = async(status:boolean,couponId:number): Promise<Response> => {
	const formData = new FormData()
	formData.append('coupon_id',couponId)
	formData.append('status',Number(status))
	try {
		const response = await api.post(`/vendor/coupon/status`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}

}