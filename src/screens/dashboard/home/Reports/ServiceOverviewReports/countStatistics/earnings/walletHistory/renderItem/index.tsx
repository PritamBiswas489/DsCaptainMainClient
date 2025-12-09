import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {walletHistory} from '../data/data';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../../../../../../App';

export default function RenderItem() {
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
              <View style={styles.rowContainer}>
                <Text
                  style={[
                    styles.detail,
                    {color: isDark ? appColors.white : appColors.darkText},
                  ]}>
                  {t(item.detail)}
                </Text>
                <Text style={styles.date}>{t(item.date)}</Text>
              </View>
              <View style={[styles.rowContainer, {marginTop: windowHeight(1)}]}>
                <Text
                  style={[
                    styles.paymentType,
                    {
                      color:
                        t(item.paymentType) == 'Credit'
                          ? appColors.success
                          : appColors.error,
                    },
                  ]}>
                  {t(item.paymentType)}
                </Text>
                <Text
                  style={[
                    styles.price,
                    {color: isDark ? appColors.white : appColors.darkText},
                  ]}>
                  {currSymbol}
                  {(currValue * item.payment).toFixed(2)}
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
