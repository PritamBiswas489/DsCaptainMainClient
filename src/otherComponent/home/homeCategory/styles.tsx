import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(2),
    marginHorizontal: windowWidth(1),
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: windowWidth(3),
  },
  categoryView: {
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(2.2),
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowHeight(1.8),
    paddingHorizontal: windowWidth(4.5),
  },
  textStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginTop: windowHeight(1.3),
  },
});
