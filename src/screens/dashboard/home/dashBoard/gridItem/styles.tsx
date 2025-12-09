import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: windowWidth(7),
  },
  gridItem: {
    flex: 1,
    backgroundColor: appColors.boxBg,
    borderWidth: windowWidth(0.21),
    borderColor: appColors.border,
    padding: windowWidth(3),
    paddingHorizontal: windowWidth(7),
  },
  name: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
    marginTop: windowHeight(2),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth(37),
  },
  text: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4,
  },
  iconContainer: {
    backgroundColor: appColors.border,
    width: windowWidth(11),
    height: windowHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth(1),
    marginTop: 2,
  },
});
