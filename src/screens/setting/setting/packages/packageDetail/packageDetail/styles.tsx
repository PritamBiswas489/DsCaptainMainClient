import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  image: {
    height: windowHeight(11),
    width: windowWidth(25),
    resizeMode: 'contain',
  },
  innerContainer: {
    height: windowWidth(11),
    backgroundColor: appColors.white,
    borderBottomColor: appColors.border,
    borderBottomWidth: 1,
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    bottom: windowHeight(2.4),
  },
  container: {
    marginHorizontal: windowWidth(5),
  },
  price: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT5HALF,
    marginTop: windowHeight(0.6),
  },
  containerStyle: {
    marginHorizontal: windowWidth(3),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4HALF,
  },
  detail: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT4,
    marginBottom: windowWidth(3),
    lineHeight: windowHeight(3),
    marginTop: windowWidth(1),
  },
});
