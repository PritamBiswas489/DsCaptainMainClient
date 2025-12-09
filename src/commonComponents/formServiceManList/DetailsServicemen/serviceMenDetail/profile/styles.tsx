import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    marginVertical: windowWidth(6),
  },
  innerContainer: {
    backgroundColor: appColors.ratingBg,
    paddingVertical: windowHeight(4),
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: windowHeight(2),
  },
  personImg: {
    height: windowHeight(9),
    width: windowHeight(9),
    resizeMode: 'contain',
    borderRadius: windowHeight(10),
    bottom: windowHeight(3.7),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  review: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginHorizontal: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: appColors.boxBg,
    borderColor: appColors.border,
    borderWidth: 1,
    padding: windowHeight(1.4),
    borderRadius: windowHeight(1),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  iconContainer: {
    marginHorizontal: windowWidth(1),
    marginTop: windowHeight(0.5),
  },
  address: {
    bottom: windowHeight(0.3),
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(1),
  },
});
