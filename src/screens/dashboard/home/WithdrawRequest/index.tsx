import { ScrollView, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
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
import { getWithdrawMethodList } from '@src/services/withdraw.service';
import { withdrawMethodActions } from '@src/store/redux/withdraw-method-redux';
import { utf8ToBase64 } from '@src/config/utility';
import { sendWithdrawRequest } from '@src/services/withdraw.service';
import { withdrawListingActions } from '@src/store/redux/withdraw-list-redux';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getAuthUserService } from '@src/services/auth.service';
import { serviceProviderAccountDataActions } from '@src/store/redux/service-provider-account-data.redux';


interface Variant {
  name: string;
  price: string;
}

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

type routeProps = NativeStackNavigationProp<RootStackParamList>;

//======================= Withdraw Request ====================================//
export function WithdrawRequest() {
  const dispatch = useDispatch()
  const [withdrawNote, setWithdrawNote] = useState<string>('')
  const [withDrawAmount, setWithDrawAmount] = useState<string>('')
  const [withdrawalMethodId, setWithdrawMethodId] = useState<string>('')
  const { isDark, t, currSymbol } = useValues();
  const [processingSpinner, setProcessingLoader] = useState(false)
  const {
    maximum_withdraw_amount,
    minimum_withdraw_amount
  } = useSelector((state: RootState) => state['providerAppConfig'])

  const withdrawMethod = useSelector((state: RootState) => state['withdrawMethod'])
  const [withdrawMethodFieldValues, setWithdrawMethodFieldValues] = useState<
    {
      withdrawMethodId: string,
      fieldName: string,
      fieldValue: string
    }[]
  >([])

  const { navigate } = useNavigation<routeProps>();

  const loadWithdrawMethodListing = async () => {
    const response: Response = await getWithdrawMethodList()
    if (response?.data?.content?.data) {

      dispatch(withdrawMethodActions.setWithdrawMethod(response?.data?.content?.data))
    }
  }

  useEffect(() => {
    if (withdrawMethod.length === 0) {
      loadWithdrawMethodListing()
    }

  }, [withdrawMethod])



//handle process withdraw amount
  const handleProcessWithdrawAmount = async () => {
    let amountToWithdraw = withDrawAmount.replace(/[^\d]/g, '');
    const updatedWithdraw = amountToWithdraw ? parseFloat(amountToWithdraw) : 0
    if (withdrawalMethodId === '') {
      Toast.show({
        type: 'error',
        text1: 'ERROR',
        text2: t('newDeveloper.WithDrawMethodRequired'),
      });
      return;
    }
    if (updatedWithdraw < minimum_withdraw_amount) {
      Toast.show({
        type: 'error',
        text1: 'ERROR',
        text2: `${t('newDeveloper.Minimumwithdrawamount')} ${minimum_withdraw_amount}`,
      });
      return;
    }
    if (updatedWithdraw > maximum_withdraw_amount) {
      Toast.show({
        type: 'error',
        text1: 'ERROR',
        text2: `${t('newDeveloper.Maximumwithdrawamount')} ${maximum_withdraw_amount}`,
      });
      return;
    }

    const findWithdrawMethod = withdrawMethod.find(ele => ele.id === withdrawalMethodId);
    const withdrawMethodFieldArr = withdrawMethodFieldValues.filter(ele => ele.withdrawMethodId === withdrawalMethodId)

    const transformedFields: Record<string, string> = withdrawMethodFieldArr.reduce((acc, { fieldName, fieldValue }) => {
      acc[fieldName] = fieldValue;
      return acc;
    }, {} as Record<string, string>);

    let hasMethodFieldError = false
    if(findWithdrawMethod?.method_fields){
      findWithdrawMethod?.method_fields.forEach((methodFld)=>{
            if(methodFld.is_required === 1){
                  if(!transformedFields?.[methodFld.input_name]){
                     hasMethodFieldError = true
                  } 
            }
      })

    }

    if(hasMethodFieldError){
      Toast.show({
        type: 'error',
        text1: 'ERROR',
        text2: t('Withdraw method required missing'),
      });
      return;
    }
    

    const encodedFields = utf8ToBase64(JSON.stringify([transformedFields]));
    setProcessingLoader(true)
   
    const formData = new FormData()
   
    formData.append('amount', updatedWithdraw)
    formData.append('note', withdrawNote)
    formData.append('withdrawal_method_id', withdrawalMethodId)
    formData.append('withdrawal_method_fields', encodedFields)

    const response: Response = await sendWithdrawRequest(formData)
   
    if (response?.data?.response_code === 'default_200') {
      dispatch(withdrawListingActions.resetState())
      Toast.show({
        type: 'success',
        text1: 'SUCCESS',
        text2: t('newDeveloper.WithdrawRequestSuccessfullySend'),
      });
      const response = await getAuthUserService()
      if (response?.data?.response_code === 'default_200' && response?.data?.content?.provider_info?.id) {
        dispatch(serviceProviderAccountDataActions.setData(response?.data?.content?.provider_info))
      }
      setProcessingLoader(false)
      navigate('WithdrawList')
    } else {
      if (response?.data?.message) {
        Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: response?.data?.message,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.WithdrawRequestFailedSend'),
        });
      }

    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: windowHeight(3) }}
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        { backgroundColor: isDark ? appColors.darkCard : appColors.white },
      ]}>
      <Header showBackArrow={true} title={'newDeveloper.Withdrawrequest'} />

      <InputView
        withdrawNote={withdrawNote}
        setWithdrawNote={setWithdrawNote}
        withDrawAmount={withDrawAmount}
        setWithDrawAmount={setWithDrawAmount}
        withdrawalMethodId={withdrawalMethodId}
        setWithdrawMethodId={setWithdrawMethodId}
        withdrawMethodFieldValues={withdrawMethodFieldValues}
        setWithdrawMethodFieldValues={setWithdrawMethodFieldValues}
      />

      <GradientBtn
        label="newDeveloper.SendWithdrawRequest"
        onPress={handleProcessWithdrawAmount}
        additionalStyle={{
          marginHorizontal: windowWidth(5),
          marginTop: windowHeight(3),
        }}
      />
      <Spinner
        visible={processingSpinner}
        textContent={'Processing.....'}
        textStyle={{ color: '#FFF' }}
      />
    </ScrollView>
  );
}
