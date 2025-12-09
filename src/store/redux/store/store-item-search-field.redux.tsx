import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FieldState {
      searchValue:string;
}
interface SetDataPayload {
    field: keyof FieldState;
    data: string;
}

const initialState: FieldState = {
    searchValue: '',
}

const StoreItemSearchFieldSlice = createSlice({
    name: "storeItemSearchField",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<SetDataPayload>) {
        state[action.payload.field] = action.payload.data;
      },
      resetState(state: FieldState) {
        return initialState;
      },
    },
});
export const storeItemSearchFieldActions = StoreItemSearchFieldSlice.actions;
export default StoreItemSearchFieldSlice;