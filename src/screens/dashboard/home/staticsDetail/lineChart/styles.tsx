import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';

export const styles = StyleSheet.create({
  container: {
    width: windowWidth(20),
    paddingVertical: 6,
    borderRadius: windowWidth(2),
    backgroundColor: appColors.primary,
  },
  textView: {
    height: 90,
    width: 100,
    justifyContent: 'center',
    marginTop: -30,
    marginLeft: -40,
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
    marginBottom: 6,
    textAlign: 'center',
  },
  labelText: {
    color: appColors.lightText,
    width: windowWidth(9),
    fontSize: fontSizes.FONT3,
  },
  containerView: {
    paddingVertical: windowHeight(3),
    // paddingLeft: 3,
    overflow:'scroll'
  },
});
