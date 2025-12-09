import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: appColors.border,
    borderTopWidth: 1,
    marginTop: windowHeight(1),
    marginBottom: windowHeight(4),
  },
});
