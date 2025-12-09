import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UnitInterface } from "@src/interfaces/store/units.interface";

interface UnitStoreInterface   {
    data:UnitInterface[];
     
    isFirstTimeLoading: boolean,
    isNoMoreData: boolean,
}

const initialState: UnitStoreInterface = {
    data:[],
    isFirstTimeLoading: true,
    isNoMoreData: true,
}

interface SetDataPayload {
    field: keyof UnitStoreInterface;
    data: any;
}

const vendorUnitSlice = createSlice({
    name: "vendorUnitListing",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<SetDataPayload>) {
        state[action.payload.field] = action.payload.data;
      },
      resetState(state: UnitStoreInterface) {
        return initialState;
      },
    },
});

export const vendorUnitsActions = vendorUnitSlice.actions;
export default vendorUnitSlice;