import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: windowHeight(7),
  },
  container: {
    marginTop: windowHeight(2.8),
    marginHorizontal: windowWidth(5.1),
  },
  image: {
    height: windowHeight(20),
    width: windowWidth(89),
    resizeMode: 'cover',
    borderRadius: windowHeight(1),
  },
  categoryView: {
    position: 'absolute',
    flexDirection: 'row-reverse',
    width: '90%',
    margin: windowHeight(2),
  },
  category: {
    backgroundColor: '#FE782E',
    paddingHorizontal: windowHeight(1.3),
    paddingVertical: windowHeight(0.7),
    color: appColors.white,
    fontFamily: appFonts.NunitoBold,
    borderRadius: windowHeight(0.8),
    fontSize: fontSizes.FONT4,
  },
  containerView: {
    marginTop: windowHeight(1.8),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
    marginRight: windowWidth(2),
    width: 'auto',
  },
  detail: {
    color: appColors.lightText,
    fontSize: fontSizes.FONT3HALF,
    fontFamily: appFonts.NunitoSemiBold,
    marginTop: windowHeight(0.2),
  },
  content: {
    fontSize: fontSizes.FONT4,
    fontFamily: appFonts.NunitoRegular,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  verticalLine: {
    height: windowHeight(1.8),
    borderColor: appColors.border,
    borderWidth: 0.3,
    width: 0,
    marginTop: 6,
    marginHorizontal: windowWidth(2),
    marginVertical: 7,
  },
  description: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4,
  },
  blogContent: {
    fontFamily: appFonts.NunitoMedium,
    fontSize: windowWidth(3.8),
    color: appColors.darkText,
    lineHeight: windowHeight(3),
  },
});
