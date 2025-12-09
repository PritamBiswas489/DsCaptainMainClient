import api from "@src/config/authApi.config.store";
interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}
export const getCampaigns = async(): Promise<Response> => {
	try {
		const response = await api.get('/vendor/get-basic-campaigns');
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const joinCampaign = async (campaign_id:number|string): Promise<Response> => {
    const formData = new FormData()
    formData.append('_method','PUT')
    formData.append('campaign_id',campaign_id)
    console.log(formData)
    try {
		const response = await api.put(`/vendor/campaign-join?campaign_id=${campaign_id}`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}

export const leaveCampaign = async (campaign_id:number|string): Promise<Response> => {
    const formData = new FormData()
    formData.append('_method','PUT')
    formData.append('campaign_id',campaign_id)
    try {
		const response = await api.put(`/vendor/campaign-leave?campaign_id=${campaign_id}`,formData);
		return response;
	} catch (error:any) {
		return error.response;
	}
}