import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {currency, dataType} from './data/data';
import {windowWidth} from '@theme/appConstant';
import {GlobalStyle} from '@style/styles';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../../App';

export function SelectCurrency({
  title,
  getVal,
  selectedCurrency,
}: {
  title: string;
  getVal: (item: dataType) => void;
  selectedCurrency: string;
}) {
  const {isDark, t} = useValues();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.darkText : appColors.boxBg,
          borderColor: appColors.border,
          borderWidth: isDark ? 0.2 : 1,
        },
      ]}>
      <Text
        style={[
          styles.name,
          {marginHorizontal: 0, marginBottom: windowWidth(1)},
        ]}>
        {t(title)}
      </Text>
      <FlatList
        data={currency}
        renderItem={({index, item}) => (
          <TouchableOpacity
            onPress={() => getVal(item)}
            activeOpacity={0.9}
            style={[
              styles.mainContainer,
              {
                backgroundColor: isDark ? appColors.darkCard : appColors.white,
                borderColor: isDark ? appColors.darkBorder : appColors.border,
              },
            ]}>
            <View style={styles.row}>
              <Image source={item.icon} style={styles.imageStyle} />
              <Text
                style={[
                  styles.title,
                  {
                    color:
                      selectedCurrency == item.key
                        ? appColors.primary
                        : appColors.lightText,
                  },
                ]}>
                {t(item.name)}
              </Text>
            </View>
            {selectedCurrency == item.key ? (
              <View style={[GlobalStyle.activeRadioButton, styles.radioBtn]}>
                <View style={GlobalStyle.innerCircle}></View>
              </View>
            ) : (
              <View
                style={[
                  GlobalStyle.radioButton,
                  styles.radioBtn,
                  {
                    backgroundColor: isDark
                      ? appColors.darkCard
                      : appColors.white,
                    borderColor: isDark
                      ? appColors.darkBorder
                      : appColors.border,
                  },
                ]}></View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
