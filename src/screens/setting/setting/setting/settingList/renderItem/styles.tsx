import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4,
    textTransform: 'uppercase',
    marginBottom: windowWidth(1),
    marginTop: windowHeight(2),
    marginHorizontal: windowWidth(2),
    paddingHorizontal: windowWidth(3),
  },
  iconContainer: {
    height: windowHeight(5),
    width: windowWidth(10),
    borderRadius: windowWidth(2),
    marginTop: windowHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: appColors.border,
    borderWidth: 0.7,
    marginRight: windowWidth(4),
    backgroundColor: appColors.white,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: windowWidth(2),
    paddingHorizontal: windowHeight(2),
    justifyContent: 'center',
  },
  name: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginTop: windowHeight(2),
  },
  border: {
    borderColor: appColors.border,
    borderWidth: 0.3,
    marginTop: windowHeight(2),
    marginHorizontal: windowHeight(2),
  },
  subTitle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: windowWidth(3.8),
  },
  providerContainer: {
    marginTop: windowHeight(3),
    flexDirection: 'row',
    marginHorizontal: windowWidth(5),
    backgroundColor: appColors.white,
    paddingVertical: windowHeight(2),
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: windowHeight(1),
    paddingHorizontal: windowWidth(2),
  },

  divider: {
    height: windowWidth(7),
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    borderWidth: 1,
  },
  container: {
    paddingHorizontal: windowWidth(2),
  },
  iconView: {
    paddingHorizontal: windowWidth(5),
    marginTop: windowWidth(3),
  },
});
