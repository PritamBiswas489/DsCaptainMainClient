import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(2.8),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(15),
  },
  blogContainer: {
    padding: windowHeight(2),
    backgroundColor: appColors.boxBg,
    borderColor: appColors.border,
    borderWidth: 1.2,
    marginHorizontal: windowWidth(5),
    borderRadius: windowWidth(2.4),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  blogImg: {
    height: windowHeight(9.8),
    width: windowWidth(20),
    resizeMode: 'stretch',
  },

  textContainer: {
    marginHorizontal: windowWidth(4),
    marginTop: 2,
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: windowWidth(3.9),
    marginRight: windowWidth(2),
    width: windowWidth(56),
  },
  detail: {
    color: appColors.lightText,
    fontSize: fontSizes.FONT3HALF,
    fontFamily: appFonts.NunitoSemiBold,
    marginTop: windowHeight(0.2),
  },
  verticalLine: {
    height: windowHeight(1.8),
    borderColor: appColors.border,
    borderWidth: 0.3,
    width: 0,
    marginTop: 4,
    marginHorizontal: windowWidth(2),
    marginVertical: 7,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: windowHeight(0.8),
    width: windowWidth(57),
  },
  itemSeparator: {
    paddingBottom: windowHeight(2),
  },
});
