import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  container: {
    borderColor: appColors.border,
    borderWidth: 1,
    padding: windowWidth(3),
    margin: windowHeight(2),
    borderRadius: windowWidth(2),
  },
  textStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT4,
  },
  content: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT3HALF,
    marginTop: windowWidth(1),
  },
  rowContainer: {
    flexDirection: 'row',
  },
});
