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
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { createVendorAddons } from '@src/services/store/addons.service';
import { updateAnnouncement } from '@src/services/store/announcement.service';
import { storeProfileDataActions } from '@src/store/redux/store/store-profile-redux';
import { getAuthUserService as storeAuthService } from '@src/services/store/auth.service';
 
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

interface State {
  status: number;
  message: string | null;
}
const initialState:State = {
  status: 0,
  message: '',
};

type Action =
  | { type: 'SET_STATUS'; payload: typeof initialState.status }
  | { type: 'SET_MESSAGE'; payload: typeof initialState.message }
  | { type: 'RESET_ALL' };

   

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_STATUS':
      return { ...state, status: action.payload };
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    case 'RESET_ALL':
      return initialState;
    default:
      return state;
  }
};

//Create new addons
type ItemsProps = NativeStackNavigationProp<RootStackParamList>;

export function StoreUpdateAnnouncement() {
  const navigation = useNavigation<ItemsProps>();
  const [FORM_STATE, FORM_DISPATCH] = useReducer(reducer, initialState);

  const { isDark, t } = useValues();

  const dispatch = useDispatch()

  const { stores: storesList } = useSelector(
    (state: RootState) => state['storeProfileData']
  );
  const { announcement,announcement_message } = storesList[0]

  useEffect(()=>{
    FORM_DISPATCH({ type: 'SET_STATUS', payload: announcement })
    FORM_DISPATCH({ type: 'SET_MESSAGE', payload: announcement_message  })
  },[announcement,announcement_message])
   
  const [processingLoader, setProcessingLoader] = useState(false)
   
  const VALIDATE_FORM = (): boolean => {
    let valid = true;
    if (!FORM_STATE.message) {
           Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: t('newDeveloper.MessagefieldRequired'),
            });
      valid = false;
    }
    return valid;
  };

  //Handle update announcement
  const handleCreateAddon = async () => {
    if (VALIDATE_FORM()) {
     
      const formData = new FormData()
      formData.append('announcement_status', FORM_STATE.status)
      formData.append('announcement_message', FORM_STATE.message)
       
      setProcessingLoader(true)

      const response: Response = await updateAnnouncement(formData)
      if (response?.data?.message) {
          const responseuser = await storeAuthService()
          if (responseuser?.data?.id) {
             dispatch(storeProfileDataActions.setData(responseuser?.data))
          }
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: response?.data?.message,
          });
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
        <Header showBackArrow={true} title={'newDeveloper.AnnouncementUpdate'} />

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
          status={FORM_STATE.status}
          setStatus={(value) => {
            FORM_DISPATCH({ type: 'SET_STATUS', payload: value })
          }}
          message={FORM_STATE.message}
          setMessage={(value) => {
            FORM_DISPATCH({ type: 'SET_MESSAGE', payload: value })
          }}
        />
        <Spinner
          visible={processingLoader}
          textContent={'Processing.....'}
          textStyle={{ color: '#FFF' }}
        />
        <GradientBtn
          label="newDeveloper.Add"
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
