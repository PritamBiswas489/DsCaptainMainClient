import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(4),
    marginHorizontal: windowHeight(3),
  },
  title: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  innerContainer: {
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(2),
    paddingHorizontal: windowWidth(2),
    marginTop: windowHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: windowWidth(3),
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  mainContainer: {
    height: windowHeight(6),
    width: windowWidth(12),
    borderRadius: windowWidth(12),
    backgroundColor: appColors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: windowWidth(2),
  },
  name: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  documentId: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSizes: fontSizes.FONT3HALF,
    marginTop: windowWidth(1),
  },
  textContainer: {
    marginLeft: windowWidth(2),
  },
  textStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: windowWidth(3.8),
  },
});
