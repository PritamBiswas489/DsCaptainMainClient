import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  arrowStyle: {
    tintColor: appColors.lightText,
    height: windowHeight(8),
    width: windowWidth(8),
  },
  selectedDateStyle: {
    backgroundColor: appColors.primary,
    borderWidth: 0,
    borderRadius: windowHeight(4),
    height: windowWidth(9),
    width: windowWidth(9),
  },
  headerText: {
    color: appColors.darkText,
    fontSize: fontSizes.FONT4HALF,
    fontFamily: appFonts.NunitoMedium,
  },
  wrapperStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  arrowWrapperStyle: {
    backgroundColor: appColors.boxBg,
    borderRadius: windowHeight(10),
    height: windowHeight(4),
    width: windowHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthTextStyle: {
    fontSize: 18,
    fontFamily: appFonts.NunitoMedium,
    color: 'red',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
