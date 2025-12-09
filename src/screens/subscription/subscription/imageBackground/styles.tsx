import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageStyle: {
    height: windowHeight(35),
    width: windowWidth(100),
    resizeMode: 'cover',
  },
  innerContainer: {
    position: 'absolute',
  },
  crossContainer: {
    height: windowWidth(9),
    width: windowWidth(9),
    borderRadius: windowWidth(20),
    marginHorizontal: windowHeight(3),
    marginVertical: windowHeight(4),
    backgroundColor: '#FE782E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowWidth(5),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT5,
    textTransform: 'uppercase',
  },
  content: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT4,
    marginTop: windowHeight(1),
    textAlign: 'center',
    paddingHorizontal: windowHeight(4),
  },
});
