import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: appColors.boxBg,
    paddingVertical: windowWidth(3),
    alignItems: 'center',
    marginTop: windowHeight(3),
    paddingHorizontal: windowHeight(2),
    borderRadius: windowWidth(2),
    marginHorizontal: windowWidth(5),
  },
  container: {
    marginTop: windowHeight(3),
    marginHorizontal: windowHeight(2),
    marginBottom: windowWidth(6),
  },
  content: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT3HALF,
    width: windowWidth(60),
  },
});
