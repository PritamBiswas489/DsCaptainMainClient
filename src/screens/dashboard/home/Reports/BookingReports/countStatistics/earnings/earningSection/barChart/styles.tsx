import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  topLabelText: {
    color: appColors.darkText,
    marginBottom: 6,
    width: windowWidth(8),
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: appFonts.NunitoMedium,
  },
  textStyle: {
    fontFamily: appFonts.NunitoMedium,
    color: appColors.darkText,
    fontSize: fontSizes.FONT3HALF,
  },
  labelTextStyle: {
    color: 'red',
  },
  container: {
    right: windowWidth(5),
    top: windowHeight(-2),
  },
});
