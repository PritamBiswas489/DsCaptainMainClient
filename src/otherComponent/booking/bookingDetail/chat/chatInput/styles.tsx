import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: appColors.boxBg,
    paddingVertical: windowWidth(1),
    width: '100%',
    borderRadius: windowHeight(1),
    paddingHorizontal: windowWidth(3),
  },
  input: {
    flex: 1,
    paddingHorizontal: windowWidth(2),
    borderRadius: windowHeight(12),
    backgroundColor: appColors.boxBg,
    width: windowWidth(60),
    fontFamily: appFonts.NunitoMedium,
    fontSize: fontSizes.FONT4,
    color: appColors.darkText,
  },
  buttonView: {
    backgroundColor: appColors.primary,
    borderRadius: windowHeight(1),
    paddingHorizontal: windowWidth(2),
    paddingVertical: windowWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: windowWidth(2),
  },
  imagePreviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 5,
    backgroundColor: appColors.boxBg,  // You can adjust this based on the theme
    borderRadius: 8,
    width:windowWidth(45)
  },
  imagePreview: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  filePreviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 5,
    backgroundColor: appColors.boxBg,  // You can adjust this based on the theme
    borderRadius: 8,
    width:windowWidth(50),
    marginLeft:2
  },
  fileName: {
    fontSize: 14,
    color: appColors.darkText,  // You can adjust this based on the theme
    marginRight: 10,
  },
  removeButton: {
    color: appColors.error,  // You can change this to match your theme's delete color
    fontSize: 14,
    fontWeight: 'bold',
  },
  previewContainer: {
    flexDirection: 'row',  // This ensures that image and document previews are side by side
    marginBottom: 10,
  },
});
