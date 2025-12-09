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
import { loadServiceOverviewData } from '@src/services/loading.business.reports.service';


export function BookingReportList() {
  const [clickLoadMore, setClickLoadMore] = useState(false)

  const {
    amounts: amounts,
    limit: limitData,
    offset: offsetData,
    isFirstTimeLoading: firstTimeLoading,
    isNoMoreData: noMoreData
  } = useSelector(
    (state: RootState) => state['serviceOverview']
  );

  const {
    zone: filterZone,
    transaction_type: filterTransactionType,
    timerange: filtertimeRange,
    fromDate: filterFromDate,
    toDate: filterToDate,
  } = useSelector(
    (state: RootState) => state['transactionReportFilter'])


  const { isDark, t } = useValues();
  const dispatch = useDispatch()




  const loadDataReports = async () => {
    const formData = new FormData()
    formData.append('limit', limitData) //limit
    formData.append('offset', offsetData) //offset
    if (filterZone !== '') {
      formData.append('zone_ids[]', filterZone)
    }
    if (filterTransactionType !== '') {
      formData.append('transaction_type', filterTransactionType)
    }
    if (filtertimeRange !== '') {
      formData.append('date_range', filtertimeRange)
    }
    if (filtertimeRange === 'custom_date') {
      if (filterFromDate !== '' && filterToDate !== '') {
        formData.append('from', filterFromDate)
        formData.append('to', filterToDate)
      }
    }
    await loadServiceOverviewData(
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
            showsVerticalScrollIndicator={false}
            data={amounts}
            renderItem={({ item, index }) => {
                const totalExpense = item.campaign_discount_by_provider + 
                item.coupon_discount_by_provider + item.discount_by_provider
                const netProfitRate = item?.provider_earning!=0? (item?.provider_earning*100)/item?.provider_earning  : item?.provider_earning*100;
              return (<View
                style={[
                  styles.container,
                  { borderColor: isDark ? appColors.darkBorder : appColors.border },
                ]}
              >
                <View style={styles.innerContainer}>
                  <Text style={styles.title}>{t(`newDeveloper.NetProfitRate`)}</Text>
                  <Text style={[styles.title, { color: appColors.primary }]}>
                    {netProfitRate}%
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
                    title={t('newDeveloper.TotalEarning')}
                    price={formatNumberWithAbbreviation(item?.provider_earning)}
                    priceStyle={{ color: appColors.primary }}
                  />
                  <HistoryRow
                    title={t('newDeveloper.TotalExpenses')}
                    price={formatNumberWithAbbreviation(totalExpense)}
                    priceStyle={{ color: appColors.primary }}
                  />
                  <HistoryRow
                    title={t('newDeveloper.TAX')}
                    price={formatNumberWithAbbreviation(item?.service_tax)}
                    priceStyle={{ color: appColors.primary }}
                  />
                  <DashLine />
                  <HistoryRow
                    title={t('newDeveloper.NetProfit')}
                    price={formatNumberWithAbbreviation(item?.provider_earning)}
                    priceStyle={{
                      color: appColors.success,
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
