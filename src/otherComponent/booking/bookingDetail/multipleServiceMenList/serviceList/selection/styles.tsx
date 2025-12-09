import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: windowWidth(35),
  },
  radioButton: {
    height: windowHeight(3),
    width: windowHeight(3),
    borderRadius: windowHeight(8),
    borderColor: appColors.border,
    borderWidth: 1,
  },
  activeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: windowWidth(35),
  },

  activeRadioButton: {
    height: windowHeight(3),
    width: windowWidth(6),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.lightOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: windowWidth(3.2),
    width: windowWidth(3.2),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.primary,
  },
  checkBox: {
    height: windowWidth(6),
    width: windowWidth(6),
    backgroundColor: appColors.white,
    borderRadius: windowWidth(1.2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: appColors.border,
    borderWidth: 1,
  },
});
