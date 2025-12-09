import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowHeight(2),
    marginTop: windowWidth(4),
  },
  textStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  rowContainer: {
    flexDirection: 'row',
    width: windowWidth(49),
  },
  content: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
  itemStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3,
  },
  activeStyle: {
    borderColor: appColors.primary,
    borderWidth: 1,
    height: windowHeight(3.5),
    width: windowWidth(18),
    borderRadius: windowWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
