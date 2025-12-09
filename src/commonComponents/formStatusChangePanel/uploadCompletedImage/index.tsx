import { View, Image, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Camera, Delete } from '@utils/icons';
import { ImageLibraryOptions } from 'react-native-image-picker';
import { handleImagePicker } from '@utils/functions';
import { useValues } from '../../../../App';
import appColors from '@theme/appColors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';

export default function UploadCompletedImage(
  {
    setServiceProofUploadOption,
    selectedCompletedImages,
    deleteUploadServiceProofImage
  }: {
    setServiceProofUploadOption: (value: boolean) => void,
    selectedCompletedImages: string[],
    deleteUploadServiceProofImage: (value: number) => void,
  },

) {
  const dispatch = useDispatch()
  const image = ''
  const setImage = (value: string) => {
  }
  const { isDark, t } = useValues()
  const openImage = () => {
    setServiceProofUploadOption(true)
  };

  const errorProfileImage = useSelector((state: RootState) => state['addServiceManErrorField'].profile_image)

  return (
    <>
      <View style={styles.container}></View>
      <Text style={styles.heading}>{t('newDeveloper.UploadCompletedImages')}</Text>
      <View style={styles.sideBySideContainer}>


        {selectedCompletedImages.map((imagePath: string, imageindex: number) => {
          return <View key={`selectedimagesproof-${imageindex}`} style={styles.mainView}>
            
            <View style={[styles.mainContainer, { backgroundColor: isDark ? appColors.darkText : appColors.white }]}>
            
              
              <Image source={{ uri: imagePath }} style={styles.imageStyle} />
                <TouchableOpacity style={{position:'absolute', top:0, left:0 }} onPress={()=>deleteUploadServiceProofImage(imageindex)} activeOpacity={0.9}>
                <Delete color={'red'}/>
              </TouchableOpacity>
              
            </View>
          </View>
        })}

        <View style={styles.mainView}>
          <View style={[styles.mainContainer, { backgroundColor: isDark ? appColors.darkText : appColors.white }]}>

            
            <TouchableOpacity activeOpacity={0.9} onPress={openImage}>
              <Camera />
            </TouchableOpacity>
          </View>
          <View>{errorProfileImage && <Text style={styles.error}>{errorProfileImage}</Text>}</View>
        </View>
      </View>
    </>
  );
}
