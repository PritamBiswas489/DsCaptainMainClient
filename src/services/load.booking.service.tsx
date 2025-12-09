 
import React from "react";
import { getBookingDetails, getBookings } from "./booking.service";
import { RootState, AppDispatch } from '@src/store';
import { BookingListingInterface } from "@src/interfaces/bookingListingInterface";
import { homeDataActions } from "@src/store/redux/home-data-redux";
import { 
    BookingServiceListInterface,
    BookingServiceAddressInterface,
    BookingServiceCustomerInterface,
    BookingServiceProviderInterface,
    BookingServiceServicemenInterface,
    BookingServiceStatusHistories,
    BookingDetailsInterface,
     } from "@src/interfaces/bookingDetailsInterface";

interface Response {
        data: any;
        status: number;
        statusText: string;
        headers: any;
        config: any;
        request?: any;
}

export const loadBookingDetails = async (bookingId:string) =>{
    const response: Response = await getBookingDetails(bookingId);
     
    if (response.data.content?.id) {
       const bookingDetail = response.data.content
            const servicesList:BookingServiceListInterface[] = bookingDetail.detail.map((serviceDetail:any)=>{
                    return {
                            serviceId:serviceDetail.service_id,
                            variantKey:serviceDetail.variant_key,
                            serviceName: serviceDetail?.service_name,
                            serviceUnitCost: serviceDetail?.service_cost,
                            serviceQuantity: serviceDetail?.quantity,
                            serviceTotalCost:serviceDetail?.total_cost,
                            serviceImage: serviceDetail?.service?.cover_image,
                            servicethumbnail:serviceDetail?.service?.thumbnail,
                    }
            }) 
            const serviceAddress:BookingServiceAddressInterface = {
                        lat: bookingDetail?.service_address?.lat,
                        lon: bookingDetail?.service_address?.lon,
                        city: bookingDetail?.service_address?.city,
                        street: bookingDetail?.service_address?.street,
                        zip_code: bookingDetail?.service_address?.zip_code,
                        country: bookingDetail?.service_address?.country,
                        address: bookingDetail?.service_address?.address,
                        contact_person_name: bookingDetail?.service_address?.contact_person_name,
                        contact_person_number: bookingDetail?.service_address?.contact_person_number,
                        address_label: bookingDetail?.service_address?.address_label,
            }
            const customerInfo: BookingServiceCustomerInterface = {
                        firstName: bookingDetail?.customer?.first_name,
                        lastName: bookingDetail?.customer?.last_name,
                        phone: bookingDetail?.customer?.phone,
                        gender: bookingDetail?.customer?.gender,
                        profileImage: bookingDetail?.customer?.profile_image,
            }
           
            const providerInfo: BookingServiceProviderInterface = {
                        companyName: bookingDetail?.provider?.company_name ? bookingDetail?.provider?.company_name :  '',
                        companyPhone: bookingDetail?.provider?.company_phone ? bookingDetail?.provider?.company_phone : '' ,
                        companyAddress: bookingDetail?.provider?.company_address ? bookingDetail?.provider?.company_address : '',
                        logo: bookingDetail?.provider?.logo ? bookingDetail?.provider?.logo : '',
                        contactPersonName: bookingDetail?.provider?.contact_person_name ? bookingDetail?.provider?.contact_person_name : '',
                        contactPersonPhone: bookingDetail?.provider?.contact_person_phone ? bookingDetail?.provider?.contact_person_phone  : '' ,
                        contactPersonEmail: bookingDetail?.provider?.contact_person_email ? bookingDetail?.provider?.contact_person_email : '',
                        avg_rating:bookingDetail?.provider?.avg_rating
            }
            
            const serviceMeninfo:BookingServiceServicemenInterface = {
                    name:bookingDetail?.serviceman?.user?.first_name ? bookingDetail?.serviceman?.user?.first_name+ ' ' +(bookingDetail?.serviceman?.user?.last_name?? '') :  '',
                    phone:bookingDetail?.serviceman?.user?.phone ? bookingDetail?.serviceman?.user?.phone  :  '',
                    gender:bookingDetail?.serviceman?.user?.gender ? bookingDetail?.serviceman?.user?.gender :  '',
                    profileImage:bookingDetail?.serviceman?.user?.profile_image ? bookingDetail?.serviceman?.user?.profile_image :  '',
                    user_id:bookingDetail?.serviceman?.user?.id ? bookingDetail?.serviceman?.user?.id :  '',
            }

            const statusHistories:BookingServiceStatusHistories[] = bookingDetail.status_histories.map((statusHistories:any)=>{
                return {
                    booking_status:statusHistories?.booking_status,
                    created_at:statusHistories?.created_at,
                }
            })
            const formattedData:BookingDetailsInterface = {
                    id: bookingDetail?.id,
                    readable_id: bookingDetail?.readable_id,
                    customer_id: bookingDetail?.customer_id,
                    provider_id: bookingDetail?.provider_id,
                    category_id:bookingDetail?.category_id,
                    sub_category_id:bookingDetail?.sub_category_id,
                    serviceman_id: bookingDetail?.serviceman_id,
                    booking_status: bookingDetail?.booking_status,
                    is_paid:bookingDetail?.is_paid,
                    payment_method: bookingDetail?.payment_method,
                    transaction_id: bookingDetail?.transaction_id,
                    total_booking_amount: bookingDetail?.total_booking_amount,
                    total_tax_amount: bookingDetail?.total_tax_amount,
                    total_discount_amount: bookingDetail?.total_discount_amount,
                    total_campaign_discount_amount: bookingDetail?.total_campaign_discount_amount,
                    total_coupon_discount_amount: bookingDetail?.total_coupon_discount_amount,
                    is_checked: bookingDetail?.is_checked,
                    additional_charge: bookingDetail?.additional_charge,
                    additional_tax_amount: bookingDetail?.additional_tax_amount,
                    additional_discount_amount: bookingDetail?.additional_discount_amount,
                    additional_campaign_discount_amount: bookingDetail?.additional_campaign_discount_amount,
                    service_schedule: bookingDetail?.service_schedule,
                    created_at: bookingDetail?.created_at,
                    evidence_photos:bookingDetail?.evidence_photos,
                    servicesList,
                    serviceAddress,
                    customerInfo,
                    providerInfo,
                    serviceMeninfo,
                    statusHistories
             }
            //  console.log("================= formatted ======================")
            //  console.log(formattedData)
            //dispatch(bookingDetailsAction.addBookingDetailsArr(formattedData))
            return formattedData
        
    }
    return {}

}
export const homeBookingList = async (dispatch:AppDispatch) =>{
        const formData = new FormData();
        formData.append('limit', 20);
        formData.append('offset', 1);
        formData.append('booking_status', 'pending');
        const response: Response = await getBookings(formData);
        const bookingData = response?.data?.content?.bookings?.data;

        if(bookingData.length > 0){
                const formattedData:BookingListingInterface[] = bookingData.map((bkData:any,bkIndex:number)=>{
                return {
                  id:bkData?.id,
                  readableId: bkData?.readable_id,
                  bookingStatus: bkData?.booking_status,
                  totalBookingAmount: bkData?.total_booking_amount,
                  serviceSchedule:bkData?.service_schedule,
                  createdAt:bkData?.created_at,
                  isChecked: bkData?.is_checked,
                  isGuest: bkData?.is_guest,
                  isPaid: bkData?.is_paid,
                  isVerified: bkData?.is_verified,
                  subCategoryName: bkData?.sub_category?.name,
                  subCategoryImage:bkData?.sub_category?.image,
                  customerName: bkData?.customer?.first_name,
                  customerEmail: bkData?.customer?.email,
                  customerGender: bkData?.customer?.gender,
                  customerProfileImage: bkData?.customer?.profile_image,
                  serviceAddress:bkData?.service_address?.address,
                  hasServiceMen: bkData?.serviceman?.id  ?  true : false, 
                  servicemenName: bkData?.serviceman?.id ? bkData?.serviceman?.user?.first_name+ ' '+bkData?.serviceman?.user?.last_name : '',
                  servicemenProfileImage: bkData?.serviceman?.id ? bkData?.serviceman?.user?.profile_image : '',
                  servicemenGender: bkData?.serviceman?.id ? bkData?.serviceman?.user?.gender: '',
                }
             })
             dispatch(homeDataActions.setData({field:'bookingList',data:formattedData}));
          }
}