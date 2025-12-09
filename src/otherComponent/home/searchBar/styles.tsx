import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: windowWidth(2),
  },
  textInput: {
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    borderWidth: 1.3,
    borderRadius: windowHeight(1),
    paddingHorizontal: windowWidth(4),
  },
  margin: {
    marginTop: windowHeight(3),
  },
  inputStyle: {
    paddingHorizontal: windowWidth(3),
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    width: '100%',
    fontSize: fontSizes.FONT4,
  },
});
