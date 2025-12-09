import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageStyle: {
    height: windowHeight(17),
    width: windowWidth(80),
  },
  container: {
    marginHorizontal: windowWidth(4),
    marginTop: windowHeight(1),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(3),
    paddingTop: windowHeight(2),
  },
  title: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: windowWidth(3.7),
  },
  content: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
});
