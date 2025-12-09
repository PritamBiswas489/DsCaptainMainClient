import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowHeight(3),
    marginTop: windowHeight(3),
    borderColor: appColors.border,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    backgroundColor: appColors.boxBg,
    paddingTop: windowHeight(2),
    paddingBottom: windowHeight(1),
  },
  dashBoardRow: {
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    borderWidth: 1,
    width: windowHeight(6),
    height: windowHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth(3),
  },
  textStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: windowWidth(3.6),
  },
  totalService: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
    marginTop: windowWidth(1),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalLine: {
    marginRight: windowHeight(3),
  },
  vertical: {
    marginTop: windowHeight(9),
  },
});
