import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CouponInterface } from "@src/interfaces/store/coupon.interface";



interface CouponListInterface {
    data: CouponInterface[];
    offset: number;
    limit: number;
    isFirstTimeLoading: boolean;
    isNoMoreData: boolean;
}

interface SetDataPayload {
    field: keyof CouponListInterface;
    data: string|number|any;
}

const initialState: CouponListInterface = {
    data: [],
    offset: 1,
    limit: 25,
    isFirstTimeLoading: true,
    isNoMoreData: false,
}

const couponSlice = createSlice({
    name: "couponListing",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        resetState(state: CouponListInterface) {
            return initialState;
        },
        addCouponArr(state, action: PayloadAction<CouponInterface[]>) {
            state.data.push(...action.payload);
        },
        addCoupon(state, action: PayloadAction<CouponInterface>) {
            state.data.push(action.payload);
        },
        deleteCouponById(state, action: PayloadAction<number>) {
            state.data = state.data.filter( (coupon: CouponInterface) => coupon.id !== action.payload);
        },
        changeStatusById(state, action: PayloadAction<number>){
            state.data = state.data.map( (coupon: CouponInterface) =>{
                if(coupon.id !== action.payload){
                    return coupon
                }else{
                    const cloneCoupon = {...coupon}
                    cloneCoupon.status = Number(!Boolean(cloneCoupon.status))
                    return cloneCoupon
                }
            });
        }
    },
});

export const couponActions = couponSlice.actions;
export default couponSlice;