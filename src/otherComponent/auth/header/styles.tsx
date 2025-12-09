import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: windowHeight(100),
    width: windowWidth(100),
  },
  image: {
    height: windowHeight(16),
    width: windowWidth(60),
    resizeMode: 'cover',
    right: windowWidth(-10),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  leafStyle: {
    height: windowHeight(12),
    width: windowWidth(29),
    resizeMode: 'contain',
    left: windowWidth(2),
  },
  darkLeafStyle: {
    height: windowHeight(12),
    width: windowWidth(37),
    resizeMode: 'stretch',
    left: windowHeight(6),
  },
  logoStyle: {
    height: windowHeight(4),
    width: windowWidth(40),
    resizeMode: 'cover',
    right: windowWidth(1),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowLeft: {
    height: windowHeight(6),
    width: windowWidth(12),
    borderRadius: windowHeight(6),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: appColors.border,
    borderWidth: windowWidth(0.4),
    marginRight: windowWidth(3.8),
  },
  textContainer: {
    marginHorizontal: windowWidth(5.5),
  },
  marginTop: {
    marginTop: windowHeight(3),
    marginBottom: windowHeight(2),
  },
  heading: {
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT6,
    color: appColors.darkText,
    textTransform: 'uppercase',
  },
  content: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4HALF,
    marginTop: windowHeight(0.9),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
