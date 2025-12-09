import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import SwitchContainer from '@otherComponent/switchContainer';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../../../App';
import { propsType } from './data/types';
import { convertTo12Hour } from '@src/config/utility';


export function AvailabilitySchedules({
  setFromTimePicker,
  setToTimePicker,
  fromTime,
  toTime
}:{
  setFromTimePicker:(value:boolean)=>void,
  setToTimePicker:(value:boolean)=>void,
  fromTime:string,
  toTime:string
}) {
  const { t, isDark } = useValues();
  
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
          borderColor: isDark ? appColors.darkBorder : appColors.border,
        },
      ]}>
      <View style={styles.rowContainer}>
        <Text
          style={[
            styles.day,
            { color: isDark ? appColors.white : appColors.darkText },
          ]}>
          {t('newDeveloper.ServiceProvidingTime')}
        </Text>

      </View>
      <View style={styles.rowContainer}>
        <View key={1}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              setFromTimePicker(true)
            }}
            style={[
              styles.timeContainer,
              {
                backgroundColor:
                  isDark
                    ? appColors.darkCard
                    : appColors.white
                ,
                borderColor: isDark
                  ? appColors.darkBorder
                  : appColors.border,
              },
            ]}>
            <Text
              style={[
                styles.time,
                { color: isDark ? appColors.white : appColors.darkText },
              ]}>
              {fromTime && convertTo12Hour(fromTime)}
            </Text>
          </TouchableOpacity>
        </View>
        <View key={2}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              setToTimePicker(true)
            }}
            style={[
              styles.timeContainer,
              {
                backgroundColor:
                  isDark
                    ? appColors.darkCard
                    : appColors.white
                ,
                borderColor: isDark
                  ? appColors.darkBorder
                  : appColors.border,
              },
            ]}>
            <Text
              style={[
                styles.time,
                { color: isDark ? appColors.white : appColors.darkText },
              ]}>
              {toTime && convertTo12Hour(toTime)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
