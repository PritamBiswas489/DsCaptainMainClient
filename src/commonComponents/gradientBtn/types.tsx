import {FormEvent} from 'react';
import {TextStyle, ViewStyle} from 'react-native';

export interface PrimaryButtonProps {
  label: string;
  onPress: (props: FormEvent<HTMLFormElement> | undefined) => void;
  additionalStyle?: ViewStyle | ViewStyle[];
  customStyleLabel?: TextStyle;
  accountText?: string;
  authText?: string;
  gotoScreen?: (props: FormEvent<HTMLFormElement> | undefined) => void;
  labelTextStyle?: TextStyle;
  color?: string;
  labelColor?: string;
  checkout?: boolean;
}
