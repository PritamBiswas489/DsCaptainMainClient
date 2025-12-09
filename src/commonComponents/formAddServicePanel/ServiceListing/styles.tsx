import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';

export const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 20,
    paddingBottom: windowHeight(3),
  },
  itemSeparator: {
    marginHorizontal: 10,
  },
  container: {
    marginTop: windowHeight(3),
  },
});
