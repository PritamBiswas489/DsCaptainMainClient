import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    marginVertical: windowWidth(2),
    flexDirection: 'row',
    backgroundColor: appColors.serviceBG,
    padding: windowWidth(3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(1),
    marginHorizontal: windowWidth(2),
    marginTop: windowWidth(2.5),
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    color: appColors.primary,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT4,
    marginHorizontal: windowWidth(1.2),
  },
  verticalLine: {
    height: windowHeight(3),
    borderColor: appColors.divider,
    borderWidth: 0.3,
    width: 0,
    marginTop: 1,
    marginHorizontal: windowWidth(5),
  },
});
