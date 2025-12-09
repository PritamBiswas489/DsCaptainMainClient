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
 
 
import { loadTransactionReportsService } from '@src/services/loading.transaction.reports.service';
import { CountStatistics } from '../countStatistics';
import YearAmountChart from '../barChart';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import Toast from 'react-native-toast-message';
import { DashLine } from '@src/commonComponents';
import { transactionReportActions } from '@src/store/redux/transactions-reports-redux';


export function BookingReportList() {
  const [clickLoadMore, setClickLoadMore] = useState(false)

  const {
    filteredTransaction: filteredTransactions,
    limit: limitData,
    offset: offsetData,
    isFirstTimeLoading: firstTimeLoading,
    isNoMoreData: noMoreData
  } = useSelector(
    (state: RootState) => state['transactionReports']
  );

  const {
    zone: filterZone,
    transaction_type:filterTransactionType,
    timerange: filtertimeRange,
    fromDate: filterFromDate,
    toDate: filterToDate,
  } = useSelector(
    (state: RootState) => state['transactionReportFilter'])


  const { isDark, t } = useValues();
  const dispatch = useDispatch()

  //handle scroll processing
  const handleScrollProcessing = () => {
    if (noMoreData) { return }
    setClickLoadMore(true)
    dispatch(transactionReportActions.setData({ field: 'offset', data: offsetData + 1 }))
  }

  const loadDataReports = async () => {
        const formData = new FormData()
        formData.append('limit', limitData) //limit
        formData.append('offset', offsetData) //offset
        if (filterZone !== '') {
          formData.append('zone_ids[]', filterZone)
        }
        if(filterTransactionType!==''){
          formData.append('transaction_type', filterTransactionType)
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
        await loadTransactionReportsService(
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
         
        <View style={{ marginBottom: 40 }}>
          <FlatList
            onEndReached={handleScrollProcessing}
            showsVerticalScrollIndicator={false}
            data={filteredTransactions}
            renderItem={({ item, index }) => {
              const {
                day,
                month,
                year,
                hours,
                minutes,
                ampm
              } = datetimeArr(item.created_at)

              return (<View
                style={[
                  styles.container,
                  { borderColor: isDark ? appColors.darkBorder : appColors.border },
                ]}
              >
                <View style={styles.innerContainer}>
                  <Text style={styles.title}>{t(`newDeveloper.${item.trx_type}`)}</Text>
                  <Text style={styles.title}>{t('newDeveloper.Transactionto')}</Text>
                   
                </View>
                <View style={[styles.innerContainer, { marginTop: windowWidth(2) }]}>
                  <Text style={[styles.title, { color: appColors.primary }]}>
                    {`${day} ${month} ${year} ${hours}:${minutes} ${ampm}`}
                  </Text>
                  <Text
                    style={[
                      styles.title,
                      { color: isDark ? appColors.white : appColors.darkText },
                    ]}>
                    {`${item.to_user.first_name} ${item?.to_user?.last_name || ''}`}
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
                    title={t('newDeveloper.Debit')}
                    price={formatNumberWithAbbreviation(item.debit)}
                    priceStyle={{ color: appColors.primary }}
                  />
                  <HistoryRow
                    title={t('newDeveloper.Credit')}
                    price={formatNumberWithAbbreviation(item.credit)}
                    priceStyle={{ color: appColors.primary }}
                  />
                   <DashLine/>
                   <HistoryRow
                    title={t('newDeveloper.Balance')}
                    price={formatNumberWithAbbreviation(item.balance)}
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
