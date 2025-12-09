import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth(4),
    flexDirection: 'row',
    backgroundColor: appColors.white,
    borderRadius: windowWidth(3),
    paddingHorizontal: windowWidth(2),
    justifyContent: 'space-between',
    paddingVertical: windowWidth(3),
    marginTop: 4,
    borderColor: appColors.border,
    borderWidth: 1,
  },
  image: {
    height: windowHeight(8.8),
    width: windowWidth(20),
    resizeMode: 'contain',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  mainView: {
    backgroundColor: appColors.border,
    borderRadius: windowWidth(1.6),
    height: windowWidth(7.3),
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth(7.3),
    marginTop: 1,
  },
  name: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
  },
  service: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT3HALF,
  },
  containerView: {
    flexDirection: 'column',
    width: windowWidth(18),
    justifyContent: 'space-between',
  },
  messageContainer: {
    alignItems: 'flex-end',
    marginTop: 11,
    marginHorizontal: windowWidth(2),
  },
  member: {
    marginTop: windowWidth(2),
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
  },
  textContainer: {
    marginHorizontal: windowWidth(2),
  },
  message: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    textDecorationLine: 'underline',
  },
  separator: {
    marginBottom: windowWidth(4),
  },
});
