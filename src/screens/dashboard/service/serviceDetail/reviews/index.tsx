import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import RatingSection from './ratingSection';
import { ReviewDetail } from '@otherComponent/index';
import { allReviews } from './data';
import { windowHeight } from '@theme/appConstant';
import { useValues } from '../../../../../../App';
import appColors from '@theme/appColors';
import { getReviewList } from '@src/services/profile.service';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { reviewsDataActions } from '@src/store/redux/reviews-list-redux';
import GradientBtn from '@commonComponents/gradientBtn';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import NoDataFound from '@src/commonComponents/noDataFound';
import {noValue, wifi, notification} from '@utils/images';
import { timeAgo } from '@src/config/utility';
import { getMediaUrl } from '@src/config/utility';


interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

interface Review {
  id: string;
  userName: string;
  userImage: string;
  timing: string;
  reviewText: string;
  rating: string;  // Assuming rating is a number, adjust if it's a string
  servicename:string,
  gender:string
}

export function Reviews() {
  const { isDark } = useValues()
  const dispatch = useDispatch()
  const {
    data: ReviewsList,
    offsetPageUrl,
    averageRating,
    limit,
    isNoMoreData,
    isFirstTimeLoading
  } = useSelector((state: RootState) => state['reviewsDataField'])

  const [queryParams, setQueryParams] = useState(`${offsetPageUrl}&limit=${limit}`)
  const [clickLoadMore, setClickLoadMore] = useState(false)

  

  const setDataInRedux = (data: Response) => {

    if (data?.data?.content?.rating.average_rating) {
      dispatch(reviewsDataActions.setData({
        field: 'averageRating',
        data: data?.data?.content?.rating.average_rating
      }))
    }
    if (data?.data?.content?.reviews?.next_page_url) {
      dispatch(reviewsDataActions.setData({
        field: 'offsetPageUrl',
        data: data?.data?.content?.reviews?.next_page_url
      }))
      dispatch(reviewsDataActions.setData({
        field: 'isNoMoreData',
        data: false
      }))
    } else {
      dispatch(reviewsDataActions.setData({
        field: 'isNoMoreData',
        data: true
      }))
    }

    if (data?.data?.content?.reviews?.data) {
      const d:Review[] = []
      data?.data?.content?.reviews?.data.forEach((reviewD:any,reviewindex:number)=>{
        //console.log( reviewD?.customer?.id)
        const id = reviewD?.id
        const userName = reviewD?.customer?.first_name ? reviewD?.customer?.first_name : 'Unknown'
        
        let userImage = ''
        if(reviewD?.customer?.profile_image !=='default.png'){
           userImage = `${getMediaUrl()}/user/profile_image/${reviewD?.customer?.profile_image}`
        }
         
        const timing = timeAgo(reviewD?.created_at)
        const reviewText = reviewD?.review_comment
        const rating = reviewD?.review_rating+'.0'
        let concatenatedServiceNames = reviewD?.booking?.detail?.map((service: { service_name: string; })  => service.service_name).join(", ");
        const servicename = concatenatedServiceNames
        const gender = reviewD?.customer?.gender
        //console.log(servicename)
        const assignData:Review = {id,userName,reviewText,rating,userImage,timing,servicename,gender}
       
        if(userName !== 'Unknown'){
          d.push(assignData)
        }
      })
      dispatch(reviewsDataActions.addReviews(d))
    }
  }
  useEffect(() => {
    //  console.log({ ReviewsList })
  }, [ReviewsList])

  const getReviews = async () => {
    const response: Response = await getReviewList(queryParams)
    setDataInRedux(response)
    console.log("=============== Reviews ====================")
    console.log(queryParams)
    setClickLoadMore(false)
    dispatch(reviewsDataActions.setData({
      field: 'isFirstTimeLoading',
      data: false
    }))
  }
  useEffect(() => {
    if (isFirstTimeLoading || clickLoadMore) {
      getReviews()
    }
  }, [queryParams, isFirstTimeLoading, clickLoadMore])

  const loadMoreDataLoading = () => {
    setClickLoadMore(true)
    setQueryParams(`${offsetPageUrl}&limit=${limit}`)
  }
  const refreshReviewsData = () =>{
    dispatch(reviewsDataActions.resetState())
  }

  return (
    <ScrollView
      contentContainerStyle={styles.mainContainer}
      style={[GlobalStyle.mainView, { backgroundColor: isDark ? appColors.darkCard : appColors.white }]}
      showsVerticalScrollIndicator={false}>
      <Header title="reviews.reviews" showBackArrow={true} />
      {isFirstTimeLoading && <SkeletonLoader />}
      {!isFirstTimeLoading && ReviewsList.length ==0 && <NoDataFound
      headerTitle="newDeveloper.noReviewsFound"
      image={noValue}
      infoImage={undefined}
      title="newDeveloper.noReviewsFound"
      content="newDeveloper.noReviewsFoundContent"
      gradiantBtn={
        <GradientBtn
          additionalStyle={{bottom: windowHeight(2)}}
          label={'common.refresh'}
          onPress={refreshReviewsData}
        />
      }
    />}
      {!isFirstTimeLoading && ReviewsList.length > 0 && <>
        <RatingSection />
        <View style={styles.container}>
          <ReviewDetail data={ReviewsList} />
        </View>
        {clickLoadMore && <ActivityIndicator />}
        {!isNoMoreData && !clickLoadMore && <GradientBtn
          additionalStyle={{}}
          label={'newDeveloper.loadMore'}
          onPress={loadMoreDataLoading}
        />}
      </>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(2),
  },
  mainContainer: {
    paddingBottom: windowHeight(4),
  },
});
