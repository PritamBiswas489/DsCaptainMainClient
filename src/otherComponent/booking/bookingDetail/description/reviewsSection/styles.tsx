import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  reviewTextStyle: {
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
  },
  container: {
    paddingHorizontal: windowWidth(4),
  },
});
