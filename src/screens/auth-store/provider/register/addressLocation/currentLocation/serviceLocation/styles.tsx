import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    marginTop: windowHeight(1),
    marginHorizontal: windowWidth(5),
  },
  boxView: {
    backgroundColor: appColors.white,
    bottom: windowHeight(3),
    marginHorizontal: windowWidth(3),
    paddingVertical: windowHeight(1.6),
    borderRadius: windowHeight(2.4),
    borderColor: appColors.border,
    borderWidth: 2,
    width: windowWidth(94),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT4,
    paddingHorizontal: windowWidth(5),
    marginTop: windowHeight(0.7),
  },
  locationView: {
    height: windowHeight(5.5),
    width: windowWidth(10.8),
    backgroundColor: appColors.lightOrange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(1),
  },
  addressView: {
    marginHorizontal: windowWidth(4),
  },
  content: {
    color: appColors.lightText,
    marginTop: windowHeight(0.6),
    fontFamily: appFonts.NunitoMedium,
    marginBottom: windowHeight(0.5),
  },

  additionalStyle: {
    height: windowHeight(7),
    marginTop: windowWidth(3),
  },
  labelText: {
    fontSize: fontSizes.FONT4HALF,
  },
  editLocation:{
    color:appColors.primary,
    fontFamily:appFonts.NunitoMedium,
    fontSize:fontSizes.FONT4,
    textDecorationLine:"underline"
  }
});
