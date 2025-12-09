import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: windowHeight(2),
  },
  textStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4,
  },
  address: {
    color: appColors.primary,
    textDecorationLine: 'underline',
    fontSize: fontSizes.FONT4,
    fontFamily: appFonts.NunitoSemiBold,
  },
});
