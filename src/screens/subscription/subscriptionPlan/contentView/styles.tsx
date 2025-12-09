import appColors from '@theme/appColors';
import {fontSizes, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
    textAlign: 'center',
    marginTop: windowWidth(3),
    marginHorizontal: windowWidth(3),
  },
  dashLine: {
    marginHorizontal: windowWidth(0),
  },
});
