import {View, FlatList, Alert} from 'react-native';
import React from 'react';
import RenderItem from './renderItem';
import {styles} from './styles';
import {dataType} from './data/types';

export function PopularService({
  data,
  setData,
  isHorizontal,
  providerImageStyle,
  itemSeparator,
  contentContainerStyle,
}: dataType) {

  

  const toggleSwitch = (index: number) => {
    const newServices = [...data];
    newServices[index].status = !newServices[index].status;
    setData(newServices);
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={[styles.containerStyle, contentContainerStyle]}
        data={data}
        horizontal={isHorizontal ? isHorizontal : false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <RenderItem
            item={item}
            index={index}
            toggleSwitch={toggleSwitch}
            providerImageStyle={providerImageStyle}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={[styles.itemSeparator, itemSeparator]}></View>
        )}
      />
    </View>
  );
}
