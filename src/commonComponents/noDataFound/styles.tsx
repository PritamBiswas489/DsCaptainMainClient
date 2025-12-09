import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: windowHeight(50),
    width: windowWidth(120),
    resizeMode: 'contain',
  },
  blankView: {
    height: windowHeight(5),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT5HALF,
    marginTop: windowHeight(3),
  },
  content: {
    marginTop: windowHeight(1.6),
    marginHorizontal: windowWidth(8),
    textAlign: 'center',
    lineHeight: windowHeight(3),
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  imageContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    width: windowWidth(47),
    marginTop: windowWidth(6),
    height: windowHeight(18),
    justifyContent: 'flex-end',
  },
  imageStyle: {
    height: windowWidth(15),
    width: windowWidth(15),
    resizeMode: 'contain',
  },
  innerImage: {
    height: windowHeight(5),
    width: windowHeight(5),
    resizeMode: 'contain',
  },
  innerImageContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight(8),
    width: windowHeight(7),
  },
});
