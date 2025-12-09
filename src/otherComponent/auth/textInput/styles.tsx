import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const textInputStyle = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(5.4),
    marginTop: windowHeight(2),
  },
  inputView: {
    height: windowHeight(6),
    backgroundColor: appColors.textInput,
    borderRadius: windowHeight(1),
    paddingHorizontal: windowWidth(4.5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    marginHorizontal: windowWidth(2),
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    width: windowWidth(75),
    color: appColors.darkText,
    marginTop: windowWidth(1),
  },
  error: {
    color: appColors.error,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginTop: 0.7,
  },
});
