import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4HALF,
    marginTop: windowWidth(5),
    marginBottom: windowHeight(0.3),
  },
  inputContainer: {
    backgroundColor: appColors.textInput,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: windowWidth(5),
    borderRadius: windowHeight(1),
    marginTop: windowHeight(1),
  },
  inputStyle: {
    height: windowWidth(14),
    paddingHorizontal: windowWidth(3.5),
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT4HALF,
    width: '96%',
    marginTop: 2,
    color: appColors.darkText,
  },

  dropDownContainerStyle: {
    marginHorizontal: 0,
    width: windowWidth(88),
  },

  buttonStyle: {
    paddingHorizontal: windowHeight(6),
    height: windowWidth(12),
    right: windowWidth(2),
    borderRadius: windowWidth(2),
  },
  buttonTextStyle: {
    color: appColors.white,
  },
  button1TextStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    paddingHorizontal: windowWidth(4.6),
    borderRadius: windowWidth(2),
  },
  buttonContainerStyle: {
    height: windowWidth(12),
    right: windowWidth(2),
    borderRadius: windowWidth(2),
  },
});
