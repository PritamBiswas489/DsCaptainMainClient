import {FormEvent} from 'react';
import {ViewStyle} from 'react-native';

export type propsType = {
  title: string;
  containerStyle?: ViewStyle;
  onPress: (props: FormEvent<HTMLFormElement> | undefined) => void;
  image: string | null;
  setImage: (value:string)=>void;
  error:string | null;
};
