import {View, Text} from 'react-native';
import React from 'react';
import {Commission} from '@utils/icons';
import {styles} from './styles';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '../../../../../../../App';
import appColors from '@theme/appColors';

export default function CommissionSection() {
  const {isDark,t} = useValues();
  return (
    <View>
      <View
        style={[
          styles.row,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg},
        ]}>
        <View style={styles.rowContainer}>
          <Commission height={'22'} />
          <Text style={[styles.textStyle, {marginHorizontal: windowWidth(2)}]}>
            {t('30% commission')}
          </Text>
        </View>
        <Text style={[styles.textStyle, {fontSize: windowWidth(3.9)}]}>
          {t('addNewService.percentage')}
        </Text>
      </View>
      <Text style={styles.notes}>
        {t('subscription.note')} : <Text>{t('addNewService.note')}</Text>
      </Text>
    </View>
  );
}
