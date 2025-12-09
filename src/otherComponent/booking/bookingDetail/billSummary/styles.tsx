import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    height: windowHeight(3),
    backgroundColor: appColors.white,
    marginTop: windowWidth(4),
  },
  imageStyle: {
    height: windowHeight(38),
    width: windowWidth(100),
    resizeMode: 'contain',
    paddingHorizontal: windowHeight(2),
    paddingTop: windowHeight(2),
  },

  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(1),
  },
  billText: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    paddingBottom: windowWidth(5),
  },
  titleStyle: {
    fontFamily: appFonts.NunitoSemiBold,
    color: appColors.darkText,
  },
  priceStyle: {
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
  },
  amountStyle: {
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
    color: appColors.primary,
  },
  price: {
    color: appColors.success,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  minus: {
    color: appColors.error,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    marginVertical: windowWidth(1),
    marginHorizontal: windowWidth(2),
  },
});
