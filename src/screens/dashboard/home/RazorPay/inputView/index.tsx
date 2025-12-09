import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import TextInputComponent from '@otherComponent/auth/textInput';
import {
  Notes,
} from '@utils/icons';
import { windowHeight, windowWidth } from '@theme/appConstant';
import { useValues } from '../../../../../../App';  
import { CategoriesInterface } from '@src/interfaces/categoriesInterface';
import SelectionDropdown from '@src/otherComponent/selectionDropdown';
import appColors from '@src/theme/appColors';
import PriceCategory from '../priceCategory';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import WithdrawMethodFields from './fields';

interface DataItem {
  label: string;
  value: string;
}


  interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
  }

export default function InputView({
  paymentNote,
  setPaymentNote,
  paymentAmount,
  setPaymentAmount,
}: {
  paymentNote: string,
  setPaymentNote: (value: string) => void,
  paymentAmount: string,
  setPaymentAmount: (amt: string) => void,
}) {
  const { t, isDark, currSymbol } = useValues();
  
 
  const {
    min_payable_amount
  } = useSelector((state: RootState) => state['providerAppConfig'])

//serviceProviderAccountData
  const {owner} = useSelector((state: RootState) => state['serviceProviderAccountData'])
  const {account} = owner
  const {account_receivable,account_payable} = account
  const balanceAmount = account_payable - account_receivable;

  
  //min bid amount change function
  const handleMinBidAmtChange = (value: string) => {
    const cleanedValue = value.replace(/[^\d]/g, '');
    setPaymentAmount(`${currSymbol} ${cleanedValue}`);
  };

  useEffect(()=>{
    if(balanceAmount > 0){
       handleMinBidAmtChange(balanceAmount.toString())
    }
  },[balanceAmount])
   

 
 

  
  
  
   


 

   

   
  //=============== Get SubCategory Listing =========================//
  return (
    <View style={{ flex: 1 }}>
      
       
      {/* service short description */}
      <TextInputComponent
        placeholder={t('newDeveloper.WriteYourNoteHere')}
        Icon={<Notes />}
        value={paymentNote}
        onChangeText={value => {
          setPaymentNote(value);
        }}
        containerStyle={{ marginBottom: windowHeight(0) }}
        multiline={true}
        inputStyle={styles.inputStyle}
      />
      {/* service minimum bid amount */}
      <TextInputComponent
        keyboardType='number-pad'
        placeholder={currSymbol+' '+t('newDeveloper.EnterPaymentAmount')}
        inputStyle={{
          height:windowHeight(8),
        }}
        textContainerStyle={{fontSize:20,textAlign:'center'}}
        value={paymentAmount}
        onChangeText={handleMinBidAmtChange}
      />
      {/* Balance information */}
      <View style={[
        styles.balanceContainer,
        {backgroundColor:appColors.lightOrange},
        ]}>
        <Text style={styles.balanceText}>
          {t('newDeveloper.PAYABLE_BALANCE')}: {currSymbol}{balanceAmount}
        </Text>
      </View>
      {/* <PriceCategory 
      minimum_withdraw_amount={min_payable_amount}
      
      handleMinBidAmtChange={handleMinBidAmtChange}
      /> */}

    </View>
  );
}
