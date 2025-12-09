import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(2),
    marginBottom: windowHeight(1),
    marginTop: windowHeight(1),
  },
  title: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT4,
  },
  price: {
    color: appColors.darkText,
    fontSizes: fontSizes.FONT4HALF,
    fontFamily: appFonts.NunitoSemiBold,
  },
});
