import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.border,
    paddingVertical: windowHeight(3),
    marginTop: windowWidth(6),
    paddingHorizontal: windowWidth(3),
  },
  innerContainer: {
    backgroundColor: appColors.white,
    borderRadius: windowWidth(1),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: windowWidth(1),
    alignItems: 'center',
    paddingHorizontal: windowWidth(5),
    marginTop: windowWidth(1),
  },
  status: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  statusNote: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
    marginHorizontal: windowWidth(5),
    width: windowWidth(60),
    paddingBottom: windowWidth(4),
  },
});
