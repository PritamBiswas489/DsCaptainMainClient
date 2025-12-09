import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  paddingBottom: {
    paddingBottom: windowHeight(2.6),
  },
  margin: {
    paddingHorizontal: windowWidth(4),
  },
  otpTextInput: {
    backgroundColor: appColors.textInput,
    borderRadius: windowWidth(2),
    borderBottomColor: appColors.white,
    borderBottomWidth: 0,
    width: windowWidth(13),
    right: windowWidth(2),
    height: windowHeight(6.3),
  },
  blankView: {
    height: windowHeight(11),
  },
});
