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

export default function AddNewImageSection({setSelectedImage}: imageType) {
  const [image, setImage] = useState<string | null>('');
  const {isDark,t} = useValues();

  const openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    })
      .then(images => {
        const uris = images.map(image => image.path);
        setSelectedImage(uris);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const openImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    handleImagePicker(options, (imageUri: string) => {
      setImage(imageUri);
    });
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.row}>
        <View>
          <Text
            style={[
              styles.textStyle,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {t('addNewService.serviceImage')}
          </Text>
          <Text style={[styles.text, {fontSize: fontSizes.FONT3HALF}]}>
            {t('addNewService.maxSize')} :{' '}
            <Text>2 {t('addNewService.mb')}</Text>
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => openImagePicker()}
          style={styles.containerView}>
          <Plus />
        </TouchableOpacity>
      </View>
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
            {t('addNewService.selectThumbnail')}
          </Text>
          <Arrow height={'12'} width={'16'} color={appColors.primary} />
        </TouchableOpacity>
      )}
    </View>
  );
}
