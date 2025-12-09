import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryInterface } from "@src/interfaces/store/categories.interface";

interface CategoryStoreInterface   {
    data:CategoryInterface[];
     
    isFirstTimeLoading: boolean,
    isNoMoreData: boolean,
}

const initialState: CategoryStoreInterface = {
    data:[],
    isFirstTimeLoading: true,
    isNoMoreData: true,
}

interface SetDataPayload {
    field: keyof CategoryStoreInterface;
    data: any;
}

const vendorCategoriesSlice = createSlice({
    name: "vendorCategoryListing",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<SetDataPayload>) {
        state[action.payload.field] = action.payload.data;
      },
      resetState(state: CategoryStoreInterface) {
        return initialState;
      },
    },
});

export const vendorCategoriesActions = vendorCategoriesSlice.actions;
export default vendorCategoriesSlice;