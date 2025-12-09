import {View, FlatList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import RenderItem from './renderItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { ActivityIndicator } from 'react-native'; 
import { AttributeInterface } from '@src/interfaces/store/attributes.interface';

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}


export default function StoreAttributes({
  selectedAttrbutes,
  setSelectedAttributes
}:
{
  selectedAttrbutes:number[],
  setSelectedAttributes:(value:number[])=>void
}) {
  const flatListRef = useRef<FlatList>(null); 
  const dispatch = useDispatch()

  const {
    data:Attributes
  } = useSelector((state: RootState) => state['vendorAttribute'])

  const setSubCategory = (item:AttributeInterface) =>{
    if(!selectedAttrbutes.includes(item.id)){
      setSelectedAttributes([...selectedAttrbutes,item.id])
    }else{
      setSelectedAttributes(selectedAttrbutes.filter(ele=>ele!=item.id))
    }
  }
   
  
  return (
    <View>
    
      <FlatList
        ref={flatListRef}
        contentContainerStyle={styles.mainContainer}
        data={Attributes}
        renderItem={({index, item}) => {
          return (
            <RenderItem
              selectedCategory={selectedAttrbutes}
              setCategory={setSubCategory}
              item={item}
              index={index}
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
