import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginTop: windowHeight(2),
    marginBottom: windowWidth(1),
  },
  additionalStyle: {
    marginHorizontal: 0,
  },
  dropDownContainerStyle: {
    marginHorizontal: 0,
    paddingHorizontal: windowWidth(2),
    marginTop: windowWidth(2),
  },
  iconStyle: {
    marginHorizontal: windowWidth(2),
  },
});
