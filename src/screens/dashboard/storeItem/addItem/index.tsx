import { Alert, ScrollView, View } from 'react-native';
import React, { useState, useEffect, useReducer } from 'react';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import SliderContainer from '@otherComponent/sliderContainer';
import AddNewImageSection from './addNewImage';
import { windowHeight, windowWidth } from '@theme/appConstant';
import InputView from './inputView';
import StatusSection from './statusSection';
import GradientBtn from '@commonComponents/gradientBtn';
import { useValues } from '../../../../../App';
import appColors from '@theme/appColors';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';

import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-toast-message';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { getVendorCategories, getVendorSubCategories } from '@src/services/store/category.service';
import { authAuthorizeRedirect, isFileProtocol } from '@src/utils/functions';
import { vendorCategoriesActions } from '@src/store/redux/store/categories.redux';
import { vendorSubCategoriesActions } from '@src/store/redux/store/subcategories-redux';
import { vendorAttributeActions } from '@src/store/redux/store/attributes-redux';
import { getAttributesService } from '@src/services/store/attribute.service';
import { getVendorUnits } from '@src/services/store/units.service';
import { vendorUnitsActions } from '@src/store/redux/store/units.redux';
import { foodVariations } from '@src/interfaces/store/foodVariations.interface';

import { vendorAddonsActions } from '@src/store/redux/store/addons-redux';
import { getVendorAddons } from '@src/services/store/addons.service';
import { createVendorItems, retrieveItemDetails, updateVendorItems } from '@src/services/store/item.service';
import { compareTimes } from '@src/config/utility';

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

interface State {
  itemId: string;
  itemTitle: string;
  errorItemTitle: string;
  itemDesciption: string;
  errorItemDescription: string;
  itemPrice: string;
  errorItemPrice: string;
  discountAmount: string;
  errorDiscountAmount: string;
  discountTypes: string;
  errorDiscountTypes: string;
  category: string;
  errorCategory: string;
  subCategory: string;
  errorSubCategory: string;
  selectedAttrbutes: number[];
  maximumOrderQty: string;
  errorMaximumOrderQty: string;
  tags: string[];
  attributeVariants: { attrbuteId: number, attributeName: string, variants: string[] }[];
  variantionsDetails: { type: string, price: number, stock: number }[];
  choiceOptions: { type: string, price: number, stock: number }[];
  thumbnailImage: string;
  errorThumbnailImage: string;
  itemImages: string[];
  totalStocks: string;
  stockUnit: string;
  errorStockUnit: string;
  itemType: string;
  foodVars: foodVariations[];
  selectedAddonsList: string[],
  fromTime: string,
  toTime: string,

  anotherFromTime: string,
  anotherToTime: string,
}

const initialState: State = {
  itemId: '',
  itemTitle: '',
  errorItemTitle: '',
  itemDesciption: '',
  errorItemDescription: '',
  itemPrice: '',
  errorItemPrice: '',
  discountAmount: '',
  errorDiscountAmount: '',
  discountTypes: 'percent',
  errorDiscountTypes: '',
  category: '',
  errorCategory: '',
  subCategory: '',
  errorSubCategory: '',
  selectedAttrbutes: [],
  maximumOrderQty: '',
  errorMaximumOrderQty: '',
  tags: [],
  attributeVariants: [],
  variantionsDetails: [],
  choiceOptions: [],
  thumbnailImage: '',
  errorThumbnailImage: '',
  itemImages: [],
  totalStocks: '',
  stockUnit: '',
  errorStockUnit: '',
  itemType: 'noveg',
  foodVars: [],
  selectedAddonsList: [],
  fromTime: '',
  toTime: '',
  anotherFromTime: '',
  anotherToTime: '',
}

type Action =
  | { type: 'SET_ITEM_ID'; payload: typeof initialState.itemId }
  | { type: 'SET_ITEM_TITLE'; payload: typeof initialState.itemTitle }
  | { type: 'SET_ERROR_ITEM_TITLE'; payload: typeof initialState.errorItemTitle }
  | { type: 'SET_ITEM_DESCRIPTION'; payload: typeof initialState.itemDesciption }
  | { type: 'SET_ERROR_ITEM_DESCRIPTION'; payload: typeof initialState.errorItemDescription }
  | { type: 'SET_ITEM_PRICE'; payload: typeof initialState.itemPrice }
  | { type: 'SET_ERROR_ITEM_PRICE'; payload: typeof initialState.errorItemPrice }
  | { type: 'SET_DISCOUNT_AMOUNT'; payload: typeof initialState.discountAmount }
  | { type: 'SET_ERROR_DISCOUNT_AMOUNT'; payload: typeof initialState.errorDiscountAmount }
  | { type: 'SET_DISCOUNT_TYPES'; payload: typeof initialState.discountTypes }
  | { type: 'SET_ERROR_DISCOUNT_TYPES'; payload: typeof initialState.errorDiscountTypes }
  | { type: 'SET_CATEGORY'; payload: typeof initialState.category }
  | { type: 'SET_ERROR_CATEGORY'; payload: typeof initialState.errorCategory }
  | { type: 'SET_SUB_CATEGORY'; payload: typeof initialState.subCategory }
  | { type: 'SET_ERROR_SUB_CATEGORY'; payload: typeof initialState.errorSubCategory }
  | { type: 'SET_SELECTED_ATTRIBUTES'; payload: typeof initialState.selectedAttrbutes }
  | { type: 'SET_MAXIMUM_ORDER_QTY'; payload: typeof initialState.maximumOrderQty }
  | { type: 'SET_ERROR_MAXIMUM_ORDER_QTY'; payload: typeof initialState.errorMaximumOrderQty }
  | { type: 'SET_TAGS'; payload: typeof initialState.tags }
  | { type: 'SET_ATTRIBUTE_VARIANTS'; payload: typeof initialState.attributeVariants }
  | { type: 'SET_VARIATIONS_DETAILS'; payload: typeof initialState.variantionsDetails }
  | { type: 'SET_CHOICE_OPTIONS'; payload: typeof initialState.choiceOptions }
  | { type: 'SET_THUMBNAIL_IMAGE'; payload: typeof initialState.thumbnailImage }
  | { type: 'SET_ERROR_THUMBNAIL_IMAGE'; payload: typeof initialState.errorThumbnailImage }
  | { type: 'SET_ITEM_IMAGES'; payload: typeof initialState.itemImages }
  | { type: 'SET_TOTAL_STOCKS'; payload: typeof initialState.totalStocks }
  | { type: 'SET_STOCK_UNIT'; payload: typeof initialState.stockUnit }
  | { type: 'SET_ERROR_STOCK_UNIT'; payload: typeof initialState.errorStockUnit }
  | { type: 'SET_ITEM_TYPE'; payload: typeof initialState.itemType }
  | { type: 'SET_FOOD_VARS'; payload: typeof initialState.foodVars }
  | { type: 'SET_SELECTED_ADDONS_LIST'; payload: typeof initialState.selectedAddonsList }
  | { type: 'SET_FROM_TIME'; payload: typeof initialState.fromTime }
  | { type: 'SET_TO_TIME'; payload: typeof initialState.toTime }
  | { type: 'SET_ANOTHER_FROM_TIME'; payload: typeof initialState.anotherFromTime }
  | { type: 'SET_ANOTHER_TO_TIME'; payload: typeof initialState.anotherToTime }
  | { type: 'RESET_ERRORS' }
  | { type: 'RESET_ALL' };



function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_ITEM_ID':
      return { ...state, itemId: action.payload };
    case 'SET_ITEM_TITLE':
      return { ...state, itemTitle: action.payload };
    case 'SET_ERROR_ITEM_TITLE':
      return { ...state, errorItemTitle: action.payload };
    case 'SET_ITEM_DESCRIPTION':
      return { ...state, itemDesciption: action.payload };
    case 'SET_ERROR_ITEM_DESCRIPTION':
      return { ...state, errorItemDescription: action.payload };
    case 'SET_ITEM_PRICE':
      return { ...state, itemPrice: action.payload };
    case 'SET_ERROR_ITEM_PRICE':
      return { ...state, errorItemPrice: action.payload };
    case 'SET_DISCOUNT_AMOUNT':
      return { ...state, discountAmount: action.payload };
    case 'SET_ERROR_DISCOUNT_AMOUNT':
      return { ...state, errorDiscountAmount: action.payload };
    case 'SET_DISCOUNT_TYPES':
      return { ...state, discountTypes: action.payload };
    case 'SET_ERROR_DISCOUNT_TYPES':
      return { ...state, errorDiscountTypes: action.payload };
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    case 'SET_ERROR_CATEGORY':
      return { ...state, errorCategory: action.payload };
    case 'SET_SUB_CATEGORY':
      return { ...state, subCategory: action.payload };
    case 'SET_ERROR_SUB_CATEGORY':
      return { ...state, errorSubCategory: action.payload };
    case 'SET_SELECTED_ATTRIBUTES':
      return { ...state, selectedAttrbutes: action.payload };
    case 'SET_MAXIMUM_ORDER_QTY':
      return { ...state, maximumOrderQty: action.payload };
    case 'SET_TAGS':
      return { ...state, tags: action.payload };
    case 'SET_ATTRIBUTE_VARIANTS':
      return { ...state, attributeVariants: action.payload };
    case 'SET_VARIATIONS_DETAILS':
      return { ...state, variantionsDetails: action.payload };
    case 'SET_CHOICE_OPTIONS':
      return { ...state, choiceOptions: action.payload };
    case 'SET_THUMBNAIL_IMAGE':
      return { ...state, thumbnailImage: action.payload };
    case 'SET_ERROR_THUMBNAIL_IMAGE':
      return { ...state, errorThumbnailImage: action.payload };
    case 'SET_ITEM_IMAGES':
      return { ...state, itemImages: action.payload };
    case 'SET_TOTAL_STOCKS':
      return { ...state, totalStocks: action.payload };
    case 'SET_STOCK_UNIT':
      return { ...state, stockUnit: action.payload };
    case 'SET_ERROR_STOCK_UNIT':
      return { ...state, errorStockUnit: action.payload };
    case 'SET_ITEM_TYPE':
      return { ...state, itemType: action.payload };
    case 'SET_FOOD_VARS':
      return { ...state, foodVars: action.payload };
    case 'SET_SELECTED_ADDONS_LIST':
      return { ...state, selectedAddonsList: action.payload };
    case 'SET_FROM_TIME':
      return { ...state, fromTime: action.payload };
    case 'SET_TO_TIME':
      return { ...state, toTime: action.payload };
    case 'SET_ANOTHER_FROM_TIME':
      return { ...state, anotherFromTime: action.payload };
    case 'SET_ANOTHER_TO_TIME':
      return { ...state, anotherToTime: action.payload };
    case 'RESET_ERRORS':
      return {
        ...state,
        errorItemTitle: '',
        errorItemDescription: '',
        errorItemPrice: '',
        errorDiscountAmount: '',
        errorDiscountTypes: '',
        errorCategory: '',
        errorSubCategory: '',
        errorMaximumOrderQty: '',
        errorThumbnailImage: '',
        errorStockUnit: '',
      };
    case 'RESET_ALL':
      return initialState;
    default:
      return state;
  }

}

//Add new banner
type ItemsProps = NativeStackNavigationProp<RootStackParamList>;
type EditServiceMenRouteProp = RouteProp<RootStackParamList, 'EditVendorItem'>;

export function VendorAddItem() {
  const navigation = useNavigation<ItemsProps>();
  const route = useRoute<EditServiceMenRouteProp>();
  //get Item Details for update
  const getItemDetails = async () => {
    FORM_DISPATCH({ type: 'RESET_ALL' })
    setProcessingLoader(true)
    const response: Response = await retrieveItemDetails(route?.params?.id);

    console.log('payload: response?.data?.another_available_time_ends', response?.data?.another_available_time_ends);

    setProcessingLoader(false)

    if (response?.data?.id) {
      
      FORM_DISPATCH({ type: 'SET_ITEM_ID', payload: response?.data?.id })
      FORM_DISPATCH({ type: 'SET_ITEM_TITLE', payload: response?.data?.name })
      FORM_DISPATCH({ type: 'SET_ITEM_DESCRIPTION', payload: response?.data?.description })
      FORM_DISPATCH({ type: 'SET_ITEM_PRICE', payload: response?.data?.price ? response?.data?.price.toString() : '' })
      FORM_DISPATCH({ type: 'SET_DISCOUNT_AMOUNT', payload: response?.data?.discount ? response?.data?.discount.toString() : '' })
      FORM_DISPATCH({ type: 'SET_DISCOUNT_TYPES', payload: response?.data?.discount_type })
      FORM_DISPATCH({ type: 'SET_CATEGORY', payload: response?.data?.category_ids[0]?.id || '' })
      FORM_DISPATCH({ type: 'SET_SUB_CATEGORY', payload: response?.data?.category_ids[1]?.id  || '' })
      FORM_DISPATCH({ type: 'SET_MAXIMUM_ORDER_QTY', payload: response?.data?.maximum_cart_quantity ? response?.data?.maximum_cart_quantity.toString() : '' })
      // FORM_DISPATCH({ type: 'SET_FROM_TIME', payload: response?.data?.available_time_starts || '' })
      // FORM_DISPATCH({ type: 'SET_TO_TIME', payload: response?.data?.available_time_ends || '' })
      FORM_DISPATCH({ type: 'SET_TOTAL_STOCKS', payload: response?.data?.stock ? response?.data?.stock.toString() : '' })
      FORM_DISPATCH({ type: 'SET_STOCK_UNIT', payload: response?.data?.unit_id ? response?.data?.unit_id.toString() : '' })
      FORM_DISPATCH({ type: 'SET_ITEM_TYPE', payload: response?.data?.veg === 0 ? 'noveg' : 'veg' })
      FORM_DISPATCH({ type: 'SET_SELECTED_ATTRIBUTES', payload: response?.data?.attributes })
      // FORM_DISPATCH({ type: 'SET_ANOTHER_FROM_TIME', payload: response?.data?.another_available_time_starts || ''})
      // FORM_DISPATCH({ type: 'SET_ANOTHER_TO_TIME', payload: response?.data?.another_available_time_ends || ''})

      FORM_DISPATCH({
        type: 'SET_FROM_TIME',
        payload: convertTo12Hour(response?.data?.available_time_starts || ''),
      })

      FORM_DISPATCH({
        type: 'SET_TO_TIME',
        payload: convertTo12Hour(response?.data?.available_time_ends || ''),
      })

      FORM_DISPATCH({
        type: 'SET_ANOTHER_FROM_TIME',
        payload: convertTo12Hour(response?.data?.another_available_time_starts || ''),
      })

      FORM_DISPATCH({
        type: 'SET_ANOTHER_TO_TIME',
        payload: convertTo12Hour(response?.data?.another_available_time_ends || ''),
      })
      

      if (response?.data?.choice_options) {
        const attributeVariants = response?.data?.choice_options.map((chOpt: any, _: number) => {
          if (chOpt?.name) {
            return { attrbuteId: parseInt(chOpt?.name.split('choice_')[1] || 0), attributeName: chOpt?.title, variants: chOpt?.options }
          }
        })
        FORM_DISPATCH({ type: 'SET_ATTRIBUTE_VARIANTS', payload: attributeVariants })
      }
      if (response?.data?.variations) {
        FORM_DISPATCH({ type: 'SET_CHOICE_OPTIONS', payload: response?.data?.variations })
      }
      if (response?.data?.tags) {
        const tagData = response?.data?.tags.map((tagDt: any, _: number) => {
          return tagDt?.tag
        })
        FORM_DISPATCH({ type: 'SET_TAGS', payload: tagData })
      }
      if (response?.data?.add_ons) {
        const addOnData = response?.data?.add_ons.map((addOnDt: any, _: number) => {
          return addOnDt?.id
        })
        FORM_DISPATCH({ type: 'SET_SELECTED_ADDONS_LIST', payload: addOnData })
      }
      //SET_FOOD_VARS
      if (response?.data?.food_variations) {
        const fVar = response?.data?.food_variations.map((dt: any, _: number) => {
          if (dt?.name) {
            return dt
          }
        })
        FORM_DISPATCH({ type: 'SET_FOOD_VARS', payload: fVar })
      }
      //thumbnail image
      FORM_DISPATCH({ type: 'SET_THUMBNAIL_IMAGE', payload: response?.data?.image_full_url || '' })
      //item other images
      FORM_DISPATCH({ type: 'SET_ITEM_IMAGES', payload: response?.data?.images_full_url || [] })



    } else {
      FORM_DISPATCH({ type: 'RESET_ALL' })
    }
  }
  useEffect(() => {
    if (route?.params?.id) {
      getItemDetails()
    } else {
      FORM_DISPATCH({ type: 'RESET_ALL' })
    }
  }, [route?.params?.id])


  const [FORM_STATE, FORM_DISPATCH] = useReducer(reducer, initialState);

  const { isDark, t } = useValues();
  const dispatch = useDispatch()
  const [processingLoader, setProcessingLoader] = useState(false)




  const { stores: storesList } = useSelector(
    (state: RootState) => state['storeProfileData']
  );
  const { module: storeModuleDetails } = storesList[0]
  const { module_type } = storeModuleDetails

  const {
    isFirstTimeLoading: selectedFirstTimeLoading,
  } = useSelector(
    (state: RootState) => state['vendorCategories']
  );

  const {
    isFirstTimeLoading: selectedFirstTimeAddonsLoading,
  } = useSelector(
    (state: RootState) => state['vendorAddons']
  );

  const {
    isFirstTimeLoading: attributeSelectedFirstTimeLoading,
  } = useSelector(
    (state: RootState) => state['vendorAttribute']
  );

  const {
    data: SubCategories,
  } = useSelector(
    (state: RootState) => state['vendorSubCategories']
  );


  const {
    isFirstTimeLoading: selectedUnitFirstTimeLoading,
  } = useSelector(
    (state: RootState) => state['vendorUnits']
  );

  //load categories
  const loadCategories = async () => {
    setProcessingLoader(true)
    const response: Response = await getVendorCategories();
    if (response?.data?.errors) {
      await authAuthorizeRedirect(response, navigation)
    }
    dispatch(vendorCategoriesActions.setData({ field: 'data', data: response?.data }))
    dispatch(vendorCategoriesActions.setData({ field: 'isFirstTimeLoading', data: false }))
    setProcessingLoader(false)
  }

  useEffect(() => {
    if (selectedFirstTimeLoading) {
      loadCategories()
    }
  }, [selectedFirstTimeLoading])

  //load addons

  const loadAddons = async () => {
    setProcessingLoader(true)
    const response: Response = await getVendorAddons();
    if (response?.data?.errors) {
      await authAuthorizeRedirect(response, navigation)
    }
    dispatch(vendorAddonsActions.setData({ field: 'data', data: response?.data }))
    dispatch(vendorAddonsActions.setData({ field: 'isFirstTimeLoading', data: false }))
    setProcessingLoader(false)

  }

  useEffect(() => {
    if (selectedFirstTimeAddonsLoading) {

      loadAddons()
    }
  }, [selectedFirstTimeAddonsLoading])



  //load units
  const loadUnits = async () => {
    setProcessingLoader(true)
    const response: Response = await getVendorUnits();
    if (response?.data?.errors) {
      await authAuthorizeRedirect(response, navigation)
    }
    dispatch(vendorUnitsActions.setData({ field: 'data', data: response?.data }))
    dispatch(vendorUnitsActions.setData({ field: 'isFirstTimeLoading', data: false }))
    setProcessingLoader(false)

  }
  useEffect(() => {
    if (selectedUnitFirstTimeLoading) {
      loadUnits()
    }
  }, [selectedUnitFirstTimeLoading])


  //load attributes
  const loadAttributes = async () => {
    // setProcessingLoader(true)
    const response: Response = await getAttributesService();
    if (response?.data?.errors) {
      await authAuthorizeRedirect(response, navigation)
    }
    dispatch(vendorAttributeActions.setData({ field: 'data', data: response?.data }))
    dispatch(vendorAttributeActions.setData({ field: 'isFirstTimeLoading', data: false }))
    // setProcessingLoader(false)
  }

  useEffect(() => {
    if (attributeSelectedFirstTimeLoading) {
      loadAttributes()
    }
  }, [attributeSelectedFirstTimeLoading])

  // load sub categories
  const loadSubCategories = async () => {
    setProcessingLoader(true)
    dispatch(vendorSubCategoriesActions.setData({ field: 'selected', data: { categoryId: '', subcategories: [] } }))
    const response: Response = await getVendorSubCategories(FORM_STATE.category);
    if (response?.data?.errors) {
      await authAuthorizeRedirect(response, navigation)
    }
    dispatch(vendorSubCategoriesActions.addServiceSubCategories({ id: FORM_STATE.category, subcategories: response?.data }))
    dispatch(vendorSubCategoriesActions.setData({ field: 'selected', data: { categoryId: FORM_STATE.category, subcategories: response?.data } }))
    dispatch(vendorSubCategoriesActions.setData({ field: 'loading', data: false }))
    setProcessingLoader(false)
  }
  /**** getting subcateories based on category *****/
  useEffect(() => {
    
    if (FORM_STATE.category) {
      const checkExisting = SubCategories.find(elementDet => elementDet.categoryId === FORM_STATE.category);
      if (!checkExisting) {
        loadSubCategories();
      } else {
        dispatch(vendorSubCategoriesActions.setData({ field: 'selected', data: { categoryId: FORM_STATE.category, subcategories: checkExisting.subcategories } }))
      }
    }
  }, [FORM_STATE.category])

  function isNumber(value: any) {
    return !isNaN(value) && typeof value === 'number';
  }

  const validatePrice = (price: any) => {
    // Check if price is a valid number
    if (isNaN(price)) {
      return 'newDeveloper.Price_must_be_a_number'
    }


    price = parseFloat(price);


    if (price < 0) {
      return 'newDeveloper.Price_cannot_be_negative';
    }


    if (!/^\d+(\.\d{1,2})?$/.test(price)) {
      return 'newDeveloper.Price_can_only_have_up_to_two_decimal_places';
    }

    return '';
  }
  //validate form for add item
  function showToastError(messageKey: string) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: t(messageKey),
    });
  }
  function validateVariantNonFoodProduct() {
    for (let i = 0; i < FORM_STATE.variantionsDetails.length; i++) {
      const varDet = FORM_STATE.variantionsDetails[i];
      const validPrice = validatePrice(varDet.price)
      if (validPrice) {
        showToastError(validPrice)
        return false;
      }
      if (!isNumber(varDet.stock)) {
        showToastError('newDeveloper.invalidStock');
        return false;
      }
    }
    return true;
  }
  function validateFoodVars(foodVars: foodVariations[]) {
    for (let i = 0; i < foodVars.length; i++) {
      const foodVarDet = foodVars[i];

      if (foodVarDet.name.trim() === '') {
        showToastError('newDeveloper.variantNameRequired');
        return false;
      }

      if (foodVarDet.type === 'multi') {
        const min = parseFloat(foodVarDet.min);
        const max = parseFloat(foodVarDet.max);

        if (!isNumber(min) || !isNumber(max)) {
          showToastError('newDeveloper.validMinimumAndMaximumValueRequired');
          return false;
        }

        if (min > max) {
          showToastError('newDeveloper.validMinimumAndMaximumValueRequired');
          return false;
        }
      }

      for (let v = 0; v < foodVarDet.values.length; v++) {
        const foodVarOptions = foodVarDet.values[v];

        if (foodVarOptions.label.trim() === '') {
          showToastError('newDeveloper.variantionOptionLabelRequired');
          return false;
        }

        const validPrice = validatePrice(foodVarOptions.optionPrice);
        if (validPrice) {
          showToastError(validPrice)
          return false;
        }
      }
    }

    return true;
  }
  const VALIDATE_FORM = (): boolean => {

    let valid = true;

    if (FORM_STATE.itemTitle.trim() === '') {
      showToastError('newDeveloper.itemTitleRequired');
      return false;
    }
    if (FORM_STATE.itemDesciption.trim() === '') {
      showToastError('newDeveloper.itemDescriptionRequired');
      return false
    }
    const validPrice = validatePrice(FORM_STATE.itemPrice)

    if (validPrice) {
      showToastError(validPrice);
      return false
    }
    if (FORM_STATE.discountAmount === '') {
      showToastError('newDeveloper.discountRequired');
      return false
    }
    if (FORM_STATE.category === '') {
      showToastError('newDeveloper.selectCategory');
      return false
    }
    //validtion for module type not equal food
    if (module_type !== 'food') {
      if (FORM_STATE.variantionsDetails.length > 0) {
        validateVariantNonFoodProduct()
        const isValid = validateVariantNonFoodProduct();
        if (!isValid) {
          return false;
        }

      }
      if (!isNumber(parseFloat(FORM_STATE.totalStocks))) {
        showToastError('newDeveloper.enterTotalStocks');
        return false
      }
      if (FORM_STATE.stockUnit === '') {
        showToastError('newDeveloper.selectUnit');
        return false
      }

    }
    //validation for module type food
    if (module_type === 'food') {
      if (FORM_STATE.fromTime === '' || FORM_STATE.toTime === '') {
        showToastError('newDeveloper.chooseAvailableTimeSlot');
        return false
      }
      if (FORM_STATE.fromTime !== '' && FORM_STATE.toTime !== '') {
        const resCompareTime = compareTimes(
          FORM_STATE.fromTime,
          FORM_STATE.toTime
        )
        if (resCompareTime <= 0) { //compare result two selected
          showToastError('newDeveloper.invalidTimeRangeSelected');
          return false
        }
      }
      //validating food variation field entry
      if (FORM_STATE.foodVars.length > 0) {
        const isValid = validateFoodVars(FORM_STATE.foodVars);
        if (!isValid) {
          return false;
        }
      }
    }

    if (FORM_STATE.thumbnailImage === '') {
      showToastError('newDeveloper.selecteditemImage');
      return false
    }

    return valid
  }

//  function convertTo24Hour(time12h: string): string {
//     const [time, modifier] = time12h.split(' ');
//     let [hours, minutes] = time.split(':');
    
//     if (hours === '12') {
//         hours = '00';
//     }
    
//     if (modifier === 'PM') {
//         hours = (parseInt(hours, 10) + 12).toString();
//     }
    
//     return `${hours}:${minutes}:00`;
// }


function convertTo24Hour(time: string): string {
  if (!time) return '00:00:00';

  const cleanTime = time.replace(/\s+/g, ' ').trim();

  // Already 24-hour format
  if (/^\d{2}:\d{2}:\d{2}$/.test(cleanTime)) {
    return cleanTime;
  }

  // Match 12-hour format
  const match = cleanTime.match(/(\d{1,2}):(\d{2})\s?(AM|PM)/i);

  if (!match) {
    return '00:00:00';
  }

  let hours = parseInt(match[1], 10);
  const minutes = match[2];
  const modifier = match[3].toUpperCase();

  if (modifier === 'PM' && hours !== 12) {
    hours += 12;
  }

  if (modifier === 'AM' && hours === 12) {
    hours = 0;
  }

  return `${hours.toString().padStart(2, '0')}:${minutes}:00`;
}


function convertTo12Hour(time24: string): string {
  if (!time24) return '';

  const [hourString, minutes] = time24.split(':');
  let hour = parseInt(hourString, 10);

  const ampm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12;

  if (hour === 0) {
    hour = 12;
  }

  return `${hour}:${minutes} ${ampm}`;
}


  //handle add item function
  const handleAddItem = async () => {
    if (!VALIDATE_FORM()) { return }
    //================= ITEM INSERTION PROCESS HERE ====================================//
    const formData = new FormData()
    //choice array
    const choice: string[] = []
    if (FORM_STATE.attributeVariants.length > 0) {
      FORM_STATE.attributeVariants.map((dUpdatedAttr, dUpdatedindex) => {
        choice.push(dUpdatedAttr.attributeName)
        formData.append(`choice_options_${dUpdatedAttr.attrbuteId}`, JSON.stringify([dUpdatedAttr.variants.join(',')]))
      })
    }
    if (FORM_STATE.variantionsDetails.length > 0) {
      FORM_STATE.variantionsDetails.forEach(function (combination) {
        formData.append('price_' + combination.type.replace('.', '_'), combination.price);
        formData.append('stock_' + combination.type.replace('.', '_'), combination.stock);
      });
    }
    formData.append('choice_no', JSON.stringify(FORM_STATE.selectedAttrbutes));
    formData.append('choice', JSON.stringify(choice));
    formData.append('category_id', FORM_STATE.category)
   
    formData.append('sub_category_id', FORM_STATE.subCategory)
    
    formData.append('translations', JSON.stringify([
      {
        locale: "en",
        key: 'name',
        value: FORM_STATE.itemTitle
      },
      {
        locale: "en",
        key: 'description',
        value: FORM_STATE.itemDesciption
      }
    ]))

     

    formData.append('attribute_id', JSON.stringify(FORM_STATE.selectedAttrbutes))
    formData.append('price', parseFloat(FORM_STATE.itemPrice))
    formData.append('discount', FORM_STATE.discountAmount ? parseFloat(FORM_STATE.discountAmount) : 0)
    formData.append('discount_type', FORM_STATE.discountTypes)
    formData.append('addon_ids', FORM_STATE.selectedAddonsList.join(','))
    formData.append('tags', FORM_STATE.tags.join(','))
    formData.append('current_stock', FORM_STATE.totalStocks ? parseFloat(FORM_STATE.totalStocks) : 0)
    formData.append('unit', FORM_STATE.stockUnit)
    formData.append('maximum_cart_quantity', FORM_STATE.maximumOrderQty ? parseFloat(FORM_STATE.maximumOrderQty) : 0)
     
    // console.log(convertTo24Hour(FORM_STATE.fromTime))
    // console.log(convertTo24Hour(FORM_STATE.toTime))
    // return;
    
    formData.append('available_time_starts', FORM_STATE.fromTime ? convertTo24Hour(FORM_STATE.fromTime) : '' )
    formData.append('available_time_ends', FORM_STATE.toTime ? convertTo24Hour(FORM_STATE.toTime) : '')

    formData.append('another_available_time_starts', FORM_STATE.anotherFromTime ? convertTo24Hour(FORM_STATE.anotherFromTime) : '')
    formData.append('another_available_time_ends', FORM_STATE.anotherToTime ? convertTo24Hour(FORM_STATE.anotherToTime) : '')

    //thumbnail images
    if (FORM_STATE.thumbnailImage && isFileProtocol(FORM_STATE.thumbnailImage)) {
      formData.append('image', {
        uri: FORM_STATE.thumbnailImage,
        name: 'banner.jpg',
        type: 'image/jpeg',
      });
    }
    //item images
    let editimages:{img:string,storage:string}[]= [];
    if (FORM_STATE.itemImages.length > 0) {
      FORM_STATE.itemImages.forEach((itemimage, itemindex) => {
        if (isFileProtocol(itemimage)) {
          formData.append('item_images[]', {
            uri: itemimage,
            name: `itemImage${itemindex}.jpg`,
            type: 'image/jpeg',
          });
        }
        if (FORM_STATE.itemId) {
          if (!isFileProtocol(itemimage)) {
            editimages = [...editimages,{img:itemimage.substring(itemimage.lastIndexOf('/') + 1),storage:'public'}]
          }
        }
      })
      
      formData.append('images',  JSON.stringify(editimages)  )
    }else{
      formData.append('images',  JSON.stringify([])  )
    }
    //food item type
    if (FORM_STATE.itemType === 'noveg') {
      formData.append('veg', 0)
    } else {
      formData.append('veg', 1)
    }
    //variations for food vendor section
    if (FORM_STATE.foodVars.length > 0) {
      formData.append('options', JSON.stringify(FORM_STATE.foodVars))
    }
    setProcessingLoader(true)
    let response: Response = {
      data: undefined,
      status: 0,
      statusText: '',
      headers: undefined,
      config: undefined
    }
    
    // console.log('formData', formData);return;

    if (FORM_STATE.itemId) {
      formData.append('id', FORM_STATE.itemId)
      response = await updateVendorItems(formData)
    } else {
      response = await createVendorItems(formData)
    }

    // console.log('item add/update response', response.data)
    // return;
   
    if (response?.data?.message) {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: response?.data?.message,
      });
      if (!FORM_STATE.itemId) {
        FORM_DISPATCH({ type: 'RESET_ALL' })
      } else {
        navigation.replace('EditVendorItem', { id: FORM_STATE.itemId });
      }
    } else if (response?.data?.errors) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: response?.data?.errors?.[0]?.message,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "Process failed",
      });
    }
    setProcessingLoader(false)
    //========================== End Item Insertion Process here ==============================//
  }

  

  return (
    <>
      <ScrollView
        contentContainerStyle={{ paddingBottom: windowHeight(3) }}
        showsVerticalScrollIndicator={false}
        style={[
          GlobalStyle.mainView,
          { backgroundColor: isDark ? appColors.darkCard : appColors.white },
        ]}>
        <Header showBackArrow={true} title={FORM_STATE.itemId ? 'newDeveloper.EditItem' : 'newDeveloper.AddNewItem'} />

        <View
          style={[
            GlobalStyle.horizontalLine,
            {
              marginTop: windowHeight(3),
              marginHorizontal: 20,
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}
        />
        <InputView
          itemTitle={FORM_STATE.itemTitle}
          setItemTitle={(value) => {
            FORM_DISPATCH({ type: 'SET_ITEM_TITLE', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_ITEM_TITLE', payload: '' })
          }}
          errorItemTitle={FORM_STATE.errorItemTitle}
          itemDesciption={FORM_STATE.itemDesciption}
          setItemDescription={(value) => {
            FORM_DISPATCH({ type: 'SET_ITEM_DESCRIPTION', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_ITEM_DESCRIPTION', payload: '' })
          }}
          errorItemDescription={FORM_STATE.errorItemDescription}
          itemPrice={FORM_STATE.itemPrice}
          setItemPrice={(value) => {
            FORM_DISPATCH({ type: 'SET_ITEM_PRICE', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_ITEM_PRICE', payload: '' })
          }}
          errorItemPrice={FORM_STATE.errorItemPrice}
          discountAmount={FORM_STATE.discountAmount}
          setDiscountAmount={(value) => {
            FORM_DISPATCH({ type: 'SET_DISCOUNT_AMOUNT', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_DISCOUNT_AMOUNT', payload: '' })
          }}
          errorDiscountAmount={FORM_STATE.errorDiscountAmount}
          discountTypes={FORM_STATE.discountTypes}
          setDiscountTypes={(value) => {
            FORM_DISPATCH({ type: 'SET_DISCOUNT_TYPES', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_DISCOUNT_TYPES', payload: '' })
          }}
          errorDiscountTypes={FORM_STATE.errorDiscountTypes}
          category={FORM_STATE.category}
          setCategory={(value) => {
            FORM_DISPATCH({ type: 'SET_CATEGORY', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_CATEGORY', payload: '' })
          }}
          errorCategory={FORM_STATE.errorCategory}
          subCategory={FORM_STATE.subCategory.toString()}
          setSubCategory={(value) => {
            FORM_DISPATCH({ type: 'SET_SUB_CATEGORY', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_SUB_CATEGORY', payload: '' })
          }}
          errorSubCategory={FORM_STATE.errorSubCategory}
          selectedAttrbutes={FORM_STATE.selectedAttrbutes}
          setSelectedAttributes={(value: number[]) => {
            FORM_DISPATCH({ type: 'SET_SELECTED_ATTRIBUTES', payload: value })
          }}
          maximumOrderQty={FORM_STATE.maximumOrderQty}
          setMaximumOrderQty={(value) => {
            FORM_DISPATCH({ type: 'SET_MAXIMUM_ORDER_QTY', payload: value })
            FORM_DISPATCH({ type: 'SET_ERROR_MAXIMUM_ORDER_QTY', payload: '' })
          }}
          errorMaximumOrderQty={FORM_STATE.errorMaximumOrderQty}
          tags={FORM_STATE.tags}
          setTags={(value: string[]) => {
            FORM_DISPATCH({ type: 'SET_TAGS', payload: value })
          }}
          attributeVariants={FORM_STATE.attributeVariants}
          setAttributeVariants={(value) => {
            FORM_DISPATCH({ type: 'SET_ATTRIBUTE_VARIANTS', payload: value })
          }}
          variantionsDetails={FORM_STATE.variantionsDetails}
          choiceOptions={FORM_STATE.choiceOptions}
          setVariationDetails={(value) => {
            FORM_DISPATCH({ type: 'SET_VARIATIONS_DETAILS', payload: value })
          }}
          thumbanailImage={FORM_STATE.thumbnailImage}
          setThumbnailImage={(value) => {
            FORM_DISPATCH({ type: 'SET_THUMBNAIL_IMAGE', payload: value })
          }}
          errorThumbnailImage={FORM_STATE.errorThumbnailImage}
          itemImages={FORM_STATE.itemImages}
          setItemImages={(value) => {
            FORM_DISPATCH({ type: 'SET_ITEM_IMAGES', payload: value })
          }}
          totalStocks={FORM_STATE.totalStocks}
          setTotalStocks={(value) => {
            FORM_DISPATCH({ type: 'SET_TOTAL_STOCKS', payload: value })
          }}
          stockUnit={FORM_STATE.stockUnit}
          setStockUnit={(value) => {
            FORM_DISPATCH({ type: 'SET_STOCK_UNIT', payload: value })
          }}
          errorStockUnit={FORM_STATE.errorStockUnit}
          itemType={FORM_STATE.itemType}
          setItemType={(value) => {
            FORM_DISPATCH({ type: 'SET_ITEM_TYPE', payload: value })
          }}
          foodVars={FORM_STATE.foodVars}
          setFoodVars={(value) => {
            FORM_DISPATCH({ type: 'SET_FOOD_VARS', payload: value })
          }}
          selectedAddonsList={FORM_STATE.selectedAddonsList}
          setSelectedAddOns={(value) => {
            FORM_DISPATCH({ type: 'SET_SELECTED_ADDONS_LIST', payload: value })
          }}
          fromTime={FORM_STATE.fromTime}
          toTime={FORM_STATE.toTime}
          setFromTime={(value: string) => {
            FORM_DISPATCH({ type: 'SET_FROM_TIME', payload: value })
          }}
          setToTime={(value: string) => {
            FORM_DISPATCH({ type: 'SET_TO_TIME', payload: value })
          }}

          anotherFromTime={FORM_STATE.anotherFromTime}
          anotherToTime={FORM_STATE.anotherToTime}

          setAnotherFromTime={(value) =>
            FORM_DISPATCH({
              type: 'SET_ANOTHER_FROM_TIME',
              payload: value,
            })
          }

          setAnotherToTime={(value) =>
            FORM_DISPATCH({
              type: 'SET_ANOTHER_TO_TIME',
              payload: value,
            })
          }

        />
        <GradientBtn
          label={FORM_STATE.itemId ? "newDeveloper.UpdateItem" : "newDeveloper.CreateItem"}
          onPress={handleAddItem}
          additionalStyle={{
            marginHorizontal: windowWidth(5),
            marginTop: windowHeight(3),
          }}
        />
        <Spinner
          visible={processingLoader}
          textContent={'Processing.....'}
          textStyle={{ color: '#FFF' }}
        />
      </ScrollView>

    </>
  );
}
