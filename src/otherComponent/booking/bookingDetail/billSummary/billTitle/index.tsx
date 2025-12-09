import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../../App';

export default function BillTitle({title}: {title?: string}) {
  const {isDark,t} = useValues();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.white,
          borderTopColor: isDark ? appColors.darkBorder : appColors.border,
          padding: isDark ? null : windowWidth(4),
        },
      ]}>
      <Text
        style={[
          styles.text,
          {color: isDark ? appColors.white : appColors.darkText},
        ]}>
        {title ? title : t('billSummary.title')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(2),
    backgroundColor: appColors.white,
    borderTopColor: appColors.border,
    borderTopWidth: 1,
    paddingHorizontal: windowWidth(5),
    paddingTop: windowHeight(2),
  },
  text: {
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4HALF,
    color: appColors.darkText,
  },
});
