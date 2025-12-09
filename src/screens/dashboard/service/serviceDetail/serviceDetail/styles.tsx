import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: appColors.boxBg,
    flex: 1,
    marginTop: windowHeight(2.6),
    paddingBottom: windowHeight(1.6),
    borderBottomColor: appColors.border,
    borderBottomWidth: 1,
  },
  innerContainer: {
    padding: windowHeight(2),
    borderColor: appColors.border,
    borderWidth: 1.4,
    borderTopLeftRadius: windowHeight(2.4),
    borderTopRightRadius: windowHeight(2.4),
    borderBottomWidth: 0,
    paddingHorizontal: windowWidth(5),
  },
  titleContainer: {
    marginTop: windowHeight(1.5),
  },
});
