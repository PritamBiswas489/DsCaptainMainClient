import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FieldState {
    address:string;
    zone_id:string;
    latitude:number;
    longitude:number;
}

interface SetDataPayload {
    field: keyof FieldState;
    data: string | number | boolean;
}

const initialState: FieldState = {
    address:'',
    zone_id:'',
    latitude:0,
    longitude:0
}

const mapStoreFieldSlice = createSlice({
    name: "mapStoreField",
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

export const mapStoreFieldActions = mapStoreFieldSlice.actions;
export default mapStoreFieldSlice;
