import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import {GlobalStyle} from '@style/styles';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {useValues} from '../../../../../../../App';
export default function Language({title}: {title: string}) {
  const {t, isDark} = useValues();
  return (
    <View style={styles.row}>
      <View
        style={[
          GlobalStyle.dot,
          styles.dotStyle,
          {backgroundColor: isDark ? appColors.white : appColors.darkText},
        ]}
      />
      <Text
        style={[
          styles.title,
          {color: isDark ? appColors.white : appColors.darkText},
        ]}>
        {t(title)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight(2),
    marginRight: windowWidth(7),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(0.2),
  },
  dotStyle: {
    backgroundColor: appColors.darkText,
    marginTop: 2,
  },
});
