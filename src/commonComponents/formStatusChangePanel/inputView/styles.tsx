import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';

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
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007BFF', // Button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10, // Space above and below the button
    width: windowWidth(50), // Adjust width as needed
    alignSelf: 'center', // Center button horizontally
  },

  addButtonText: {
    color: '#fff', // Text color
    fontSize: 16, // Adjust font size as needed
    marginLeft: 8, // Space between icon and text
    fontWeight: 'bold',
  },
});
