import appColors from '@theme/appColors';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  heading: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
  },
  containerStyle: {
    height: windowHeight(12),
  },
  horizontalLine: {
    marginHorizontal: windowWidth(6),
    marginBottom: 0,
    marginTop: windowHeight(3),
  },
  container: {
    margin: windowHeight(3),
  },
  expertise: {
    marginHorizontal: windowHeight(3),
  },
  row: {
    flexDirection: 'row',
  },
  // your existing styles
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  identificationImage: {
    width: '100%', // Adjust the width as per your requirement
    height: 200, // Adjust the height as per your requirement
    borderRadius: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: appColors.primary,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
