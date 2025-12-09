import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: windowWidth(3),
  },
  chartContainer: {
    borderColor: appColors.border,
    borderWidth: 1,

    borderRadius: windowWidth(2),
    paddingTop: windowWidth(2),
    backgroundColor: appColors.white,
    width: windowWidth(91),
    marginHorizontal: windowWidth(4),
  },
  mainContainer: {
    marginTop: windowHeight(3),
    borderColor: appColors.border,
    borderWidth: 1,
    paddingVertical: windowHeight(2),
    backgroundColor: appColors.boxBg,
    paddingBottom: windowHeight(3),
  },
  rowStyle: {
    marginTop: 0,
    marginHorizontal: windowWidth(3),
  },
});
