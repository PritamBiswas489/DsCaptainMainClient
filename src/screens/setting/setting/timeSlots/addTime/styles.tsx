import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  time: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    marginTop: windowHeight(3),
    paddingHorizontal: windowWidth(3),
  },
  modalContainer: {
    justifyContent: 'flex-end',
    flexGrow: 1,
    backgroundColor: appColors.modal,
  },
  modalContent: {
    backgroundColor: appColors.white,
    borderTopLeftRadius: windowHeight(3),
    borderTopRightRadius: windowHeight(3),
    paddingHorizontal: windowWidth(6),
    paddingVertical: windowHeight(2),
    height: '60%',
    width: '100%',
  },
  mainView: {
    marginTop: windowHeight(3),
    marginHorizontal: windowWidth(10),
    flexDirection: 'row',
    height: windowHeight(40),
  },
  titleStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4HALF,
    marginBottom: windowHeight(3),
  },
  scrollView: {
    flex: 1,
  },

  defaultSelection: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    marginHorizontal: 0,
  },
  additionalStyle: {
    marginHorizontal: 0,
    bottom: windowHeight(5),
  },
  selectedItem: {
    color: appColors.primary,
  },
  textContainer: {
    height: windowHeight(6),
    width: windowWidth(20),
   
     justifyContent: 'center',
  },
});
