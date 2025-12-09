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
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-toast-message';
import { updateBanner, uploadBanner } from '@src/services/store/banner.service';
import { isFileProtocol } from '@src/utils/functions';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { vendorBannerActions } from '@src/store/redux/store/banner-redux';

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}
interface State {
  bannerId: string;
  bannerTitle: string;
  errorBannerTitle: string;
  bannerUrl: string;
  errorBannerUrl: string;
  bannerImage: string;
  bannerImageError: string;
}
//initial state
const initialState: State = {
  bannerId: '',
  bannerTitle: '',
  errorBannerTitle: '',
  bannerUrl: '',
  errorBannerUrl: '',
  bannerImage: '',
  bannerImageError: ''
}

type Action =
  | { type: 'SET__BANNER__ID'; payload: typeof initialState.bannerId }
  | { type: 'SET__BANNER__TITLE'; payload: typeof initialState.bannerTitle }
  | { type: 'SET__ERROR__BANNER__TITLE'; payload: typeof initialState.errorBannerTitle }
  | { type: 'SET__BANNER__URL'; payload: typeof initialState.bannerUrl }
  | { type: 'SET__ERROR__BANNER__URL'; payload: typeof initialState.errorBannerUrl }
  | { type: 'SET__BANNER__IMAGE'; payload: typeof initialState.bannerImage }
  | { type: 'SET__BANNER__IMAGE__ERROR'; payload: typeof initialState.bannerImageError }
  | { type: 'RESET_ERRORS' }
  | { type: 'RESET_ALL' };


function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET__BANNER__ID':
      return { ...state, bannerId: action.payload };
    case 'SET__BANNER__TITLE':
      return { ...state, bannerTitle: action.payload };
    case 'SET__ERROR__BANNER__TITLE':
      return { ...state, errorBannerTitle: action.payload };
    case 'SET__BANNER__URL':
      return { ...state, bannerUrl: action.payload };
    case 'SET__ERROR__BANNER__URL':
      return { ...state, errorBannerUrl: action.payload };
    case 'SET__BANNER__IMAGE':
      return { ...state, bannerImage: action.payload };
    case 'SET__BANNER__IMAGE__ERROR':
      return { ...state, bannerImageError: action.payload };

    case 'RESET_ERRORS':
      return {
        ...state,
        errorBannerTitle: '',
        errorBannerUrl: '',
        bannerImageError: '',
      };
    case 'RESET_ALL':
      return initialState;
    default:
      return state;
  }
}


//Add new banner
type EditAddonRouteProp = RouteProp<RootStackParamList, 'EditVendorBanner'>;
type routeProps = NativeStackNavigationProp<RootStackParamList>;
export function VendorAddNewBanner() {
   
  const { navigate } = useNavigation<routeProps>();

  const [FORM_STATE, FORM_DISPATCH] = useReducer(reducer, initialState);
  const route = useRoute<EditAddonRouteProp>();
  const { isDark, t } = useValues();
  const dispatch = useDispatch()
  const [processingLoader, setProcessingLoader] = useState(false)

  useEffect(() => {
    if (route?.params?.id) {
      FORM_DISPATCH({ type: 'SET__BANNER__ID', payload: route?.params?.id });
      FORM_DISPATCH({ type: 'SET__BANNER__TITLE', payload: route?.params?.title });
      FORM_DISPATCH({ type: 'SET__BANNER__IMAGE', payload: route?.params?.image });
      FORM_DISPATCH({ type: 'SET__BANNER__URL', payload: route?.params?.bannerLink });
    }
  }, [route?.params?.id])
  //validate form
  const VALIDATE_FORM = (): boolean => {
    let valid = true;

    FORM_DISPATCH({ type: 'RESET_ERRORS' });


    if (FORM_STATE.bannerTitle.trim() === '') {
      FORM_DISPATCH({ type: 'SET__ERROR__BANNER__TITLE', payload: t('newDeveloper.Required') });
      valid = false;
    }

    if (FORM_STATE.bannerImage === '') {
      FORM_DISPATCH({ type: 'SET__BANNER__IMAGE__ERROR', payload: t('newDeveloper.Required') });
      valid = false;
    }

    return valid

  }

  //handle create a banner
  const handleCreateBanner = async () => {
    if (VALIDATE_FORM()) {
      const formData = new FormData()
      formData.append('title', FORM_STATE.bannerTitle)
      formData.append('default_link', FORM_STATE.bannerUrl)
      formData.append('translations',JSON.stringify([{locale:"en",key:'name',value:FORM_STATE.bannerTitle}]))
      if (isFileProtocol(FORM_STATE.bannerImage)) {
        formData.append('image', {
          uri: FORM_STATE.bannerImage,
          name: 'banner.jpg',
          type: 'image/jpeg',
        });
      }
      setProcessingLoader(true)

      let response: Response = {
        data: undefined,
        status: 0,
        statusText: '',
        headers: undefined,
        config: undefined
      }
      if (FORM_STATE.bannerId) {
        formData.append('id', FORM_STATE.bannerId)
        response = await updateBanner(formData) //update coupon
      } else {
        response = await uploadBanner(formData)
      }
      if (response?.data?.message) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: response?.data?.message,
        });
        FORM_DISPATCH({ type: 'RESET_ALL' })
        dispatch(vendorBannerActions.resetState())
        navigate('ListBanners')

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
        <Header showBackArrow={true} title={FORM_STATE.bannerId ? 'newDeveloper.EditNewBanner' : 'newDeveloper.AddNewBanner'} />

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
          bannerTitle={FORM_STATE.bannerTitle}
          setBannerTitle={(value) => {
            FORM_DISPATCH({ type: 'SET__BANNER__TITLE', payload: value })
            FORM_DISPATCH({ type: 'SET__ERROR__BANNER__TITLE', payload: '' })
          }}
          errorBannerTitle={FORM_STATE.errorBannerTitle}
          bannerUrl={FORM_STATE.bannerUrl}
          setBannerUrl={(value) => {
            FORM_DISPATCH({ type: 'SET__BANNER__URL', payload: value })
            FORM_DISPATCH({ type: 'SET__ERROR__BANNER__URL', payload: '' })
          }}
          errorBannerUrl={FORM_STATE.errorBannerUrl}
          bannerImage={FORM_STATE.bannerImage}
          setBannerImage={(value) => {
            FORM_DISPATCH({ type: 'SET__BANNER__IMAGE', payload: value })
            FORM_DISPATCH({ type: 'SET__BANNER__IMAGE__ERROR', payload: '' })
          }}
          bannerImageError={FORM_STATE.bannerImageError}
        />
        <GradientBtn
          label={FORM_STATE.bannerId ? "newDeveloper.update" : "newDeveloper.AddBanner"}
          onPress={handleCreateBanner}
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
