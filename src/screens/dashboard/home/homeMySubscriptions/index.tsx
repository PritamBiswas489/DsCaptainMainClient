import {View, FlatList, Alert} from 'react-native';
import React from 'react';
import RenderItem from './renderItem';
import {styles} from './styles';
import {dataType} from './data/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { useValues } from '../../../../../App';
import HomeNoFataFound from '@src/commonComponents/homeNoDataFound';

export function HomeMySubscriptions({
  data,
  setData,
  isHorizontal,
  providerImageStyle,
  itemSeparator,
  contentContainerStyle,
}: dataType) {



  


  const {
    data:MySubscriptionDataHome,
  } = useSelector((state: RootState) => state['mysubscriptionsData'])

   const {t} = useValues()

  const toggleSwitch = (index: number) => {
    const newServices = [...data];
    newServices[index].status = !newServices[index].status;
    setData(newServices);
  };

  return (
    <View>
      {MySubscriptionDataHome.length === 0  && <HomeNoFataFound message={t('newDeveloper.homeNoSubscriptionFound')}/>}
      {MySubscriptionDataHome.length > 0  &&  <FlatList
        contentContainerStyle={[styles.containerStyle, contentContainerStyle]}
        data={MySubscriptionDataHome}
        horizontal={isHorizontal ? isHorizontal : false}
        showsHorizontalScrollIndicator={true}
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
      
    </View>
  );
}
