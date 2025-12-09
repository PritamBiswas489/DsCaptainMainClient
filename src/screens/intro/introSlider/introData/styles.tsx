import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight, fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  imageContainer: {
    width: windowWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight(40),
    marginTop: windowHeight(5),
  },
  marginTop: {
    marginTop: windowHeight(26),
  },
  vectorImg: {
    height: windowHeight(54),
    width: windowWidth(100),
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vectorView: {
    position: 'absolute',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  marginView: {
    right: windowWidth(26),
    top: windowHeight(5),
  },
  leafImg: {
    height: windowHeight(78),
    width: windowWidth(45),
    resizeMode: 'contain',
    top: windowHeight(10),
  },
  leafImg1: {
    height: windowHeight(22),
    width: windowWidth(113),
    resizeMode: 'contain',
    right: 4,
    top: windowHeight(12),
  },
  position: {
    position: 'absolute',
  },
  image: {
    width: windowWidth(98),
    resizeMode: 'contain',
    top: windowHeight(12),
    height: windowHeight(47),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    bottom: windowHeight(5),
    paddingHorizontal: windowWidth(7),
  },
  vector5: {
    height: windowHeight(4),
    width: windowWidth(4),
    resizeMode: 'contain',
  },
  container: {
    alignItems: 'center',
    marginTop: windowHeight(8),
    paddingBottom: windowWidth(9),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT5,
    textTransform: 'uppercase',
  },
});
