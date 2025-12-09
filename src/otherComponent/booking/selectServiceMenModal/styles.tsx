import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginTop: windowWidth(5),
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: windowHeight(3),
  },
  container: {
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(3),
    marginRight: windowWidth(4),
    width: windowWidth(42),
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: windowWidth(2),
  },
  imageStyle: {
    height: windowHeight(9),
    width: windowWidth(9.5),
    resizeMode: 'contain',
  },
  heading: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: windowWidth(3.8),
    marginTop: windowWidth(1),
  },
  image: {
    height: windowHeight(10),
    width: windowWidth(22),
    resizeMode: 'contain',
  },
});
