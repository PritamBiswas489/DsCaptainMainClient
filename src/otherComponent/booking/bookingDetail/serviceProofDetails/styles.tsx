import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export const styles = StyleSheet.create({
  reviewTextStyle: {
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
  },
  container: {
    paddingHorizontal: windowWidth(4),
  },
  imageContainer: {
    height: windowWidth(17),
    width: windowWidth(17),
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: windowWidth(12),
    width: windowWidth(12),
    resizeMode: 'contain',
    borderRadius: windowWidth(2),
  },
});
