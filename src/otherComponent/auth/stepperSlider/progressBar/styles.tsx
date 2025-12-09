import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export const styles = StyleSheet.create({
  progressContainer: {
    backgroundColor: appColors.white,
    height: windowHeight(2),
    marginHorizontal: windowWidth(1.2),
  },
  progressIndicatorContainer: {
    flexDirection: 'row',
    marginHorizontal: windowHeight(1),
    marginTop: 8,
    alignItems: 'center',
  },
  indicator: {
    height: windowHeight(3.5),
    borderRadius: windowHeight(3),
    backgroundColor: appColors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  currentIndicator: {
    backgroundColor: appColors.success,
    height: windowHeight(3.5),
  },
  indicatorText: {
    color: 'white',
    fontWeight: 'bold',
  },
  progressBar: {
    height: 4,
    backgroundColor: appColors.success,
    marginTop: 5,
  },
  stepContainer: {
    flex: 1,
    width: windowWidth(100),
  },
  container: {
    flex: 1,
  },
});
