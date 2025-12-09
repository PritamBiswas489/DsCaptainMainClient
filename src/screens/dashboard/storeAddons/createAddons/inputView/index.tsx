import { View, Text, Alert, Image, TouchableOpacity } from 'react-native';
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
import { handleImagePicker, handleImagePickerAllDetails } from '@utils/functions';
import { CategoriesInterface } from '@src/interfaces/categoriesInterface';
import SelectionDropdown from '@src/otherComponent/selectionDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { CategoryInterface } from '@src/interfaces/store/categories.interface';
import { SubCategoriesInterface } from "@src/interfaces/store/subcategories.interface";
import StoreAttributes from '@src/otherComponent/home/storeAttributes';
import appColors from '@src/theme/appColors';
import TagInput from '../tagInput';
import VariantInput from '../variantInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UnitInterface } from '@src/interfaces/store/units.interface';
import { RadioButton } from 'react-native-paper';
import TimepickerSelectTimeTwentyFourHours from '@src/commonComponents/timepickerSelectTimeTwentyFourHours';
import { FoodVariation } from '../foodVariation';
import { foodVariations } from '@src/interfaces/store/foodVariations.interface';
import { AddonInterface } from '@src/interfaces/store/addons.interface';
import AddonInput from '../addonInput';

interface DataItem {
  label: string;
  value: string;
}
interface Combination {
  type: string;
  stock: number;
  price: number;
}

export default function InputView(
  {
    itemTitle,
    setItemTitle,
    errorItemTitle,
    
    itemPrice,
    setItemPrice,
    errorItemPrice,
     

  }: {
    itemTitle: string,
    setItemTitle: (value: string) => void,
    errorItemTitle: string,
   
    itemPrice: string,
    setItemPrice: (value: string) => void,
    errorItemPrice: string,
    
  }
) {
  const { t, isDark } = useValues();

  const { stores: storesList } = useSelector(
    (state: RootState) => state['storeProfileData']
  );
  const { module: storeModuleDetails } = storesList[0]
  const { module_type } = storeModuleDetails

  
   

   
  


  

  return (
    <>
      <View style={{ flex: 1 }}>
        {/* item title */}
        <TextInputComponent
          placeholder={t('newDeveloper.AddonTitle')}
          Icon={<ServiceName />}
          value={itemTitle}
          onChangeText={value => {
            setItemTitle(value);
          }}
          error={errorItemTitle}
        />
        
        






        {/* item price  */}
        <TextInputComponent
          placeholder={t('newDeveloper.AddonPrice')}
          value={itemPrice}
          keyboardType='number-pad'
          onChangeText={value => {
            setItemPrice(value);
          }}
          Icon={<Amount />}
          error={errorItemPrice}
        />
       </View>
    </>
  );
}
