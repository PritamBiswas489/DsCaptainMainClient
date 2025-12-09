import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(2),
    paddingHorizontal: windowWidth(4),
    backgroundColor: appColors.boxBg,
    paddingVertical: windowWidth(3),
    marginVertical:5
  },
  textcontainer: {
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(2),
    paddingHorizontal: windowWidth(4),
    backgroundColor: appColors.boxBg,
    paddingVertical: windowWidth(3),
  },
  day: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4,

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
  noteContainer: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginTop: windowHeight(1),
    width: windowWidth(92),
  },
});
