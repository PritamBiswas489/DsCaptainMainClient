import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 

interface ItemsInterface {
    statusList:{itemId:number,status:boolean}[]
}


interface SetDataPayload {
    field: keyof ItemsInterface;
    data: string|number|any;
}


const initialState: ItemsInterface = {
    
    statusList:[]
}

const itemStatusUpdateSlice = createSlice({
    name: "storeItemListing",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: ItemsInterface) {
            return initialState;
        },
        statusStore(state, action: PayloadAction<{itemId:number,status:boolean}>){ //status store
           const cloneStatus = [...state.statusList]
           const findIndexClone = cloneStatus.findIndex(ele=>ele.itemId === action.payload.itemId)
           if(findIndexClone !== -1 ){
             cloneStatus[findIndexClone] = {...cloneStatus[findIndexClone],status:action.payload.status}
           }else{
             cloneStatus.push({itemId:action.payload.itemId,status:action.payload.status})
           }
           state.statusList = cloneStatus
        }
    }  
})

export const itemStatusActions = itemStatusUpdateSlice.actions;
export default itemStatusUpdateSlice;

