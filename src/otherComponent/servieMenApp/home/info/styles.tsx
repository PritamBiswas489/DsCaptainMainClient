import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: appColors.boxBg,
    borderColor: appColors.border,
    borderWidth: 1,
    padding: windowHeight(2),
    borderRadius: windowHeight(1.5),
    paddingBottom: windowWidth(1),
    marginTop: windowHeight(1),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
  containerView: {
    marginTop: 7,
  },
  text: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(2),
  },
  blankView: {
    height: windowWidth(5),
  },
  containerStyle: {
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowHeight(1.3),
    paddingVertical: windowHeight(1.2),
    paddingHorizontal: windowWidth(4.5),
    marginVertical: windowWidth(2.7),
    marginRight: windowWidth(3),
  },
  container: {
    marginHorizontal: windowWidth(5),
  },
});
