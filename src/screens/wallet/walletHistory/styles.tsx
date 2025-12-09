import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(6),
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(3),
    paddingVertical: windowWidth(4),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowWidth(3),
    marginHorizontal: windowWidth(5),
    alignItems: 'center',
  },
  textStyle: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  separator: {
    paddingBottom: windowWidth(5),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(46),
  },
});
