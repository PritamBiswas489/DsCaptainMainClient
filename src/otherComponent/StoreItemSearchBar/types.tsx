import {FormEvent} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type searchType = {
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: TextStyle;
  showFilter?: boolean;
  gotoScreen?: (props: FormEvent<HTMLFormElement> | undefined) => void;
  searchIcon: React.ReactNode;
  textInputSize?: number;
  handleSetSearchValue:()=>void
   
   
};
