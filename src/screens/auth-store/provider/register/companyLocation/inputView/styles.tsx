import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  inputStyle: {
    width: windowWidth(42),
    height: windowHeight(6),
  },
  textContainerStyle: {
    fontSize: fontSizes.FONT4,
  },
  row: {
    flexDirection: 'row',
  },
  lineView: {
    marginHorizontal: windowWidth(4),
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
  container: {
    flexDirection: 'row',
    marginTop: windowWidth(1),
  },
});
