import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(3),
    backgroundColor: appColors.boxBg,
    borderRadius: windowHeight(1),
    borderWidth: 1,
    borderColor: appColors.border,
    elevation: 0.5,
    padding: windowHeight(2),
  },
  marginTop: {
    marginTop: windowHeight(3),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: windowWidth(4.2),
  },
  dot: {
    height: windowHeight(0.7),
    width: windowWidth(1.4),
    borderRadius: windowHeight(12),
    backgroundColor: appColors.darkText,
    marginHorizontal: windowWidth(2),
    marginTop: windowWidth(1),
  },
  time: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: windowWidth(3.6),
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: windowWidth(3.6),
    width: windowWidth(80),
    marginTop: windowHeight(0.8),
  },
  circleView: {
    height: windowWidth(9.5),
    width: windowWidth(9.5),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(1),
  },
  image: {
    height: windowHeight(20),
    width: windowWidth(30),
    resizeMode: 'contain',
    marginTop: windowHeight(1.2),
  },
  person: {
    height: windowHeight(10),
    width: windowWidth(10),
    resizeMode: 'contain',
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
