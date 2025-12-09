import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdown: {
    height: windowHeight(7),
    backgroundColor: appColors.boxBg,
    borderRadius: 12,
    padding: 12,
    width: windowWidth(89.2),
    marginHorizontal: windowWidth(5),
    marginTop: windowHeight(1),
  },
  placeholderStyle: {
    fontSize: 16,
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
  },
  selectedTextStyle: {
    fontSize: fontSizes.FONT4,
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: fontSizes.FONT4,
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: windowWidth(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: appColors.white,
    shadowColor: '#000',
    marginTop: windowWidth(4),
    marginHorizontal: windowWidth(3),
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: fontSizes.FONT4,
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
  },
  iconView: {
    marginHorizontal: windowWidth(1),
  },
  innerContainer: {
    marginBottom: windowHeight(0.5),
  },
});
