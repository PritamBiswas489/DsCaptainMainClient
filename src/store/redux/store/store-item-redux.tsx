import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreItemInterface } from "@src/interfaces/store/store.item.interface";

interface ItemsInterface {
    data: StoreItemInterface[];
    offset: number;
    limit: number;
    isFirstTimeLoading: boolean;
    isNoMoreData: boolean;
    
}


interface SetDataPayload {
    field: keyof ItemsInterface;
    data: string|number|any;
}


const initialState: ItemsInterface = {
    data: [],
    offset: 1,
    limit: 25,
    isFirstTimeLoading: true,
    isNoMoreData: false,
 
}

const storeItemSlice = createSlice({
    name: "storeItemListing",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: ItemsInterface) {
            return initialState;
        },
        addItemArr(state, action: PayloadAction<StoreItemInterface[]>) {
            state.data.push(...action.payload);
        },
        addItem(state, action: PayloadAction<StoreItemInterface>) {
            state.data.push(action.payload);
        },
        deleteItemById(state, action: PayloadAction<number>) {
            state.data = state.data.filter( (item: StoreItemInterface) => item.id !== action.payload);
        },
        changeStatusById(state, action: PayloadAction<number>){ //change status id
            state.data = state.data.map( (item: StoreItemInterface) =>{
                if(item.id !== action.payload){
                    return item
                }else{
                    const cloneCoupon = {...item}
                    cloneCoupon.status = Number(!Boolean(cloneCoupon.status))
                    return cloneCoupon
                }
            });
        },
        
        statusStore(state, action: PayloadAction<{itemId:number,status:boolean}>){
            const { itemId, status } = action.payload;
            const index = state.data.findIndex(serviceMan => serviceMan.id === itemId);
            if (index !== -1) {
                state.data[index].status = Number(status);
            }
        }
    }
     
})

export const storeItemsActions = storeItemSlice.actions;
export default storeItemSlice;

