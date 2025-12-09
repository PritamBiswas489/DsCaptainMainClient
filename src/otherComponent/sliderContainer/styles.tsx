import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(2.3),
    marginTop: windowHeight(2.5),
  },
  contentContainerStyle: {
    marginHorizontal: 10,
  },
  bannerBg: {
    height: windowHeight(26),
    width: windowWidth(90),
    resizeMode: 'cover',
    marginRight: windowWidth(5),
    borderRadius: windowWidth(1),
  },
  activeDotStyle: {
    height: windowWidth(2),
    width: windowWidth(2),
    left: 3,
  },
  inActiveDotStyle: {
    height: windowWidth(2),
    width: windowWidth(2),
    borderRadius: windowHeight(4),
    marginHorizontal: windowWidth(0),
    backgroundColor: appColors.border,
  },
});
