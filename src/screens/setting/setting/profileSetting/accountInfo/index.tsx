import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Person, Email, Identity, Password, Call } from '@utils/icons';
import { windowHeight, windowWidth } from '@theme/appConstant';
import TextInputComponent from '@otherComponent/auth/textInput';
import PasswordInputComponent from '@otherComponent/auth/passwordInput';
import PhoneTextInput from '@otherComponent/auth/phoneTextInput';
import appColors from '@theme/appColors';
import { InputType } from '@otherComponent/auth/textInput/types';
import MultiSelectionDrodpwn from '@otherComponent/multiSelectionDropdown';

import UploadContainerView from '@otherComponent/auth/uploadContainer';
import { ImageLibraryOptions } from 'react-native-image-picker';
import { handleImagePicker } from '@utils/functions';
import { DropdownWithIcon } from '@commonComponents/dropdownWithIcon';

import { useValues } from '../../../../../../App';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { profileUpdateFieldActions } from '@src/store/redux/profile-field-redux';
 


export default function AccountInfoInputField() {
  const dispatch = useDispatch()
  const provider_name = useSelector((state: RootState) => state['serviceProviderAccountData'].owner.first_name + ' ' + state['serviceProviderAccountData'].owner.last_name)
  const provider_email = useSelector((state: RootState) => state['serviceProviderAccountData'].owner.email)
  const provider_phone = useSelector((state: RootState) => state['serviceProviderAccountData'].owner.phone)
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')


  useEffect(()=>{
    const updatePasswordRedux = ()=>{
        dispatch(profileUpdateFieldActions.setData({field:'password',data:password}))
        dispatch(profileUpdateFieldActions.setData({field:'confirm_password',data:confirmPassword}))
    }
    updatePasswordRedux()
  },[password,confirmPassword])


  const errorPassword = useSelector((state: RootState) => state['profileUpdateErrorField'].password)
  const errorConfirmPassword = useSelector((state: RootState) => state['profileUpdateErrorField'].confirm_password)

  const { t } = useValues();

  return (
    <View>
      <TextInputComponent
        placeholder={t('auth.enterName')}
        Icon={<Person />}
        value={provider_name}
        onChangeText={value => { }}
        editable={false}
        containerStyle={{ marginBottom: windowHeight(1) }}
      />
      <TextInputComponent
        placeholder={t('auth.enterMail')}
        Icon={<Email />}
        value={provider_email}
        onChangeText={value => { }}
        error={''}
        editable={false}
        containerStyle={{ marginBottom: windowHeight(1) }}
        keyboardType="email-address"
      />
      <TextInputComponent
        containerStyle={{ marginTop: windowWidth(3) }}
        textContainerStyle={{ width: windowWidth(45) }}
        placeholder={t('auth.phoneNumber')}
        Icon={<Call />}
        keyboardType="number-pad"
        error={''}
        value={provider_phone}
        editable={false}
        onChangeText={value => {  }}
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
