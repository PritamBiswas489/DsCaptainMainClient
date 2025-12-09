import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.boxBg,
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowHeight(1),
    marginHorizontal: windowHeight(3),
    marginTop: windowHeight(4),
    paddingHorizontal: windowHeight(2),
    paddingVertical: windowHeight(2),
  },
  title: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginBottom: windowWidth(1),
    marginHorizontal: windowWidth(4),
  },
  name: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(3),
  },
  mainContainer: {
    marginTop: windowWidth(3),
    marginHorizontal: windowWidth(1),
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    borderRadius: windowWidth(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: windowHeight(0.5),
    paddingHorizontal: windowWidth(2),
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: windowWidth(2),
  },
  imageStyle: {
    height: windowWidth(15),
    width: windowWidth(8),
    resizeMode: 'contain',
  },
  radioBtn: {
    marginHorizontal: windowHeight(1),
  },
  innerCircle: {
    height: windowWidth(3),
    width: windowWidth(3),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.primary,
  },
});
