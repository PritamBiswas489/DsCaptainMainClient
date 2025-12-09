import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {subscriptionData} from './data/data';
import {useValues} from '../../../../../../App';
import {Arrow} from '@assets/icons/subscription/arrow';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export default function SelectPlan({duration}: {duration: number}) {
  const {currSymbol, currValue, isDark,t} = useValues();
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={subscriptionData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setSelectedPlan(index)}>
            <View
              style={[
                styles.innerContainer,
                {
                  marginTop:
                    selectedPlan === index ? windowWidth(6) : windowHeight(6),
                  backgroundColor:
                    selectedPlan === index
                      ? appColors.selectedPlan
                      : isDark
                      ? appColors.darkTheme
                      : appColors.boxBg,
                  borderColor:
                    selectedPlan === index
                      ? appColors.primary
                      : isDark
                      ? appColors.darkBorder
                      : appColors.border,
                },
              ]}>
              <Text
                style={[
                  styles.price,
                  {
                    color:
                      selectedPlan === index
                        ? appColors.primary
                        : isDark
                        ? appColors.white
                        : appColors.darkText,
                  },
                ]}>
                {' '}
                {currSymbol}
                {currValue * item.price}
              </Text>
              <Text
                style={[
                  styles.textStyle,
                  {
                    color:
                      selectedPlan === index
                        ? appColors.darkText
                        : appColors.lightText,
                  },
                ]}>
                {t(
                  duration === 0
                    ? 'subscription.perMonth'
                    : 'subscription.perYear',
                )}
              </Text>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.title,
                    {
                      color:
                        selectedPlan === index
                          ? appColors.primary
                          : isDark
                          ? appColors.white
                          : appColors.darkText,
                    },
                  ]}>
                  {t('subscription.select')}
                </Text>
                <Arrow
                  color={
                    selectedPlan === index
                      ? appColors.primary
                      : appColors.lightText
                  }
                  width={'20'}
                />
              </View>
            </View>
            <View
              style={[
                styles.containerView,
                {top: selectedPlan === index ? 2 : windowWidth(7)},
              ]}>
              <View
                style={[
                  styles.innerView,
                  {
                    backgroundColor:
                      selectedPlan === index
                        ? appColors.primary
                        : appColors.border,
                  },
                ]}>
                <Text
                  style={[
                    styles.name,
                    {
                      color:
                        selectedPlan === index
                          ? appColors.white
                          : appColors.lightText,
                    },
                  ]}>
                  {t(item.planName)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
      />
    </View>
  );
}
