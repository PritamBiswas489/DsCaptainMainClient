import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(5),
    marginTop: windowHeight(3),
  },
  imageStyle: {
    height: windowWidth(38),
    width: '100%',
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: windowWidth(4),
  },
  textStyle: {
    color: appColors.white,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    textAlign: 'center',
  },
  price: {
    color: appColors.white,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT6,
    marginTop: windowWidth(1),
  },
  containerView: {
    backgroundColor: appColors.white,
    paddingHorizontal: windowWidth(30),
    marginTop: windowWidth(3),
    paddingVertical: windowWidth(3.2),
    borderRadius: windowWidth(2),
  },
  text: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
});
