import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: windowHeight(8),
    backgroundColor: appColors.lightGreen,
    borderColor: appColors.success,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowWidth(1),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    color: appColors.success,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    width: windowWidth(80),
  },
  animatedContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100, // Half of the width and height to make it a circle
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
  },
});
