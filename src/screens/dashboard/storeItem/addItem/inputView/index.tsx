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
    itemDesciption,
    setItemDescription,
    errorItemDescription,
    itemPrice,
    setItemPrice,
    errorItemPrice,
    discountAmount,
    setDiscountAmount,
    errorDiscountAmount,
    discountTypes,
    setDiscountTypes,
    errorDiscountTypes,
    category,
    setCategory,
    errorCategory,
    subCategory,
    setSubCategory,
    errorSubCategory,
    selectedAttrbutes,
    setSelectedAttributes,
    maximumOrderQty,
    setMaximumOrderQty,
    errorMaximumOrderQty,
    tags,
    setTags,
    attributeVariants,
    setAttributeVariants,
    variantionsDetails,
    choiceOptions,
    setVariationDetails,
    thumbanailImage,
    setThumbnailImage,
    errorThumbnailImage,
    itemImages,
    setItemImages,
    totalStocks,
    setTotalStocks,
    stockUnit,
    setStockUnit,
    errorStockUnit,
    itemType,
    setItemType,
    foodVars,
    setFoodVars,
    selectedAddonsList,
    setSelectedAddOns,
    fromTime,
    toTime,
    setFromTime,
    setToTime

  }: {
    itemTitle: string,
    setItemTitle: (value: string) => void,
    errorItemTitle: string,
    itemDesciption: string,
    setItemDescription: (value: string) => void,
    errorItemDescription: string,
    itemPrice: string,
    setItemPrice: (value: string) => void,
    errorItemPrice: string,
    discountAmount: string,
    setDiscountAmount: (value: string) => void,
    errorDiscountAmount: string,
    discountTypes: string,
    setDiscountTypes: (value: string) => void,
    errorDiscountTypes: string,
    category: string,
    setCategory: (value: string) => void,
    errorCategory: string,
    subCategory: string,
    setSubCategory: (value: string) => void,
    errorSubCategory: string,
    selectedAttrbutes: number[],
    setSelectedAttributes: (value: number[]) => void,
    maximumOrderQty: string,
    setMaximumOrderQty: (value: string) => void,
    errorMaximumOrderQty: string,
    tags: string[],
    setTags: (value: string[]) => void,
    attributeVariants: { attrbuteId: number, attributeName: string, variants: string[] }[],
    setAttributeVariants: (value: { attrbuteId: number, attributeName: string, variants: string[] }[]) => void,
    variantionsDetails: Combination[],
    choiceOptions:Combination[],
    setVariationDetails: (value: Combination[]) => void,
    thumbanailImage: string,
    setThumbnailImage: (value: string) => void,
    errorThumbnailImage: string,
    itemImages: string[],
    setItemImages: (value: string[]) => void,
    totalStocks: string,
    setTotalStocks: (value: string) => void,
    stockUnit: string,
    setStockUnit: (value: string) => void,
    errorStockUnit: string,
    itemType: string,
    setItemType: (value: string) => void,
    foodVars: foodVariations[],
    setFoodVars: (value: foodVariations[]) => void,
    selectedAddonsList: string[]
    setSelectedAddOns: (value: string[]) => void,
    fromTime: string,
    toTime: string,
    setFromTime: (value: string) => void,
    setToTime: (value: string) => void,
  }
) {
  const { t, isDark } = useValues();

  const { stores: storesList } = useSelector(
    (state: RootState) => state['storeProfileData']
  );
  const { module: storeModuleDetails } = storesList[0]
  const { module_type } = storeModuleDetails

   
   
  //open thumbnail image
  const openThumbnailImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    handleImagePickerAllDetails(options, (imageAssets: any) => {
      if (imageAssets?.uri) {
        const fileSizeInMB = imageAssets.fileSize / (1024 * 1024);
        if (fileSizeInMB > 2) {
          Alert.alert(t('newDeveloper.greaterThantwoMbError'))
          return
        }
        setThumbnailImage(imageAssets.uri)
      }
    });
  };

  const handleSetItemImage = (value: string) => {
    if (value !== '') {
      setItemImages([...itemImages, value])
    }
  }

  const openItemImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    handleImagePickerAllDetails(options, (imageAssets: any) => {
      if (imageAssets?.uri) {
        const fileSizeInMB = imageAssets.fileSize / (1024 * 1024);
        if (fileSizeInMB > 2) {
          Alert.alert(t('newDeveloper.greaterThantwoMbError'))
          return
        }
        handleSetItemImage(imageAssets.uri)
      }
    });
  }
  const [discountTypeList, setDiscountTypeList] = useState<DataItem[]>([]);
  useEffect(() => {
    setDiscountTypeList([
      { label: t('newDeveloper.percent'), value: 'percent' },
      { label: t('newDeveloper.amount'), value: 'amount' },
    ])
  }, [])

  //categories
  const [categoryList, setCategoryList] = useState<DataItem[]>([])
  const {
    data: categoriesData,
  } = useSelector(
    (state: RootState) => state['vendorCategories']
  );
  useEffect(() => {

    if (categoriesData.length > 0) {
      const catData: DataItem[] = categoriesData.map((dd: CategoryInterface, _: number) => {
        return { value: dd.id.toString(), label: dd.name }
      })
      setCategoryList(catData)
    }
  }, [categoriesData])


  const [subCategoryList, setSubCategoryList] = useState<DataItem[]>([])

  //Sub categories
  const {
    selected: subCategoriesData,
  } = useSelector(
    (state: RootState) => state['vendorSubCategories']
  );

  useEffect(() => {
    if (subCategoriesData.subcategories.length > 0) {
      const catData: DataItem[] = subCategoriesData.subcategories.map((dd: SubCategoriesInterface, _: number) => {
        return { value: dd.id.toString(), label: dd.name }
      })
      setSubCategoryList(catData)
    } else {
      setSubCategoryList([])
    }

  }, [subCategoriesData])

  const {
    data: Attributes
  } = useSelector((state: RootState) => state['vendorAttribute'])

  //handle variants change
  const handleVariantsChange = (variants: string[], attribute: number, attributeName: string) => {
    const variantIndex = attributeVariants.findIndex(ele => ele.attrbuteId === attribute)
    if (variantIndex !== -1) {
      const cloneAttributeVariants = [...attributeVariants]
      cloneAttributeVariants[variantIndex] = { ...cloneAttributeVariants[variantIndex], variants }
      setAttributeVariants(cloneAttributeVariants)
    } else {
      setAttributeVariants([...attributeVariants, {
        attrbuteId: attribute,
        attributeName: attributeName,
        variants
      }])
    }
  }
  //generate variant combinations
  function generateCombinations(arr: string[][], prefix: string[] = []): string[][] {
    if (arr.length === 0) return [prefix];
    const [first, ...rest] = arr;

    return first.reduce(
      (acc: string[][], variant: string) => acc.concat(generateCombinations(rest, [...prefix, variant])),
      []
    );
  }

  useEffect(() => {
    setVariationDetails([])
    if (attributeVariants.length > 0) {
      const variantsArray: string[][] = attributeVariants.map(attr => attr.variants);
      const combinations: string[][] = generateCombinations(variantsArray);
      const variationOutput: Combination[] = combinations.map((combo) => {
        const typeCons = combo.join('-')
        const filterData = choiceOptions.find(ele=>typeCons === ele.type)
        return {
          type: typeCons,
          stock: filterData?.stock ?? 0,
          price: filterData?.price ?? 0,
        }
      });
     
      setVariationDetails(variationOutput)
    }
  }, [attributeVariants,choiceOptions])

  const removeImage = (imageindex: number) => {
    const d = itemImages.filter((_, imgindex) => imgindex !== imageindex);
    setItemImages(d)
  }


  const [vendorUnits, setVendorUnits] = useState<DataItem[]>([])

  const {
    data: vendorUnitList,
  } = useSelector(
    (state: RootState) => state['vendorUnits']
  );


  useEffect(() => {

    if (vendorUnitList.length > 0) {
      const vendorData: DataItem[] = vendorUnitList.map((dd: UnitInterface, _: number) => {
        return { value: dd.id.toString(), label: dd.unit }
      })
      setVendorUnits(vendorData)
    }
  }, [vendorUnitList])


  const [vendorAddons, setVendorAddons] = useState<DataItem[]>([])

  const {
    data: vendorAddOnList,
  } = useSelector(
    (state: RootState) => state['vendorAddons']
  );

  useEffect(() => {
    if (vendorAddOnList.length > 0) {
      const vendorData: DataItem[] = vendorAddOnList.map((dd: AddonInterface, _: number) => {
        return { value: dd.id.toString(), label: dd.name }
      })
      setVendorAddons(vendorData)
    }
  }, [vendorAddOnList])


  //set variation price
  const setVariationPrice = (value: string, variant: Combination) => {
    const cloneVariantionDetails = [...variantionsDetails]
    const findTypeIndex = cloneVariantionDetails.findIndex(ele => ele.type === variant.type)
    if (findTypeIndex !== -1) {
      cloneVariantionDetails[findTypeIndex] = { ...cloneVariantionDetails[findTypeIndex], price: parseFloat(value) }
    }
    setVariationDetails(cloneVariantionDetails)
  }
  //set variation stock
  const setVariationStock = (value: string, variant: Combination) => {
    const cloneVariantionDetails = [...variantionsDetails]
    const findTypeIndex = cloneVariantionDetails.findIndex(ele => ele.type === variant.type)
    if (findTypeIndex !== -1) {
      cloneVariantionDetails[findTypeIndex] = { ...cloneVariantionDetails[findTypeIndex], stock: parseFloat(value) }
    }
    setVariationDetails(cloneVariantionDetails)
  }


  //get total stock from variation array
  const calculateTotalStock = () => {
    const totalStock = variantionsDetails.reduce((accumulator: number, variantionsDetail: Combination) => {
      return accumulator + variantionsDetail.stock;
    }, 0);
    setTotalStocks(totalStock > 0 ? totalStock.toString() : '')
  }

  useEffect(() => {
    calculateTotalStock()
     
  }, [variantionsDetails])


  const [fromTimePicker, setFromTimePicker] = useState(false)
  const [toTimePicker, setToTimePicker] = useState(false)



  const addFoodVariationPanel = () => {
    const dd = {
      name: '',
      type: 'single',
      min: '',
      max: '',
      required: 'off',
      values: [{
        label: '',
        optionPrice: ''
      }]
    }
    const newVariantData = [...foodVars, dd]
    setFoodVars(newVariantData)
  }
  //update variation state 
  const updateVaritionsState = (dt: any, index: number) => {
    const cloneFoodVars = [...foodVars]
    if (cloneFoodVars?.[index]) {
      cloneFoodVars[index] = {
        ...cloneFoodVars[index],
        name: dt?.name,
        required: dt.isRequired ? 'on' : 'off',
        type: dt?.type,
        values: dt?.options || [],
        min: dt?.minimumValue,
        max: dt?.maximumValue,
      }
    }

    setFoodVars(cloneFoodVars)
  }
  //remove variation from state  
  const removeVariationFromState = (index: number) => {
    const newFoodVars = foodVars.filter((_: foodVariations, foodVarIndex: number) => foodVarIndex !== index)
    setFoodVars(newFoodVars)
  }
  // handle selected addons
  const handleSelectedAddons = (value: string) => {
    if (!selectedAddonsList.includes(value)) {
      setSelectedAddOns([...selectedAddonsList, value])
    }
  }

  //remove seleted addons from the list
  const removeSelectedAddon = (id: string) => {
    const updatedAddOn = selectedAddonsList.filter((addOn: string, foodVarIndex: number) => addOn !== id)
    setSelectedAddOns(updatedAddOn)
  }

  return (
    <>
      <View style={{ flex: 1 }}>
        {/* item title */}
        <TextInputComponent
          placeholder={t('newDeveloper.itemTitle')}
          Icon={<ServiceName />}
          value={itemTitle}
          onChangeText={value => {
            setItemTitle(value);
          }}
          error={errorItemTitle}
        />
        {/* item description */}
        <TextInputComponent
          placeholder={t('newDeveloper.itemDescription')}
          value={itemDesciption}
          onChangeText={value => {
            setItemDescription(value);
          }}
          containerStyle={{ marginBottom: windowHeight(0) }}
          multiline={true}
          inputStyle={styles.inputStyle}
          error={errorItemDescription}
        />
        {/* nonveg and veg */}
        {module_type === 'food' &&    <RadioButton.Group onValueChange={newValue => setItemType(newValue)} value={itemType}>
          <View style={styles.radioContainer}>
            <View style={styles.radioButton}>
              <RadioButton value="noveg" />
              <Text style={[styles.radioLabel, { color: isDark ? appColors.white : appColors.darkText }]}>{t('newDeveloper.Nonveg')}</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="veg" />
              <Text style={[styles.radioLabel, { color: isDark ? appColors.white : appColors.darkText }]}>{t('newDeveloper.Veg')}</Text>
            </View>

          </View>
        </RadioButton.Group> }

        
        {/* item price  */}
        <TextInputComponent
          placeholder={t('newDeveloper.itemPrice')}
          value={itemPrice}
          keyboardType='number-pad'
          onChangeText={value => {
            setItemPrice(value);
          }}
          Icon={<Amount />}
          error={errorItemPrice}
        />
        {/* item discount */}
        <TextInputComponent
          placeholder={t('newDeveloper.discount')}
          value={discountAmount}
          keyboardType='number-pad'
          onChangeText={value => {
            setDiscountAmount(value);
          }}
          Icon={<Amount />}
          error={errorDiscountAmount}
        />
        {/* item discount types */}
        <SelectionDropdown
          data={discountTypeList}
          value={discountTypes}
          setValue={(value: string) => {
            setDiscountTypes(value)
          }}
          label={t('newDeveloper.discountTypes')}
          error={errorDiscountTypes}
        />
        {/*  item category list */}
        <SelectionDropdown
          data={categoryList}
          value={category}
          setValue={(value: string) => {
            setCategory(value)
          }}
          label={t('newDeveloper.categories')}
          error={errorCategory}
        />

        {/* item sub category */}

        <SelectionDropdown
          data={subCategoryList}
          value={subCategory}
          setValue={(value: string) => {
            setSubCategory(value)
          }}
          label={t('newDeveloper.subCategories')}
          error={errorSubCategory}
        />
        <TagInput placeholderText={t('newDeveloper.addTag')} tags={tags} onTagsChange={setTags} />


        {/* adding attributes panel  */}
        {module_type !== 'food' && <StoreAttributes selectedAttrbutes={selectedAttrbutes} setSelectedAttributes={setSelectedAttributes} />}


        {selectedAttrbutes.length > 0 && selectedAttrbutes.map((attribute: number, _: number) => {
          const findAttr = Attributes.findIndex(ele => ele.id === attribute)
          const attributeName = Attributes[findAttr]?.name

          const variantIndex = attributeVariants.findIndex(ele => ele.attrbuteId === attribute)
          let variants: string[] = []
          if (variantIndex !== -1) {
            variants = attributeVariants[variantIndex].variants
          }
          return <View key={`attribute${attribute}`} style={{ marginTop: 10, }}>
            <Text style={{ fontSize: windowHeight(2), marginLeft: windowWidth(5), marginBottom: windowHeight(1), color: appColors.primary }}>Add variant for {attributeName}</Text>
            <VariantInput placeholderText={t('newDeveloper.addVariant')} variants={variants} onVariantsChange={(variants: string[]) => handleVariantsChange(variants, attribute, attributeName)} />
          </View>
        })}
        {/* variant pricing and stock panel */}
        {variantionsDetails.length > 0 && variantionsDetails.map((variant: Combination, variantindex: number) => (
          <View key={`Variant${variantindex}`}>
            <View style={{ marginTop: 10, marginLeft: windowWidth(5), marginBottom: windowHeight(1) }}>
              <Text style={{ fontSize: windowHeight(2), color: appColors.primary }}>{t('newDeveloper.Variant')}: <Text style={{ fontSize: windowHeight(2), marginVertical: windowWidth(5), color: isDark ? appColors.white : appColors.darkText }}>{variant.type}</Text></Text>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <TextInputComponent
                placeholder={t('newDeveloper.VariantPriceText')}
                value={!isNaN(variant?.price) && variant?.price !== 0 ? variant?.price.toString() : ''}
                keyboardType='number-pad'
                onChangeText={value => {
                  setVariationPrice(value, variant);
                }}
                containerStyle={{ flex: 1, marginHorizontal: windowWidth(2) }}
                error={errorMaximumOrderQty}
              />
              <TextInputComponent
                placeholder={t('newDeveloper.VariantStockText')}
                value={!isNaN(variant?.stock) && variant?.stock !== 0 ? variant?.stock.toString() : ''}
                keyboardType='number-pad'
                onChangeText={value => {
                  setVariationStock(value, variant);
                }}
                containerStyle={{ flex: 1, marginHorizontal: windowWidth(2) }}
                error={errorMaximumOrderQty}
              />
            </View>
          </View>))}



        {/* Total Stock and unit for product */}
        {module_type !== 'food' && 
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

          {/* Total Stock */}
          <TextInputComponent
            placeholder={t('newDeveloper.totalStock')}
            value={totalStocks}
            keyboardType='number-pad'
            editable={variantionsDetails.length >  0 ? false :true}
            onChangeText={value => {
              setTotalStocks(value);
            }}
            containerStyle={{ flex: 1, marginHorizontal: windowWidth(2) }}
            error={''}
          />

          {/* Stock units */}
          <SelectionDropdown
            data={vendorUnits}
            value={stockUnit}
            setValue={(value: string) => {
              setStockUnit(value)
            }}
            label={t('newDeveloper.units')}
            error={errorStockUnit}

          />

        </View>
         }

        {/* Maximum order quantity */}

        <TextInputComponent
          placeholder={t('newDeveloper.maximumOrderqty')}
          value={maximumOrderQty}
          keyboardType='number-pad'
          onChangeText={value => {
            setMaximumOrderQty(value);
          }}
          error={errorMaximumOrderQty}
        />


        {/* addon lising here */}
     {module_type === 'food' && <SelectionDropdown
          data={vendorAddons}
          value={''}
          setValue={(value: string) => {
            handleSelectedAddons(value)
          }}
          label={t('newDeveloper.Addons')}
          error={''}
        />}   

        {selectedAddonsList.length > 0 && module_type === 'food' && <AddonInput removeSelectedAddon={removeSelectedAddon} selectedaddons={selectedAddonsList} />}


        {/* Available time starts and ends */}
        {module_type === 'food' && 
         <>
          <View style={{ marginTop: 10, marginLeft: windowWidth(5), }}>
            <Text style={{ fontSize: windowHeight(2), color: appColors.primary }}>
              {t('newDeveloper.AvailableSlots')}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            {/* Available time starts */}
            <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.9}
              onPress={() => {
                setFromTimePicker(true)
              }}>
              <TextInputComponent
                placeholder={t('newDeveloper.Timestarts')}
                value={fromTime}
                keyboardType='number-pad'
                editable={false}
                onChangeText={value => {
                }}
                containerStyle={{ flex: 1, marginHorizontal: windowWidth(2) }}
                error={''}
              />
            </TouchableOpacity>
            {/* Available time ends */}
            <TouchableOpacity style={{ flex: 1 }} onPress={() => {
              setToTimePicker(true)
            }}>
              <TextInputComponent
                placeholder={t('newDeveloper.Timeends')}
                value={toTime}
                keyboardType='number-pad'
                editable={false}
                onChangeText={value => {
                }}
                containerStyle={{ marginHorizontal: windowWidth(2) }}
                error={''}
              />
            </TouchableOpacity>
            {fromTimePicker && <TimepickerSelectTimeTwentyFourHours setDatePicker={setFromTimePicker} setScheduleDate={setFromTime} />}
            {toTimePicker && <TimepickerSelectTimeTwentyFourHours setDatePicker={setToTimePicker} setScheduleDate={setToTime} />}
          </View>
        </>
        }


        {/* Product main thumbnail image will be upload */}
        <View style={{ marginTop: 10, marginLeft: windowWidth(5), }}>
          <Text style={{ fontSize: windowHeight(2), color: appColors.primary }}>
            {t('newDeveloper.MainThumbnailImage')}
          </Text>
        </View>

        <UploadContainerView
          title={'newDeveloper.uploadThumbnail'}
          onPress={openThumbnailImage}
          image={thumbanailImage}
          setImage={setThumbnailImage}
          error={errorThumbnailImage}
        />



      </View>
      <View style={{ flex: 1, marginLeft: 20, marginTop: 10, }}>
        <Text style={{ fontSize: windowHeight(2), color: appColors.primary }}>Upload Images</Text>
      </View>
      {itemImages.length > 0 && itemImages.map((itemImage: string, indexItem: number) => {
        return <TouchableOpacity
          key={`itemImage${indexItem}`}
          activeOpacity={0.9}
          style={styles.imageContainer}>
          <Image source={{ uri: itemImage }} style={styles.imageStyle} />
          <TouchableOpacity onPress={() => removeImage(indexItem)} style={styles.crossButton}>
            <Icon name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </TouchableOpacity>
      })}
      <UploadContainerView
        title={'newDeveloper.uploadImages'}
        onPress={openItemImage}
        image={''}
        setImage={handleSetItemImage}
        error={''}
      />
      {foodVars.length > 0 && module_type === 'food' &&
        foodVars.map((foodV: foodVariations, foodindex: number) => {
          return (<View key={`foodVariation-${foodindex}`} style={{ flex: 1, marginTop: 20 }}>
            <FoodVariation removeVariationFromState={removeVariationFromState} updateVaritionsState={updateVaritionsState} foodVariation={foodV} foodVariationIndex={foodindex} />
          </View>)
        })
      }
      {module_type === 'food' && <View style={{ flex: 1, marginTop: 10, marginLeft: windowWidth(6) }}>
        <TouchableOpacity onPress={addFoodVariationPanel} style={styles.addButton}>
          <Text style={styles.addButtonText}>{t('newDeveloper.AddVariants')}</Text>
        </TouchableOpacity>
      </View>}
    </>
  );
}
