import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: appColors.success,
    width: windowWidth(90),
    height: windowHeight(5),
    borderRadius: windowWidth(4),
    paddingHorizontal: windowWidth(4),
  },
  text: {
    color: appColors.white,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginTop: windowHeight(1),
  },
});
