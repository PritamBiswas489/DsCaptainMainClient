import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: windowWidth(3),
  },
  title: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(6),
  },
  blankView: {
    height: windowWidth(4),
  },
  contentContainerStyle: {
    paddingBottom: windowWidth(4),
  },
  containerStyle: {
    width: windowWidth(50),
  },
  dropdown: {
    height: windowHeight(6.4),
    width: windowWidth(50),
    bottom: windowHeight(1),
    paddingHorizontal: 0,
  },
});
