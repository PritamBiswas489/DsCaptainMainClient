import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    marginVertical: windowWidth(1),
    backgroundColor: appColors.white,
  },
  textStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4HALF,
    marginHorizontal: windowWidth(4),
    marginTop: windowHeight(3),
    marginBottom: windowHeight(2),
  },
  imageStyle: {
    // height: windowHeight(34),
    height: windowHeight(18),
    width: windowWidth(100),
    padding: windowHeight(3),
    marginTop: windowWidth(1),
  },
  subTitle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
  },
  statusStyle: {
    color: appColors.success,
  },
});
