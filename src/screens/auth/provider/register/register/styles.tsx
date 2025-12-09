import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    flex: 1,
    borderBottomLeftRadius: windowWidth(8),
    borderBottomRightRadius: windowWidth(8),
    borderWidth: 1,
    paddingBottom: windowWidth(3),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(4),
  },
  containerStyle: {
    marginHorizontal: windowWidth(4),
  },
});
