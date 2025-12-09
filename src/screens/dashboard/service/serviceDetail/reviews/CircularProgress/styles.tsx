import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  ratingBg: {
    backgroundColor: appColors.ratingBg,
    borderRadius: windowHeight(1),
    paddingHorizontal: windowHeight(2),
    paddingTop: windowHeight(3),
    paddingBottom: windowHeight(2.5),
    marginTop: 20,
  },
  percentage: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT3HALF,
  },
  starView: {
    flexDirection: 'row',
  },
  progressView: {
    marginBottom: 10,
  },
  separator: {
    marginHorizontal: windowWidth(2),
  },
});
