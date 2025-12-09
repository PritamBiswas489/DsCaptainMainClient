import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(3),
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(2),
    paddingHorizontal: windowWidth(4),
    marginHorizontal: windowHeight(3),
    backgroundColor: appColors.boxBg,
    paddingVertical: windowWidth(3),
  },
  day: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4,
    textTransform: 'uppercase',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeContainer: {
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(2),
    marginTop: windowWidth(3),
    width: windowWidth(38),
    height: windowHeight(6),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
});
