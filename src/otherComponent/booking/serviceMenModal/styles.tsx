import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    textAlign: 'center',
    marginHorizontal: windowWidth(4),
  },
  image: {
    height: windowHeight(21),
    width: windowWidth(40),
    resizeMode: 'contain',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(1),
  },
  buttonStyle: {
    paddingHorizontal: windowHeight(8),
    height: windowWidth(12),
    borderRadius: windowWidth(6),
    marginVertical: windowHeight(1),
  },
  buttonTextStyle: {
    color: appColors.white,
  },
  button1TextStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    paddingHorizontal: windowWidth(1),
    borderRadius: windowWidth(2),
  },
  buttonContainerStyle: {
    height: windowWidth(12),
    borderRadius: windowWidth(6),
    marginVertical: windowHeight(1),
    paddingHorizontal: windowHeight(6),
  },
});
