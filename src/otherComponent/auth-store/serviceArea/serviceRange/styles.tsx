import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  innerContainer: {
    borderColor: appColors.border,
    borderWidth: 1,
    flexDirection: 'row',
    height: windowHeight(7),
    marginTop: windowHeight(2),
    borderRadius: windowWidth(2),
    alignItems: 'center',
    width: windowWidth(80),
  },
  text: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT3HALF,
  },
  title: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight(7),
    width: windowWidth(17),
  },
  containerStyle: {
    justifyContent: 'center',
    height: windowWidth(14),
    paddingHorizontal: windowWidth(16),
    backgroundColor: appColors.boxBg,
  },
});
