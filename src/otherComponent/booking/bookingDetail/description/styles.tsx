import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '@theme/appConstant';
import appColors from '@src/theme/appColors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth(4),
  },
  imageContainer: {
    height: windowWidth(17),
    width: windowWidth(17),
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(3),
    alignItems: 'center',
    justifyContent: 'center',
    margin:10
  },
  image: {
    height: windowWidth(20),
    width: windowWidth(20),
    resizeMode: 'contain',
    borderRadius: windowWidth(2),
  },
  icontainer:{
     
    borderWidth: 1,
    borderRadius: windowHeight(1.8),
    paddingHorizontal: windowWidth(2),
    paddingVertical: windowHeight(1),
    marginHorizontal:windowWidth(5),
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
    width: '90%', // Adjust as needed
    height: '70%', // Adjust as needed
    borderRadius: 10,
  },
});
