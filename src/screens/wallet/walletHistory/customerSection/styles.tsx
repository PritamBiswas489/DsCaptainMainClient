import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(4),
  },
  mainContainer: {
    backgroundColor: appColors.ratingBg,
    borderRadius: windowHeight(3),
    paddingVertical: windowWidth(1.7),
    paddingHorizontal: windowWidth(3),
  },
  walletId: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoMedium,
    fontSize: windowWidth(3.7),
  },
  price: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT5,
  },
  mainView: {
    flexDirection: 'row',
  },
  imageStyle: {
    height: windowWidth(10),
    width: windowWidth(10),
    resizeMode: 'cover',
  },
  textContainer: {
    marginHorizontal: windowWidth(2),
  },
  verticalLine: {
    borderColor: appColors.border,
    borderWidth: 0.3,
  },
  textStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT3HALF,
  },
  name: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
  },
});
