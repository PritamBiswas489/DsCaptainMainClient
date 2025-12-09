import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  heading: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  containerStyle: {
    height: windowHeight(12),
  },
  horizontalLine: {
    marginHorizontal: windowWidth(6),
    marginBottom: 0,
    borderWidth: 0.7,
    marginTop: windowHeight(3),
  },
  container: {
    margin: windowHeight(3),
  },
  expertise: {
    marginHorizontal: windowHeight(3),
  },
  row: {
    flexDirection: 'row',
  },
});
