import {View, Text, Image} from 'react-native';
import React from 'react';
import {historyType} from '../data/types';
import {styles} from './styles';
import {useValues} from '../../../../../App';
import {windowWidth} from '@theme/appConstant';
import {GlobalStyle} from '@style/styles';
import appColors from '@theme/appColors';

export function CustomerSection({item}: {item: historyType}) {
  const {currSymbol, currValue, isDark,t} = useValues();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Text style={styles.walletId}>{item.walletId}</Text>
        </View>
        <Text
          style={[
            styles.price,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {' '}
          {currSymbol}
          {currValue * item.price}
        </Text>
      </View>
      <View style={[styles.container, {marginTop: windowWidth(4)}]}>
        <View style={styles.mainView}>
          <Image source={item.image} style={styles.imageStyle} />
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>{t('wallet.customer')}</Text>
            <Text
              style={[
                styles.name,
                {
                  color: isDark ? appColors.white : appColors.darkText,
                },
              ]}>
              {t(item.customerName)}
            </Text>
          </View>
        </View>
        <View style={styles.verticalLine} />
        <View>
          <Text style={[styles.textStyle, {textAlign: 'right'}]}>
            {t('wallet.service')}
          </Text>
          <Text
            style={[
              styles.name,
              {
                color: isDark ? appColors.white : appColors.darkText,
              },
            ]}>
            {t(item.serviceName)}
          </Text>
        </View>
      </View>

      <View style={GlobalStyle.horizontalLine} />
    </>
  );
}
