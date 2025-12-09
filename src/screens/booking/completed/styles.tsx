import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  containerStyle: {
    height: windowHeight(12),
  },
  mainContainer: {
    backgroundColor: appColors.boxBg,
    flex: 1,
    marginTop: windowHeight(1),
    paddingBottom: windowHeight(1.6),
    borderBottomColor: appColors.border,
    borderBottomWidth: 1,
  },
  innerContainer: {
    paddingTop: windowHeight(2),
    borderColor: appColors.border,
    borderWidth: 1.4,
    borderTopLeftRadius: windowHeight(2.4),
    borderTopRightRadius: windowHeight(2.4),
    borderBottomWidth: 0,
    paddingBottom: windowHeight(1),
  },
  titleStyle: {
    marginHorizontal: windowHeight(2),
    marginTop: windowHeight(2),
    marginBottom: windowWidth(3),
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4HALF,
  },
  contentContainerStyle: {
    paddingBottom: windowHeight(4),
  },
  buttonContainer: {
    height: windowHeight(11),
    bottom: windowWidth(2),
  },
  statusContainer: {
    backgroundColor: appColors.lightGreen,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dim background
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalImage: {
    width: '100%', // Adjust as needed
    height: '70%', // Adjust as needed
    borderRadius: 10,
    resizeMode:'contain'
  },
});
