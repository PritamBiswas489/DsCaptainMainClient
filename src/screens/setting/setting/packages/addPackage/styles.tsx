import {windowHeight} from '@theme/appConstant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    marginTop: windowHeight(3),
  },
  inputStyle: {
    height: windowHeight(12),
    alignItems: 'flex-start',
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(2),
  },
});
