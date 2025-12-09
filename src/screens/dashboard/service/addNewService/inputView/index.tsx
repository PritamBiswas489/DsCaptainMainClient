import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import TextInputComponent from '@otherComponent/auth/textInput';
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
  Tags

} from '@utils/icons';
import { windowHeight, windowWidth } from '@theme/appConstant';
import { useValues } from '../../../../../../App';
import UploadContainerView from '@src/otherComponent/auth/uploadContainer';
import { ImageLibraryOptions } from 'react-native-image-picker';
import { handleImagePicker } from '@src/utils/functions';
import VariantInput from '@src/otherComponent/variantInput';
import { CategoriesInterface } from '@src/interfaces/categoriesInterface';
import SelectionDropdown from '@src/otherComponent/selectionDropdown';
import { SubCategoriesInterface } from '@src/interfaces/subCategoriesInterface';

interface DataItem {
  label: string;
  value: string;
}


export default function InputView({
  serviceName,
  setServiceName,
  shortDescription,
  setShortDescription,
  description,
  setDescription,
  taxAmt,
  setTaxAmt,
  minBidAmt,
  setMinBidAmt,
  tags,
  setTags,
  thumbnailImage,
  setThumbnailImage,
  serviceVariants,
  setServiceVariants,
  parentCategories,
  selectedParentCategory,
  setSelectedParentCategory,
  subcategories,
  selectedSubCategory,
  setSelectedSubCategory
}: {
  serviceName: string,
  setServiceName: (value: string) => void,
  shortDescription: string,
  setShortDescription: (value: string) => void,
  description: string,
  setDescription: (value: string) => void,
  taxAmt: string,
  setTaxAmt: (amt: string) => void,
  minBidAmt: string,
  setMinBidAmt: (amt: string) => void,
  tags: string,
  setTags: (value: string) => void,
  thumbnailImage: string,
  setThumbnailImage: (value: string) => void,
  serviceVariants:{ name: string, price: string }[],
  setServiceVariants:(value:{ name: string, price: string }[])=>void,
  parentCategories: CategoriesInterface[],
  selectedParentCategory: string,
  setSelectedParentCategory: (value: string) => void,
  subcategories:SubCategoriesInterface[],
  selectedSubCategory: string,
  setSelectedSubCategory: (value: string) => void,
}) {
  const { t } = useValues();
  const [categoryList, setCategoryList] = useState<DataItem[]>([]);
  const [subCategoryList, setSubCategoryList] = useState<DataItem[]>([]);

  interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
  }

  const openImageFront = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    handleImagePicker(options, (imageUri: string) => {
      setThumbnailImage(imageUri);
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

  useEffect(() => {
    if (subcategories) {
      const loopZones: { label: string; value: string }[] = [];
      if (subcategories.length > 0) {
        subcategories.forEach((arr: { name: string, id: string }, index: number) => {
          loopZones.push({ label: arr.name, value: arr.id });
        })
        setSubCategoryList(loopZones)
      }
    }
  }, [subcategories])
  //=============== Get SubCategory Listing =========================//

  return (
    <View style={{ flex: 1 }}>
      {/* service name */}
      <TextInputComponent
        placeholder={t('newDeveloper.AddServiceFieldServiceName')}
        Icon={<ServiceName />}
        value={serviceName}
        onChangeText={value => {
          setServiceName(value);
        }}
      />
      {/* Select category panel */}

      <SelectionDropdown
        data={categoryList}
        value={selectedParentCategory}
        setValue={(value: string) => {
          setSelectedParentCategory(value)
        }}
        label={t('newDeveloper.parentCategory')}
        error={''}
      />
      {/* Select subcategory panel */}
      <SelectionDropdown
        data={subCategoryList}
        value={selectedSubCategory}
        setValue={(value: string) => {
          setSelectedSubCategory(value)
        }}
        label={t('newDeveloper.AddServiceFieldSubCategory')}
        error={''}
      />

      {/* AddServiceFieldSubCategory */}
       
      {/* <DropdownWithIcon
        icon={<SubCategory />}
        label="addNewService.subCategory"
        data={categoryData}
        onSelect={setSubCategory}
      /> */}

      {/* service short description */}
      <TextInputComponent
        placeholder={t('newDeveloper.AddServiceShortDescription')}
        Icon={<Notes />}
        value={shortDescription}
        onChangeText={value => {
          setShortDescription(value);
        }}
        containerStyle={{ marginBottom: windowHeight(0) }}
        multiline={true}
        inputStyle={styles.inputStyle}
      />
      {/* service description */}
      <TextInputComponent
        placeholder={t('newDeveloper.AddServiceDescription')}
        Icon={<Notes />}
        value={description}
        onChangeText={value => {
          setDescription(value);
        }}
        containerStyle={{ marginBottom: windowHeight(0) }}
        multiline={true}
        inputStyle={styles.inputStyle}
      />
      {/* service tax amount */}
      <TextInputComponent
        keyboardType='number-pad'
        placeholder={t('newDeveloper.AddServiceTaxAmount')}
        Icon={<Amount />}
        value={taxAmt}
        onChangeText={value => {
          setTaxAmt(value);
        }}

      />
      {/* service minimum bid amount */}
      <TextInputComponent
        keyboardType='number-pad'
        placeholder={t('newDeveloper.AddServiceMinbidAmt')}
        Icon={<Amount />}
        value={minBidAmt}
        onChangeText={value => {
          setMinBidAmt(value);
        }}
      />
      {/* service tags field  */}
      <TextInputComponent
        placeholder={t('newDeveloper.AddServicetags')}
        Icon={<Tags />}
        value={tags}
        onChangeText={value => {
          setTags(value);
        }}
      />
      {/* service thubnail image  */}
      <UploadContainerView
        title={'newDeveloper.AddServiceUploadThumbnailImage'}
        onPress={openImageFront}
        image={thumbnailImage}
        setImage={setThumbnailImage}
        error={''}
      />
      <VariantInput serviceVariants={serviceVariants} setServiceVariants={setServiceVariants}/>

    </View>
  );
}
