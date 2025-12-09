import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homeBookingList } from '@src/services/load.booking.service';
import { loadMySubscriptionFunc } from '@src/services/load.mysubscription';
import { homeDataActions } from '@src/store/redux/home-data-redux';
import { RootState, AppDispatch } from '@src/store';
import { homeloadServiceMenData } from '@src/services/load.servicemen';
import { homeTopCardData } from '@src/services/home.service';
interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}
const useHomeDataLoader = () => {
    const dispatch = useDispatch();
  
    const {
      serviceMenLimit,
      bookingList,
      loadBookingList,
      loadServiceMen,
      loadSubsScriptionList,
      loadingTopCard
    } = useSelector((state: RootState) => state['homeData']);


   


   //Function load Earning Statics
   

   //Function load top card 
   const loadTopCard =useCallback(async () => {
       if(loadingTopCard){ 
            const response:Response =  await homeTopCardData();
            const {top_cards} = response?.data?.content[0]
            const {
                        total_booking_served ,
                        total_earning ,
                        total_service_man ,
                        total_subscribed_services 
                    } = top_cards

            dispatch(homeDataActions.setData({ field: 'totalServiceMen', data: total_service_man }));      
            dispatch(homeDataActions.setData({ field: 'totalEarning', data: total_earning }));
            dispatch(homeDataActions.setData({ field: 'totalSubscribedServices', data: total_subscribed_services }));
            dispatch(homeDataActions.setData({ field: 'totalBookingServed', data: total_booking_served }));
       }
   }, [dispatch,loadingTopCard]);

    // Function to load Service Men Data
    const loadServiceMenData = useCallback(async () => {
        if (loadServiceMen) {
                const queryParams = `?offset=1&limit=${serviceMenLimit}&status=active`;
                await homeloadServiceMenData(queryParams, dispatch);
                dispatch(homeDataActions.setData({ field: 'loadServiceMen', data: false }));
        }
    }, [serviceMenLimit, dispatch,loadServiceMen]);
  
    // Function to load Subscription Data
    const loadSubscriptionData = useCallback(async () => {
        if (loadSubsScriptionList) {
            await loadMySubscriptionFunc(dispatch, '?limit=200&offset=1');
            dispatch(homeDataActions.setData({ field: 'loadSubsScriptionList', data: false }));
        }
    }, [dispatch,loadSubsScriptionList]);
  
    // Function to load Booking Data
    const loadRecentBookingData = useCallback(async () => {
        if (loadBookingList) {
          await homeBookingList(dispatch);
          dispatch(homeDataActions.setData({ field: 'loadBookingList', data: false }));
        }
    }, [dispatch,loadBookingList]);
  
    
    const callAllFunctionHome = async()=>{
       
       await loadTopCard()  
       await loadServiceMenData()
       await loadSubscriptionData()
       await loadRecentBookingData()
    }
     
    return {
        callAllFunctionHome
      };

     
  };
  
  export default useHomeDataLoader;