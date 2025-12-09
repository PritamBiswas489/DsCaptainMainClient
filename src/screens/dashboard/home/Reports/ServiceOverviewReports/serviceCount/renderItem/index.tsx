import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';

const statusColor: Record<'pending' | 'accepted' | 'ongoing' | 'completed' | 'canceled', string> = {
  pending: appColors.pending,
  accepted: appColors.accepted,
  ongoing: appColors.primary,
  completed: appColors.success,
  canceled: appColors.error,
};

export default function RenderItem() {
  //serviceProviderBookingReview
  const serviceProviderBookingReview = useSelector((state: RootState)=>state['serviceProviderBookingReview'])
   
  const accepted = serviceProviderBookingReview.find(ele=>ele.booking_status === 'accepted')
  const completed = serviceProviderBookingReview.find(ele=>ele.booking_status === 'completed')
  const ongoing = serviceProviderBookingReview.find(ele=>ele.booking_status === 'ongoing')
  const canceled = serviceProviderBookingReview.find(ele=>ele.booking_status === 'canceled')
  const walletHistory: { 
    serviceStatus: keyof   typeof statusColor,
    payment: number | undefined,
  }[] = [
    { 
      serviceStatus: 'accepted',
      payment: accepted?.total,
    },
    { 
      serviceStatus: 'completed',
      payment:completed?.total,
    },
    { 
      serviceStatus: 'ongoing',
      payment: ongoing?.total,
    },
    { 
      serviceStatus: 'canceled',
      payment: canceled?.total,
    },
  ];
  const {currSymbol, currValue, isDark,t} = useValues();
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={walletHistory}
        renderItem={({item}) => (
          <View>
            <View
              style={[
                styles.innerContainer,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.boxBg,
                  borderColor: isDark ? appColors.darkBorder : appColors.border,
                },
              ]}>
               
              <View style={[styles.rowContainer, {marginTop: windowHeight(1)}]}>
                <Text
                  style={[
                    styles.paymentType,
                    {
                      color:
                      statusColor[item.serviceStatus]
                    },
                  ]}>
                  {t(`newDeveloper.${item.serviceStatus}`)}
                </Text>
                <Text
                  style={[
                    styles.price,
                    {color: isDark ? appColors.white : appColors.darkText},
                  ]}>
                  {( item.payment)}
                </Text>
              </View>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
}
