import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(3),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT4HALF,
    marginBottom: windowWidth(4),
  },
  innerContainer: {
    backgroundColor: appColors.boxBg,
    paddingHorizontal: windowHeight(2),
    paddingVertical: windowWidth(3.5),
    borderRadius: windowWidth(3),
    borderColor: appColors.border,
    borderWidth: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  date: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: windowWidth(3.7),
  },
  paymentType: {
    color: appColors.success,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  price: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT4HALF,
  },
  separator: {
    marginVertical: windowHeight(1),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(4),
  },
  rowStyle: {
    marginTop: windowHeight(2),
    marginHorizontal: windowWidth(0),
  },
});
