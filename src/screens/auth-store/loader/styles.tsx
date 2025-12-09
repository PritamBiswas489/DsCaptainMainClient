import {windowHeight, windowWidth} from '@theme/appConstant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loaderStyle: {
    maxHeight: windowHeight(40),
    maxWidth: windowWidth(40),
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
