import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageStyle: {
    height: windowHeight(27),
    width: windowWidth(100),
    resizeMode: 'contain',
    padding: windowHeight(2),
    marginTop: windowHeight(4),
  },
  titleStyle: {
    fontFamily: appFonts.NunitoSemiBold,
    color: appColors.darkText,
  },
  priceStyle: {
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
  },
  headerContainer: {
    paddingHorizontal: windowWidth(4),
  },
});
