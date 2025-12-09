import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  inputContainer: {
    marginTop: windowWidth(2),
    marginHorizontal: 0,
    marginBottom: windowWidth(3),
  },
  container: {
    marginHorizontal: windowWidth(5),
    marginTop: windowHeight(2),
  },
  blanView:{
    height:windowHeight(17)
  }
});
