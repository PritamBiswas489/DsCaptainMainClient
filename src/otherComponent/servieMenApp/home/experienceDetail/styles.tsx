import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: appColors.boxBg,
    borderColor: appColors.border,
    borderWidth: 1,
    padding: windowHeight(1.4),
    borderRadius: windowHeight(1),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: windowWidth(5),
  },
  mainContainer: {
    marginHorizontal: windowHeight(2.6),
    marginTop: windowHeight(2.7),
  },
  textStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
  content: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: windowWidth(3.9),
    marginTop: 13,
    lineHeight: windowHeight(3),
    width: windowWidth(95),
  },
});
