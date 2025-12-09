import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: windowHeight(2),
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowHeight(1),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: windowWidth(2),
    paddingHorizontal: windowHeight(0.6),
    paddingVertical: windowHeight(1),
  },
  textStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
    paddingHorizontal: windowWidth(1),
  },
  rowContainer: {
    borderColor: appColors.primary,
    borderWidth: windowWidth(0.3),
    height: windowWidth(9),
    paddingVertical: 0,
  },
});
