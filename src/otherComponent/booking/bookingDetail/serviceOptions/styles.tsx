import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bottom: {
    backgroundColor: appColors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowWidth(22),
    elevation: windowHeight(5),
    borderColor: appColors.border,
    borderTopWidth: 1,
  },
  buttonStyle: {
    width: windowHeight(20),
    height: windowWidth(12),
    left: windowWidth(0),
    bottom: windowWidth(2),
  },
  buttonTextStyle: {
    color: appColors.white,
    fontFamily: appFonts.NunitoBold,
  },
  button1TextStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    paddingHorizontal: windowWidth(3),
  },
  buttonContainerStyle: {
    height: windowWidth(12),
    left: windowWidth(0),
    bottom: windowWidth(2),
    width: windowHeight(20),
  },
});
