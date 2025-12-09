import {ViewStyle} from 'react-native';

export type switchType = {
  switchOn: boolean | undefined;
  toggleDarkSwitch: () => void;
  containerStyle?: ViewStyle;
};
