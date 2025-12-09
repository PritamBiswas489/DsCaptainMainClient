import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const tabStyle = StyleSheet.create({
  tabContainer: {
    height: windowHeight(9),
    width: '100%',
    backgroundColor: appColors.white,
    elevation: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: windowWidth(2.6),
    position: 'absolute',
    bottom: 0,
  },
  row: {
    flexDirection: 'row',
    height: windowHeight(10),
    alignItems: 'center',
    marginTop: windowHeight(3),
    bottom: windowHeight(1.6),
  },
  bottomContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    height: windowWidth(14),
    width: windowWidth(14),
    borderRadius: windowHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
    bottom: windowHeight(3),
  },
  label: {
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT3HALF,
    marginTop: windowHeight(0.5),
  },
  cartView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
