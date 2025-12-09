import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: windowWidth(5),
  },
  title: {
    color: appColors.black,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: windowWidth(3.9),
    marginTop: windowWidth(5),
  },

  container: {
    marginVertical: windowHeight(2),
    marginTop: windowHeight(2),
  },
  separator: {
    marginHorizontal: windowHeight(0.71),
  },
  inputContainer: {
    backgroundColor: appColors.textInput,
    flexDirection: 'row',
    paddingVertical: windowWidth(0.5),
    marginVertical: windowWidth(1),
    borderRadius: windowWidth(3),
    alignItems: 'center',
    paddingHorizontal: windowWidth(4),
  },
  textInput: {
    fontFamily: appFonts.NunitoMedium,
    fontSize: windowWidth(3.9),
    width: windowWidth(80),
    paddingHorizontal: windowWidth(2),
    color: appColors.darkText,
  },
});
