import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Configuration {
    key_name: string;
    live_values: string;
    test_values: string;
    mode: string;
}

interface BusinessSettingsInterface {
    data:Configuration[] 
    isFirstTimeLoading: boolean;
}

const initialState: BusinessSettingsInterface = {
     data:[],
     isFirstTimeLoading:true
}

interface SetDataPayload {
    field: keyof BusinessSettingsInterface;
    data: string | number | boolean | any;
}

const businessSettingsSlice = createSlice({
    name: "businessSettings",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<SetDataPayload>) {
        state[action.payload.field] = action.payload.data;
      },
      resetState(state: BusinessSettingsInterface) {
        return initialState;
      },
    },
});
export const businessSettingsActions = businessSettingsSlice.actions;
export default businessSettingsSlice;