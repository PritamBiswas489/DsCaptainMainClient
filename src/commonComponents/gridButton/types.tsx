import {FormEvent} from 'react';
import {TextStyle, ViewStyle} from 'react-native';

export interface GridButtonProps {
  label: string;
  onButtonClick: (props: FormEvent<HTMLFormElement> | undefined) => void;
  label1: string;
  onButton1Click: (props: FormEvent<HTMLFormElement> | undefined) => void;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  buttonContainerStyle?: ViewStyle;
  color?: string;
  btnColor?: string;
  btn1Color?: string;
  button1TextStyle?: TextStyle | TextStyle[];
}
