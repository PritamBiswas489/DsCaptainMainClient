import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColors.boxBg,
    zIndex: 1,
    marginTop: windowWidth(4),
    paddingHorizontal: windowHeight(2),
    paddingVertical: windowHeight(1.9),
    marginHorizontal: windowWidth(5),
    borderRadius: windowWidth(2),
  },
  buttonText: {
    flex: 1,
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: appColors.white,
    width: '90%',
    marginHorizontal: windowWidth(5),
    marginTop: windowHeight(1),
    elevation: 1,
    borderRadius: windowWidth(2),
    paddingHorizontal: windowWidth(2),
    paddingBottom: windowWidth(0.7),
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  label: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  iconContainer: {
    marginRight: windowWidth(3),
  },
  separator: {
    borderWidth: 0.3,
    borderColor: appColors.border,
  },
  error: {
    color: appColors.error,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginTop: 0.7,
    
  },
});
