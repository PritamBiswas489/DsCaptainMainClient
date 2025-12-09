import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  titleStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4HALF,
    marginHorizontal: windowWidth(4),
    marginBottom: windowHeight(2),
  },
  imageStyle: {
    height: windowHeight(24),
    width: windowWidth(100),
    resizeMode: 'contain',
    paddingHorizontal: windowWidth(4),
    paddingVertical: windowWidth(6),
  },
  priceStyle: {
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
  },
  horizontal: {
    marginTop: windowWidth(1),
    marginBottom: windowWidth(6),
  },
  title: {
    fontFamily: appFonts.NunitoSemiBold,
    color: appColors.darkText,
  },
  container: {
    marginTop: windowHeight(2),
  },
});
