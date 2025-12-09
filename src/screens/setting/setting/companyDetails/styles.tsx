import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(6),
  },
  rowStyle: {
    marginBottom: 0,
  },
  title: {
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(5),
  },
});
