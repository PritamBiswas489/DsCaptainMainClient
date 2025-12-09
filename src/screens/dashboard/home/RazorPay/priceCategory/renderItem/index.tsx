import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles';
import appColors from '@theme/appColors';
import {itemType} from './types';
import {useValues} from '../../../../../../../App';

export default function RenderItem({
  selectedCategory,
  setCategory,
  item,
  index,
  flatListRef,
}: itemType) {
  const {isDark,t} = useValues();
  // console.log("======== selected =============")
  // console.log(item)

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({index:index, animated: true});
  };

   

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        setCategory(item)
        scrollToIndex(index)
      }}
      style={[
        styles.textContainer,
        {
          backgroundColor:
          selectedCategory === item
              ? appColors.selectedCategory
              : isDark
              ? appColors.darkTheme
              : appColors.boxBg,
        },
      ]}>
      <Text
        style={[
          styles.textStyle,
          {
            color:
            selectedCategory === item
                ? appColors.primary
                : appColors.lightText,
          },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
}
