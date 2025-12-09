import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {packageServices} from './data';
import {useValues} from '../../../../../../../App';
import {Star} from '@utils/icons';
import {Clock} from '@utils/icons';
import {packageServiceType} from './types';
import appColors from '@theme/appColors';

export function ServiceDetailView({data}: {data?: packageServiceType[]}) {
  const {currSymbol, currValue, isDark,t} = useValues();
  return (
    <View style={styles.container}>
      <FlatList
        data={data ? data : packageServices}
        renderItem={({item}) => (
          <View
            style={[
              styles.mainContainer,
              {
                backgroundColor: isDark ? appColors.darkTheme : appColors.white,
                borderColor: isDark ? appColors.darkBorder : appColors.border,
              },
            ]}>
            <View style={styles.rowContainer}>
              <View style={styles.row}>
                <Image source={item.image} style={styles.imageStyle} />
                <View style={styles.textContainer}>
                  {item.packageId && (
                    <Text style={styles.id}>{'#' + item.packageId}</Text>
                  )}
                  <Text
                    style={[
                      styles.name,
                      {color: isDark ? appColors.white : appColors.darkText},
                    ]}>
                    {t(item.serviceName)}
                  </Text>
                  <View style={[styles.row, styles.titleStyle]}>
                    <Star />
                    <Text
                      style={[
                        styles.rate,
                        {
                          color: isDark
                            ? appColors.lightText
                            : appColors.darkText,
                        },
                      ]}>
                      {item.rate.toFixed(1)}
                    </Text>
                  </View>
                  {item.time && (
                    <View style={[styles.row, {marginTop: 5}]}>
                      <Clock />
                      <Text style={styles.time}>
                        {' '}
                        {item.time} {t('common.mins')}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
              {item.price && (
                <Text
                  style={[
                    styles.price,
                    {color: isDark ? appColors.white : appColors.darkText},
                  ]}>
                  {currSymbol}
                  {currValue * item.price}
                </Text>
              )}
            </View>
            <View
              style={[
                styles.serviceView,
                {
                  backgroundColor: isDark
                    ? appColors.darkCard
                    : appColors.boxBg,
                },
              ]}>
              <Text style={styles.textStyle}>
                {t('packages.requiredServiceMen')}
              </Text>
              <Text style={styles.textStyle}>{item.serviceMan}</Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
}
