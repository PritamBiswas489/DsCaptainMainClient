import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddonInterface } from "@src/interfaces/store/addons.interface";

interface AddonStoreInterface   {
    data:AddonInterface[];
    isFirstTimeLoading: boolean,
    isNoMoreData: boolean,
}

const initialState: AddonStoreInterface = {
    data:[],
    isFirstTimeLoading: true,
    isNoMoreData: true,
}

interface SetDataPayload {
    field: keyof AddonStoreInterface;
    data: any;
}

const vendorAddonsSlice = createSlice({
    name: "vendorAddonListing",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<SetDataPayload>) {
        state[action.payload.field] = action.payload.data;
      },
      resetState(state: AddonStoreInterface) {
        return initialState;
      },
      deleteAddonById(state, action: PayloadAction<number>) {
        state.data = state.data.filter( (addOn: AddonInterface) => addOn.id !== action.payload);
    },
    },
});


export const vendorAddonsActions = vendorAddonsSlice.actions;
export default vendorAddonsSlice;
