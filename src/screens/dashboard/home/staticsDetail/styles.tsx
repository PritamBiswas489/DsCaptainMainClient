import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.boxBg,
    paddingBottom: windowHeight(3),
    borderColor: appColors.border,
    borderWidth: 1,
    // marginTop: windowHeight(1),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT5,
    marginTop: windowHeight(2),
  },
  innerContainer: {
    marginHorizontal: windowHeight(2),
  },
  chartContainer: {
    backgroundColor: appColors.white,
    paddingHorizontal: windowWidth(1),
    width: windowWidth(92),
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(2),
    marginTop: windowWidth(4),
  },
});
