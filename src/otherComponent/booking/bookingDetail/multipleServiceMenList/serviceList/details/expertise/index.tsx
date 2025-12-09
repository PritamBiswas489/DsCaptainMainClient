import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import { useValues } from '../../../../../../../../App';

export default function Expertise({title}: {title: string}) {
  const {t} = useValues()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t(title)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(2),
    marginVertical: windowHeight(2),
    backgroundColor: appColors.boxBg,
    width: windowWidth(26),
    paddingHorizontal: windowHeight(1.6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth(2),
    marginRight: windowWidth(5),
    paddingVertical: windowWidth(2.5),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(0.2),
  },
});
