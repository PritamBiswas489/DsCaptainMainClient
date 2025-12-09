import {View} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {TextInputView} from './textInputView';
import GradientBtn from '@commonComponents/gradientBtn';
import ModalComponent from '@commonComponents/modal';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';

export function ChangePassword() {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [failedModal, setFailedModal] = useState(false);
  const {isDark,t} = useValues();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [errors, setErrors] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const updatePasswordClick = () => {
    if (!form.currentPassword) {
      setErrors(prev => {
        return {...prev, currentPassword: t('error.password')};
      });
    } else if (form.currentPassword.length < 8) {
      setErrors(prev => {
        return {...prev, currentPassword: t('error.validPassword')};
      });
    }
    if (!form.newPassword) {
      setErrors(prev => {
        return {...prev, newPassword: t('error.password')};
      });
    } else if (form.newPassword.length < 8) {
      setErrors(prev => {
        return {...prev, newPassword: t('error.validPassword')};
      });
    }
    if (!form.confirmPassword) {
      setErrors(prev => {
        return {...prev, confirmPassword: t('error.confirmPassword')};
      });
    } else if (form.confirmPassword !== form.newPassword) {
      setErrors(prev => {
        return {...prev, confirmPassword: t('error.validConfirmPassword')};
      });
    } else {
      setSuccessModalVisible(true);
    }
  };

  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Header showBackArrow={true} title="profileSetting.changePassword" />
      <TextInputView
        errors={errors}
        setErrors={setErrors}
        form={form}
        setForm={setForm}
      />
      <View style={GlobalStyle.bottomContainer}>
        <GradientBtn
          label="profileSetting.updatePassword"
          onPress={() => updatePasswordClick()}
        />
      </View>
      <ModalComponent
        visible={successModalVisible}
        onClose={() => setSuccessModalVisible(false)}
        success={true}
        title="auth.successTitle"
        content="auth.successContent"
        btnTitle="common.okay"
        gotoScreen={() => navigation.navigate('Login')}
      />
      <ModalComponent
        visible={failedModal}
        onClose={() => setFailedModal(false)}
        success={false}
        title="auth.updateFail"
        content="auth.updateFailedConfirmation"
        btnTitle="auth.tryAgain"
        gotoScreen={() => setFailedModal(false)}
      />
    </View>
  );
}
