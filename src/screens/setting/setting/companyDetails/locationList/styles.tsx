import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(4),
    marginTop: windowHeight(3),
  },
  textStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  mainContainer: {
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(1),
    marginTop: windowHeight(2),
    padding: windowWidth(3),
  },
  locationContainer: {
    backgroundColor: appColors.border,
    borderRadius: windowWidth(2),
    marginRight: windowWidth(4),
    alignItems: 'center',
    justifyContent: 'center',
    height: windowWidth(12),
    width: windowWidth(11),
  },
  rowContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  address: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  country: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
  },
  text: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    textDecorationLine: 'underline',
  },
  rowView: {
    flexDirection: 'row',
    marginTop: windowWidth(1),
    alignItems: 'center',
  },
  seperator:{
    paddingBottom:windowHeight(2)
  }
});
