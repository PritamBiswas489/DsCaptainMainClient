import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {fontSizes} from '@theme/appConstant';

export const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: windowWidth(5),
    marginTop: windowHeight(3),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerView: {
    height: windowHeight(4.7),
    width: windowWidth(9.7),
    borderRadius: windowWidth(2),
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
  text: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: appColors.lightOrange,
    height: windowHeight(5),
    marginTop: windowWidth(5),
    borderRadius: windowWidth(2),
    alignItems: 'center',
    paddingHorizontal: windowWidth(3),
  },
  bannerBg: {
    height: windowHeight(26),
    width: windowWidth(90),
    resizeMode: 'cover',
    marginRight: windowWidth(5),
    borderRadius: windowWidth(1),
  },
  imageContainer: {
    marginTop: windowHeight(2),
  },
});
