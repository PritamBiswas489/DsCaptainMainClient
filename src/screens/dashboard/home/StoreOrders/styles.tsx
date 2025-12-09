import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    
    marginHorizontal: windowHeight(1),
  },
  cardContainer: {
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(3),
    backgroundColor: appColors.white,
  },
  imageStyle: {
    height: windowHeight(11),
    width: windowWidth(22),
  },
  serviceContainer: {
    paddingVertical: windowHeight(2),
  },
  innerContainer: {
    marginTop: windowHeight(1),
  },
  lineView: {
    borderWidth: 0.3,
    borderColor: appColors.border,
    marginTop: windowHeight(2),
    marginHorizontal: windowWidth(4),
  },
  separator: {
    paddingBottom: windowHeight(3),
  },
  priceStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoExtraBold,
    marginTop: windowWidth(2),
  },
  textStyle: {
    marginTop: 0,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconView: {
    height: windowHeight(4),
    width: windowHeight(4),
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(4),
    alignItems: 'center',
    justifyContent: 'center',
    bottom: windowHeight(2),
    backgroundColor: appColors.white,
  },
});
