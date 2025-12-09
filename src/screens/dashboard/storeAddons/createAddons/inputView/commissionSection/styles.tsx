import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowHeight(2.5),
    marginTop: windowWidth(4),
    paddingHorizontal: windowWidth(4),
    backgroundColor: appColors.boxBg,
    paddingVertical: windowWidth(4),
    borderRadius: windowWidth(2),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  textStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  notes: {
    marginTop: windowWidth(3),
    color: appColors.error,
    fontFamily: appFonts.NunitoMedium,
    fontSize: windowWidth(3.2),
    marginHorizontal: windowWidth(6),
    width: windowWidth(98),
  },
});
