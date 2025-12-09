import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  contentView: {
    backgroundColor: appColors.serviceBG,
    paddingVertical: windowHeight(2),
    paddingHorizontal: windowWidth(4),
    borderRadius: windowHeight(1.5),
    borderColor: appColors.primary,
    borderWidth: windowHeight(0.1),
    paddingBottom: windowHeight(2),
    marginTop:2
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth(82),
    alignItems: 'center',
  },
  titleStyle: {
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT4HALF,
  },
  verticalLine: {
    height: windowHeight(2),
    borderColor: appColors.border,
    borderWidth: 0.7,
    width: 0,
    marginTop: 8,
    marginHorizontal: windowWidth(2),
    marginVertical: 6,
  },
  rating: {
    fontFamily: appFonts.NunitoSemiBold,
    marginHorizontal: 5,
    fontSize: fontSizes.FONT4,
  },
  content: {
    fontSize: fontSizes.FONT4,
    top: 4,
    fontFamily: appFonts.NunitoMedium,
    color: appColors.lightText,
  },
  contentRating:{
    fontSize: fontSizes.FONT4,
    top: 4,
    fontFamily: appFonts.NunitoMedium,
    color: appColors.lightText,
    marginLeft:10,

  },
  priceStyle:{
    top: 4,
    marginLeft:100,
    
  },
  containerStyle: {
    marginTop: windowWidth(4),
    alignItems: 'center',
  },
});
