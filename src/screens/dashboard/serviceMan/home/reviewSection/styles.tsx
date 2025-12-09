import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(4),
    marginTop: windowHeight(3),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT5,
    marginBottom: windowHeight(1),
  },
});
