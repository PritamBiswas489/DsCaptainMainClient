import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight(3),
    alignItems: 'center',
  },
  container: {
    backgroundColor: appColors.primary,
    paddingVertical: windowHeight(0.9),
    paddingHorizontal: windowWidth(5),
    borderRadius: windowWidth(2),
  },
  code: {
    color: appColors.white,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
  textStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: windowWidth(3.8),
  },
  lineView: {
    marginTop: windowHeight(3),
  },
});
