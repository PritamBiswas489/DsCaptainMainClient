import {StyleSheet} from 'react-native';
import {fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: windowWidth(2),
    marginBottom: windowWidth(4),
    marginTop: windowWidth(2),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(2),
  },
  bookingId: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4,
  },
});
