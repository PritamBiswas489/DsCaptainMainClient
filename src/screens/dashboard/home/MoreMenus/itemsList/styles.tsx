import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight(2),
    marginHorizontal: windowWidth(3),
  },
  containerStyle: {
    paddingBottom: windowHeight(18),
  },
  iconContainer: {
    backgroundColor: appColors.boxBg,
    paddingVertical: windowHeight(2.3),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: windowHeight(1),
    borderRadius: windowHeight(2),
    paddingHorizontal: windowWidth(4.7),
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: appFonts.NunitoMedium,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: windowWidth(3),
  },

  row: {
    flexDirection: 'row',
  },
  iconView: {
    backgroundColor: appColors.boxBg,
    padding: windowHeight(1.4),
    borderRadius: windowHeight(1),
    marginTop: windowHeight(1),
  },

  titleStyle: {
    color: appColors.darkText,
    textAlign: 'center',
    fontFamily: appFonts.NunitoMedium,
    fontSize: windowWidth(4.2),
    marginHorizontal: windowWidth(6),
  },
  mainVIew: {
    marginHorizontal: windowWidth(4.5),
  },
  separator: {
    borderWidth: 0.3,
    marginHorizontal: windowWidth(2),
    height: 0.6,
  },
  gridStyle: {
    marginHorizontal: 6,
    marginBottom: windowHeight(2),
  },
});
