import React from 'react';
import {View, Text} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import appColors from '@theme/appColors';
import {styles} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';

export default function LineChartView() {

  const {
    selectedFilter,
    selectedYear,
    selectedMonth,
    yearStatData,
    monthStatData,
  } = useSelector((state: RootState)=>state['homeStatisticGraph'])
  let ptData:{value:number,label:string}[] = [];

   if(selectedFilter === 0){ // year map data
       const findyear = yearStatData.find(ele=>ele.year.toString() === selectedYear.toString()) 
       if(findyear?.month){
        ptData = findyear?.month.map((monthValue,monthindex)=>{
          return {value:monthValue.amount,label:monthValue.monthName.substring(0,3)}
         })
       } 
   }
   if(selectedFilter === 1){ //monthmap data
      const findyear = monthStatData.find(ele=>ele.year.toString() === selectedYear.toString()) 
      const findMonth = findyear?.month.find(ele=>ele.monthName === selectedMonth)
      if(findMonth?.days){
        ptData = findMonth?.days.map((daysValue,dayIndex)=>{
          return {value:daysValue.amount,label:daysValue.dayNumber.toString()}
        })
      }
      
   }

  return (
    <View style={styles.containerView}>
      <LineChart
        areaChart
        curved
        data={ptData}
        width={290}
        hideDataPoints
       
        color={appColors.primary}
        thickness={2}
        startFillColor={appColors.gradientColor}
        endFillColor="rgba(254, 120, 46, 0)"
        startOpacity={0.5}
        endOpacity={0.1}
        // initialSpacing={4}
        // noOfSections={5}
        yAxisLabelWidth={60}
        yAxisColor="white"
        yAxisThickness={0}
        yAxisLabelSuffix={'k'}
        rulesType="dotted"
        rulesColor={'#d4d5d6'}
        yAxisTextStyle={{color: 'gray'}}
        xAxisColor="lightgray"
        pointerConfig={{
          pointerStripHeight: 170,
          pointerStripColor: appColors.primary,
          pointerStripWidth: 2,
          pointerColor: appColors.primary,
          radius: 6,
          pointerLabelWidth: 100,
          pointerLabelHeight: 190,
          activatePointersOnLongPress: true,
          autoAdjustPointerLabelPosition: false,

          // pointerLabelComponent: (items: {value: string}[]) => {
          //   return (
          //     <View style={styles.textView}>
          //       <Text style={styles.textStyle}>{items[0].label}</Text>
          //       <View style={styles.container}>
          //         <Text
          //           style={{
          //             fontWeight: 'bold',
          //             textAlign: 'center',
          //             color: appColors.white,
          //           }}>
          //           {'$' + items[0].value + '.0'}
          //         </Text>
          //       </View>
          //     </View>
          //   );
          // },
        }}
      />
    </View>
  );
}
