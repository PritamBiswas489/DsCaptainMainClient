import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 18,
  },
  innerContainer: {
    height: windowHeight(5.6),
    width: windowWidth(10.8),
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(1.3),
  },
  mainView: {
    marginHorizontal: 8,
  },
});
