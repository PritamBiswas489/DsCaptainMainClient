import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(5),
    marginTop: windowHeight(4),
  },
  mainContainer: {
    backgroundColor: appColors.boxBg,
    flexDirection: 'row',
    borderRadius: windowWidth(2),
    alignItems: 'center',
    marginRight: windowWidth(6),
    width: windowWidth(42),
    height: windowHeight(8),
    paddingHorizontal: windowWidth(3),
  },
  iconContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: windowHeight(4),
    right: 7,
  },
  name: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  mainView: {
    width: windowWidth(22),
    left: windowWidth(2),
  },
  commission: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
    marginTop: windowWidth(1),
  },
  iconStyle: {
    borderColor: appColors.border,
    borderWidth: 1,
    padding: windowWidth(2),
    borderRadius: windowWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.white,
  },
  separator: {
    marginBottom: windowHeight(2),
  },
});
