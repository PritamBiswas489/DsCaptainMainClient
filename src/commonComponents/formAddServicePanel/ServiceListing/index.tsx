import {View, FlatList, Alert} from 'react-native';
import React from 'react';
import RenderItem from './renderItem';
import {styles} from './styles';
import {dataType} from './data/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { ActivityIndicator } from 'react-native';
export function FormServiceListing({
  data,
  setData,
  isHorizontal,
  providerImageStyle,
  itemSeparator,
  contentContainerStyle,
  selectedServiceVariants,
  setSelectedServiceVariants
}: dataType) {

  const {
    selected:Services,
    loading:servicesLoader
  } = useSelector((state: RootState) => state['servicesFormData'])

 


  const toggleSwitch = (index: number) => {
    const newServices = [...data];
    newServices[index].status = !newServices[index].status;
    setData(newServices);
  };

  return (
    <View>
      {servicesLoader && <ActivityIndicator style={{marginTop:10}}/> }  
     {!servicesLoader && <FlatList
        contentContainerStyle={[styles.containerStyle, contentContainerStyle]}
        data={Services.services}
        horizontal={isHorizontal ? isHorizontal : false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <RenderItem
            item={item}
            index={index}
            toggleSwitch={toggleSwitch}
            providerImageStyle={providerImageStyle}
            selectedServiceVariants={selectedServiceVariants}
            setSelectedServiceVariants={setSelectedServiceVariants}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={[styles.itemSeparator, itemSeparator]}></View>
        )}
      />} 
    </View>
  );
}
