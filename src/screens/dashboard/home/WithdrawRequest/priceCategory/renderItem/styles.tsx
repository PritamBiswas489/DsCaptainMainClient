import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(2),
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: windowWidth(3),
    backgroundColor: appColors.boxBg,
    paddingHorizontal: windowWidth(4),
    borderRadius: windowHeight(3),
    paddingVertical: windowHeight(1),
    marginTop: windowWidth(2),
  },
  textStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
  mainContainer: {
    paddingHorizontal: windowWidth(5),
    marginTop: windowHeight(2),
  },
});
