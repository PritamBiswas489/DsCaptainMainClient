import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: appColors.boxBg,
    flex: 1,
    marginTop: windowHeight(1),
    paddingBottom: windowHeight(1.6),
    borderBottomColor: appColors.border,
    borderBottomWidth: 1,
  },
  innerContainer: {
    paddingTop: windowHeight(2),
    borderColor: appColors.border,
    borderWidth: 1.4,
    borderTopLeftRadius: windowHeight(2.4),
    borderTopRightRadius: windowHeight(2.4),
    borderBottomWidth: 0,
    paddingBottom: windowHeight(1),
  },
  buttonStyle: {
    width: windowWidth(40),
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
    width: windowWidth(40),
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: windowWidth(2),
  },
});
