import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(2),
  },
  textStyle: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(6),
  },
  inputStyle: {
    width: windowWidth(42),
    height: windowHeight(6),
  },
  textContainerStyle: {
    fontSize: fontSizes.FONT4,
  },
  row: {
    flexDirection: 'row',
  },
  lineView: {
    marginHorizontal: windowWidth(4),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(6),
  },
});
