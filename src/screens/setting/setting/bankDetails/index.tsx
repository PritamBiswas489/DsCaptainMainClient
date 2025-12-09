import { View, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import { Bank, Person, ServiceMen, Identity } from '@utils/icons';
import { styles } from './styles';
import TextInput from '@otherComponent/auth/textInput';
import GradientBtn from '@commonComponents/gradientBtn';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { useValues } from '../../../../../App';
import appColors from '@theme/appColors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { getUserBankDetails, saveBankDetails } from '@src/services/profile.service';
import { bankDetailsActions } from '@src/store/redux/bank-details-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-toast-message';

export function BankDetails() {
  const dispatch = useDispatch()

  const is_details_loaded = useSelector((state: RootState) => state['bankDetailsField'].is_details_loaded)
  const bank_name = useSelector((state: RootState) => state['bankDetailsField'].bank_name)
  const branch_name = useSelector((state: RootState) => state['bankDetailsField'].branch_name)
  const acc_no = useSelector((state: RootState) => state['bankDetailsField'].acc_no)
  const acc_holder_name = useSelector((state: RootState) => state['bankDetailsField'].acc_holder_name)
  const routing_number = useSelector((state: RootState) => state['bankDetailsField'].routing_number)

  const [bankName, setBankName] = useState(bank_name);
  const [holderName, setHolderName] = useState(acc_holder_name);
  const [accountNo, setAccountNo] = useState(acc_no);
  const [branchName, setBranchName] = useState(branch_name);
  const [routingNumber, setRoutingNumber] = useState(routing_number);
  const [loader,setLoader] = useState(false)
  const { isDark, t } = useValues();

  const updateReduxBankDetails = (data: { bank_name: string, branch_name: string, acc_no: string, acc_holder_name: string, routing_number: string }) => {
    dispatch(bankDetailsActions.setData({
      field: 'is_details_loaded',
      data: true
    }))
    dispatch(bankDetailsActions.setData({
      field: 'bank_name',
      data: data?.bank_name
    }))
    setBankName(data?.bank_name)
    dispatch(bankDetailsActions.setData({
      field: 'branch_name',
      data: data?.branch_name
    }))
    setBranchName(data?.branch_name)
    dispatch(bankDetailsActions.setData({
      field: 'acc_no',
      data: data?.acc_no
    }))
    setAccountNo(data?.acc_no)
    dispatch(bankDetailsActions.setData({
      field: 'acc_holder_name',
      data: data?.acc_holder_name
    }))
    setHolderName(data?.acc_holder_name)
    dispatch(bankDetailsActions.setData({
      field: 'routing_number',
      data: data?.routing_number
    }))
    setRoutingNumber(data?.routing_number)
  }

  useEffect(() => {
    const getBankDetails = async () => {
      setLoader(true)
      const response = await getUserBankDetails()
      if (response?.data?.content) {
        updateReduxBankDetails(response?.data?.content)
      }
      setLoader(false)
    }
    if (!is_details_loaded) {
         getBankDetails()
    }
  }, [is_details_loaded])

  interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
  }
  
  const handleSavingBankDetails = async () =>{
    const formData = new FormData()
    formData.append('bank_name',bankName)
    formData.append('branch_name',branchName)
    formData.append('acc_no',accountNo)
    formData.append('acc_holder_name',holderName)
    formData.append('routing_number',routingNumber)
    setLoader(true)
    const response:Response  = await saveBankDetails(formData)
      if(response?.data?.response_code === 'default_400'){
              response?.data?.errors.forEach((data:{"error_code": string, "message": string},index:number)=>{
                  Toast.show({
                    type: 'error',
                    text1: 'ERROR',
                    text2: data?.message,
                  });
              })
      } else if(response?.data?.response_code === 'default_store_200'){
              Toast.show({
                  type: 'success',
                  text1: 'Success',
                  text2: response?.data?.message,
              });
              updateReduxBankDetails({ 
                bank_name: bankName, 
                branch_name: branchName, 
                acc_no: accountNo, acc_holder_name:  
                holderName, 
                routing_number: routingNumber 
              }) 
      }else {
              Toast.show({
                type: 'error',
                text1: 'ERROR',
                text2: t('newDeveloper.processFailed'),
              });
      }
      setLoader(false)
  }

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={[
        GlobalStyle.mainView,
        { backgroundColor: isDark ? appColors.darkCard : appColors.white },
      ]}>
      <Header showBackArrow={true} title="bankDetails.bankDetail" />
      <View style={styles.container}>
        <TextInput
          placeholder={t('wallet.bankName')}
          containerStyle={styles.inputContainer}
          Icon={
            <Bank color={isDark ? appColors.lightText : appColors.darkText} />
          }
          value={bankName}
          onChangeText={value => {
            setBankName(value);
          }}
        />

        <TextInput
          placeholder={t('bankDetails.branchName')}
          containerStyle={styles.inputContainer}
          Icon={
            <Bank color={isDark ? appColors.lightText : appColors.darkText} />
          }
          value={branchName}
          onChangeText={value => {
            setBranchName(value);
          }}
        />

        <TextInput
          placeholder={t('bankDetails.accountNo')}
          containerStyle={styles.inputContainer}
          Icon={
            <ServiceMen
              color={isDark ? appColors.lightText : appColors.darkText}
            />
          }
          value={accountNo}
          onChangeText={value => {
            setAccountNo(value);
          }}
        />


        <TextInput
          placeholder={t('bankDetails.holderName')}
          containerStyle={styles.inputContainer}
          Icon={
            <Person color={isDark ? appColors.lightText : appColors.darkText} />
          }
          value={holderName}
          onChangeText={value => {
            setHolderName(value);
          }}
        />




        <TextInput
          placeholder={t('newDeveloper.bankRoutingNumber')}
          containerStyle={styles.inputContainer}
          Icon={
            <Identity
              color={isDark ? appColors.lightText : appColors.darkText}
              strokeWidth={'1.5'}
            />
          }
          value={routingNumber}
          onChangeText={value => {
            setRoutingNumber(value);
          }}
        />


      </View>
      <View style={styles.blanView} />
      <GradientBtn label="common.submit" onPress={handleSavingBankDetails} />
      <Spinner
            visible={loader}
            textContent={''}
            textStyle={{ color: '#FFF' }}
          />
    </View>
  );
}
