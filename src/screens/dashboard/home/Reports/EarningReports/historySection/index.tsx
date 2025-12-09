import { View, FlatList, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { styles } from './styles';
import { GlobalStyle } from '@style/styles';
import { HistoryRow } from './historyRow';
import appColors from '@theme/appColors';
import { windowWidth } from '@theme/appConstant';
import { useValues } from '../../../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { datetimeArr, formatNumberWithAbbreviation } from '@src/config/utility';
import { CountStatistics } from '../countStatistics';
import YearAmountChart from '../barChart';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import Toast from 'react-native-toast-message';
import { DashLine } from '@src/commonComponents';
import { businessEarningListingActions } from '@src/store/redux/business-earning-listing-redux';
import { loadEarningReportData } from '@src/services/loading.business.reports.service';

export function BookingReportList() {
  const [clickLoadMore, setClickLoadMore] = useState(false)

  const {
    bookings ,
    limit: limitData,
    offset: offsetData,
    isFirstTimeLoading: firstTimeLoading,
    isNoMoreData: noMoreData
  } = useSelector(
    (state: RootState) => state['businessEarning']
  );

  const {
    zone: filterZone,
    category: filterCategory,
    subcategory: filterSubCategory,
    timerange: filtertimeRange,
    fromDate: filterFromDate,
    toDate: filterToDate,
  } = useSelector(
    (state: RootState) => state['businessReportsFilter'])


  const { isDark, t, currSymbol } = useValues();
  const dispatch = useDispatch()

  //handle scroll processing
  const handleScrollProcessing = () => {
    if (noMoreData) { return }
    setClickLoadMore(true)
    dispatch(businessEarningListingActions.setData({ field: 'offset', data: offsetData + 1 }))
  }

  const loadDataReports = async () => {
        const formData = new FormData()
        formData.append('limit', limitData) //limit
        formData.append('offset', offsetData) //offset
        if (filterZone !== '') {
              formData.append('zone_ids[]', filterZone)
        }
        if (filterCategory !== '') {
              formData.append('category_ids[]', filterCategory)
        }
        if (filterSubCategory !== '') {
              formData.append('sub_category_ids[]', filterSubCategory)
        }
        if (filtertimeRange !== '') {
              formData.append('date_range', filtertimeRange)
        }
        if(filtertimeRange === 'custom_date'){
          if(filterFromDate !== '' && filterToDate !== ''){
                formData.append('from', filterFromDate)
                formData.append('to', filterToDate)
          } 
        }
        await loadEarningReportData(
          formData,
          dispatch
        )
        setClickLoadMore(false)
  }

  useEffect(() => {
    if (firstTimeLoading || clickLoadMore) {
      loadDataReports()
    }
  }, [
    firstTimeLoading,
    clickLoadMore
  ])

  return (
    <>
      {firstTimeLoading && <SkeletonLoader />}
      {!firstTimeLoading && <>
        <CountStatistics />

        <View
          style={[
            styles.chartContainer,
            {
              backgroundColor: isDark ? appColors.darkTheme : appColors.white,
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}>
          <YearAmountChart />
        </View>
         
        <View style={{ marginBottom: 40 }}>
          <FlatList
            onEndReached={handleScrollProcessing}
            showsVerticalScrollIndicator={false}
            data={bookings}
            renderItem={({ item, index }) => {
              
              return (<View
                style={[
                  styles.container,
                  { borderColor: isDark ? appColors.darkBorder : appColors.border },
                ]}
              >
                <View style={styles.innerContainer}>
                  <Text style={styles.title}>{t(`newDeveloper.BookingId`)}</Text>
                  <Text style={[styles.title, { color: appColors.primary }]}>
                    {`#${item.readable_id}`}
                  </Text>
                   
                </View>

                <View style={[styles.innerContainer,{marginTop:10}]}>
                  <Text style={styles.title}>{t(`newDeveloper.BookingAmount`)}</Text>
                  <Text style={[styles.title, { color: appColors.primary }]}>
                    {`${currSymbol}${formatNumberWithAbbreviation(item.total_booking_amount)}`}
                  </Text>
                   
                </View>
                 
                <View
                  style={[
                    GlobalStyle.horizontalLine,
                    { borderColor: isDark ? appColors.darkBorder : appColors.border },
                  ]}
                />
                <View
                  style={[
                    styles.innerView,
                    {
                      backgroundColor: isDark
                        ? appColors.darkTheme
                        : appColors.boxBg,
                      borderColor: isDark ? appColors.darkBorder : appColors.border,
                    },
                  ]}>
                 
                  <HistoryRow
                    title={t('newDeveloper.TotalServiceDiscount')}
                    price={formatNumberWithAbbreviation(item?.total_discount_amount)}
                    priceStyle={{ color: appColors.primary }}
                  />
                  <HistoryRow
                    title={t('newDeveloper.ProviderPaidServiceDiscount')}
                    price={formatNumberWithAbbreviation(item?.booking_details_amounts?.discount_by_provider)}
                    priceStyle={{ color: appColors.primary }}
                  />
                  <HistoryRow
                    title={t('newDeveloper.TotalCouponDesign')}
                    price={formatNumberWithAbbreviation(item?.total_coupon_discount_amount)}
                    priceStyle={{ color: appColors.primary }}
                  />

<HistoryRow
                    title={t('newDeveloper.ProviderPaidCouponDiscount')}
                    price={formatNumberWithAbbreviation(item?.booking_details_amounts?.coupon_discount_by_provider)}
                    priceStyle={{ color: appColors.primary }}
                  />

<HistoryRow
                    title={t('newDeveloper.TotalCampaignDiscount')}
                    price={formatNumberWithAbbreviation(item?.total_campaign_discount_amount)}
                    priceStyle={{ color: appColors.primary }}
                  />

<HistoryRow
                    title={t('newDeveloper.ProviderPaidCampaignDiscount')}
                    price={formatNumberWithAbbreviation(item?.booking_details_amounts?.campaign_discount_by_provider)}
                    priceStyle={{ color: appColors.primary }}
                  />




                   <DashLine/>
                   <HistoryRow
                    title={t('newDeveloper.SubTotal')}
                    price={formatNumberWithAbbreviation(item?.total_booking_amount)}
                    priceStyle={{
                      // color: isDark ? appColors.lightText : appColors.darkText,
                      color: appColors.success,
                      fontSize: 20
                    }}
                  />
                  <HistoryRow
                    title={t('newDeveloper.AdminCommission')}
                    price={formatNumberWithAbbreviation(item?.booking_details_amounts?.admin_commission)}
                    priceStyle={{ color: appColors.primary }}
                  />
                  <HistoryRow
                    title={t('newDeveloper.GSTTAX')}
                    price={formatNumberWithAbbreviation(item?.total_tax_amount)}
                    priceStyle={{ color: appColors.primary }}
                  />
                  <DashLine/>
                  <HistoryRow
                    title={t('newDeveloper.ProviderNetIncome')}
                    price={formatNumberWithAbbreviation(item?.booking_details_amounts?.provider_earning)}
                    priceStyle={{
                      // color: isDark ? appColors.lightText : appColors.darkText,
                      color: appColors.success,
                      fontSize: 20
                    }}
                  />
                </View>

              </View>
              )
            }}
          />
          {clickLoadMore && <ActivityIndicator />}
        </View>
      </>}
    </>
  );
}
