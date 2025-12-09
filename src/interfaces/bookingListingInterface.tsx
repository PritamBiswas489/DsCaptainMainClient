export interface BookingListingInterface {
    id:string;
    readableId:string;
    bookingStatus:string;
    totalBookingAmount: number;
    serviceSchedule:string;
    createdAt:string;
    isChecked: number;
    isGuest: number;
    isPaid: number;
    isVerified: number;
    subCategoryName:string;
    subCategoryImage:string;
    customerName:string;
    customerEmail:string;
    customerGender:string;
    customerProfileImage:string;
    serviceAddress:string | null;
    hasServiceMen:boolean;
    servicemenName:string;
    servicemenProfileImage:string;
    servicemenGender:string;

}