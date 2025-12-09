import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.modal,
  },
  containerView: {
    backgroundColor: appColors.white,
    width: '90%',
    paddingHorizontal: windowWidth(2),
    borderRadius: windowHeight(1.4),
    paddingBottom: windowHeight(1),
  },
});
