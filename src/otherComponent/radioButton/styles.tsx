import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    marginRight: windowWidth(8),
    marginTop: windowHeight(2),
    alignItems: 'center',
  },
  categoryView: {
    marginHorizontal: windowWidth(7),
    marginBottom: windowHeight(1.5),
  },
  radioBtn: {
    height: windowHeight(2.5),
    width: windowHeight(2.5),
    borderColor: appColors.border,
    borderRadius: windowHeight(10),
    borderWidth: 1.2,
    marginRight: windowWidth(2.4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: windowHeight(1.2),
    width: windowHeight(1.2),
    backgroundColor: appColors.primary,
    borderRadius: windowHeight(2),
  },
  textContainerStyle: {
    fontSize: fontSizes.FONT4,
  },
  inputStyle: {
    width: windowWidth(42),
    height: windowHeight(6),
  },
  containerStyle: {
    width: windowWidth(47.3),
    fontSize: fontSizes.FONT4,
    right: windowWidth(2),
  },
  rowStyle: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(5),
    right: windowWidth(1.2),
  },
  container: {
    height: windowWidth(24),
  },
});
