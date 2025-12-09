import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(2),
    marginVertical: windowHeight(1),
  },
  image: {
    height: windowHeight(12.5),
    width: windowWidth(42),
    resizeMode: 'stretch',
  },
  user: {
    height: windowWidth(9),
    width: windowWidth(8),
    resizeMode: 'cover',
    borderRadius: windowHeight(1),
    left: windowWidth(5.3),
    top: windowWidth(5),
  },
  listView: {
    marginHorizontal: windowWidth(2.5),
  },
  viewContainer: {
    position: 'absolute',
    marginVertical: windowWidth(3),
    marginHorizontal: windowWidth(4),
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: windowWidth(35),
  },
  radioButton: {
    height: windowHeight(3),
    width: windowHeight(3),
    borderRadius: windowHeight(8),
    borderColor: appColors.border,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    marginTop: windowWidth(1),
  },
  name: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginTop: windowWidth(1),
  },
  experience: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT3HALF,
  },
  rate: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT3HALF,
    marginVertical: windowWidth(0.1),
  },
  activeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: windowWidth(35),
  },

  activeRadioButton: {
    height: windowHeight(3),
    width: windowWidth(6),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.lightOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: windowWidth(3.2),
    width: windowWidth(3.2),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.primary,
  },
  checkBox: {
    height: windowWidth(6),
    width: windowWidth(6),
    backgroundColor: appColors.white,
    borderRadius: windowWidth(1.2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: appColors.border,
    borderWidth: 1,
  },
});
