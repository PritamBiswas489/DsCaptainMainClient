import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.boxBg,
    borderBottomLeftRadius: windowHeight(3),
    borderBottomRightRadius: windowHeight(3),
    padding: windowHeight(3),
    borderWidth: 1,
    borderColor: appColors.border,
    elevation: 0.5,
    paddingVertical: windowWidth(5),
    paddingTop: windowHeight(3),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  circleView: {
    height: windowWidth(11.4),
    width: windowWidth(11.4),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: appColors.border,
    borderWidth: 1,
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoExtraBold,
    fontSize: fontSizes.FONT5,
    marginHorizontal: windowWidth(3.7),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
