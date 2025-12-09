import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ZoneState {
  zones: string;
}

interface SetDataPayload {
  field: keyof ZoneState;
  data: string;
}

const initialState: ZoneState = {
  zones:''
};

const zoneDataSlice = createSlice({
  name: "zone",
  initialState: initialState,
  reducers: {
    setData(state:any, action: PayloadAction<SetDataPayload>) {
      state[action.payload.field] = action.payload.data;
    },
    resetState(state: ZoneState) {
      return initialState;
    },
  },
});

export const zoneDataActions = zoneDataSlice.actions;
export default zoneDataSlice;
