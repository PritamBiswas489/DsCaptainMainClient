import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: appColors.boxBg,
    paddingVertical: windowWidth(2),
    marginHorizontal: windowWidth(4),
    marginTop: windowHeight(2),
    alignItems: 'center',
    paddingHorizontal: windowWidth(4),
    borderRadius: windowWidth(2),
  },
  imageStyle: {
    height: windowHeight(6),
    width: windowHeight(6),
    borderRadius: windowWidth(10),
    resizeMode: 'contain',
  },
  time: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT3,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  person: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: fontSizes.FONT4,
  },
  msg: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoRegular,
    fontSize: fontSizes.FONT3HALF,
  },
  textContainer: {
    marginHorizontal: windowWidth(3),
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: 5
},
tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2


},
activeTabButton: {
    borderColor: appColors.primary
},
tabText: {
    fontSize: 16,
},
activeTabText: {
    color: appColors.primary,
    fontWeight: 'bold',
},
});
