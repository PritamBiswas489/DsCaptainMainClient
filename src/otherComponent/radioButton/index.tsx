import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {radioType} from './types';
import {fontSizes} from '@theme/appConstant';
import {useValues} from '../../../App';

export default function RadioButton({
  title,
  setKey,
  selectCategory,
  currentKey,
  radioContainerStyle,
}: radioType) {
  const {isDark,t} = useValues();

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setKey(selectCategory)}
        style={[styles.rowContainer, radioContainerStyle]}>
        <View
          style={[
            styles.radioBtn,
            {
              borderColor:
                currentKey === selectCategory
                  ? appColors.primary
                  : isDark
                  ? appColors.darkBorder
                  : appColors.border,
            },
          ]}>
          <View
            style={[
              styles.innerCircle,
              {
                backgroundColor:
                  currentKey === selectCategory
                    ? appColors.primary
                    : isDark
                    ? appColors.darkCard
                    : appColors.white,
              },
            ]}
          />
        </View>
        <Text
          style={[
            GlobalStyle.title,
            {
              color:
                currentKey === selectCategory
                  ? isDark
                    ? appColors.white
                    : appColors.black
                  : appColors.lightText,
              fontFamily:
                currentKey === selectCategory
                  ? appFonts.NunitoMedium
                  : appFonts.NunitoRegular,
              fontSize: fontSizes.FONT4,
            },
          ]}>
          {t(title)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
