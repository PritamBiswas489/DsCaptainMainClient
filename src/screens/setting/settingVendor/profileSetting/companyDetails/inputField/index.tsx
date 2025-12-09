import { Alert, TouchableOpacity, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';

import TextInputComponent from '@otherComponent/auth/textInput';
import { Call, Person, Password } from '@utils/icons';

import { windowHeight, windowWidth } from '@theme/appConstant';
import { Notes, Email, Location } from '@utils/icons';

import { useValues } from '../../../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';


import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { vendorProfileUpdateFieldActions } from '@src/store/redux/store/profile-field-redux';
import PasswordInputComponent from '@otherComponent/auth/passwordInput';
import { InputType } from '@otherComponent/auth/textInput/types';
import appColors from '@theme/appColors';


type props = NativeStackNavigationProp<RootStackParamList>;
export default function InputField() {
  const dispatch = useDispatch()
  const { navigate } = useNavigation<props>();

  const fName = useSelector((state: RootState) => state['storeProfileData'].f_name)
  const [firstName, setFirstName] = useState<string>(fName)


  const lName = useSelector((state: RootState) => state['storeProfileData'].l_name)
  const [lastName, setLastName] = useState<string>(lName)


  const mailAddress = useSelector((state: RootState) => state['storeProfileData'].email)
  const [email, setEmail] = useState<string>(mailAddress)

  const phoneNo = useSelector((state: RootState) => state['storeProfileData'].phone)
  const [phoneNumber, setPhoneNumber] = useState<string>(phoneNo)

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  //password and confirm password
  useEffect(() => {
    const updatePasswordRedux = () => {
      dispatch(vendorProfileUpdateFieldActions.setData({ field: 'password', data: password }))
      dispatch(vendorProfileUpdateFieldActions.setData({ field: 'confirm_password', data: confirmPassword }))
    }
    updatePasswordRedux()
  }, [password, confirmPassword])


  //first name
  const dispatchFirstName = () => {
    dispatch(vendorProfileUpdateFieldActions.setData(
      {
        field: 'firstName',
        data: firstName
      }
    ))
  }
  //last name
  const dispatchLastName = () => {
    dispatch(vendorProfileUpdateFieldActions.setData(
      {
        field: 'lastName',
        data: lastName
      }
    ))
  }
  //phone number
  const dispatchPhoneNumber = () => {
    dispatch(vendorProfileUpdateFieldActions.setData(
      {
        field: 'phoneNumber',
        data: phoneNumber
      }
    ))
  }



  useEffect(() => {
    dispatchFirstName()
  }, [firstName])

  useEffect(() => {
    dispatchLastName()
  }, [lastName])

  useEffect(() => {
    dispatchPhoneNumber()
  }, [phoneNumber])



  const errorFirstName = useSelector((state: RootState) => state['vendorProfileUpdateErrorField'].firstName)
  const errorLastname = useSelector((state: RootState) => state['vendorProfileUpdateErrorField'].lastName)
  const errorPhoneNumber = useSelector((state: RootState) => state['vendorProfileUpdateErrorField'].phoneNumber)
  const errorPassword = useSelector((state: RootState) => state['vendorProfileUpdateErrorField'].password)
  const errorConfirmPassword = useSelector((state: RootState) => state['vendorProfileUpdateErrorField'].confirm_password)


  const { t } = useValues();


  return (
    <View style={styles.container}>

      <TextInputComponent
        placeholder={t('newDeveloper.firstName')}
        Icon={<Person />}
        error={errorFirstName}
        value={firstName}
        onChangeText={value => { setFirstName(value) }}

      />
      <TextInputComponent
        placeholder={t('newDeveloper.lastName')}
        Icon={<Person />}
        error={errorLastname}
        value={lastName}
        onChangeText={value => { setLastName(value) }}

      />

      <TextInputComponent
        textContainerStyle={{ width: windowWidth(45) }}
        placeholder={t('auth.phoneNumber')}
        keyboardType="number-pad"
        value={phoneNumber}
        Icon={<Call />}
        error={errorPhoneNumber}
        onChangeText={value => { setPhoneNumber(value) }}

      />

      <TextInputComponent
        placeholder={t('auth.companyMail')}
        error={''}
        Icon={<Email />}
        value={email}
        editable={false}
        onChangeText={value => { setEmail(value) }}
        containerStyle={{
          marginBottom: windowWidth(1),
          marginTop: windowWidth(3),

        }}

      />

      <PasswordInputComponent
        placeholder={t('newDeveloper.ChangePassword')}
        Icon={<Password color={appColors.lightText} />}
        value={password}
        onChangeText={value => { setPassword(value) }}
        error={errorPassword}
        containerStyle={{ marginBottom: windowHeight(1) }}
        inputType={InputType.PASSWORD}
      />
      <PasswordInputComponent
        placeholder={t('newDeveloper.ConfirmPassword')}
        Icon={<Password color={appColors.lightText} />}
        value={confirmPassword}
        onChangeText={value => { setConfirmPassword(value) }}
        error={errorConfirmPassword}
        containerStyle={{ marginBottom: windowHeight(1) }}
        inputType={InputType.PASSWORD}
      />

    </View>
  );
}
