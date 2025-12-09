import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  reviewsBg: {
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowHeight(1.8),
    paddingHorizontal: windowWidth(2),
    paddingTop: windowHeight(1.3),
    paddingBottom: windowHeight(2.2),
    marginTop: 4,
  },
  providerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth(84.5),
    paddingHorizontal: windowWidth(1),
    paddingTop: windowHeight(1),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    height: windowHeight(6),
    width: windowWidth(14),
    resizeMode: 'contain',
  },
  textContainer: {
    marginHorizontal: 6,
  },
  textStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
  content: {
    top: 4,
    fontFamily: appFonts.NunitoMedium,
    color: appColors.lightText,
    fontSize: windowWidth(3.7),
  },
  ratingView: {
    flexDirection: 'row',
    marginTop: 2,
  },
  providerRating: {
    fontFamily: appFonts.NunitoBold,
    marginHorizontal: 3,
    fontSize: windowWidth(3.8),
    color: appColors.darkText,
  },
  review: {
    marginTop: windowHeight(2.2),
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: windowWidth(3.8),
    marginHorizontal: windowWidth(2),
  },
  horizontalLine: {
    borderColor: appColors.border,
    marginBottom: windowHeight(1.3),
    marginTop: 18,
    borderWidth: 0.3,
    height: 0.8,
    marginHorizontal: 8,
  },
  service: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(3),
    marginTop: windowHeight(2),
  },
  name: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginTop: windowHeight(2),
    width: windowWidth(70),
  },
});
