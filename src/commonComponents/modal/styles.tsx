import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.modal,
  },
  containerView: {
    backgroundColor: appColors.white,
    width: '90%',
    paddingHorizontal: windowWidth(2),
    borderRadius: windowHeight(1.4),
    paddingBottom: windowHeight(1),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(2),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '97%',
    marginTop: windowHeight(1),
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT5HALF,
  },
  content: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT4HALF,
    textAlign: 'center',
    marginBottom: windowHeight(0.8),
    marginTop: windowHeight(1.6),
  },
  circleView: {
    height: windowHeight(15),
    width: windowHeight(15),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.white,
    bottom: windowHeight(1),
  },
  top: {
    marginTop: windowHeight(8),
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: windowWidth(26),
    width: windowWidth(26),
    backgroundColor: appColors.lightGreen,
    position: 'absolute',
    marginTop: windowHeight(12),
    borderRadius: windowHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    paddingBottom: windowHeight(1),
  },
  imageStyle: {
    height: windowHeight(16),
    width: windowWidth(16),
    resizeMode: 'contain',
  },
  buttonStyle: {
    paddingHorizontal: windowHeight(5),
    height: windowWidth(12),
    borderRadius: windowWidth(6),
  },
  buttonTextStyle: {
    color: appColors.white,
  },
  button1TextStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    paddingHorizontal: windowWidth(1),
    borderRadius: windowWidth(2),
  },
  buttonContainerStyle: {
    height: windowWidth(12),
    borderRadius: windowWidth(6),
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: windowWidth(4),
  },
});
