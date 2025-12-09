import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: windowWidth(6),
  },
  innerContainer: {
    backgroundColor: appColors.ratingBg,
    paddingVertical: windowWidth(6.4),
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: windowHeight(9),
    width: windowHeight(9),
    resizeMode: 'contain',
    borderRadius: windowHeight(10),
    bottom: windowHeight(4),
  },
  innerView: {
    bottom: 18,
  },
  title: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowWidth(1),
  },
  review: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  email: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
  },
});
