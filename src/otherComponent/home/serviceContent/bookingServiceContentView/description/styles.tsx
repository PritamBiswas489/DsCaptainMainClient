import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  content: {
    fontSize: fontSizes.FONT4,
    top: 4,
    fontFamily: appFonts.NunitoMedium,
    color: appColors.lightText,
  },
  containerStyle: {
    marginTop: windowWidth(4),
    alignItems: 'center',
  },
});
