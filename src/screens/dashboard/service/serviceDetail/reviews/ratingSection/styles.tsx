import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export const styles = StyleSheet.create({
  rating: {
    fontFamily: appFonts.NunitoBold,
    color: appColors.primary,
    fontSize: fontSizes.FONT6,
  },
  ratingText: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginTop: windowWidth(1),
  },
  mainContainer: {
    marginHorizontal: windowWidth(5),
  },
  ratingBg: {
    backgroundColor: appColors.serviceBG,
    marginTop: windowHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(1),
  },
  circleView: {
    height: windowHeight(7.5),
    width: windowWidth(16),
    borderWidth: windowWidth(2),
    borderRadius: windowHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
  },
  ratingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(3),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  blankView: {
    height: windowHeight(1),
  },
  containerStyle: {
    width: windowWidth(45),
    height: windowHeight(5),
  },
  dropdown: {
    marginHorizontal: 0,
    marginVertical: 0,
    height: windowHeight(6.4),
    width: windowWidth(40),
    bottom: windowHeight(1),

    paddingHorizontal: 0,
  },
});
