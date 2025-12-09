import {StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: appColors.boxBg,
    flex: 1,
    marginTop: windowHeight(1),
    paddingBottom: windowHeight(1.6),
    borderBottomColor: appColors.border,
    borderBottomWidth: 1,
  },
  innerContainer: {
    paddingTop: windowHeight(2),
    borderColor: appColors.border,
    borderWidth: 1.4,
    borderTopLeftRadius: windowHeight(2.4),
    borderTopRightRadius: windowHeight(2.4),
    borderBottomWidth: 0,
    paddingBottom: windowHeight(1),
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(5),
  },
});
