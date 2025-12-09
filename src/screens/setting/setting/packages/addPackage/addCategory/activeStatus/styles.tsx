import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(2),
    backgroundColor: appColors.boxBg,
    padding: windowWidth(3),
    borderRadius: windowWidth(2),
    marginHorizontal: windowWidth(5),
    paddingHorizontal: windowHeight(2),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  content: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
    width: windowWidth(69),
    marginTop: windowWidth(1),
    paddingBottom: windowWidth(1),
  },
});
