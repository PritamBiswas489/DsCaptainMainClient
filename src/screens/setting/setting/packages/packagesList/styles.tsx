import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(2),
    paddingHorizontal: windowWidth(3),
    marginTop: windowHeight(3),
    marginHorizontal: windowWidth(6),
    paddingVertical: windowHeight(2),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4HALF,
    marginRight: windowWidth(2),
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  delete: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
    textDecorationLine: 'underline',
  },
  price: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
    marginTop: windowWidth(2),
  },
  statusView: {
    backgroundColor: appColors.serviceBG,
    padding: windowWidth(3),
    marginTop: windowHeight(1),
    borderRadius: windowWidth(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(15),
  },
});
