import appColors from '@src/theme/appColors';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useValues } from '../../../../../App';

//order filter card
const OrderFilterCard = (
    {selectedFilter, setSelectedFilter}:{selectedFilter:string,setSelectedFilter:(value:string)=>void}
) => {
  const filters: string[] = ['allOrder', 'deliveredOrder', 'refundedOrder'];
  const { isDark, t, currSymbol } = useValues();
  return (
    <View style={styles.container}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={[
            styles.filterButton,
            {backgroundColor: isDark ? appColors.darkCardBg : appColors.white,},
            
            selectedFilter === filter && styles.selectedFilterButton
          ]}
          onPress={() => setSelectedFilter(filter)}
        >
          <Text
            style={[
           
              { color: isDark ? appColors.white : appColors.darkText },
              selectedFilter === filter && styles.selectedFilterText
            ]}
          >
            {t(`newDeveloper.${filter}`)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
     
  },
  selectedFilterButton: {
    backgroundColor: appColors.primary,
  },
   
  selectedFilterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OrderFilterCard; 
