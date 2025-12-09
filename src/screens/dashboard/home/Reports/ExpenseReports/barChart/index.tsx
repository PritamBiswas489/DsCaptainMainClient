import appColors from '@src/theme/appColors';
import { useEffect, useState } from 'react';
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { LineChart   } from 'react-native-gifted-charts'; 
import { useValues } from '../../../../../../../App';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { formatNumberWithAbbreviation } from '@src/config/utility';


// Define the type for the chart data

interface ChartData {
  value: number;
  label: string;
}

const YearAmountChart: React.FC = () => {
  const { t, isDark } = useValues()


  const {
    chart_data
  } = useSelector(
    (state: RootState) => state['businessExpenses']
    
  );
  
  

  const [normalDiscount, setNormalDiscount] = useState<ChartData[]>([])
  const [campaignDiscount, setCampaignDiscount] = useState<ChartData[]>([])
  const [couponDiscount, setCouponDiscount] = useState<ChartData[]>([])
  const [expenses, setExpenses] = useState<ChartData[]>([])

  useEffect(() => {
    if (chart_data?.timeline) {
      const formattedData = chart_data.timeline.map((timeLineValue, timeLineIndex) => {
        return {
          value: chart_data.normal_discount[timeLineIndex] || 0,
          label: timeLineValue.toString() || 'Unknown'
        };
      });
       
      setNormalDiscount(formattedData);
    }
  }, [chart_data]);


  useEffect(() => {
    if (chart_data?.timeline) {
      const formattedData = chart_data.timeline.map((timeLineValue, timeLineIndex) => {
        return {
          value: chart_data.campaign_discount[timeLineIndex] || 0,
          label: timeLineValue.toString() || 'Unknown'
        };
      });
      
      setCampaignDiscount(formattedData);
    }
  }, [chart_data]);

  useEffect(() => {
    if (chart_data?.timeline) {
      const formattedData = chart_data.timeline.map((timeLineValue, timeLineIndex) => {
        return {
          value: chart_data.coupon_discount[timeLineIndex] || 0,
          label: timeLineValue.toString() || 'Unknown'
        };
      });
      setCouponDiscount(formattedData);
    }
  }, [chart_data]);

  useEffect(() => {
    if (chart_data?.timeline) {
      const formattedData = chart_data.timeline.map((timeLineValue, timeLineIndex) => {
        return {
          value: chart_data.expenses[timeLineIndex] || 0,
          label: timeLineValue.toString() || 'Unknown'
        };
      });
       
      setExpenses(formattedData);
    }
  }, [chart_data]);
  
  useEffect(()=>{
    // console.log({normalDiscount,campaignDiscount,couponDiscount,expenses})
  },[normalDiscount,campaignDiscount,couponDiscount,expenses])
  
   
  return (
    //@ts-ignore
      <View style={styles.container}>
       <LineChart
         
         
        data ={campaignDiscount} 
        data2={couponDiscount}
        data3={expenses}
        xAxisLabelTextStyle={{ color: appColors.primary, fontSize: 12 }}   
        yAxisTextStyle={{ color: appColors.primary, fontSize: 12 }}   
        spacing={60}  
        initialSpacing={20} 
        thickness={2}  
        yAxisColor={ isDark ? appColors.white : appColors.darkText}
        xAxisColor={ isDark ? appColors.white : appColors.darkText}
        hideRules={true}
        color={appColors.success}
        color2={appColors.error}
        color3={appColors.accepted}
         
        dataPointsColor={isDark ? appColors.white : appColors.darkText}
         
        showVerticalLines={false} 
        showYAxisIndices  
        yAxisLabelWidth={100} 
        
      />
       <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColorBox, { backgroundColor: appColors.success }]} />
          <Text style={[styles.legendText,{color: isDark ? appColors.white : appColors.darkText}]}>{t('newDeveloper.CampaignDiscount')}</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColorBox, { backgroundColor: appColors.error }]} />
          <Text style={[styles.legendText,{color: isDark ? appColors.white : appColors.darkText}]}>{t('newDeveloper.CouponDiscount2')}</Text>
        </View>
       
      </View>

      <View style={styles.legendContainer}>
      <View style={styles.legendItem}>
          <View style={[styles.legendColorBox, { backgroundColor: appColors.accepted }]} />
          <Text style={[styles.legendText,{color: isDark ? appColors.white : appColors.darkText}]}>{t('newDeveloper.Expenses')}</Text>
        </View>
       
           
      </View>
    </View>
  );
};

// Define the styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    overflow:'scroll'

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  xAxisLabel: {
    fontSize: 12,
  },
  yAxisText: {
    fontSize: 12,
  },
  legendContainer: {
    flexDirection: 'row', // Align legend items horizontally
    justifyContent: 'center', // Center the legend horizontally
    marginTop: 16, // Add some space above the legend
  },
  legendItem: {
    flexDirection: 'row', // Align legend color box and text horizontally
    alignItems: 'center', // Align items vertically centered
    marginHorizontal: 10, // Space between legend items
  },
  legendColorBox: {
    width: 16,
    height: 16,
    marginRight: 8, // Space between the color box and the text
    borderRadius: 4, // Slight rounding of the color box
  },
  legendText: {
    fontSize: 14,
   
  },
});

export default YearAmountChart;
