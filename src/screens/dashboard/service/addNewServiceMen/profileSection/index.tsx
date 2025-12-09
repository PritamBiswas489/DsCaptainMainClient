import {View, Image, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Camera} from '@utils/icons';
import {ImageLibraryOptions} from 'react-native-image-picker';
import {handleImagePicker} from '@utils/functions';
import { useValues } from '../../../../../../App';
import appColors from '@theme/appColors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { addServiceManFieldActions } from '@src/store/redux/add-service-man-redux';
export default function ProfileSection() {
  const dispatch = useDispatch()
  const image = useSelector((state: RootState)=>state['addServiceManField'].profile_image)  
  const setImage = (value:string)=>{
      dispatch(addServiceManFieldActions.setData({
        field: 'profile_image',
        data: value,
      }))
  } 
  const {isDark} = useValues()
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

  const errorProfileImage = useSelector((state: RootState)=>state['addServiceManErrorField'].profile_image)

  return (
    <>
      <View style={styles.container}></View>
        <View style={styles.mainView}>
          <View style={[styles.mainContainer,{backgroundColor: isDark ? appColors.darkText : appColors.white}]}>
            {image ? (
              <TouchableOpacity onPress={openImage} activeOpacity={0.9}>
                <Image source={{uri: image}} style={styles.imageStyle} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={0.9} onPress={openImage}>
                <Camera />
              </TouchableOpacity>
            )}
          </View>
          <View>{errorProfileImage && <Text style={styles.error}>{errorProfileImage}</Text>}</View>
      </View>
    </>
  );
}
