import appColors from '@theme/appColors';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {StyleSheet} from 'react-native';
import appFonts from '@src/theme/appFonts';
import { fontSizes } from '@theme/appConstant';

export const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(4),
  },
  mainContainer: {
    height: windowWidth(18),
    width: windowWidth(18),
    borderColor: appColors.primary,
    borderWidth: 1,
    bottom: windowHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.white,
  },
  sideBySideContainer: {
    flexDirection: 'row',  // Places items side by side
    alignItems: 'center',  // Aligns items vertically
    padding:15
  },
  mainView: {
    flex: 1,
    marginHorizontal: 5,  // Reduce horizontal margin to decrease the gap
  },
  imageStyle: {
    height: windowWidth(18),
    width: windowWidth(18),
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: appColors.primary,  // Customize according to your theme
    marginHorizontal: 10,  // Add some margin for spacing within the container
    marginBottom:20,
    paddingLeft:10,
    paddingBottom:10
  },
  error: {
    color: appColors.error,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginTop: 0.7,
  },
});
