import { View, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { styles } from './styles';
import RenderItem from './renderItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { useValues } from '../../../../App';
import { bookingSearchFieldActions } from '@src/store/redux/booking-search-field';
import { searchStatusArray } from '@src/config/utility';
import { CountObjInterface } from '@src/interfaces/countObjInterface';
import appColors from '@src/theme/appColors';
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

export default function StatusFilter({ }) {
  const flatListRef = useRef<FlatList>(null);
  const dispatch = useDispatch()
  const { t, isDark } = useValues()
  
  const {
    selectedStatus: selectedSubCategory,
    accepted,
    canceled,
    completed,
    ongoing,
    pending,
    all
  } = useSelector(
    (state: RootState) => state['bookingSearchField']
  );
  const statusList = searchStatusArray()
  // const currentStatusArray = statusList.filter(element=>element.value === selectedBookingStatus)
  const setSubCategory = (value:string) =>{
      dispatch(bookingSearchFieldActions.setData({field:'selectedStatus',data:value}))
     // dispatch(currentStatusArray[0].actions.resetState())
  }
   
  const countobj:CountObjInterface = {accepted,canceled,completed,ongoing,pending,all}

   
  return (
    <View>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={[
          styles.mainContainer,
          {backgroundColor:isDark ? appColors.darkCardBg : appColors.white  }
        ]}
        data={statusList}
        keyExtractor={item=>item.value}
        renderItem={({ index, item }) => {
          return (
            <RenderItem
              selectedCategory={selectedSubCategory}
              setCategory={setSubCategory}
              item={item}
              index={index}
              countobj={countobj}
              flatListRef={flatListRef}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
