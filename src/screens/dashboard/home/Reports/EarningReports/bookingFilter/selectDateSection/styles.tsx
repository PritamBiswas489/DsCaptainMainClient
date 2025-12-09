import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  dateTime: {
    backgroundColor: appColors.boxBg,
    borderRadius: windowWidth(3),
    marginTop: windowWidth(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(4),
  },
  inputContainer: {
    width: windowWidth(70),
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    height: windowHeight(7),
    color: appColors.darkText,
  },
  error: {
    color: appColors.error,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    margin: windowWidth(1),
  },
});
