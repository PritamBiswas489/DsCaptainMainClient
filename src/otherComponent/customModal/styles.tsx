import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth, fontSizes} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    alignItems: 'flex-end',
    top: windowHeight(13),
  },
  title: {
    fontSize: fontSizes.FONT4,
    fontFamily: appFonts.NunitoSemiBold,
    color: appColors.darkText,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: appColors.white,
    width: '120%',
    shadowColor: appColors.black,
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
    borderRadius: windowHeight(1),
    elevation: 2,
    right: windowWidth(0),
    marginHorizontal: windowWidth(4),
  },
  overlay: {
    width: '30%',
    height: '100%',
  },
  item: {
    paddingVertical: windowWidth(3),
    paddingHorizontal: windowWidth(5),
  },
  label: {
    fontSize: fontSizes.FONT4,
    fontFamily: appFonts.NunitoMedium,
    color: appColors.darkText,
  },
  separator: {
    width: '80%',
    backgroundColor: appColors.border,
    alignSelf: 'center',
    height: 1,
  },
});
