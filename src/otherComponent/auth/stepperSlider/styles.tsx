import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export const styles = StyleSheet.create({
  indicator: {
    height: windowHeight(0.6),
    borderRadius: windowHeight(3),
    backgroundColor: appColors.border,
    width: windowWidth(27.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:windowWidth(2)
  },
  currentIndicator: {
    backgroundColor:appColors.success,
    height: windowHeight(0.6),
  },
  indicatorText: {
    color: 'white',
    fontWeight: 'bold',
  },
  progressBar: {
    height: 4,
    marginTop: 5,
  },
  stepContainer: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  buttonContainer: {
    flex: 1,
    bottom: windowHeight(20),
    position: 'absolute',
  },

  border: {
    height: windowHeight(11.8),
    width: '100%',
    backgroundColor: appColors.border,
  }
});
