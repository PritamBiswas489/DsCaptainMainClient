import {TextStyle, ViewStyle, StyleProp} from 'react-native';

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

export interface TextInputComponentProps {
  onChangeText: (text: string) => void;
  value: string;
  error?: string;
  inputType?: InputType;
  placeholder?: string;
  onPress?: () => void;
  Icon?: JSX.Element;
  TrailIcon?: JSX.Element;
  containerStyle?: ViewStyle;
  focusContainerStyle?: ViewStyle;
  textContainerStyle?: TextStyle;
  inputStyle?: StyleProp<ViewStyle>;
  onFocus?: () => void;
  onBlur?: () => void;
  iconColor?: string;
  loading?: boolean;
  keyboardType?: 'number-pad' | 'numeric' | 'email-address';
  multiline?: boolean;
  editable?:boolean;
}
