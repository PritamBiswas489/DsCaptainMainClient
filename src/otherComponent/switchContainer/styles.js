import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default switchStyles = StyleSheet.create({
  switch: {
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight(2),
    width: windowWidth(4),
    borderRadius: windowHeight(10),
    bottom: 0.5,
  },
  switchText: {
    fontSize: fontSizes.FONT10,
    color: appColors.white,
    fontFamily: appFonts.LatoMedium,
  },
  containerStyle: {
    marginTop: windowHeight(1),
  },
});
