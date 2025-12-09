import appColors from '@src/theme/appColors';
import { useEffect, useState } from 'react';
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { LineChart  } from 'react-native-gifted-charts'; 
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
    (state: RootState) => state['serviceOverview']
    
  );
  

  const [totalEarnings, setTotalEarnings] = useState<ChartData[]>([])
  const [totalExpenses, setTotalExpenses] = useState<ChartData[]>([])

  useEffect(() => {
    if (chart_data?.timeline) {
      const formattedData = chart_data.timeline.map((timeLineValue, timeLineIndex) => {
        return {
          value: chart_data.earnings[timeLineIndex] || 0,
          label: timeLineValue.toString() || 'Unknown'
        };
      });
       
      setTotalEarnings(formattedData);
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
      setTotalExpenses(formattedData);
    }
  }, [chart_data]);

  
   
  return (
    //@ts-ignore
      <View style={styles.container}>
       <LineChart
         
        data={totalEarnings}  
        data2={totalExpenses} 
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
        dataPointsColor={isDark ? appColors.white : appColors.darkText}
        dataPointsColor2={isDark ? appColors.white : appColors.darkText}
        showVerticalLines={false} 
        showYAxisIndices  
        yAxisLabelWidth={100} 
        
      />
       <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColorBox, { backgroundColor: appColors.success }]} />
          <Text style={[styles.legendText,{color: isDark ? appColors.white : appColors.darkText}]}>{t('newDeveloper.Totalearnings')}</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColorBox, { backgroundColor: appColors.error }]} />
          <Text style={[styles.legendText,{color: isDark ? appColors.white : appColors.darkText}]}>{t('newDeveloper.TotalExpenses')}</Text>
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
