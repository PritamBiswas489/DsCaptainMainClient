import {View, FlatList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import RenderItem from './renderItem';

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

export default function PriceCategory({
  minimum_withdraw_amount,
  maximum_withdraw_amount,
  handleMinBidAmtChange
}:{
  minimum_withdraw_amount:number,
  maximum_withdraw_amount:number,
  handleMinBidAmtChange:(value:string)=>void
}) {
  const flatListRef = useRef<FlatList>(null);
  const [slots, setSlots] = useState<number[]>([]);
  const stepSize = 100

  useEffect(() => {
    const generatedSlots: number[] = [];
    for (let i = minimum_withdraw_amount; i <= maximum_withdraw_amount; i += stepSize) {
      generatedSlots.push(i);
    }
    setSlots(generatedSlots);
  }, [minimum_withdraw_amount, maximum_withdraw_amount, stepSize]);

  const [selectedAmount,setSelectedAmount] = useState('')

  useEffect(()=>{
    if(selectedAmount){
      handleMinBidAmtChange(selectedAmount.toString())
    }
    
  },[selectedAmount])
 
  return (
    <View>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={styles.mainContainer}
        data={slots}
        renderItem={({index, item}) => {
          return (
            <RenderItem
              selectedCategory={selectedAmount}
              setCategory={setSelectedAmount}
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
