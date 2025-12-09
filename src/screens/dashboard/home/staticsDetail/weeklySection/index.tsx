import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { activeTypes, data } from './data/data';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { homeStatisticsGraphActions } from '@src/store/redux/home-statistics-graph-redux';
import SelectionDropdownModal from '@src/otherComponent/selectionDropdownModal';
export default function WeeklySection() {
  const { isDark, t } = useValues();
  const dispatch = useDispatch()
  const { selectedFilter: activeItem,
    selectedYear,
    selectedMonth,
   
    lastFourYears,
    monthList
  } = useSelector((state: RootState) => state['homeStatisticGraph'])
  const setActiveItem = (value: number) => {
    dispatch(homeStatisticsGraphActions.setData({ field: 'selectedFilter', data: value }))
  }

  const [dropdownYearList, setDropDownYearList] = useState<{
    label: string;
    value: string;
  }[]>();
  const [showYearmodal, setShowYearModal] = useState(false)

  const [dropdownMonthList, setDropDownMonthList] = useState<{
    label: string;
    value: string;
  }[]>();

  const [showMonthmodal, setShowMonthModal] = useState(false)



  useEffect(() => {
    const yearData = lastFourYears.map((yearValue, yearindex) => {
      return { label: yearValue.toString(), value: yearValue.toString() }
    })
    setDropDownYearList(yearData)

  }, [lastFourYears])

  useEffect(() => {
    const monthData = monthList.map((monthValue, monthIndex) => {
      return { label: monthValue.toString(), value: monthValue.toString() }
    })
    setDropDownMonthList(monthData)

  }, [monthList])




  return (
    <>
      <View style={styles.row}>
        <View style={styles.rowContainer}>
          {data.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.9}
              key={index}
              onPress={() => setActiveItem(index)}
              style={[
                styles.activeStyle,
                {
                  backgroundColor:
                    activeItem === index
                      ? isDark
                        ? appColors.darkTheme
                        : appColors.white
                      : isDark
                        ? appColors.darkTheme
                        : appColors.border,
                  borderWidth: activeItem === index ? 1 : 0,
                },
              ]}>
              <Text
                style={[
                  styles.itemStyle,
                  { color: isDark ? appColors.white : appColors.lightText },
                ]}>
                {t(item.item)}
              </Text>
            </TouchableOpacity>
          ))}


          <TouchableOpacity
            activeOpacity={0.9}
            key={'yearFilter'}
            onPress={() => {
              setShowYearModal(true)
            }}
            style={[
              styles.activeStyle,
              {
                backgroundColor:
                  appColors.success,
                borderWidth: 0,
                marginLeft: 10
              },
            ]}>
            <Text
              style={[
                styles.itemStyle,
                { color: isDark ? appColors.white : appColors.lightText },
              ]}>
              {selectedYear}
            </Text>
          </TouchableOpacity>

          {activeItem === 1 && <TouchableOpacity
            activeOpacity={0.9}
            key={'monthFilter'}
            onPress={() => {
              setShowMonthModal(true)
            }}
            style={[
              styles.activeStyle,
              {
                backgroundColor:
                  appColors.accepted,
                borderWidth: 0,
                marginLeft: 10
              },
            ]}>
            <Text
              style={[
                styles.itemStyle,
                { color: isDark ? appColors.white : appColors.lightText },
              ]}>
              {selectedMonth}
            </Text>
          </TouchableOpacity>}
        </View>

      </View>
      {showYearmodal && dropdownYearList && <SelectionDropdownModal
        data={dropdownYearList}
        setValue={(value) => { 

          dispatch(homeStatisticsGraphActions.setData({ field: 'selectedYear', data: value }))
        }}
        label={''}
        error={''}
        value={selectedYear.toString()}
        isModalVisible={showYearmodal}
        setIsModalVisible={setShowYearModal}
      />

      }
      {showMonthmodal && dropdownMonthList && <SelectionDropdownModal
        data={dropdownMonthList}
        setValue={(value) => { 
          dispatch(homeStatisticsGraphActions.setData({ field: 'selectedMonth', data: value }))
        }}
        label={''}
        error={''}
        value={selectedMonth}
        isModalVisible={showMonthmodal}
        setIsModalVisible={setShowMonthModal}
      />}
    </>
  );
}
