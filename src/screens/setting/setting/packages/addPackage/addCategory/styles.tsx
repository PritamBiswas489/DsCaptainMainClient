import {StyleSheet} from 'react-native';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  inputContainer: {
    marginTop: windowHeight(2),
    backgroundColor: appColors.textInput,

    borderRadius: windowHeight(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    paddingHorizontal: windowWidth(5),
    paddingVertical: windowHeight(1.5),
    width: '87%',
    color: appColors.darkText,
  },
  addContainer: {
    height: windowHeight(4),
    width: windowWidth(8),
    backgroundColor: appColors.primary,
    borderRadius: windowHeight(0.8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginHorizontal: windowWidth(6),
    marginBottom: windowWidth(1),
  },
});
