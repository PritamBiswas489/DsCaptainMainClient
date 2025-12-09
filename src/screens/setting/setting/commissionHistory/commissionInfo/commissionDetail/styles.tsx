import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  container: {
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(3),
    marginTop: windowHeight(3),
    marginHorizontal: windowWidth(5),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(3),
    backgroundColor: appColors.lightRed,
    marginHorizontal: windowWidth(2.7),
    borderRadius: windowWidth(1),
    paddingVertical: windowWidth(3),
    marginVertical: windowWidth(2.7),
    marginBottom: windowHeight(2),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  content: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(5),
    marginBottom: windowWidth(5),
  },
  note: {
    color: appColors.error,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
    marginHorizontal: windowWidth(7),
    marginTop: windowWidth(4),
  },
});
