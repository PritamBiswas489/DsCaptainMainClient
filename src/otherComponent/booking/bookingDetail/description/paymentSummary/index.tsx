import {View, ImageBackground, Text} from 'react-native';
import React from 'react';
import {darkbillBackground, billBackground} from '@utils/images';
import {styles} from './styles';
import {BillRow} from '../../billSummary/billRow';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export function PaymentSummary() {
  const {isDark,t} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <Text
        style={[
          styles.textStyle,
          {color: isDark ? appColors.white : appColors.darkText},
        ]}>
        {t('booking.paymentDetail')}
      </Text>
      <ImageBackground
        resizeMode={'stretch'}
        source={isDark ? darkbillBackground : billBackground}
        style={styles.imageStyle}>
        <BillRow
          title="wallet.paymentID"
          subTitle={'#152'}
          subTitleStyle={{
            color: isDark ? appColors.white : appColors.darkText,
            fontFamily: appFonts.NunitoBold,
          }}
        />
        <BillRow
          title="wallet.methodType"
          subTitle={t('billSummary.wallet')}
          subTitleStyle={{
            fontFamily: appFonts.NunitoBold,
            color: isDark ? appColors.white : appColors.darkText,
          }}
        />
        <BillRow
          title="bookingDetail.status"
          subTitle={t('wallet.paid')}
          subTitleStyle={styles.statusStyle}
        />
      </ImageBackground>
    </View>
  );
}
