import { BookingListingInterface } from "./bookingListingInterface";
export interface SearchBookingInterface {
    data:BookingListingInterface[]
    limit:number;
    offset:number; 
    isFirstTimeLoading: boolean;
    isNoMoreData: boolean;
    searchType:string
}