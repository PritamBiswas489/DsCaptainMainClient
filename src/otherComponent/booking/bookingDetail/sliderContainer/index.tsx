import {View, ScrollView, Alert} from 'react-native';
import React from 'react';
import Header from '@commonComponents/header';
import {styles} from './styles';
import {bookingType} from './types';
import {GlobalStyle} from '@style/styles';
import SliderContainer from '@otherComponent/sliderContainer';
import {sliderData} from './data';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { bookingDetailsAction } from '@src/store/redux/booking-details-redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
 

export function BookingDetail({title}: bookingType) {
  const {isDark} = useValues();
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Header 
      showBackArrow={true} 
      title={title} 
      trailIcon1={
        <Icon name='refresh' size={26} color={isDark ? appColors.white : appColors.darkText} />
      }
      onTrailIcon={() =>dispatch(bookingDetailsAction.setData({field:'updateData',data:true}))}
      />
      {/* <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        style={[
          GlobalStyle.mainView,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
        ]}>
        <SliderContainer data={sliderData} />
      </ScrollView> */}
    </View>
  );
}
