import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import LineChartView from './lineChart';
import WeeklySection from './weeklySection';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import { RootState, AppDispatch } from '@src/store';
import { useDispatch, useSelector } from 'react-redux';
import { homeStaticGraphData } from '@src/services/home.service';
import { homeStatisticsGraphActions } from '@src/store/redux/home-statistics-graph-redux';
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}
export default function StaticsDetail() {
  const dispatch = useDispatch()
  const {isDark,t} = useValues();

  const {  
    selectedYear,
    selectedMonth,
    selectedFilter,
    lastFourYears,
    monthList,
    yearStatData,
    monthStatData
  } = useSelector((state: RootState) => state['homeStatisticGraph'])

  const loadhomeStatisticsData = async()=>{
    let url = ''
    if(selectedFilter === 0){
       url = `/provider/dashboard?sections=earning_stats&stats_type=full_year&year=${selectedYear}`
    }
    if(selectedFilter === 1){
       url = `/provider/dashboard?sections=earning_stats&stats_type=full_month&year=${selectedYear}&month=${monthList.indexOf(selectedMonth)+1}`
    }
    const response:Response = await homeStaticGraphData(url)
    //earning stats
    if (response?.data?.content?.[0]?.earning_stats.length > 0 && selectedFilter === 0) {
     
    
      const yrstat = [...yearStatData]; // Clone the yearStatData array
      const findyear = yrstat.find(ele => ele.year.toString() === selectedYear.toString());
    
      if (findyear?.month) {
        let selectedMonths = [...findyear?.month]; 
          const updatedMonths = selectedMonths.map((monthEntry) => {
            //@ts-ignore
            const match = response?.data?.content?.[0]?.earning_stats.find(entry => entry.month === monthEntry.monthName);
            if (match) {
              return {
                ...monthEntry, 
                amount: Math.ceil(match.sums/1000)  
              };
            }
            return monthEntry;  
          });
           
          
          const updatedYrStat = yrstat.map((yearEntry) => {
            if (yearEntry.year.toString() === selectedYear.toString()) {
              return {
                ...yearEntry,   
                month: updatedMonths  
              };
            }
            return yearEntry;  
          });
          dispatch(homeStatisticsGraphActions.setData({field:'yearStatData',data:updatedYrStat}))
      }
    }
    //earning stats
    if (response?.data?.content?.[0]?.earning_stats.length > 0 && selectedFilter === 1) {
      const monthStat = [...monthStatData];
      const findyear = monthStat.find(ele => ele.year.toString() === selectedYear.toString());
      if (findyear?.month) {
            let selectedMonths = [...findyear?.month]; 
            const updatedMonths = selectedMonths.map((monthEntry) => {
              //@ts-ignore
              const match = response?.data?.content?.[0]?.earning_stats.find(entry => entry.month === monthEntry.monthName);
              if (match) {
                
                const matchDays = monthEntry.days.map(ele=>{
                   if(ele.dayNumber === match.day){
                       return {
                        ...ele,
                        amount:Math.ceil(match.sums/1000)  
                       }                  
                   }else{
                    return ele
                   }
                })
                return {
                  ...monthEntry,
                  days:matchDays
                }
              }
              return monthEntry
            })
            const updatedMonthStat = monthStat.map((yearEntry) => {
              if (yearEntry.year.toString() === selectedYear.toString()) {
                return {
                  ...yearEntry,   
                  month: updatedMonths  
                };
              }
              return yearEntry;  
            });
            dispatch(homeStatisticsGraphActions.setData({field:'monthStatData',data:updatedMonthStat}))
      }
    }
  }

    useEffect( ()=>{
      loadhomeStatisticsData()
 }, [ selectedYear,selectedMonth,selectedFilter])   

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg,
          borderColor: isDark ? appColors.darkBorder : appColors.border,
        },
      ]}>
      <View style={styles.innerContainer}>
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {t('newDeveloper.EarningStatistics')} 
        </Text>
        <View
          style={[
            styles.chartContainer,
            {
              backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg,
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}>
          <WeeklySection
            
          />
          <LineChartView/>
        </View>
      </View>
    </View>
  );
}
