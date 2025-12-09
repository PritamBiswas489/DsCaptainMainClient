import api from "@src/config/authApi.config";

interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}

export const getBookings = async (formData: FormData): Promise<Response> => {
    try {
        const response = await api.post(`/provider/booking`,formData);
        return response;
    } catch (error: any) {
        return error.response;
    }
}
//get booking details
export const getBookingDetails = async (bookingId:string):Promise<Response>=>{
    try {
        const response = await api.get(`/provider/booking/${bookingId}`);
        return response;
    } catch (error: any) {
        return error.response;
    }
}
//update booking status
export const updateBookingStatus = async (bookingId:string,data:FormData):Promise<Response>=>{
    data.append('_method','PUT')
    try {
		const response = await api.post(`/provider/booking/status-update/${bookingId}`,data);
		return response;
	} catch (error:any) {
		return error.response;
	}
}
export const updateRequestAccept = async (bookingId:string,data:FormData):Promise<Response>=>{
    data.append('_method','PUT')
    try {
		const response = await api.post(`/provider/booking/request-accept/${bookingId}`,data);
		return response;
	} catch (error:any) {
		return error.response;
	}
}
export const updateBooking = async (formData: FormData): Promise<Response> => {
    formData.append('_method','PUT')
    try {
		const response = await api.post(`/provider/booking/service/edit/update-booking`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const assignServiceMan = async (bookingId:string, formData:FormData): Promise<Response> => {
    formData.append('_method','PUT')
    try {
		const response = await api.post(`/provider/booking/assign-serviceman/${bookingId}`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const updateScheduleDate = async (bookingId:string, formData:FormData): Promise<Response> => {
    formData.append('_method','PUT')
    try {
		const response = await api.post(`/provider/booking/schedule-update/${bookingId}`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const sendOtpNotification = async (bookingId:string): Promise<Response> => {
     
    try {
		const response = await api.get(`/provider/booking/opt/notification-send`,{params:{
            booking_id : bookingId
        }});
		return response;
	} catch (error:any) {
		return error.response;
	}

}

 