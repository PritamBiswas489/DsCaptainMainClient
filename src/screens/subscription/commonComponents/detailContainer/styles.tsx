import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(6),
    backgroundColor: appColors.boxBg,
    borderColor: appColors.border,
    borderWidth: 1,
    paddingHorizontal: windowHeight(3),
    marginVertical: windowHeight(3),
    borderRadius: windowWidth(2),
    paddingVertical: windowHeight(1),
    paddingTop: windowHeight(3),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: windowWidth(3.9),
    marginHorizontal: windowWidth(2),
  },
  separator: {
    paddingBottom: windowWidth(3),
  },
  mainContainer: {
    paddingBottom: windowWidth(4),
  },
});
