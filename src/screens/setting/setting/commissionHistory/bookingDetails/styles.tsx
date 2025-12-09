import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.boxBg,
    borderColor: appColors.border,
    borderWidth: 1,
    marginTop: windowHeight(3),
    paddingVertical: windowHeight(3),
  },
  mainContainer: {
    marginHorizontal: windowWidth(4),
    marginTop: windowHeight(2),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4HALF,
    marginTop: windowHeight(1),
  },
  historyContainer: {
    marginHorizontal: windowWidth(5),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(4),
  },
  blankView: {
    height: windowHeight(2),
  },
});
