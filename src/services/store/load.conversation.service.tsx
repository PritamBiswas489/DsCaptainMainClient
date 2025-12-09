import React from "react";
import { RootState, AppDispatch } from '@src/store';
import { getConverstions } from "./conversation.service";
import { conversationChannelActions } from "@src/store/redux/store/customer-conversations-redux";

interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}

export const loadConversationsChannels = async(
    limit:number,
    offset:number,
    conversationChannelFirsttimeload:boolean,
    dispatch:AppDispatch,
    
)=>{
     const response:Response = await getConverstions(limit,offset);
    
    
    if(response?.data?.conversation){
                dispatch(conversationChannelActions.setChannels(
                    response?.data?.conversation
                ))
    }
     dispatch(conversationChannelActions.setData({
                    field: 'isFirstTimeLoading',
                    data: false
    }));

}