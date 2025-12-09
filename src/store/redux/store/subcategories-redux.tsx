import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubCategoriesInterface } from "@src/interfaces/store/subcategories.interface";


interface SubCategoryStoreInterface   {
    data: {categoryId:string,subcategories:SubCategoriesInterface[]}[];
    selected:{categoryId:string,subcategories:SubCategoriesInterface[]}
    loading:boolean,
     
}

const initialState: SubCategoryStoreInterface = {
    data:[],
    selected:{categoryId:'',subcategories:[]},
    loading: true,
}

interface SetDataPayload {
    field: keyof SubCategoryStoreInterface;
    data: any;
}

const vendorSubCategoriesSlice = createSlice({
    name: "vendorSubCategoryListing",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<SetDataPayload>) {
        state[action.payload.field] = action.payload.data;
      },
      resetState(state: SubCategoryStoreInterface) {
        return initialState;
      },
      addServiceSubCategories(state, action: PayloadAction<{id:string,subcategories:SubCategoriesInterface[]}>) {
        state.data.push({categoryId:action.payload.id,subcategories:action.payload.subcategories});
    },
    },
});

export const vendorSubCategoriesActions = vendorSubCategoriesSlice.actions;
export default vendorSubCategoriesSlice;
