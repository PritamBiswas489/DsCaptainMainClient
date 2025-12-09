import api from "../config/authApi.config";
 

//home top card data
export const homeTopCardData = async () =>{
    try {
		const response = await api.get(`/provider/dashboard?sections=top_cards`);
		return response;
	} catch (error:any) {
		return error.response;
	}

}

export const homeStaticGraphData = async(staticUrl:string)=>{
    try {
		const response = await api.get(staticUrl);
		return response;
	} catch (error:any) {
		return error.response;
	}

}