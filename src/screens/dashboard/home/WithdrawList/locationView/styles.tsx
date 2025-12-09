import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dateContainer: {
    marginHorizontal: windowHeight(2),
    flexDirection: 'row',
  },
  innerContainer: {
    backgroundColor: appColors.boxBg,
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(2),
    paddingVertical: windowWidth(2),
    paddingHorizontal: windowWidth(3),
    width: windowWidth(31),
  },
  textStyle: {
    marginTop: windowHeight(0.7),
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },

  title: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  text: {
    color: appColors.success,
    fontFamily: appFonts.NunitoMedium,
    marginTop: windowWidth(1),
    width: windowWidth(40),
    fontSize: fontSizes.FONT3HALF,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
