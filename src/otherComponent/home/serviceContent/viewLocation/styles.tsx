import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowWidth(1),
    marginHorizontal: windowWidth(1),
  },
  text: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  iconContainer: {
    marginTop: windowWidth(1),
  },
});
