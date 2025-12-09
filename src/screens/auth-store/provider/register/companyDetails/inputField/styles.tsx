import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: windowWidth(2),
  },
  row: {
    flexDirection: 'row',
  },
  containerView: {
    width: windowWidth(50),
    height: windowHeight(6),
    marginVertical: windowWidth(2),
  },
  textContainerStyle: {
    fontSize: fontSizes.FONT4,
    width: windowWidth(44),
  },
  dropDownContainerStyle: {
    width: windowWidth(28),
    marginHorizontal: 0,
    paddingHorizontal: windowWidth(2),
  },
  dropdownItemStyle: {
    fontSize: windowWidth(3.8),
    color: appColors.lightText,
  },
});
