import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: windowHeight(2),
    backgroundColor: appColors.boxBg,
    borderRadius: windowWidth(3),
    paddingHorizontal: windowWidth(4),
    paddingVertical: windowHeight(2),
    marginTop: windowHeight(4),
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: windowHeight(5),
    width: windowWidth(5),
    resizeMode: 'contain',
  },
  imageView: {
    height: windowHeight(6),
    width: windowHeight(6),
    resizeMode: 'contain',
    borderRadius: windowHeight(4),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: appColors.border,
    borderWidth: 1,
  },
  name: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(4),
  },
});
