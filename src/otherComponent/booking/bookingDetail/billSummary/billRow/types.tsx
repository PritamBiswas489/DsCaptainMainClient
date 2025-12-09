import {FormEvent} from 'react';
import {StyleProp, TextStyle} from 'react-native';

export type propsType = {
  color?: string;
  title: string;
  price?: number;
  subTitle?: any;
  showPlus?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  priceStyle?: TextStyle;
  showMinus?: boolean;
  showIcon?: boolean;
  subTitleStyle?: TextStyle;
  onIconClick?: (props: FormEvent<HTMLFormElement> | undefined) => void;
};
