import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: windowHeight(1.4),
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(1.6),
  },
});
