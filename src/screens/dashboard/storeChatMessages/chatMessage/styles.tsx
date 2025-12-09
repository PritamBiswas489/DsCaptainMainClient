import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  myMessageContainer: {
    backgroundColor: appColors.boxBg,
    paddingHorizontal: windowHeight(3),
    maxWidth: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: windowHeight(2),
    borderTopEndRadius: windowWidth(5),
    borderTopLeftRadius: windowWidth(5),
    paddingVertical: windowWidth(3),
  },
  message: {
    color: appColors.white,
    fontFamily: appFonts.NunitoMedium,
    opacity: 0.9,
    fontSize: fontSizes.FONT4HALF,
  },
  dateTime: {
    fontFamily: appFonts.NunitoRegular,
    color: appColors.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowWidth(1),
  },
  imageStyle: {
    height: windowHeight(10),
    width: windowWidth(18),
    resizeMode: 'contain',
    marginTop: windowHeight(2),
  },
  timeView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginBottom: windowHeight(2),
  },
});
