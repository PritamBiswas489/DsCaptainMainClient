import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowHeight(1.8),
    paddingHorizontal: windowWidth(2),
    paddingVertical: windowHeight(1),
  },
  providerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(3),
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    height: windowHeight(7),
    width: windowWidth(12),
    resizeMode: 'contain',
  },
  containerView: {
    marginHorizontal: 8,
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
    fontSize: windowWidth(3.9),
  },
  mainContainer: {
    flexDirection: 'row',
    marginTop: windowHeight(2),
  },
  providerRating: {
    fontFamily: appFonts.NunitoSemiBold,
    marginHorizontal: 3,
    fontSize: windowWidth(3.8),
    color: appColors.darkText,
  },
  containerStyle: {
    marginHorizontal: windowWidth(1),
    marginTop: windowWidth(2),
  },
  rating: {
    marginHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
