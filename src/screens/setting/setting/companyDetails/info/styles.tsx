import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(3),
    backgroundColor: appColors.boxBg,
    borderColor: appColors.border,
    borderWidth: 1,
    paddingTop: 8,
    borderRadius: windowWidth(3),
    paddingHorizontal: windowHeight(2),
    paddingBottom: windowWidth(2),
    marginTop: windowHeight(2),
    marginBottom: windowHeight(1),
  },
  contentStyle: {
    fontSize: fontSizes.FONT3HALF,
    fontFamily: appFonts.NunitoMedium,
  },
  address: {
    fontSize: fontSizes.FONT3HALF,
    fontFamily: appFonts.NunitoMedium,
    width: windowWidth(60),
  },
  titleStyle: {
    fontSize: windowWidth(3.7),
    width: windowWidth(15),
  },
});
