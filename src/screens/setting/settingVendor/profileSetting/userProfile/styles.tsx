import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(3.4),
  },
  image: {
    height: windowHeight(12),
    width: windowWidth(25),
    resizeMode: 'contain',
  },
  imageContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  iconView: {
    bottom: windowHeight(3.4),
    left: windowWidth(2),
    backgroundColor: appColors.white,
    height: windowHeight(4),
    width: windowHeight(4),
    borderRadius: windowWidth(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: appColors.primary,
    borderWidth: 1,
  },
});
