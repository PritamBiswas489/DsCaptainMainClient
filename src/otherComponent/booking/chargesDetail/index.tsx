import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {transaction} from '@utils/images';
import {useValues} from '../../../../App';
import {extraChargeType} from './types';
import appColors from '@theme/appColors';

export default function ChargesDetail({extraCharges}: extraChargeType | any) {
  const {currSymbol, currValue, isDark,t} = useValues();
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.titleStyle,
          {color: isDark ? appColors.white : appColors.darkText},
        ]}>
        {t('addExtraCharges.extraCharges')}
      </Text>
      <View
        style={[
          styles.rowContainer,
          {
            backgroundColor: isDark ? appColors.darkTheme : appColors.white,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image source={transaction} style={styles.imageStyle} />
          </View>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.textStyle,
                {color: isDark ? appColors.white : appColors.darkText},
              ]}>
              {t(extraCharges.name ? extraCharges.name : 'home.acRepair')}
            </Text>
            <Text style={styles.content}>
              {extraCharges.noService ? extraCharges.noService : 2} -
              {t('addExtraCharges.extraService')}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.price}>
            {currSymbol}
            {currValue * extraCharges.amount ? extraCharges.amount : 20.02}{' '}
            {t('addExtraCharges.perService')}
          </Text>
        </View>
      </View>
    </View>
  );
}
