import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {textInputStyle} from './styles';
import appColors from '@theme/appColors';
import {TextInputComponentProps, InputType} from './types';
import {useValues} from '../../../../App';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function passwordInput({
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

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
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
        {inputType === InputType.PASSWORD && (
        <TouchableOpacity style={textInputStyle.iconField} onPress={togglePasswordVisibility}>
          <MaterialIcons
            name={hidePassword ? 'visibility-off' : 'visibility'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      )}
      </View>
      <View>{error && <Text style={textInputStyle.error}>{error}</Text>}</View>
    </View>
  );
}
