import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(3),
  },
  textInputStyle: {
    height: windowHeight(12),
    backgroundColor: appColors.textInput,
    borderRadius: windowHeight(1),
    textAlignVertical: 'top',
    paddingHorizontal: windowHeight(2.5),
    paddingVertical: windowWidth(4),
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT4,
    color: appColors.darkText,
  },
  row: {
    flexDirection: 'row',
    marginTop: windowHeight(2),
  },
  textStyle: {
    marginHorizontal: windowWidth(1),
    width: windowWidth(90),
    fontFamily: appFonts.NunitoRegular,
    color: appColors.error,
    fontSize: fontSizes.FONT3HALF,
  },
  dotStyle: {
    marginTop: windowHeight(1),
    backgroundColor: appColors.error,
  },
  text: {
    textDecorationLine: 'underline',
    fontFamily: appFonts.NunitoSemiBold,
  },
});
