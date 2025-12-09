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
  withdrawNote,
  setWithdrawNote,
  withDrawAmount,
  setWithDrawAmount,
  withdrawalMethodId,
  setWithdrawMethodId,
  withdrawMethodFieldValues, //withdraw method field values
  setWithdrawMethodFieldValues //set withdraw method field values
  
}: {
  withdrawNote: string,
  setWithdrawNote: (value: string) => void,
  withDrawAmount: string,
  setWithDrawAmount: (amt: string) => void,
  withdrawalMethodId: string,
  setWithdrawMethodId: (value: string) => void,
  withdrawMethodFieldValues:{
    withdrawMethodId:string,
    fieldName:string,
    fieldValue:string
  }[],
  setWithdrawMethodFieldValues: React.Dispatch<React.SetStateAction<{
    withdrawMethodId:string,
    fieldName:string,
    fieldValue:string
  }[]>>;
}) {
  const { t, isDark, currSymbol } = useValues();
  const [withdrawMethodList, setwithdrawMethodList] = useState<DataItem[]>([]);
  const [withdrawMethodFields, setWithdrawMethodFields] = useState<(JSX.Element | React.ComponentType | null)[]>([]);
 
  const {
    maximum_withdraw_amount,
    minimum_withdraw_amount
  } = useSelector((state: RootState) => state['providerAppConfig'])

//serviceProviderAccountData
  const {owner} = useSelector((state: RootState) => state['serviceProviderAccountData'])
  const {account} = owner
  const {account_receivable,account_payable} = account
  const balanceAmount = account_receivable - account_payable;

  
  //min bid amount change function
  const handleMinBidAmtChange = (value: string) => {
    const cleanedValue = value.replace(/[^\d]/g, '');
    setWithDrawAmount(`${currSymbol} ${cleanedValue}`);
  };
  const withdrawMethod = useSelector((state: RootState) => state['withdrawMethod'])

  useEffect(()=>{
    if(withdrawMethod.length > 0){
      const d:DataItem[] = withdrawMethod.map((withdrawDt,withdrawIdx)=>{
        if(withdrawDt.is_default === 1){
          setWithdrawMethodId(withdrawDt.id)
        }
        return {label:withdrawDt.method_name, value:withdrawDt.id}
      })
      setwithdrawMethodList(d)
    }

  },[withdrawMethod])

 

  
  const setWithDrawMethodFieldValue = (fieldInputName: string, fieldInputValue: string) => {
    setWithdrawMethodFieldValues(prevValues => {
      const findIndex = prevValues.findIndex(
        (field) => 
          field.withdrawMethodId === withdrawalMethodId && 
          field.fieldName === fieldInputName
      );
      if (findIndex !== -1) {
          const updatedValues = [...prevValues];  
          updatedValues[findIndex] = {
            ...updatedValues[findIndex],
            fieldValue: fieldInputValue  
          };
          return updatedValues;  
      } else {
        return [
          ...prevValues,
          {
            withdrawMethodId: withdrawalMethodId,
            fieldName: fieldInputName,
            fieldValue: fieldInputValue
          }
        ];
      }
    });
  };
  const getWithdrawFieldValue = (fieldInputName: string) => {
    const findIndex = withdrawMethodFieldValues.findIndex(
      (field) => 
        field.withdrawMethodId === withdrawalMethodId && 
        field.fieldName === fieldInputName
    );
    
    if (findIndex !== -1) {
      const fieldValue = withdrawMethodFieldValues[findIndex].fieldValue;
      
      return fieldValue;
       
    }
    return ''
  }
  const generateMethodFields = () => {
    const findWithdrawMethod = withdrawMethod.find(ele => ele.id === withdrawalMethodId);
    if (findWithdrawMethod) {
      const { method_fields } = findWithdrawMethod;
      if (method_fields && Array.isArray(method_fields)) {
        const methodFields = method_fields.map((methodField, methodIndex) => {
         
           
            return (
              <WithdrawMethodFields 
              methodField={methodField} 
              methodIndex={methodIndex} 
              setWithDrawMethodFieldValue={setWithDrawMethodFieldValue}
              getWithdrawFieldValue={getWithdrawFieldValue}
              />
            );
           
         
        }).filter(Boolean);  
  
        if (methodFields.length > 0) {
          setWithdrawMethodFields(methodFields);   
        } else {
          setWithdrawMethodFields([]);   
        }
      } else {
        setWithdrawMethodFields([]);   
      }
    }
  };



  useEffect(() => {
    if (withdrawalMethodId) {
      generateMethodFields();
    }
  }, [withdrawalMethodId, withdrawMethodFieldValues]);

   

   
  //=============== Get SubCategory Listing =========================//
  return (
    <View style={{ flex: 1 }}>
      {/* Select category panel */}
      <SelectionDropdown
        data={withdrawMethodList}
        value={withdrawalMethodId}
        setValue={(value: string) => {
          setWithdrawMethodId(value)
        }}
        label={t('newDeveloper.SelectWithDrawMethod')}
        error={''}
      />
      {withdrawMethodFields.map((ComponentOrElement, index) =>
        ComponentOrElement ? (
          typeof ComponentOrElement === 'function' ? (
            <ComponentOrElement key={index} /> // Render component types
          ) : (
            <View key={index}>{ComponentOrElement}</View> // Render JSX elements
          )
        ) : null
      )}
      {/* service short description */}
      <TextInputComponent
        placeholder={t('newDeveloper.WriteYourNoteHere')}
        Icon={<Notes />}
        value={withdrawNote}
        onChangeText={value => {
          setWithdrawNote(value);
        }}
        containerStyle={{ marginBottom: windowHeight(0) }}
        multiline={true}
        inputStyle={styles.inputStyle}
      />
      {/* service minimum bid amount */}
      <TextInputComponent
        keyboardType='number-pad'
        placeholder={currSymbol+' '+t('newDeveloper.EnterWithDrawAmount')}
        inputStyle={{
          height:windowHeight(8),
        }}
        textContainerStyle={{fontSize:20,textAlign:'center'}}
        value={withDrawAmount}
        onChangeText={handleMinBidAmtChange}
      />
      {/* Balance information */}
      <View style={[
        styles.balanceContainer,
        {backgroundColor:appColors.lightOrange},
        ]}>
        <Text style={styles.balanceText}>
          {t('newDeveloper.Availablebalance')}: {currSymbol}{balanceAmount}
        </Text>
        <Text style={styles.balanceText}>
        {t('newDeveloper.Minimumwithdrawamount')}: {currSymbol}{minimum_withdraw_amount}
        </Text>
        <Text style={styles.balanceText}>
        {t('newDeveloper.Maximumwithdrawamount')}: {currSymbol}{maximum_withdraw_amount}
        </Text>
      </View>
      
      <PriceCategory 
      minimum_withdraw_amount={minimum_withdraw_amount}
      maximum_withdraw_amount={maximum_withdraw_amount}
      handleMinBidAmtChange={handleMinBidAmtChange}
      />

    </View>
  );
}
