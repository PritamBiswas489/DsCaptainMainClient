import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 20,
    paddingBottom: windowHeight(4),
  },
  providerBg: {
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowHeight(1),
    paddingHorizontal: windowWidth(3),
    paddingTop: windowWidth(3),
    paddingBottom: windowHeight(2),
  },
  providerImg: {
    height: windowHeight(11),
    width: windowWidth(30),
    resizeMode: 'stretch',
  },
  providerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: windowWidth(1),
  },
  textStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginTop: windowHeight(1.3),
  },
  row: {
    flexDirection: 'row',
  },
  providerRating: {
    fontFamily: appFonts.NunitoBold,
    marginHorizontal: 3,
    fontSize: windowWidth(3.8),
    color: appColors.darkText,
  },
  itemSeperator: {
    marginHorizontal: 10,
  },
  totalBooked: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: windowWidth(3.3),
  },
  rate: {
    fontFamily: appFonts.NunitoMedium,
    color: appColors.darkText,
    fontSize: fontSizes.FONT3HALF,
    bottom: windowHeight(0.3),
    left: windowWidth(0.5),
  },
  categoryView: {
    backgroundColor: appColors.boxBg,
    marginTop: windowWidth(4),
    paddingVertical: windowWidth(1),
    paddingHorizontal: windowWidth(2),
    borderRadius: windowWidth(2),
    paddingBottom: windowWidth(3),
  },
});
