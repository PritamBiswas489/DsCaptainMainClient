import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {billBackground, darkbillBackground} from '@utils/images';
import {BillRow} from '@otherComponent/index';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../../../App';

export function HistoryList() {
  const {isDark} = useValues();
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={'stretch'}
        source={isDark ? darkbillBackground : billBackground}
        style={styles.imageStyle}>
        <BillRow title="commissionHistory.receivedAmount" price={12} />

        <BillRow
          title="commissionHistory.adminCommission"
          price={10.17}
          color={appColors.error}
        />
        <BillRow
          title="commissionHistory.receivedAmount"
          price={15.23}
          color={appColors.error}
        />
        <BillRow
          title="commissionHistory.receivedAmount"
          price={15.23}
          color={appColors.success}
        />
      </ImageBackground>
    </View>
  );
}
