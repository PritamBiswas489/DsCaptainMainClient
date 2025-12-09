import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@src/theme/appColors';

export const styles = StyleSheet.create({
  inputStyle: {
    height: windowHeight(12),
    alignItems: 'flex-start',
    marginTop: windowHeight(1),
  },
  row: {
    flexDirection: 'row',
  },
  textContainerStyle: {
    fontSize: fontSizes.FONT4,
    width: windowWidth(38),
  },
  inputContainer: {
    width: windowWidth(41),
    height: windowHeight(6),
    marginVertical: windowWidth(2),
  },
  inputView: {
    height: windowHeight(12),
    alignItems: 'flex-start',
    marginTop: windowWidth(-2),
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: windowWidth(6),
    marginTop: windowWidth(2),
    marginBottom: windowWidth(1),
  },
  containerView: {
    width: windowWidth(50),
    height: windowHeight(6),
    marginVertical: windowWidth(2),
    marginRight: windowWidth(2),
  },
  dropDownContainerStyle: {
    width: windowWidth(29),
    marginHorizontal: 0,
    paddingHorizontal: windowWidth(2),
  },
  dropdownItemStyle: {
    fontSize: windowWidth(3.8),
  },
  textInput: {
    fontSize: fontSizes.FONT4,
    width: windowWidth(28),
  },
  dropdown: {
    width: windowWidth(90),
  },
  dropdownStyle: {
    marginHorizontal: 0,
    width: windowWidth(30),
    right: windowWidth(2),
  },
  balanceContainer: {
    marginTop: windowHeight(2),
    padding: windowHeight(2),
    borderRadius: 8,
    marginHorizontal:windowWidth(5)
  },
  balanceText: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: windowHeight(0.5),
    color:appColors.darkText
  },
});
