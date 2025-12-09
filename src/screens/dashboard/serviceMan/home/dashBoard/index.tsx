import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {dashBoardData} from './data';
import {GlobalStyle} from '@style/styles';
import {useValues} from '../../../../../../App';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import appColors from '@theme/appColors';

type navigationProp = NativeStackNavigationProp<RootStackParamList>;

export function ServiceMenDashBoard() {
  const {currSymbol, currValue, isDark,t} = useValues();
  const {navigate} = useNavigation<navigationProp>();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
          borderColor: isDark ? appColors.darkBorder : appColors.border,
        },
      ]}>
      {dashBoardData.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigate(item.gotoScreen)}>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: isDark ? appColors.darkText : appColors.white,
                borderColor: isDark ? appColors.darkBorder : appColors.border,
              },
            ]}>
            {isDark ? item.darkIcon : item.icon}
          </View>
          <View style={styles.rowView}>
            <View>
              <Text
                style={[
                  styles.textStyle,
                  {color: isDark ? appColors.white : appColors.lightText},
                ]}>
                {t(item.name)}
              </Text>
              {item.totalService && (
                <Text style={styles.totalService}>{item.totalService}</Text>
              )}
              {item.price && (
                <Text style={styles.totalService}>
                  {currSymbol}
                  {(currValue * item.price).toFixed(2)}
                </Text>
              )}
            </View>
            {index === dashBoardData.length - 1 ? (
              <View style={styles.vertical} />
            ) : (
              <View
                style={[
                  GlobalStyle.verticalLine,
                  styles.verticalLine,
                  {
                    borderColor: isDark
                      ? appColors.darkSubText
                      : appColors.border,
                  },
                ]}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
