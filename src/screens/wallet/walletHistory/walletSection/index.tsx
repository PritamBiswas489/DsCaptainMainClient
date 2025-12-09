import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {historyType} from '../data/types';
import {walletBg, darkWalletBg} from '@utils/images';
import {styles} from './styles';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../App';

export function WalletSection({item}: {item: historyType}) {
  const {isDark,t} = useValues();
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={'stretch'}
        source={isDark ? darkWalletBg : walletBg}
        style={styles.imageStyle}>
        <View style={styles.row}>
          <Text style={styles.title}>{t('wallet.paymentID')}</Text>
          <Text
            style={[
              styles.content,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {item.paymentId}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>{t('wallet.methodType')}</Text>
          <Text
            style={[
              styles.content,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {t(item.methodType)}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>{t('home.status')}</Text>
          <Text style={[styles.content, {color: appColors.success}]}>
            {t(item.status)}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
