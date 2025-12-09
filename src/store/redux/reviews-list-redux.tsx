import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Review {
    id: string;
    userName: string;
    userImage: string;
    timing: string;
    reviewText: string;
    rating: string;  // Assuming rating is a number, adjust if it's a string
    servicename:string;
    gender:string;
}
interface ReviewsState {
     data: Review[];
     averageRating:number;
     offsetPageUrl:string;
     limit:number,
     isFirstTimeLoading:boolean,
     isNoMoreData:boolean
}

interface SetDataPayload {
    field: keyof ReviewsState;
    data: string | boolean | any;
}

const initialState: ReviewsState = {
    data:[],
    averageRating:0,
    offsetPageUrl:'?offset=1',
    limit:10,
    isFirstTimeLoading:true,
    isNoMoreData:true
    
};

const reviewsDataSlice = createSlice({
    name: "reviewList",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<SetDataPayload>) {
        state[action.payload.field] = action.payload.data;
      },
      resetState(state: ReviewsState) {
        return initialState;
      },
      addReviews(state, action: PayloadAction<Review[]>) {
        state.data.push(...action.payload);
     },
    // Append a single review to the data field
    addReview(state, action: PayloadAction<Review>) {
        state.data.push(action.payload);
    },
    },
});

export const reviewsDataActions = reviewsDataSlice.actions;
export default reviewsDataSlice;