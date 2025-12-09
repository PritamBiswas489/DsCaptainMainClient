import appColors from '@theme/appColors';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  personImg: {
    height: windowHeight(10),
    width: windowHeight(10),
    resizeMode: 'contain',
    borderRadius: windowHeight(10),
    bottom: windowHeight(4),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  review: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginHorizontal: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: appColors.boxBg,
    borderColor: appColors.border,
    borderWidth: 1,
    padding: windowHeight(1.4),
    borderRadius: windowHeight(1),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
});
