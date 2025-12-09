import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  buttonContainer: {
    height: windowHeight(10),
    bottom: windowWidth(3),
  },
  serachContainer: {
    width: windowWidth(54),
  },
});
