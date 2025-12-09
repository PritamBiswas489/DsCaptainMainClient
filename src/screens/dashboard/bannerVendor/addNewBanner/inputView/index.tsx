import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import TextInputComponent from '@otherComponent/auth/textInput';
import UploadContainerView from '@src/otherComponent/auth/uploadContainer';
import {
  ServiceName,
  HomeIcon,
  SubCategory,
  Notes,
  Location,
  Experience,
  ServiceMen,
  Amount,
  Discount,
  ReceiptDiscount,
} from '@utils/icons';
import { windowHeight, windowWidth } from '@theme/appConstant';
import { useValues } from '../../../../../../App';
import { ImageLibraryOptions } from 'react-native-image-picker';
import { handleImagePicker } from '@utils/functions';
import { CategoriesInterface } from '@src/interfaces/categoriesInterface';
import SelectionDropdown from '@src/otherComponent/selectionDropdown';

interface DataItem {
  label: string;
  value: string;
}


export default function InputView(
 {
  bannerTitle, 
  setBannerTitle ,
  errorBannerTitle ,
  bannerUrl, 
  setBannerUrl, 
  errorBannerUrl, 
  bannerImage ,
  setBannerImage, 
  bannerImageError, 
  
 }:{
  bannerTitle: string,
  setBannerTitle: (value: string) => void,
  errorBannerTitle:string,
  bannerUrl: string,
  setBannerUrl: (value: string) => void,
  errorBannerUrl: string,
  bannerImage: string,
  setBannerImage: (value: string) => void,
  bannerImageError: string,
   
 }
) {
  const { t } = useValues();
  const openImageFront = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    handleImagePicker(options, (imageUri: string) => {
      setBannerImage(imageUri);
    });
  };
  
  
  return (
    <View style={{ flex: 1 }}>

      <TextInputComponent
        placeholder={t('newDeveloper.bannerTitle')}
        value={bannerTitle}
        onChangeText={value => {
          setBannerTitle(value);
        }}
        error={errorBannerTitle}
      />


     <TextInputComponent
        placeholder={t('newDeveloper.bannerUrl')}
        value={bannerUrl}
        onChangeText={value => {
          setBannerUrl(value);
        }}
        error={errorBannerUrl}
      />

      
      <UploadContainerView
        title={'newDeveloper.uploadBannerImage'}
        onPress={openImageFront}
        image={bannerImage}
        setImage={setBannerImage}
        error={bannerImageError}
      />
    </View>
  );
}
