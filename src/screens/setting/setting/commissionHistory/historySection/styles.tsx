import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(6),
    borderColor: appColors.border,
    borderWidth: 1,
    paddingVertical: windowWidth(3),
    marginTop: windowHeight(3),
    borderRadius: windowWidth(2),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(4),
  },
  innerView: {
    marginTop: windowWidth(3),
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(2),
    backgroundColor: appColors.boxBg,
    paddingTop: windowWidth(3),
    marginHorizontal: windowWidth(4),
  },
  mainContainer: {
    marginTop: windowHeight(2),
    paddingBottom: windowWidth(1),
  },
  viewMore: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  title: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
  },
});
