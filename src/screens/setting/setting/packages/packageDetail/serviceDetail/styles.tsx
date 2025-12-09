import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  id: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoBold,
    fontSize: windowWidth(3.8),
  },
  container: {
    marginHorizontal: windowWidth(4),
  },
  mainContainer: {
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowHeight(1.8),
    paddingHorizontal: windowWidth(3),
    paddingVertical: windowWidth(3),
    paddingBottom: windowWidth(5),
  },
  imageStyle: {
    height: windowHeight(9),
    width: windowWidth(19),
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
  },
  textContainer: {
    marginHorizontal: windowWidth(4),
    marginTop: windowWidth(1),
  },
  price: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
    marginTop: windowHeight(1.3),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowWidth(4),
    backgroundColor: appColors.boxBg,
    paddingVertical: windowWidth(3),
    paddingHorizontal: windowWidth(5),
    borderRadius: windowWidth(2),
  },
  name: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4HALF,
    marginVertical: 2,
  },
  titleStyle: {
    marginTop: windowWidth(1),
  },
  rate: {
    marginHorizontal: windowWidth(1),
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    bottom: 2,
  },
  time: {
    color: appColors.success,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    bottom: 2,
  },
  textStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  separator: {
    paddingBottom: windowHeight(3),
  },
});
