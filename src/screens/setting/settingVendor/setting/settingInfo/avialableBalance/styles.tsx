import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    height: windowWidth(17),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: windowHeight(4),
    borderRadius: windowHeight(1.3),
    flexDirection: 'row',
    paddingHorizontal: windowWidth(4),
  },
  linearGradient: {
    flexDirection: 'row',  // Arrange children in a row
    alignItems: 'center',  // Align items vertically in the center
    justifyContent: 'space-between',  // Distribute space evenly between the children
    padding: 4,
    borderRadius: 8,
  },
  itemContainer: {
    flex: 1,  // Ensure each item takes up equal space
    alignItems: 'center',  // Center align text horizontally
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    color: appColors.white,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT4HALF,
  },
  price: {
    color: appColors.white,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
  },
  containerStyle: {
    marginBottom: windowHeight(1),
    marginTop: windowHeight(1),
  },
  textStyle: {
    color: appColors.white,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4,
  },
  verticalLine: {
    height: windowHeight(6),
    borderColor: appColors.border,
    borderWidth: 0.3,
    width: 0.3,
    opacity: 0.4,
  },
});
