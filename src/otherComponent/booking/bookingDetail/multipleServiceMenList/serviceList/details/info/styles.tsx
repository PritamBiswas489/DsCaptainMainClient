import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(3),
    backgroundColor: appColors.boxBg,
    borderColor: appColors.border,
    borderWidth: 1,
    paddingTop: windowHeight(1),
    borderRadius: windowWidth(3),
    paddingHorizontal: windowHeight(2),
    paddingBottom: windowHeight(2),
  },
  heading: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginVertical: windowWidth(1),
  },
});
