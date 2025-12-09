import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(3),
  },
  noteContainer: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginTop: windowHeight(1),
    width: windowWidth(92),
  },
  mainView: {
    marginTop: windowHeight(3),
    backgroundColor: appColors.boxBg,
    borderColor: appColors.border,
    borderWidth: 1,
    paddingVertical: windowWidth(4),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(4),
  },

  row: {
    flexDirection: 'row',
  },
  containerView: {
    width: windowWidth(50),
    height: windowHeight(6),
    marginVertical: windowWidth(2),
    backgroundColor: appColors.white,
    marginHorizontal: 0,
    borderColor: appColors.border,
    borderWidth: 1,
  },
  textContainerStyle: {
    width: windowWidth(46),
  },
  dropwnStyle: {
    paddingLeft: windowWidth(3),
    backgroundColor: appColors.white,
    borderWidth: 1,
    borderColor: appColors.border,
    marginHorizontal: windowWidth(2),
  },
});
