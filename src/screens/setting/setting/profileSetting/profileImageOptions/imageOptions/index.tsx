import { View, Image, Text, Alert, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { GlobalStyle } from '@style/styles';
import { windowHeight, windowWidth } from '@theme/appConstant';
import {
  launchImageLibrary,
  launchCamera,
  ImagePickerResponse,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import { gallery, camera } from '@utils/images';
import { useValues } from '../../../../../../../App';
import appColors from '@theme/appColors';
import { useDispatch } from 'react-redux';
import { profileUpdateFieldActions } from '@src/store/redux/profile-field-redux';

export default function ImageOptions({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [selectedImage, setSelectedImage] = useState('');
  const [image, setImage] = useState('');
  const { isDark, t } = useValues();
  const dispatch = useDispatch()

  const updateProfileLogo = (image:string) =>{
    dispatch(profileUpdateFieldActions.setData({'field':'logo',data:image})) 
  }

  useEffect(()=>{
   // console.log("======= Image Selected From Gallery =================//")
    if(selectedImage!==''){
         updateProfileLogo(selectedImage)
    }
   // console.log(selectedImage)
  },[selectedImage])

  useEffect(()=>{
   //  console.log("======== Image Selected From Camera ====================") 
     if(image!==''){
      updateProfileLogo(image)
     }
  },[image])

  const requestCameraPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission granted');
          return true;
        } else {
          Alert.alert('Camera permission denied');
          return false;
        }
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };



  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        Alert.alert('Image picker error: ', response.errorMessage);
      } else {
        const source: string | undefined =
          response.assets && response.assets.length > 0
            ? response.assets[0].uri
            : '';
        if (source) {
          setSelectedImage(source);
          setShowModal(false)
        }
      }
    });
  };

  const handleCameraLaunch = async () => {
    const isCameraPermitted = await requestCameraPermission();
    if (!isCameraPermitted) {
      Alert.alert('Failed to lunch camera')
      return
    }
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      //console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        Alert.alert('Camera Error: ', response.errorMessage);
      } else {
        // Process the captured image
        let imageUri: string | undefined =
          response.assets && response.assets.length > 0
            ? response.assets?.[0]?.uri
            : '';
        imageUri && setImage(imageUri);
        setShowModal(false)
      }
    });
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg },
      ]}>
      <TouchableOpacity activeOpacity={0.9} onPress={() => openImagePicker()}>
        <View style={styles.innerContainer}>
          <>
            <View
              style={[
                styles.imageView,
                {
                  backgroundColor: isDark
                    ? appColors.darkCard
                    : appColors.white,
                  borderColor: isDark ? appColors.darkBorder : appColors.border,
                },
              ]}>
              <Image source={gallery} style={styles.image} />
            </View>

            <Text
              style={[
                styles.name,
                { color: isDark ? appColors.white : appColors.darkText },
              ]}>
              {t('profileSetting.chooseGallery')}
            </Text>

          </>
        </View>
      </TouchableOpacity>
      <View
        style={[
          GlobalStyle.horizontalLine,
          { marginBottom: windowWidth(4) },
        ]}></View>
      <TouchableOpacity activeOpacity={0.9} onPress={() => handleCameraLaunch()}>
        <View style={styles.innerContainer}>
          <>
            <View
              style={[
                styles.imageView,
                {
                  backgroundColor: isDark
                    ? appColors.darkCard
                    : appColors.white,
                  borderColor: isDark ? appColors.darkBorder : appColors.border,
                },
              ]}
            >
              <Image source={camera} style={styles.image} />
            </View>
            <Text
              style={[
                styles.name,
                { color: isDark ? appColors.white : appColors.darkText },
              ]}>
              {t('profileSetting.openCamera')}
            </Text>

          </>
        </View>
      </TouchableOpacity>
    </View>
  );
}
