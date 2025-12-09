import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  selectedDateStyle: {
    backgroundColor: appColors.primary,
    borderWidth: 0,
    borderRadius: windowHeight(4),
    height: windowWidth(9),
    width: windowWidth(9),
  },

  wrapperStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },

  monthTextStyle: {
    fontSize: 18,
    fontFamily: appFonts.NunitoMedium,
    color: 'red',
  },
});
