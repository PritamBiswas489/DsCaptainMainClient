import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: windowWidth(88),
  },
  titleStyle: {
    fontSize: windowWidth(4.8),
    fontFamily: appFonts.NunitoExtraBold,
    textAlign: 'center',
    marginHorizontal: windowHeight(7),
  },
  content: {
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4HALF,
    color: appColors.primary,
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  crossView: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth(10),
  },
});
