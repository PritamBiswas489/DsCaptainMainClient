import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

    marginTop: windowWidth(0),
    marginBottom: windowWidth(1),
  },
  title: {
    color: appColors.darkText,
    marginTop: windowWidth(4),
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  mainContainer: {
    backgroundColor: appColors.boxBg,
    borderRadius: windowWidth(4),
    paddingHorizontal: windowWidth(4),
    marginTop: windowHeight(3),
    paddingBottom: windowWidth(6),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputStyle: {
    height: windowHeight(13),
    alignItems: 'flex-start',
    backgroundColor: appColors.white,
    marginHorizontal: 0,
    marginTop: windowHeight(1),
  },
  mainView: {
    marginHorizontal: 0,
    backgroundColor: appColors.white,
  },
  inputContainer: {
    marginTop: windowWidth(2),
    marginHorizontal: 0,
  },
  containerStyle: {
    marginHorizontal: 0,
    marginTop: windowWidth(1),
  },

  radioContainerStyle: {
    marginTop: windowHeight(1),
  },
  buttonStyle: {
    paddingHorizontal: windowHeight(6),
    height: windowWidth(12),
    right: windowWidth(2),
    borderRadius: windowWidth(2),
  },
  buttonTextStyle: {
    color: appColors.white,
  },
  button1TextStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    paddingHorizontal: windowWidth(4.6),
    borderRadius: windowWidth(2),
  },
  buttonContainerStyle: {
    height: windowWidth(12),
    right: windowWidth(2),
    borderRadius: windowWidth(2),
  },
  pickerStyle: {
    width: windowWidth(72),
    bottom: windowWidth(13),
    left: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  dropdownStyle: {
    width: windowWidth(80),
    marginHorizontal: 0,
    marginTop: windowHeight(1),
  },
});
