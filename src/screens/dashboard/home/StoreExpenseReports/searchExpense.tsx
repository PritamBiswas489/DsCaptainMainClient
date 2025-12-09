import appColors from '@src/theme/appColors';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure you have react-native-vector-icons installed
import { useValues } from '../../../../../App';
import { datetimeArr } from '@src/config/utility';
const SearchExpense = (
  {
    fromDate,
    toDate,
    search,
    setDateRangeShow,
    executeSearchFilter
  }
    :
    {
      fromDate: string,
      toDate: string,
      search: string,
      setDateRangeShow: React.Dispatch<React.SetStateAction<boolean>>,
      executeSearchFilter:(value:string)=>void
    }) => {

  const [formattedFromDate, setFormattedFromDate] = useState('')
  const [formattedToDate, setFormattedToDate] = useState('')

  useEffect(()=>{
    const t = datetimeArr(fromDate)
    setFormattedFromDate(`${t?.day} ${t?.month} ${t?.year}`)
     
  },[fromDate])

  useEffect(()=>{
    const t = datetimeArr(toDate)
    setFormattedToDate(`${t?.day} ${t?.month} ${t?.year}`)
  },[toDate])

  const [orderId, setOrderId] = useState('');
  const { isDark, t } = useValues();
  return (
    <View style={[styles.container, { backgroundColor: isDark ? appColors.darkCardBg : appColors.white, }]}>
      <View style={[styles.searchContainer, { backgroundColor: isDark ? appColors.darkTheme : appColors.textInput }]}>
        <TextInput
          style={[styles.searchInput, { color: isDark ? appColors.white : appColors.darkText },]}
          placeholderTextColor={appColors.lightText}
          placeholder="Search with order id"
          value={orderId}
          onChangeText={setOrderId}
        />
        <TouchableOpacity onPress={()=>executeSearchFilter(orderId)} style={styles.searchButton}>
          <Icon name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.dateContainer}>
        <Text style={[styles.dateLabel, { color: isDark ? appColors.white : appColors.darkText }]}>From</Text>
        <View style={[styles.dateButton, { backgroundColor: isDark ? appColors.darkTheme : appColors.textInput }]}>
          <Text style={[styles.dateText, { color: isDark ? appColors.white : appColors.darkText }]}>{formattedFromDate}</Text>
        </View>
        <Text style={[styles.dateLabel, { color: isDark ? appColors.white : appColors.darkText }]}>To</Text>
        <View style={[styles.dateButton, { backgroundColor: isDark ? appColors.darkTheme : appColors.textInput }]}>
          <Text style={[styles.dateText, { color: isDark ? appColors.white : appColors.darkText }]}>{formattedToDate}</Text>
        </View>
        <TouchableOpacity onPress={()=>setDateRangeShow(true)} style={styles.calendarButton}>
          <Icon name="calendar-today" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 6,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  searchButton: {
    backgroundColor: appColors.primary,
    padding: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateLabel: {
    marginRight: 8,
  },
  dateButton: {

    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  dateText: {

  },
  calendarButton: {
    backgroundColor: appColors.primary,
    padding: 8,
    borderRadius: 8,
  },
});

export default SearchExpense;
