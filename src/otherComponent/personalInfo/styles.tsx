import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(3),
    backgroundColor: appColors.boxBg,
    borderColor: appColors.border,
    borderWidth: 1,
    paddingTop: windowHeight(1),
    borderRadius: windowWidth(3),
    paddingHorizontal: windowHeight(2),
    paddingBottom: windowHeight(2),
  },
  row: {
    flexDirection: 'row',
    marginTop: windowWidth(2),
    alignItems: 'center',
  },
  verticalLine: {
    height: windowWidth(4),
    borderColor: appColors.border,
    borderWidth: 0.3,
    width: 0,
    marginTop: 0,
    marginHorizontal: windowWidth(2),
    marginVertical: 2,
    right: windowWidth(1),
  },
  heading: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginVertical: windowWidth(1),
  },
  titleStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(2),
  },
  content: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
});
