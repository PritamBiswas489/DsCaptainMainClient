import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PomotionalCost {
    discount: number;
    campaign: number;
    coupon: number;
}

const initialState: PomotionalCost = {
    discount: 0,
    campaign: 0,
    coupon: 0,
}


const serviceProviderPomotionalCostSlice = createSlice({
    name: "serviceProviderPomotionalCost",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<PomotionalCost>) {
        return action.payload
      },
      resetState(state: PomotionalCost) {
        return initialState;
      },
    },
});


export const serviceProviderPomotionalCostActions = serviceProviderPomotionalCostSlice.actions;
export default serviceProviderPomotionalCostSlice;