import { Alert, ScrollView, View } from 'react-native';
import React, { useState, useEffect, useReducer } from 'react';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import { windowHeight, windowWidth } from '@theme/appConstant';
import InputView from './inputView';
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
import { createVendorAddons, updateVendorAddons } from '@src/services/store/addons.service';
import { vendorAddonsActions } from '@src/store/redux/store/addons-redux';

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

interface State {
  addOnId: string;
  addOnName: string;
  addOnPrice: string;
  addOnNameError: string;
  addOnPriceError: string;
}
const initialState: State = {
  addOnId: '',
  addOnName: '',
  addOnPrice: '',
  addOnNameError: '',
  addOnPriceError: '',
};

type Action =
  | { type: 'SET_ID'; payload: string }
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_PRICE'; payload: string }
  | { type: 'SET_NAME_ERROR'; payload: string }
  | { type: 'SET_PRICE_ERROR'; payload: string }
  | { type: 'RESET_ERRORS' };


const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_ID':
      return { ...state, addOnId: action.payload };
    case 'SET_NAME':
      return { ...state, addOnName: action.payload };
    case 'SET_PRICE':
      return { ...state, addOnPrice: action.payload };
    case 'SET_NAME_ERROR':
      return { ...state, addOnNameError: action.payload };
    case 'SET_PRICE_ERROR':
      return { ...state, addOnPriceError: action.payload };
    case 'RESET_ERRORS':
      return { ...state, addOnNameError: '', addOnPriceError: '' };
    default:
      return state;
  }
};

//Create new addons
type ItemsProps = NativeStackNavigationProp<RootStackParamList>;
type EditAddonRouteProp = RouteProp<RootStackParamList, 'EditVendorAddon'>;
export function VendorCreateAddons() {

  const navigation = useNavigation<ItemsProps>();
  const [FORM_STATE, FORM_DISPATCH] = useReducer(reducer, initialState);
  const route = useRoute<EditAddonRouteProp>();

  const dispatch = useDispatch()


  useEffect(() => {
    if (route?.params?.id) {
      FORM_DISPATCH({ type: 'SET_ID', payload: route?.params?.id });
      FORM_DISPATCH({ type: 'SET_NAME', payload: route?.params?.name });
      FORM_DISPATCH({ type: 'SET_PRICE', payload: route?.params?.price });
    }

  }, [route?.params?.id])

  const { isDark, t } = useValues();
  const [processingLoader, setProcessingLoader] = useState(false)

  const VALIDATE_FORM = (): boolean => {
    let valid = true;
    FORM_DISPATCH({ type: 'RESET_ERRORS' });

    if (FORM_STATE.addOnName.trim() === '') {
      FORM_DISPATCH({ type: 'SET_NAME_ERROR', payload: t('newDeveloper.EnterAddonTitle') });
      valid = false;
    }

    if (!parseFloat(FORM_STATE.addOnPrice)) {
      FORM_DISPATCH({ type: 'SET_PRICE_ERROR', payload: t('newDeveloper.EnterValidAddonPrice') });
      valid = false;
    }

    return valid;
  };

  //handle create new add on process
  const handleCreateAddon = async () => {
    if (VALIDATE_FORM()) {

      const formData = new FormData()
      formData.append('name', FORM_STATE.addOnName)
      formData.append('price', FORM_STATE.addOnPrice)
      formData.append('translations[0][locale]', 'en')
      formData.append('translations[0][key]', 'name')
      formData.append('translations[0][value]', FORM_STATE.addOnName)
      setProcessingLoader(true)
      let response: Response = {
        data: undefined,
        status: 0,
        statusText: '',
        headers: undefined,
        config: undefined
      }
      if (FORM_STATE.addOnId) {
        formData.append('id', FORM_STATE.addOnId)
        response = await updateVendorAddons(formData) //update coupon
      } else {
        response = await createVendorAddons(formData)
      }

      if (response?.data?.message) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: response?.data?.message,
        });
        // FORM_DISPATCH({ type: 'SET_NAME', payload: '' })
        // FORM_DISPATCH({ type: 'SET_PRICE', payload: '' })
        dispatch(vendorAddonsActions.resetState())
        navigation.navigate('ListAddons')
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
    }
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
        <Header showBackArrow={true} title={FORM_STATE.addOnId ? 'newDeveloper.EditAddOns' : 'newDeveloper.AddNewAddOns'} />

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
          itemTitle={FORM_STATE.addOnName}
          setItemTitle={(value) => {
            FORM_DISPATCH({ type: 'SET_NAME', payload: value })
            FORM_DISPATCH({ type: 'SET_NAME_ERROR', payload: '' })
          }}
          errorItemTitle={FORM_STATE.addOnNameError}
          itemPrice={FORM_STATE.addOnPrice}
          setItemPrice={(value) => {
            FORM_DISPATCH({ type: 'SET_PRICE', payload: value })
            FORM_DISPATCH({ type: 'SET_PRICE_ERROR', payload: '' })
          }}
          errorItemPrice={FORM_STATE.addOnPriceError}
        />
        <Spinner
          visible={processingLoader}
          textContent={'Processing.....'}
          textStyle={{ color: '#FFF' }}
        />
        <GradientBtn
          label={FORM_STATE.addOnId ? "newDeveloper.update" : "newDeveloper.Add"}
          onPress={handleCreateAddon}
          additionalStyle={{
            marginHorizontal: windowWidth(5),
            marginTop: windowHeight(3),
          }}
        />
      </ScrollView>

    </>
  );
}
