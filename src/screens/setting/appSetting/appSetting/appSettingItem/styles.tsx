import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  container: {
    marginVertical: windowHeight(4),
    marginHorizontal: windowHeight(3),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    height: windowHeight(6.5),
    width: windowWidth(13),
    backgroundColor: appColors.boxBg,
    borderColor: appColors.border,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth(3),
  },
  name: {
    color: appColors.darkText,
    marginHorizontal: windowWidth(4),
    fontSize: fontSizes.FONT4,
  },
  subText: {
    marginHorizontal: windowWidth(4),
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
    marginTop: windowWidth(1),
  },
  separator: {
    borderColor: appColors.boxBg,
    borderWidth: 1,
    marginVertical: windowHeight(1.6),
  },
});
