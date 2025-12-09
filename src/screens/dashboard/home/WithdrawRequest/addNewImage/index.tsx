import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Plus} from '@utils/icons';
import {fontSizes} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {Arrow} from '@utils/icons';
import ImagePicker from 'react-native-image-crop-picker';
import {imageType} from './types';
import {handleImagePicker} from '@utils/functions';
import {ImageLibraryOptions} from 'react-native-image-picker';
import {useValues} from '../../../../../../App';

export default function AddNewImageSection({image,setSelectedImage}: imageType) {
  
  const {isDark,t} = useValues();

  
  const openImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    handleImagePicker(options, (imageUri: string) => {
      setSelectedImage(imageUri);
    });
  };

  return (
    <View style={styles.mainView}>
      
      {image ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => openImage()}
          style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.bannerBg} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => openImage()}
          activeOpacity={0.9}
          style={styles.container}>
          <Text
            style={[
              styles.text,
              {color: appColors.primary, textDecorationLine: 'underline'},
            ]}>
            {t('newDeveloper.ServiceAddConverImage')}
          </Text>
          <Arrow height={'12'} width={'16'} color={appColors.primary} />
        </TouchableOpacity>
      )}
    </View>
  );
}
