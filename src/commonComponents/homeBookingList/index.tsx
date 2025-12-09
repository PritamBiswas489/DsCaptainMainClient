import { View, FlatList, TouchableOpacity, Text, Alert, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { styles } from './styles';
import ItemView from './itemView';
import LocationView from './locationView';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { DashLine } from '@commonComponents/dashLIne';
import { ViewStyle } from 'react-native';

import {
  NoteContainer,
  CustomerItems,
  ServiceManItems,
  ServiceItems,
} from '@otherComponent/index';
import { useValues } from '../../../App';
import appColors from '@theme/appColors';
import { BookingListingInterface } from '@src/interfaces/bookingListingInterface';
import { windowWidth } from '@src/theme/appConstant';


type routeProps = NativeStackNavigationProp<RootStackParamList>;

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

export default function HomeBookingList({
  data,
  containerStyle

}: {
  data: BookingListingInterface[],
  containerStyle?: ViewStyle;
}) {

  const { navigate } = useNavigation<routeProps>();
  const { isDark } = useValues();
  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={data}
        horizontal={true}
        keyExtractor={(item)=>item.id}
        showsHorizontalScrollIndicator={true}
        renderItem={({ item }) => (
          <View style={{ marginLeft: 10, width:windowWidth(95) }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                navigate('CompletedBooking', { id: item.id })
              }
              }
              style={[
                styles.cardContainer,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.white,
                  borderColor: isDark ? appColors.darkBorder : appColors.border,
                },
              ]}>
              <View style={styles.serviceContainer}>
                <ServiceItems
                  imageStyle={styles.imageStyle}
                  item={item}

                  priceStyle={{
                    ...styles.priceStyle,
                    color: isDark ? appColors.primary : appColors.darkText,
                  }}
                  textStyle={styles.textStyle}
                />
                <ItemView item={item} />
                {item.serviceAddress && (
                  <>
                    <LocationView item={item} />
                    <View
                      style={[
                        styles.lineView,
                        {
                          borderColor: isDark
                            ? appColors.darkBorder
                            : appColors.border,
                        },
                      ]}
                    />
                  </>
                )}
                <View style={styles.innerContainer}>
                  <CustomerItems item={item} />
                  {item.hasServiceMen && <>
                    <DashLine />
                    <ServiceManItems item={item} />
                  </>}


                </View>

              </View>
            </TouchableOpacity>

          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
       
    </View>
  );
}
