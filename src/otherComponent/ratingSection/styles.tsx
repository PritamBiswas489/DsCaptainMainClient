import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: windowHeight(2),
    backgroundColor: appColors.boxBg,
    paddingHorizontal: windowHeight(1.2),
    borderRadius: windowHeight(1),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: windowHeight(0.6),
    marginRight: windowWidth(3),
  },
  rating: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(1),
  },
});
