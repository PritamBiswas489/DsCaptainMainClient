import {ViewStyle, StyleProp} from 'react-native';

export type DropdownItem = {
  label: string;
  value: string;
};

export type Props = {
  label: string;
  data: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
  icon?: React.ReactNode;
  dropdownStyle?: StyleProp<ViewStyle>;
  overlayStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  dropdownOptionStyle?: StyleProp<ViewStyle>;
  selectedValue:DropdownItem;
  error:string
};
