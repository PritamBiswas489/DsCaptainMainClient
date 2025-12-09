import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(4),
    marginTop: windowWidth(3),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotStyle: {
    height: windowWidth(1.2),
    width: windowWidth(1.2),
    backgroundColor: appColors.primary,
    borderRadius: windowHeight(20),
    marginTop: windowWidth(1),
  },
  area: {
    marginHorizontal: windowWidth(2),
    color: appColors.primary,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
});
