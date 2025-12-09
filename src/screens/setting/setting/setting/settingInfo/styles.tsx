import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageStyle: {
    height: windowHeight(12),
    width: windowHeight(9.3),
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
  },
  textView: {
    margin: windowWidth(2),
  },
  container: {
    marginHorizontal: windowWidth(7),
  },
  name: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4,
  },
  email: {
    color: appColors.lightText,
    marginHorizontal: windowWidth(1.5),
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
  },
  imageView: {
    height: windowHeight(10.5),
    width: windowWidth(21),
    bottom: windowHeight(3),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth(3),
    elevation: 0.5,
  },
});
