import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(3),
    marginHorizontal: windowHeight(3),
  },
  title: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  innerContainer: {
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(2),
    paddingHorizontal: windowWidth(2),
    marginTop: windowHeight(2),
    flexDirection: 'row',
    paddingVertical: windowWidth(3),
    alignItems: 'center',
    paddingBottom: windowWidth(4),
  },
  name: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  imageStyle: {
    height: windowHeight(7),
    width: windowWidth(14),
    borderRadius: windowWidth(10),
    resizeMode: 'contain',
    marginRight: windowHeight(1),
  },
});
