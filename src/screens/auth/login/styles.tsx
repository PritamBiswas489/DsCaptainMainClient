import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  forgotView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: windowWidth(6),
    paddingBottom: windowHeight(2),
  },
  forgotText: {
    fontFamily: appFonts.NunitoSemiBold,
    color: appColors.primary,
    fontSize: windowWidth(4.3),
  },

  contentContainerStyle: {
    paddingBottom: windowHeight(6),
  },
  paddingBottom: {
    paddingBottom: windowHeight(2.6),
  },
  labelText: {
    fontFamily: appFonts.NunitoMedium,
  },
  buttonStyle: {
    borderColor: appColors.primary,
    borderWidth: 1,
  },
  buttonContainer: {
    height: windowHeight(20),
  },
  buttonView: {
    height: windowHeight(23),
  },
});
