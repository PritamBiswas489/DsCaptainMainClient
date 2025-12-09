import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '../theme/appColors';
import {MyTabBarProps} from './tabBarTypes';
import {tabStyle} from './styles';
import {Plus} from '@utils/icons';
import {useValues} from '../../App';

export const MyTabBar: React.FC<MyTabBarProps> = ({
  tabData,
  onPress,
  selected,
}) => {
  const {isDark, t} = useValues();

  return (
    <View
      style={[
        tabStyle.tabContainer,
        {backgroundColor: isDark ? appColors.darkCardBg : appColors.white},
      ]}>
      <View style={tabStyle.row}>
        {tabData.map((item: any, key: number) => {
          return (
            <TouchableOpacity
              key={key}
              activeOpacity={0.9}
              onPress={() => onPress(key)}
              style={tabStyle.cartView}>
              {key === 2 ? (
                <LinearGradient
                  colors={[appColors.gradientBtn, appColors.primary]}
                  style={tabStyle.circleContainer}
                  start={{x: 1, y: 0.2}}
                  end={{x: 1, y: 1}}>
                  <View>
                    <Plus height={'25'} width={'25'} />
                  </View>
                </LinearGradient>
              ) : selected == key ? (
                item.activeIcon
              ) : (
                item.tabBarIcon
              )}
              <Text
                style={[
                  tabStyle.label,
                  {
                    color:
                      selected == key ? appColors.primary : appColors.lightText,
                  },
                ]}>
                {key === 2 ? null : t(item.name)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
