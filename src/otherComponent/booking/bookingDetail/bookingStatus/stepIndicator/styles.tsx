import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: windowHeight(40),
    borderRadius: windowHeight(10),
  },
  labelContainer: {
    width: windowWidth(300),
    paddingLeft: windowWidth(3),
    marginTop: windowHeight(2),
  },
  labelText: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  status: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    marginTop: windowWidth(0.6),
    fontSize: fontSizes.FONT4,
  },
});
