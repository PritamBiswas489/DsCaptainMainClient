import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerContainer: {
    marginTop: windowHeight(3),
  },
  border: {
    height: windowWidth(2.9),
    width: windowWidth(2.9),
    borderRadius: windowHeight(12),
    marginRight: windowWidth(2),
    borderColor: appColors.darkText,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDot: {
    height: windowWidth(1.5),
    width: windowWidth(1.5),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.darkText,
    position: 'absolute',
  },
  inActiveDot: {
    height: windowWidth(1.9),
    width: windowWidth(7),
    borderRadius: windowHeight(10),
    marginRight: windowWidth(2),
    backgroundColor: appColors.inActiveDot,
  },
});
