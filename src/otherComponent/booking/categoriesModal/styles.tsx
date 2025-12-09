import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: windowHeight(2),
    marginHorizontal: 0,
    backgroundColor: appColors.textInput,
    height: windowWidth(14),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    paddingHorizontal: windowWidth(6),
    marginTop: windowWidth(3),
  },
  blankView: {
    height: windowHeight(6),
  },
});
