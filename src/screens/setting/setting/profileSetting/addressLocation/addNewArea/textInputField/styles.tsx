import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  inputStyle: {
    width: windowWidth(42),
  },
  textContainerStyle: {
    fontSize: fontSizes.FONT4,
    width: windowWidth(30),
  },
  inputContainer: {
    width: windowWidth(43),
    right: windowWidth(2),
    height: windowWidth(14),
  },
  textContainerView: {
    height: windowHeight(6),
    fontSize: fontSizes.FONT4,
    width: windowWidth(30),
    right: 4,
  },
});
