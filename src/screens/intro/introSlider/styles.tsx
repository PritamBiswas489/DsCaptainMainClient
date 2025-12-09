import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.boxBg,
    paddingBottom: windowHeight(4),
    borderBottomColor: appColors.border,
    borderBottomWidth: 1,
  },
  innerContainer: {
    height: windowHeight(24),
    width: windowWidth(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
