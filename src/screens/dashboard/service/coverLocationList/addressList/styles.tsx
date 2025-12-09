import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(3),
    marginTop: windowHeight(4),
    backgroundColor: appColors.white,
    paddingHorizontal: windowHeight(1),
    paddingVertical: windowHeight(1.3),
    borderRadius: windowWidth(2),
    borderColor: appColors.border,
    borderWidth: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(2),
  },
  row: {
    flexDirection: 'row',
  },
  mapContainer: {
    height: windowHeight(4.4),
    width: windowWidth(8.8),
    backgroundColor: appColors.border,
    borderRadius: windowWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowWidth(1.3),
  },
  address: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: windowWidth(3.8),
    marginTop: 3,
  },
  country: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT3HALF,
    marginTop: 3,
  },
  textContainer: {
    paddingHorizontal: windowWidth(3),
  },
  horizontalView: {
    marginBottom: windowWidth(4),
    marginHorizontal: windowWidth(2),
  },
  delete: {
    marginTop: windowHeight(1),
    color: appColors.primary,
    textDecorationLine: 'underline',
    fontFamily: appFonts.NunitoSemiBold,
  },
  iconContainer: {
    height: windowHeight(4),
    width: windowHeight(4),
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    borderWidth: 1,
    marginTop: windowWidth(2),
  },
});
