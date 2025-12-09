import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import appColors from '@theme/appColors';
import { itemType } from './types';
import { useValues } from '../../../../../App';
import { formatNumberProcessing } from '@src/config/utility';
import { CountObjInterface } from '@src/interfaces/countObjInterface';
export default function RenderItem({
  selectedCategory,
  setCategory,
  item,
  index,
  flatListRef,
  countobj
}: itemType) {
  const { isDark, t } = useValues();

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ index: index, animated: true });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        setCategory(item.value)
        scrollToIndex(index)
      }}
      style={[
        styles.textContainer,
        {
          backgroundColor:
            selectedCategory === item.value
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
              selectedCategory === item.value
                ? appColors.primary
                : appColors.lightText,
          },
        ]}>
        {t(item.label)}
      </Text>
      
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{formatNumberProcessing(countobj[item.value as keyof CountObjInterface])}</Text>
      </View>
    </TouchableOpacity>
  );
}
