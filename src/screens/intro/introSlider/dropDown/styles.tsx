import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  topView: {
    position: 'absolute',
    top: windowHeight(4),
  },
  img: {
    height: windowHeight(3),
    width: windowHeight(4),
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: windowHeight(1),
    marginHorizontal: windowWidth(6),
    backgroundColor: appColors.white,
    paddingHorizontal: windowWidth(2),
    paddingVertical: windowHeight(1),
    borderRadius: windowHeight(10),
    borderWidth: 1.3,
    borderColor: appColors.border,
  },
  modalView: {
    marginHorizontal: windowHeight(0),
    backgroundColor: appColors.white,
    shadowOpacity: 0.25,
    shadowRadius: windowHeight(2),
    elevation: windowWidth(2),
    width: windowWidth(31),
  },
  countryView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: windowHeight(1),
    marginHorizontal: windowWidth(6),
    backgroundColor: appColors.white,
    paddingHorizontal: windowWidth(3),
    paddingVertical: windowHeight(1),
    borderRadius: windowHeight(10),
  },
  textStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
  },
  mainRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: windowWidth(100),
  },
  dropDownView: {
    marginHorizontal: 3,
  },
});
