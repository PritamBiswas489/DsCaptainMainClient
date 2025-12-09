import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  couponsView: {
    backgroundColor: appColors.boxBg,
    paddingBottom: windowHeight(3),
  },
  blogContainer: {
    padding: windowHeight(2),
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    borderWidth: 1.2,
    marginHorizontal: windowWidth(4),
    borderRadius: windowWidth(2.4),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blogImg: {
    height: windowHeight(10.5),
    width: windowWidth(30),
    resizeMode: 'stretch',
  },
  container: {
    marginHorizontal: windowWidth(3),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    marginRight: windowWidth(2),
    fontSize: fontSizes.FONT3HALF,
  },
  detail: {
    color: appColors.lightText,
    fontSize: fontSizes.FONT3HALF,
    fontFamily: appFonts.NunitoRegular,
    marginTop: windowHeight(0.2),
  },
  verticalLine: {
    height: windowHeight(1.5),
    borderColor: '#808080',
    borderWidth: 0.3,
    width: 0,
    marginTop: 6,
    marginHorizontal: windowWidth(1),
    marginVertical: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth(49),
    alignItems: 'flex-start',
    marginTop: windowHeight(1.7),
  },
  message: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: windowWidth(3.8),
  },
  itemSeperator: {
    paddingBottom: windowHeight(2),
  },
  rowStyle: {
    marginTop: windowWidth(4),
  },
});
