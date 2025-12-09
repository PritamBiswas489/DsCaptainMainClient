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
 
 
 
import { loadExpenseReportData } from '@src/services/loading.business.reports.service';
import { CountStatistics } from '../countStatistics';
import YearAmountChart from '../barChart';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import Toast from 'react-native-toast-message';
import { DashLine } from '@src/commonComponents';
import { businessExpenseActions } from '@src/store/redux/business-expenses-redux';

export function BookingReportList() {
  const [clickLoadMore, setClickLoadMore] = useState(false)

  const {
    filteredBookingAmounts,
    limit: limitData,
    offset: offsetData,
    isFirstTimeLoading: firstTimeLoading,
    isNoMoreData: noMoreData
  } = useSelector(
    (state: RootState) => state['businessExpenses']
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

  const { isDark, t } = useValues();
  const dispatch = useDispatch()

  //handle scroll processing
  const handleScrollProcessing = () => {
    if (noMoreData) { return }
    setClickLoadMore(true)
    dispatch(businessExpenseActions.setData({ field: 'offset', data: offsetData + 1 }))
  }

  // load data repeorts
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
        await loadExpenseReportData(
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
            data={filteredBookingAmounts}
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
                    #{`${item?.booking?.readable_id}`}
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
                    title={t('newDeveloper.NormalDiscount')}
                    price={formatNumberWithAbbreviation(item.discount_by_provider)}
                    priceStyle={{ color: appColors.primary }}
                  />
                  <HistoryRow
                    title={t('newDeveloper.CouponDiscount2')}
                    price={formatNumberWithAbbreviation(item.coupon_discount_by_provider)}
                    priceStyle={{ color: appColors.primary }}
                  />
                  <HistoryRow
                    title={t('newDeveloper.CampaignDiscount')}
                    price={formatNumberWithAbbreviation(item.campaign_discount_by_provider)}
                    priceStyle={{ color: appColors.primary }}
                  />
                   <DashLine/>
                   <HistoryRow
                    title={t('newDeveloper.TotalExpense')}
                    price={formatNumberWithAbbreviation(
                      item.discount_by_provider 
                      + item.coupon_discount_by_provider
                      + item.campaign_discount_by_provider )}
                    priceStyle={{
                      
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
