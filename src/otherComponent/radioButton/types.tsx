import {ViewStyle} from 'react-native';

export type radioType = {
  title: string;
  setKey: React.Dispatch<React.SetStateAction<number>>;
  currentKey: number;
  selectCategory: number;
  radioContainerStyle?: ViewStyle;
};
