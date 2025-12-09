import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(2),
  },
  row: {
    flexDirection: 'row',
    marginTop: windowWidth(4),
    alignItems: 'center',
  },

  titleStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT4HALF,
    marginHorizontal: windowWidth(2),
  },
  content: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginTop: windowHeight(0.8),
    marginBottom: windowWidth(1),
  },
});
