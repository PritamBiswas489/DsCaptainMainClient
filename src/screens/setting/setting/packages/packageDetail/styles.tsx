import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  containerStyle: {
    height: windowHeight(12),
  },
  titleStyle: {
    marginHorizontal: windowHeight(2),
    marginTop: windowHeight(3),
    marginBottom: windowWidth(3),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(2),
  },
});
