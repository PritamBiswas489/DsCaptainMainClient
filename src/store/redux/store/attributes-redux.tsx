import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AttributeInterface } from "@src/interfaces/store/attributes.interface";


interface AttributeStoreInterface   {
    data:AttributeInterface[];
    isFirstTimeLoading: boolean,
    isNoMoreData: boolean,
}


const initialState: AttributeStoreInterface = {
    data:[],
    isFirstTimeLoading: true,
    isNoMoreData: true,
}


interface SetDataPayload {
    field: keyof AttributeStoreInterface;
    data: any;
}


const vendorAttributeSlice = createSlice({
    name: "vendorAttributeListing",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<SetDataPayload>) {
        state[action.payload.field] = action.payload.data;
      },
      resetState(state: AttributeStoreInterface) {
        return initialState;
      },
    },
});


export const vendorAttributeActions = vendorAttributeSlice.actions;
export default vendorAttributeSlice;