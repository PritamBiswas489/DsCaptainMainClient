import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: appColors.white,
    paddingHorizontal: windowWidth(10),
    paddingVertical: windowWidth(4),
    borderRadius: 10,
    elevation: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainView: {
    height: windowHeight(4),
    width: windowHeight(4),
    backgroundColor: appColors.boxBg,
    borderRadius: windowWidth(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(3),
  },

  separator: {
    height: windowWidth(3),
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});
