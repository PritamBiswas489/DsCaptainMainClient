import appColors from '@theme/appColors';
import {fontSizes, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: appColors.lightRed,
    paddingHorizontal: windowWidth(4),
  },
  textStyle: {
    color: appColors.error,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    padding: windowWidth(3),
    marginTop: windowWidth(1),
  },
});
