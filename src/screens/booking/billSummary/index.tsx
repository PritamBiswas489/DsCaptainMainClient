import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {billBackground} from '@utils/images';
import {BillRow} from '@otherComponent/index';
import { useValues } from '../../../../App';
import appColors from '@theme/appColors';
import {GlobalStyle} from '@style/styles';

export default function BillSummary() {
  const {t} = useValues()
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{t('billSummary.title')}</Text>
      <View>
        <ImageBackground
          resizeMode={'stretch'}
          source={billBackground}
          style={[styles.imageStyle]}>
          <BillRow title="billSummary.serviemenacharge" price={12} />
          <BillRow title="billSummary.totalServiceMan" price={24} />
          <BillRow
            title="billSummary.totalTax"
            price={12}
            showPlus={true}
            color={appColors.success}
          />
          <BillRow
            title="billSummary.platformFess"
            price={15}
            color={appColors.success}
            showPlus={true}
          />
          <View style={[GlobalStyle.horizontalLine, styles.horizontal]}></View>

          <BillRow
            title="billSummary.subTotal"
            price={33.03}
            color={appColors.primary}
            titleStyle={styles.title}
            priceStyle={styles.priceStyle}
          />
          <BillRow
            title="ongoingBooking.extraServiceCharge"
            price={40.04}
            color={appColors.primary}
            titleStyle={styles.title}
          />
          <View style={[GlobalStyle.horizontalLine, styles.horizontal]}></View>
          <BillRow
            title="ongoingBooking.payableAmount"
            price={73.07}
            color={appColors.primary}
            titleStyle={styles.title}
            priceStyle={styles.priceStyle}
          />
        </ImageBackground>
      </View>
    </View>
  );
}
