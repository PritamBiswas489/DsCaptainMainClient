import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { windowHeight, windowWidth } from '@theme/appConstant';
import { BookingType } from '@screens/booking/data/types';
import { useValues } from '../../../../../../App';
import appColors from '@theme/appColors';
 
import { PaymentDetailInterface } from '@src/interfaces/paymentInterface';
const statusColor: Record<'pending' | 'success' | 'failed', string> = {
  pending: appColors.pending,
  success: appColors.accepted,
  failed: appColors.error,
};
function isValidBookingStatus(status: string): status is keyof typeof statusColor {
  return status in statusColor;
}
export default function LocationView({ item }: { item: PaymentDetailInterface }) {
  let backgroundColor = appColors.primary;

  if (isValidBookingStatus(item.payment_status)) {
    backgroundColor = statusColor[item.payment_status];
  }
  const { isDark, t } = useValues();
  return (
    <>
      <View style={styles.dateContainer}>

       




        <View
          style={[
            styles.innerContainer,
            {
               marginHorizontal:windowWidth(1.2),
              backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}>
          <Text style={styles.title}>{t('newDeveloper.PaymentStatus')}</Text>
          <Text style={[styles.text, { color: backgroundColor }]}>{item.payment_status}</Text>
        </View>


        <View
        style={[
          styles.innerContainer,
          {
            width: windowWidth(50),
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <Text style={styles.title}>{t('newDeveloper.PaymentId')}</Text>
        <View style={styles.row}>
          <Text
            style={[
              styles.textStyle,
              { color: appColors.primary },
              
            ]}>
             {item.razorpay_payment_id}
          </Text>
           
        </View>
      </View>


      </View>
      
      
    </>
  );
}
