import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(2),
    marginTop: windowWidth(6),
  },
  titleStyle: {
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
    color: appColors.darkText,
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    borderWidth: 1,
    marginTop: windowWidth(3),
    paddingVertical: windowWidth(3),
    borderRadius: windowHeight(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: windowWidth(4),
  },
  imageStyle: {
    height: windowHeight(4),
    width: windowWidth(7.3),
    resizeMode: 'contain',
  },
  imageContainer: {
    height: windowHeight(6),
    width: windowWidth(13),
    backgroundColor: appColors.serviceBG,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth(3),
  },
  row: {
    flexDirection: 'row',
  },
  textContainer: {
    marginHorizontal: windowWidth(4),
    marginTop: windowWidth(1),
  },
  price: {
    width: windowWidth(19),
    textAlign: 'right',
    lineHeight: windowHeight(3),
    color: appColors.primary,
    fontFamily: appFonts.NunitoSemiBold,
  },
  textStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
  content: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT4,
    marginTop: windowWidth(0.6),
  },
});
