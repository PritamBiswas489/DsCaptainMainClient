import {FormEvent} from 'react';
import {TextStyle} from 'react-native';

export type propsType = {
  onButtonClick: (props: FormEvent<HTMLFormElement> | undefined) => void;
  onButton1Click: (props: FormEvent<HTMLFormElement> | undefined) => void;
  label?: string;
  label1?: string;
  buttonStyle?: TextStyle;
  btnColor?: string;
};
