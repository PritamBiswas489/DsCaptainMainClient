import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export const styles = StyleSheet.create({
  titleStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginTop: windowHeight(1),
    marginHorizontal: windowWidth(1),
  },
  containerStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: windowWidth(0),
    paddingTop: windowWidth(1),
  },
  innerContainer: {
    borderColor: appColors.border,
    borderWidth: 1,
    backgroundColor: appColors.white,
    borderRadius: windowWidth(3),
    marginVertical: windowWidth(3),
    paddingBottom: windowHeight(2),
  },
});
