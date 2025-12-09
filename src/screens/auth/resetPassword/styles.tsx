import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  paddingBottom: {
    paddingBottom: windowHeight(2.6),
  },
  marginTop: {
    marginTop: windowHeight(1),
  },
});
