import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: windowWidth(5),
    flexDirection: 'row',
  },
  buttonText: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
  gradientContainer: {
    height: windowHeight(7),
    borderRadius: windowHeight(8),
    marginHorizontal: windowWidth(2),
    paddingVertical: windowWidth(1),
    paddingHorizontal: windowWidth(8),
    alignItems: 'center',
    justifyContent: 'center',
    right: windowWidth(1),
  },
  buttonStyle: {
    color: appColors.white,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT4,
  },
});
