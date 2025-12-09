import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import TextInputComponent from '@otherComponent/auth/textInput';
import PasswordInputComponent from '@otherComponent/auth/passwordInput';
import { InputType } from '@otherComponent/auth/textInput/types';
import { Password } from '@assets/icons/auth/passwords';
import appColors from '@src/theme/appColors';
import { useValues } from '../../,./../../../../../App';
import DatePickerSelector from '@src/commonComponents/dateSelectPicker';

//Withdraw method fields
export default function WithdrawMethodFields({ methodField, methodIndex, setWithDrawMethodFieldValue, getWithdrawFieldValue }: {
    methodField: { input_name: string, input_type: string, placeholder: string, is_required:number }, methodIndex: number,
    setWithDrawMethodFieldValue: (a: string, b: string) => void,
    getWithdrawFieldValue: (a: string) => string
}) {
    const { input_name, input_type, placeholder, is_required } = methodField;
    const [textValue, setTextValue] = useState<string>('')
    const [fromDatePicker, setFromDatePicker] = useState(false)
    useEffect(() => {
        setTextValue(getWithdrawFieldValue(input_name))
    }, [])
    const { t, isDark } = useValues()
    if (input_type === 'string') {
        return <TextInputComponent
            key={methodIndex}
            placeholder={placeholder+' '+(is_required ? '*' : '')}  
            value={textValue}
            onChangeText={(value: string) => {
                setWithDrawMethodFieldValue(input_name, value)
                setTextValue(value)
            }}
        />
    } else if (input_type === 'email') {
        return <TextInputComponent
            keyboardType='email-address'
            key={methodIndex}
            placeholder={placeholder+' '+(is_required ? '*' : '')}  
            value={textValue}
            onChangeText={(value: string) => {
                setWithDrawMethodFieldValue(input_name, value)
                setTextValue(value)

            }}
        />
    } else if (input_type === 'number' || input_type === 'phone') {
        return <TextInputComponent
            keyboardType='number-pad'
            key={methodIndex}
            placeholder={placeholder+' '+(is_required ? '*' : '')}  
            value={textValue}
            onChangeText={(value: string) => {
                setWithDrawMethodFieldValue(input_name, value)
                setTextValue(value)

            }}
        />
    } else if (input_type === 'password') {
        return <PasswordInputComponent
            inputType={InputType.PASSWORD}
            placeholder={placeholder+' '+(is_required ? '*' : '')}  
            Icon={
                <Password
                    color={
                        textValue
                            ? isDark
                                ? appColors.lightText
                                : appColors.darkText
                            : appColors.lightText
                    }
                />
            }
            onChangeText={value => {
                setWithDrawMethodFieldValue(input_name, value)
                setTextValue(value)
            }}
            value={textValue}
        />

    }else if(input_type === 'date'){
        <DatePickerSelector
        setDatePicker={setFromDatePicker}
        setScheduleDate={(value) => {
            setWithDrawMethodFieldValue(input_name, value)
            setTextValue(value)
        }}
      />
    } else {
        return <TextInputComponent
            key={methodIndex}
            placeholder={placeholder+' '+(is_required ? '*' : '')}  
            value={textValue}
            onChangeText={(value: string) => {
                setWithDrawMethodFieldValue(input_name, value)
                setTextValue(value)
            }}
        />
    }

}