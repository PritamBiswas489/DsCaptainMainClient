import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {textInputStyle} from './styles';
import appColors from '@theme/appColors';
import {TextInputComponentProps, InputType} from './types';
import {useValues} from '../../../../App';

export default function textInput({
  Icon,
  placeholder = '',
  onChangeText,
  onFocus,
  onBlur,
  error,
  textContainerStyle,
  keyboardType,
  inputStyle,
  containerStyle,
  value,
  inputType = InputType.TEXT,
  multiline,
  editable
}: TextInputComponentProps) {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const {isDark} = useValues();
  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <View style={[textInputStyle.container, containerStyle]}>
      <View
        style={[
          textInputStyle.inputView,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.textInput},
          inputStyle,
        ]}>
        {Icon && <View>{Icon}</View>}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={[
            textInputStyle.inputStyle,
            textContainerStyle,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}
          placeholderTextColor={appColors.lightText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={inputType === InputType.PASSWORD && hidePassword}
          keyboardType={keyboardType}
          multiline={multiline}
          editable={editable}
        />
      </View>
      <View>{error && <Text style={textInputStyle.error}>{error}</Text>}</View>
    </View>
  );
}
