import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(6),
  },
  countryView: {
    flexDirection: 'row',
    backgroundColor: appColors.textInput,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: windowHeight(1.5),
    paddingHorizontal: windowWidth(2),
    borderRadius: windowHeight(1),
    height: windowHeight(6),
    bottom: windowWidth(2),
    marginTop: windowWidth(5),
  },
  countryCode: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    right: windowWidth(1),
  },
  dropdown: {
    right: windowWidth(2.1),
  },
});
