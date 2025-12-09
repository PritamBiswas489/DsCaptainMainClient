import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import SelectPlan from './selectPlan';
import {planTypes} from './types';
import {useValues} from '../../../../../App';

export default function ChoosePlan({duration, setDuration}: planTypes) {
  const {isDark,t} = useValues();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{t('subscription.choosePlan')} :</Text>
        <View style={styles.row}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setDuration(0)}
            style={[
              styles.innerContainer,
              {
                marginHorizontal: windowWidth(3),
                backgroundColor:
                  duration == 0 ? appColors.primary : appColors.lightOrange,
              },
            ]}>
            <Text
              style={[
                styles.content,
                {
                  color: duration == 0 ? appColors.white : appColors.primary,
                },
              ]}>
              {t('subscription.month')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setDuration(1)}
            style={[
              styles.innerContainer,
              {
                paddingHorizontal: windowWidth(4.2),
                backgroundColor:
                  duration == 1 ? appColors.primary : appColors.lightOrange,
              },
            ]}>
            <Text
              style={[
                styles.content,
                {
                  color: duration == 1 ? appColors.white : appColors.primary,
                },
              ]}>
              {t('subscription.year')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SelectPlan duration={duration} />
    </View>
  );
}
