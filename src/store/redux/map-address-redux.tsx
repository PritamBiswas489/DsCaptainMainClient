import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FieldState {
    address:string;
    latitude:number;
    longitude:number;
}

interface SetDataPayload {
    field: keyof FieldState;
    data: string | number | boolean;
}

const initialState: FieldState = {
    address:'',
    latitude:0,
    longitude:0
}

const mapFieldSlice = createSlice({
    name: "mapField",
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

export const mapFieldActions = mapFieldSlice.actions;
export default mapFieldSlice;
