import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: windowHeight(7),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(3),
    borderRadius: windowHeight(8),
    marginHorizontal: windowHeight(3),
  },
  btnText: {
    color: appColors.white,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT5,
  },
  accountText: {
    marginTop: windowHeight(1.6),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  accountStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4HALF,
  },
  registerText: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
    marginHorizontal: windowWidth(0.6),
    marginTop: windowHeight(0.2),
  },
});
