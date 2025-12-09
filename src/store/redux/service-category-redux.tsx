import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesInterface } from "@src/interfaces/categoriesInterface";

interface CategoriesState {
    data: CategoriesInterface[];
    offsetPageUrl: string;
    limit: number,
    loading:boolean
}

interface SetDataPayload {
    field: keyof CategoriesState;
    data: string | boolean | any;
}
const initialState: CategoriesState = {
    data: [],
    offsetPageUrl: '?offset=1',
    limit: 200,
    loading:true
}

const serviceCategoriesDataSlice = createSlice({
    name: "serviceCategories",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: CategoriesState) {
            return initialState;
        },
        addCategories(state, action: PayloadAction<CategoriesInterface[]>) {
            state.data.push(...action.payload);
        },
        addCategory(state, action: PayloadAction<CategoriesInterface>) {
            state.data.push(action.payload);
        },
    },
});
export const serviceCategoriesDataActions = serviceCategoriesDataSlice.actions;
export default serviceCategoriesDataSlice;