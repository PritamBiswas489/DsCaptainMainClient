import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {useValues} from '../../../App';

export default function Disclaimer({content}: {content: string}) {
  const {isDark,t} = useValues();
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.titleStyle,
          {color: isDark ? appColors.white : appColors.darkText},
        ]}>
        {t('billSummary.disclaimer')}
      </Text>
      <Text style={styles.subTitle}>{t(content)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(4.5),
    marginTop: windowHeight(1),
  },
  titleStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT3HALF,
  },
  subTitle: {
    color: appColors.error,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
    marginTop: windowHeight(1),
  },
});
