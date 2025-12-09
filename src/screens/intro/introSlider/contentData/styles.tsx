import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowWidth(5),
  },
  title: {
    textTransform: 'uppercase',
    color: appColors.primary,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4HALF,
  },
  buttonStyle: {
    borderColor: appColors.primary,
    borderWidth: 1,
    width: windowWidth(45),
  },
  buttonText: {
    color: appColors.primary,
    fontSize: windowWidth(3.6),
  },
  button1TextStyle: {
    fontSize: windowWidth(3.6),
  },
  text: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  signUp: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
  },
  row: {
    flexDirection: 'row',
    marginTop: windowWidth(4),
  },
  buttonContainer: {
    width: windowWidth(45),
  },
});
