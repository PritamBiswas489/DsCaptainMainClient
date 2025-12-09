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
    subcategoryImage,
    setSubcategoryImage,
    errorSubCategoryImage,
    setErrorSubCategoryImage,
    categoryName,
    setCategoryName,
    shortDescription,
    setShortDescription,
    parentCategories,
    selectedParentCategory,
    setSelectedParentCategory,
    errorCategory,
    errorCategoryName,
    errorShortDescription,


  }: {
    subcategoryImage: string,
    setSubcategoryImage: (value: string) => void,
    errorSubCategoryImage: string,
    setErrorSubCategoryImage: (value: string) => void,
    categoryName: string,
    setCategoryName: (value: string) => void,
    shortDescription: string,
    setShortDescription: (value: string) => void,
    parentCategories: CategoriesInterface[],
    selectedParentCategory: string,
    setSelectedParentCategory: (value: string) => void,
    errorCategory: string,
    errorCategoryName: string,
    errorShortDescription: string,

  }
) {
  const { t } = useValues();
  const [categoryList, setCategoryList] = useState<DataItem[]>([]);

  const openImageFront = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    handleImagePicker(options, (imageUri: string) => {
      setSubcategoryImage(imageUri);
    });
  };
  useEffect(() => {
    if (parentCategories) {
      const loopZones: { label: string; value: string }[] = [];
      if (parentCategories.length > 0) {
        parentCategories.forEach((arr: { name: string, id: string }, index: number) => {
          loopZones.push({ label: arr.name, value: arr.id });
        })
        setCategoryList(loopZones)
      }
    }
  }, [parentCategories])

  // useEffect(() => {
  //   console.log(categoryList)
  // }, [categoryList])
  return (
    <View style={{ flex: 1 }}>

      <SelectionDropdown
        data={categoryList}
        value={selectedParentCategory}
        setValue={(value: string) => {
          setSelectedParentCategory(value)
        }}
        label={t('newDeveloper.parentCategory')}
        error={errorCategory}
      />

      <TextInputComponent
        placeholder={t('newDeveloper.subCategoryName')}
        Icon={<ServiceName />}
        value={categoryName}
        onChangeText={value => {
          setCategoryName(value);
        }}
        error={errorCategoryName}
      />

      <TextInputComponent
        placeholder={t('newDeveloper.subCategoryShortDescription')}
        Icon={<Notes />}
        value={shortDescription}
        onChangeText={value => {
          setShortDescription(value);
        }}
        containerStyle={{
          marginBottom: windowHeight(0),
          marginTop: windowHeight(3),
        }}
        multiline={true}
        inputStyle={styles.inputView}
        error={errorShortDescription}
      />
      <UploadContainerView
        title={'newDeveloper.uploadSubcategoryImage'}
        onPress={openImageFront}
        image={subcategoryImage}
        setImage={setSubcategoryImage}
        error={errorSubCategoryImage}
      />
    </View>
  );
}
