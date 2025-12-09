import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubCategoriesInterface } from "@src/interfaces/subCategoriesInterface";

interface ServiceSubCategoriesState {
    data: {categoryId:string,subcategories:SubCategoriesInterface[]}[];
    selected:{categoryId:string,subcategories:SubCategoriesInterface[]}
    offsetPageUrl: string;
    limit: number,
    loading:boolean,
}

interface SetDataPayload {
    field: keyof ServiceSubCategoriesState;
    data: string | boolean | any;
}

const initialState: ServiceSubCategoriesState = {
    data: [],
    selected:{categoryId:'',subcategories:[]},
    offsetPageUrl: '?offset=1',
    limit: 200,
    loading:true
};

const serviceSubCategoriesSlice = createSlice({
    name: "serviceSubCategories",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: ServiceSubCategoriesState) {
            return initialState;
        },
        addServiceSubCategories(state, action: PayloadAction<{id:string,subcategories:SubCategoriesInterface[]}>) {
            state.data.push({categoryId:action.payload.id,subcategories:action.payload.subcategories});
        },
    },
})

export const serviceSubCategoriesActions = serviceSubCategoriesSlice.actions;
export default serviceSubCategoriesSlice;