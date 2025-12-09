import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BannerInterface } from "@src/interfaces/store/banner.interface";

interface bannerDataInterface {
    data: BannerInterface[],
    isFirstTimeLoading: boolean;
}

const initialState: bannerDataInterface = {
    data: [],    
    isFirstTimeLoading: true,
};

interface SetDataPayload {
    field: keyof bannerDataInterface;
    data: string | boolean | any;
}


const vendorBannerListSlice = createSlice({
    name: "vendorBannerList",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: bannerDataInterface) {
            return initialState;
        },  
        deleteBannerById(state, action: PayloadAction<number>) {
            state.data = state.data.filter( (banner: BannerInterface) => banner.id !== action.payload);
        },
    },
})

export const vendorBannerActions = vendorBannerListSlice.actions;
export default vendorBannerListSlice
