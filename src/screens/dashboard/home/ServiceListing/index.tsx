import {View, FlatList, Alert} from 'react-native';
import React from 'react';
import RenderItem from './renderItem';
import {styles} from './styles';
import {dataType} from './data/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { ActivityIndicator } from 'react-native';
import HomeNoFataFound from '@src/commonComponents/homeNoDataFound';
import { useValues } from '../../../../../App';
export function ServiceListing({
  data,
  setData,
  isHorizontal,
  providerImageStyle,
  itemSeparator,
  contentContainerStyle,
}: dataType) {

  const {
    selected:Services,
    loading:servicesLoader
  } = useSelector((state: RootState) => state['servicesData'])


  const toggleSwitch = (index: number) => {
    const newServices = [...data];
    newServices[index].status = !newServices[index].status;
    setData(newServices);
  };

  const {t} = useValues()

  return (
    <View>
      {servicesLoader && <ActivityIndicator style={{marginTop:10}}/> }  
     {!servicesLoader && Services.services.length > 0 && <FlatList
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
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={[styles.itemSeparator, itemSeparator]}></View>
        )}
      />} 
      {!servicesLoader && Services.services.length === 0 && <HomeNoFataFound message={t('newDeveloper.Noservicesfoundforthissubcategory')}/>}
    </View>
  );
}
