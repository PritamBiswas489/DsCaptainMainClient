import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  containerStyle: {
    right: windowWidth(2),
  },
  serviceImage: {
    height: windowHeight(7),
    width: windowWidth(15),
    borderRadius: windowWidth(1),
    resizeMode: 'stretch',
    marginHorizontal: windowWidth(4),
  },
  textStyle: {
    marginTop: windowHeight(0.7),
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
  price: {
    fontSize: fontSizes.FONT5,
    color: appColors.primary,
    fontFamily: appFonts.NunitoBold,
    marginTop: windowWidth(1),
  },
  bookId: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    margin: windowWidth(1),
  },
  packageView: {
    borderColor: appColors.lightText,
    borderRadius: windowWidth(4),
    borderWidth: 1.3,
    paddingHorizontal: windowWidth(2),
    paddingVertical: windowHeight(0.4),
    marginHorizontal: windowWidth(0.8),
  },
  text: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT3HALF,
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    paddingRight: windowWidth(4),
    borderTopLeftRadius: windowWidth(4),
    borderBottomLeftRadius: windowWidth(4),
    height: windowWidth(7),
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: windowWidth(3),
    paddingBottom: windowWidth(0.3),
  },
  status: {
    color: appColors.white,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
  },
});
