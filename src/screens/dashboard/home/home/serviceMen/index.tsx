import {View, Text} from 'react-native';
import React from 'react';
import HeadingRow from '@commonComponents/headingRow';
import BookingList from '@screens/booking/allBooking/bookingList';
import {TodayData} from '../../data';
import {ReviewsSection} from '@screens/dashboard/serviceMan/home';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type navigationProp = NativeStackNavigationProp<RootStackParamList>;

export function ServiceMen() {
  const {navigate} = useNavigation<navigationProp>();
  return (
    <View>
      <HeadingRow
        title={'serviceMenLogin.todayWork'}
        content={'home.viewAll'}
        gotoScreen={() => navigate('Booking')}
      />
      <BookingList containerStyle={{marginVertical: 0}} data={TodayData} />
      <ReviewsSection />
    </View>
  );
}
