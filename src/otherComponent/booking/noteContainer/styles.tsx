import appColors from '@theme/appColors';
import {fontSizes, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
    marginTop: windowWidth(1),
    marginHorizontal: windowWidth(3),
  },
  note: {
    color: appColors.lightText,
  },
  buttonStyle: {
    width: windowWidth(38),
    height: windowWidth(12),
  },
  buttonTextStyle: {
    color: appColors.white,
    fontFamily: appFonts.NunitoBold,
  },
  button1TextStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
  },
  buttonContainerStyle: {
    height: windowWidth(12),
    width: windowWidth(38),
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
