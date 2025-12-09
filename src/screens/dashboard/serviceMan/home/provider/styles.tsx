import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  providerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(6),
    alignItems: 'center',
  },
  providerRow: {
    flexDirection: 'row',
  },
  imageStyle: {
    height: windowHeight(12),
    width: windowWidth(15),
    resizeMode: 'contain',
  },
  lineView: {
    height: 1,
    borderWidth: 0.3,
    borderColor: appColors.border,
    marginBottom: windowHeight(0.2),
    marginHorizontal: windowWidth(4),
    marginTop: windowWidth(1),
  },
  textStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(3),
  },
  name: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(3),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
