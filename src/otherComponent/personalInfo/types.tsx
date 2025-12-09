import {TextStyle, ViewStyle} from 'react-native';

export type infoType = {
  icon: React.ReactNode;
  name: string;
  detail: string;
  containerStyle?: ViewStyle;
  contentStyle?: TextStyle;
  titleStyle?: TextStyle;
};
