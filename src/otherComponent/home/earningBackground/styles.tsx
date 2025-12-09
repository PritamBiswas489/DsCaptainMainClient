import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageStyle: {
    height: windowHeight(10.5),
    width: windowWidth(90),
    resizeMode: 'stretch',
    marginTop: windowHeight(1),
    marginHorizontal: windowWidth(5),
  },
  textStyle: {
    color: appColors.white,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    textAlign: 'center',
    opacity: 0.9,
  },
  innerView: {
    position: 'absolute',
    marginTop: windowHeight(3.2),
    width: '96%',
  },
  price: {
    color: appColors.white,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT5,
    textAlign: 'center',
    marginTop: windowWidth(1),
  },
});
