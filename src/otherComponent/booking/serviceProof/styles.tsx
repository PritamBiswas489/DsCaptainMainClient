import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: windowWidth(5),
    marginTop: windowWidth(1),
  },
  inputStyle: {
    height: windowHeight(13),
    alignItems: 'flex-start',

    marginTop: windowHeight(2),
  },
  errorStyle: {
    color: appColors.error,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(5),
  },
});
