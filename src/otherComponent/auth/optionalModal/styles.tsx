import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.modal,
  },
  containerView: {
    backgroundColor: appColors.white,
    width: '88%',
    paddingHorizontal: windowWidth(2),
    borderRadius: windowHeight(1.4),
    paddingBottom: windowHeight(1),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight(1),
    marginHorizontal: windowWidth(2),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT5,
  },
  innerContainer: {
    marginTop: windowHeight(1),
    marginHorizontal: windowWidth(2),
  },
  subTitle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginTop: windowHeight(3),
    marginHorizontal: windowWidth(2),
  },
  innerBox: {
    borderRadius: windowWidth(3),
    borderColor: appColors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(2),
    backgroundColor: appColors.boxBg,
    paddingHorizontal: windowWidth(4),
    borderWidth: 1,
    paddingVertical: windowWidth(4),
  },
  row: {
    flexDirection: 'row',
    marginTop: windowWidth(3),
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: windowHeight(1),
  },
  imageStyle: {
    height: windowHeight(7),
    width: windowWidth(18),
    resizeMode: 'contain',
  },
  text: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginTop: windowWidth(2),
  },
  additionalStyle: {
    marginHorizontal: windowWidth(2),
  },
});
