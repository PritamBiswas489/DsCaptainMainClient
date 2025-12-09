import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.boxBg,
    borderBottomLeftRadius: windowHeight(3),
    borderBottomRightRadius: windowHeight(3),
    paddingHorizontal: windowHeight(1),
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
    height: windowWidth(12),
    width: windowWidth(12),
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
    marginHorizontal: windowHeight(3),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerStyle: {
    width: windowWidth(60),
    height: windowHeight(6),
    marginTop: windowWidth(1),
    bottom: windowWidth(0.3),
    left: 10,
  },
  rowView: {
    flexDirection: 'row',
  },
  backArrowStyle: {
    height: windowWidth(12),
    width: windowWidth(12),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: appColors.border,
    borderWidth: 1,
    marginTop: windowWidth(1),
    left: windowWidth(2),
  },
});
