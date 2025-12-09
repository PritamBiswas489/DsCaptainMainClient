import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    top: windowHeight(-1),
  },
  countyContainer: {
    marginTop: windowWidth(5),
    height: windowWidth(12),
  },
  row: {
    flexDirection: 'row',
  },
  containerView: {
    width: windowWidth(55),
    height: windowHeight(6),
    marginTop: windowWidth(2),
  },
  textContainerStyle: {
    fontSize: fontSizes.FONT4,
    width: windowWidth(44),
  },
  inputStyle: {
    height: windowHeight(12),
    alignItems: 'flex-start',
  },
  passwordInput: {
    height: windowHeight(6),
  },
  dropdownStyle: {
    right: windowWidth(7),
    width: windowWidth(30),
    top: windowWidth(1),
  },
  containerStyle: {
    width: windowWidth(90),
    marginTop: windowWidth(4),
  },
});
