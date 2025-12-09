import {View} from 'react-native';
import React from 'react';
import TextInputComponent from '@otherComponent/auth/textInput';
import {InputType} from '@otherComponent/auth/textInput/types';
import {Password} from '@utils/icons';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';
import {TextInputViewProps} from './types'
import { useValues } from '../../../../../../App';

export const TextInputView: React.FC<TextInputViewProps> = ({
  errors,
  setErrors,
  form,
  setForm,
}) => {
  const onChange = ({name, value}: {name: string; value: string}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    }
  };

  const {isDark,t} = useValues()

  return (
    <View style={{marginTop: windowHeight(2)}}>
      <TextInputComponent
        inputStyle={{backgroundColor: isDark ? appColors.darkText : appColors.textInput}}
        inputType={InputType.PASSWORD}
        placeholder={t('auth.currentPassword')}
        Icon={
          <Password
            color={
              form.currentPassword ? isDark ? appColors.lightText : appColors.darkText : appColors.lightText
            }
          />
          
        }
        onChangeText={value => {
          onChange({name: 'currentPassword', value});
        }}
        value={form.currentPassword}
        error={errors.currentPassword}
      />
      <TextInputComponent
        inputStyle={{backgroundColor: isDark ? appColors.darkText : appColors.textInput}}
        inputType={InputType.PASSWORD}
        placeholder={t('auth.newPassword')}
        Icon={
          <Password
            color={form.newPassword ? isDark ? appColors.lightText : appColors.darkText : appColors.lightText}
          />
        }
        onChangeText={value => {
          onChange({name: 'newPassword', value});
        }}
        value={form.newPassword}
        error={errors.newPassword}
      />
      <TextInputComponent
       inputStyle={{backgroundColor: isDark ? appColors.darkText : appColors.textInput}}
        inputType={InputType.PASSWORD}
        placeholder={t('auth.reEnterNewPassword')}
        Icon={
          <Password
            color={
              form.confirmPassword ? isDark ? appColors.lightText : appColors.darkText : appColors.lightText
            }
          />
        }
        onChangeText={value => {
          onChange({name: 'confirmPassword', value});
        }}
        value={form.confirmPassword}
        error={errors.confirmPassword}
      />
    </View>
  );
};
