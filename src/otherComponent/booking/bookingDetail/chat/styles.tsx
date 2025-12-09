import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    height: windowHeight(11),
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: windowWidth(20),
  },
  textStyle: {
    color: appColors.success,
    fontSize: fontSizes.FONT3HALF,
    marginHorizontal: windowWidth(1),
  },
  mainView: {
    flex: 1,
    width: '100%',
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: windowHeight(20),
    borderTopRightRadius: windowHeight(20),
    backgroundColor: appColors.white,
  },
  innerContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: appColors.white,
  },
});
