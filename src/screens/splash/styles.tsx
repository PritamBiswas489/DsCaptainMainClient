import appColors from '@theme/appColors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.darkText,
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  spinnerStyle: {
    position: 'absolute', // Ensures the spinner is positioned absolutely
    top: '50%', // Adjust to your desired position
    left: '50%', // Adjust to your desired position
    marginTop: 80, // Half of spinner height to center it vertically
    marginLeft: -25, // Half of spinner width to center it horizontally
  },
});
